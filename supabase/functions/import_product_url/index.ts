// ============================================================================
// SUPABASE EDGE FUNCTION: AUTOMATED PRODUCT & CATEGORY URL SCRAPER
// Target: Extracts Product Title, Price, OEM Numbers, Description, Images, Specs
// ============================================================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ImportRequest {
  url: string;
  type?: "product" | "category";
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { url, type = "product" }: ImportRequest = await req.json();

    if (!url) {
      return new Response(JSON.stringify({ error: "URL parametresi gereklidir." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 1. Target URL HTML içeriğini getir
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    });

    if (!response.ok) {
      throw new Error(`Sayfa yüklenemedi. HTTP Durum: ${response.status}`);
    }

    const html = await response.text();

    if (type === "category") {
      // Kategori linkinden ürün bağlantılarını ayıkla
      const productLinks = extractCategoryProductLinks(html, url);
      return new Response(
        JSON.stringify({
          success: true,
          type: "category",
          totalFound: productLinks.length,
          productUrls: productLinks,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Ürün Detaylarını Ayıkla (Metatag ve HTML Analizi)
    const productData = parseProductDetails(html, url);

    return new Response(
      JSON.stringify({
        success: true,
        type: "product",
        data: productData,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function parseProductDetails(html: string, sourceUrl: string) {
  // Title / Başlık Extraction
  const titleMatch =
    html.match(/<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i) ||
    html.match(/<title>(.*?)<\/title>/i) ||
    html.match(/<h1[^>]*>(.*?)<\/h1>/i);

  let title = titleMatch ? titleMatch[1].replace(/&amp;/g, "&").trim() : "Yeni Ürün";

  // Price / Fiyat Extraction
  const priceMatch =
    html.match(/<meta\s+property=["']product:price:amount["']\s+content=["'](.*?)["']/i) ||
    html.match(/(\d+[.,]\d{2})\s*(?:TL|₺)/i);

  let price = 0;
  if (priceMatch) {
    const cleanPriceStr = priceMatch[1].replace(/\./g, "").replace(",", ".");
    price = parseFloat(cleanPriceStr) || 0;
  }

  // OEM & Parça Kodları
  const oemCodes: string[] = [];
  const oemRegex = /(?:OEM|Oem|Orijinal Kod|Parça No|Stok Kodu)[\s:-]*([A-Z0-9.\-\s]{5,25})/gi;
  let oemMatch;
  while ((oemMatch = oemRegex.exec(html)) !== null) {
    const code = oemMatch[1].trim();
    if (code && !oemCodes.includes(code)) {
      oemCodes.push(code);
    }
  }

  // Görseller Extraction
  const images: string[] = [];
  const ogImgMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i);
  if (ogImgMatch && ogImgMatch[1]) {
    images.push(ogImgMatch[1]);
  }

  // HTML içindeki yüksek çözünürlüklü ürün görselleri
  const imgRegex = /<img[^>]+src=["']([^"']+\.(?:jpg|jpeg|png|webp))["']/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html)) !== null) {
    const src = imgMatch[1];
    if (
      (src.includes("product") || src.includes("urun") || src.includes("big") || src.includes("large")) &&
      !images.includes(src) &&
      images.length < 5
    ) {
      images.push(src.startsWith("http") ? src : new URL(src, sourceUrl).href);
    }
  }

  // Slug Oluşturma
  const slug = title
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const sku = oemCodes.length > 0 ? oemCodes[0].replace(/\s+/g, "") : `SKU-${Date.now().toString().slice(-6)}`;

  return {
    title,
    slug,
    sku,
    price,
    description: `${title} - Orijinal / Muadil Yedek Parça.`,
    source_url: sourceUrl,
    oem_codes: oemCodes,
    images: images.length > 0 ? images : ["https://via.placeholder.com/600x600.png?text=Yedek+Parca"],
  };
}

function extractCategoryProductLinks(html: string, baseUrl: string): string[] {
  const links: string[] = [];
  const linkRegex = /<a[^>]+href=["']([^"']+\.(?:html|php)|[^"']+\/p\/[^"']+|[^"']+-p-\d+)["']/gi;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    let href = match[1];
    if (!href.startsWith("http")) {
      href = new URL(href, baseUrl).href;
    }
    if (!links.includes(href) && (href.includes("urun") || href.includes("product") || href.includes("-p-"))) {
      links.push(href);
    }
  }

  return links;
}
