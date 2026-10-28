-- ============================================================================
-- YEDEK PARÇA E-TİCARET & ADMIN PANELİ - SUPABASE POSTGRESQL VERİTABANI ŞEMASI
-- Referans Site: www.yedekparca.com.tr
-- ============================================================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------------------------------------------
-- ENUM TYPES
-- ----------------------------------------------------------------------------
CREATE TYPE user_role AS ENUM ('customer', 'admin');
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');

-- ----------------------------------------------------------------------------
-- 1. KULLANICI PROFİLLERİ (PROFILES)
-- ----------------------------------------------------------------------------
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone TEXT,
    role user_role NOT NULL DEFAULT 'customer',
    address JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 2. KATEGORİLER (CATEGORIES) - Hiyerarşik Yapı
-- ----------------------------------------------------------------------------
CREATE TABLE public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    parent_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    image_url TEXT,
    icon_name TEXT,
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 3. YEDEK PARÇA MARKALARI (BRANDS - Üreticiler)
-- ----------------------------------------------------------------------------
CREATE TABLE public.brands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    logo_url TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 4. ARAÇ KATALOĞU (VEHICLES: Brand -> Model -> Engine/Variant)
-- ----------------------------------------------------------------------------
CREATE TABLE public.vehicle_brands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    logo_url TEXT,
    display_order INT DEFAULT 0
);

CREATE TABLE public.vehicle_models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand_id UUID NOT NULL REFERENCES public.vehicle_brands(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    year_start INT NOT NULL,
    year_end INT, -- NULL ise halen üretilmektedir
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.vehicle_engines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    model_id UUID NOT NULL REFERENCES public.vehicle_models(id) ON DELETE CASCADE,
    engine_name TEXT NOT NULL, -- örn. "1.6 TDI 105 HP"
    engine_code TEXT,          -- örn. "CAYC"
    fuel_type TEXT NOT NULL DEFAULT 'Dizel', -- Dizel, Benzin, LPG, Hibrit, Elektrik
    power_hp INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 5. ÜRÜNLER (PRODUCTS)
-- ----------------------------------------------------------------------------
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    sku TEXT NOT NULL UNIQUE, -- Stok Kodu / Parça Kodu
    price DECIMAL(10, 2) NOT NULL,
    discount_price DECIMAL(10, 2),
    stock_quantity INT NOT NULL DEFAULT 0,
    description TEXT,
    brand_id UUID REFERENCES public.brands(id) ON DELETE SET NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    source_url TEXT, -- Otomatik URL ile aktarıldıysa orijinal link
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexler (Arama Performansı İçin)
CREATE INDEX idx_products_title ON public.products USING gin(to_tsvector('turkish', title));
CREATE INDEX idx_products_sku ON public.products(sku);
CREATE INDEX idx_products_category ON public.products(category_id);
CREATE INDEX idx_products_brand ON public.products(brand_id);

-- ----------------------------------------------------------------------------
-- 6. ÜRÜN - ARAÇ UYUMLULUK TABLOSU (M:N)
-- ----------------------------------------------------------------------------
CREATE TABLE public.product_vehicle_compatibility (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    engine_id UUID NOT NULL REFERENCES public.vehicle_engines(id) ON DELETE CASCADE,
    notes TEXT, -- Uyumlulukla ilgili özel not (örn. "Sadece Otomatik Vites")
    UNIQUE(product_id, engine_id)
);

-- ----------------------------------------------------------------------------
-- 7. OEM NUMARALARI VE MUADİL KODLAR
-- ----------------------------------------------------------------------------
CREATE TABLE public.oem_numbers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    oem_code TEXT NOT NULL,
    brand_name TEXT, -- örn. "VW / Audi", "BMW Orijinal", "Bosch Ref"
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_oem_code ON public.oem_numbers(oem_code);

-- ----------------------------------------------------------------------------
-- 8. ÜRÜN GÖRSELLERİ (PRODUCT IMAGES)
-- ----------------------------------------------------------------------------
CREATE TABLE public.product_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    display_order INT DEFAULT 0,
    is_primary BOOLEAN DEFAULT FALSE
);

-- ----------------------------------------------------------------------------
-- 9. SİPARİŞLER (ORDERS & ORDER ITEMS)
-- ----------------------------------------------------------------------------
CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    order_number TEXT NOT NULL UNIQUE,
    status order_status NOT NULL DEFAULT 'pending',
    total_amount DECIMAL(10, 2) NOT NULL,
    shipping_address JSONB NOT NULL,
    payment_method TEXT NOT NULL DEFAULT 'CreditCard',
    tracking_number TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    product_title TEXT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL
);

-- ----------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLİTİKALARI
-- ----------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicle_brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicle_models ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicle_engines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_vehicle_compatibility ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.oem_numbers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Genel Okuma İzinleri (Herkes ürünleri, kategorileri görebilir)
CREATE POLICY "Herkes ürünleri görebilir" ON public.products FOR SELECT USING (is_active = true);
CREATE POLICY "Herkes kategorileri görebilir" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Herkes markaları görebilir" ON public.brands FOR SELECT USING (true);
CREATE POLICY "Herkes araç kataloğunu görebilir" ON public.vehicle_brands FOR SELECT USING (true);
CREATE POLICY "Herkes araç modellerini görebilir" ON public.vehicle_models FOR SELECT USING (true);
CREATE POLICY "Herkes araç motorlarını görebilir" ON public.vehicle_engines FOR SELECT USING (true);
CREATE POLICY "Herkes ürün görsellerini görebilir" ON public.product_images FOR SELECT USING (true);
CREATE POLICY "Herkes OEM kodlarını görebilir" ON public.oem_numbers FOR SELECT USING (true);
CREATE POLICY "Herkes uyumluluk bilgisini görebilir" ON public.product_vehicle_compatibility FOR SELECT USING (true);

-- Admin Yazma İzinleri (Sadece role = 'admin' olanlar ekleme/silme/güncelleme yapabilir)
CREATE POLICY "Sadece admin ürün değiştirebilir" ON public.products FOR ALL
USING (auth.jwt() ->> 'role' = 'admin' OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Sadece admin kategori değiştirebilir" ON public.categories FOR ALL
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Sadece admin marka değiştirebilir" ON public.brands FOR ALL
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- ----------------------------------------------------------------------------
-- ÖRNEK BAŞLANGIÇ VERİLERİ (SEED DATA)
-- ----------------------------------------------------------------------------
-- Parça Markaları
INSERT INTO public.brands (name, slug, is_featured) VALUES
('Bosch', 'bosch', true),
('Valeo', 'valeo', true),
('Sachs', 'sachs', true),
('Febi Bilstein', 'febi-bilstein', true),
('TRW', 'trw', true),
('Mann Filter', 'mann-filter', true),
('Kale Oto Radyatör', 'kale', true),
('LuK', 'luk', true);

-- Ana Kategoriler
INSERT INTO public.categories (name, slug, display_order) VALUES
('Fren Sistemi', 'fren-sistemi', 1),
('Filtre Grubu', 'filtre-grubu', 2),
('Motor Parçaları', 'motor-parcalari', 3),
('Süspansiyon & Direksiyon', 'suspansiyon-direksiyon', 4),
('Elektrik & Aydınlatma', 'elektrik-aydinlatma', 5),
('Debriyaj & Şanzıman', 'debriyaj-sanziman', 6),
('Soğutma & Isıtma', 'sogutma-isitma', 7),
('Kaporta & Aksam', 'kaporta-aksam', 8);

-- Araç Markaları
INSERT INTO public.vehicle_brands (name, display_order) VALUES
('Volkswagen', 1),
('Renault', 2),
('Ford', 3),
('Fiat', 4),
('BMW', 5),
('Mercedes-Benz', 6),
('Audi', 7),
('Opel', 8),
('Hyundai', 9),
('Peugeot', 10);
