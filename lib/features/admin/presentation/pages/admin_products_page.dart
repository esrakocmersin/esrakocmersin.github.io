import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../models/product_model.dart';
import '../../../../providers/supabase_providers.dart';

class AdminProductsPage extends ConsumerStatefulWidget {
  const AdminProductsPage({super.key});

  @override
  ConsumerState<AdminProductsPage> createState() => _AdminProductsPageState();
}

class _AdminProductsPageState extends ConsumerState<AdminProductsPage> {
  final TextEditingController _urlController = TextEditingController();
  bool _isLoadingScraper = false;
  ProductModel? _scrapedProductPreview;

  void _showSingleUrlImportDialog() {
    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return AlertDialog(
              title: const Row(
                children: [
                  Icon(Icons.link, color: AppColors.primaryRed),
                  SizedBox(width: 8),
                  Text('URL ile Tekli Ürün İçe Aktar'),
                ],
              ),
              content: SizedBox(
                width: 600,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Hedef ürün sayfasının bağlantısını (URL) yapıştırın. Sistem tüm başlık, fiyat, OEM kodları ve görselleri otomatik çekecektir.',
                      style: TextStyle(fontSize: 13, color: AppColors.bodyText),
                    ),
                    const SizedBox(height: 16),
                    TextField(
                      controller: _urlController,
                      decoration: const InputDecoration(
                        hintText: 'https://www.yedekparca.com.tr/urun/...',
                        labelText: 'Ürün Web Sayfası Bağlantısı',
                      ),
                    ),
                    const SizedBox(height: 16),

                    if (_isLoadingScraper)
                      const Center(
                        child: Padding(
                          padding: EdgeInsets.all(20),
                          child: Column(
                            children: [
                              CircularProgressIndicator(),
                              SizedBox(height: 12),
                              Text('URL taranıyor, HTML verileri ve resimler ayıklanıyor...'),
                            ],
                          ),
                        ),
                      ),

                    if (_scrapedProductPreview != null && !_isLoadingScraper) ...[
                      const Divider(height: 24),
                      const Text('Taranan Ürün Önizlemesi:', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                      const SizedBox(height: 8),
                      ListTile(
                        leading: Image.network(_scrapedProductPreview!.images.first, width: 50, height: 50, fit: BoxFit.cover),
                        title: Text(_scrapedProductPreview!.title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                        subtitle: Text('Fiyat: ${_scrapedProductPreview!.price} ₺ | SKU: ${_scrapedProductPreview!.sku}'),
                      ),
                    ]
                  ],
                ),
              ),
              actions: [
                TextButton(
                  onPressed: () {
                    _scrapedProductPreview = null;
                    _urlController.clear();
                    Navigator.pop(context);
                  },
                  child: const Text('İptal'),
                ),
                ElevatedButton.icon(
                  onPressed: () async {
                    if (_urlController.text.isEmpty) return;

                    setDialogState(() {
                      _isLoadingScraper = true;
                    });

                    final newProduct = await ref.read(productsProvider.notifier).importFromUrl(_urlController.text);

                    setDialogState(() {
                      _isLoadingScraper = false;
                      _scrapedProductPreview = newProduct;
                    });
                  },
                  icon: const Icon(Icons.travel_explore),
                  label: const Text('TARA VE ÇEK'),
                ),
                if (_scrapedProductPreview != null)
                  ElevatedButton.icon(
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('Ürün veritabanına eklendi ve yayınlandı!'),
                          backgroundColor: AppColors.greenSuccess,
                        ),
                      );
                      _scrapedProductPreview = null;
                      _urlController.clear();
                      Navigator.pop(context);
                    },
                    icon: const Icon(Icons.save),
                    label: const Text('VERİTABANINA KAYDET'),
                    style: ElevatedButton.styleFrom(backgroundColor: AppColors.greenSuccess),
                  ),
              ],
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final products = ref.watch(productsProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Ürün Yönetimi & URL İçe Aktarma'),
        backgroundColor: AppColors.primaryNavy,
        actions: [
          IconButton(
            onPressed: () => context.go('/admin'),
            icon: const Icon(Icons.dashboard),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            // Eylem Butonları
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Sistemdeki Toplam Ürünler (${products.length})', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                Row(
                  children: [
                    ElevatedButton.icon(
                      onPressed: _showSingleUrlImportDialog,
                      icon: const Icon(Icons.add_link),
                      label: const Text('URL İLE ÜRÜN EKLE'),
                      style: ElevatedButton.styleFrom(backgroundColor: AppColors.primaryRed),
                    ),
                  ],
                )
              ],
            ),

            const SizedBox(height: 20),

            // Ürünler Tablosu
            Expanded(
              child: Card(
                child: SingleChildScrollView(
                  child: DataTable(
                    columns: const [
                      DataColumn(label: Text('Görsel')),
                      DataColumn(label: Text('Ürün Başlığı')),
                      DataColumn(label: Text('Stok Kodu (SKU)')),
                      DataColumn(label: Text('Fiyat')),
                      DataColumn(label: Text('Stok')),
                      DataColumn(label: Text('Kaynak URL')),
                      DataColumn(label: Text('İşlemler')),
                    ],
                    rows: products.map((p) {
                      return DataRow(
                        cells: [
                          DataCell(Image.network(p.images.first, width: 40, height: 40, fit: BoxFit.cover)),
                          DataCell(SizedBox(width: 250, child: Text(p.title, overflow: TextOverflow.ellipsis))),
                          DataCell(Text(p.sku)),
                          DataCell(Text('${p.activePrice.toStringAsFixed(2)} ₺')),
                          DataCell(Text('${p.stockQuantity}')),
                          DataCell(
                            p.sourceUrl != null
                                ? Icon(Icons.check_circle, color: AppColors.greenSuccess, size: 18)
                                : const Text('Manuel'),
                          ),
                          DataCell(
                            IconButton(
                              icon: const Icon(Icons.delete, color: Colors.red),
                              onPressed: () {
                                ref.read(productsProvider.notifier).deleteProduct(p.id);
                              },
                            ),
                          )
                        ],
                      );
                    }).toList(),
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
