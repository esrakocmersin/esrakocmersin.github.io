import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../models/product_model.dart';
import '../../../../providers/supabase_providers.dart';
import '../../../../widgets/app_footer.dart';
import '../../../../widgets/app_header.dart';
import '../../../../widgets/category_menu_bar.dart';

class ProductDetailPage extends ConsumerStatefulWidget {
  final String productId;

  const ProductDetailPage({super.key, required this.productId});

  @override
  ConsumerState<ProductDetailPage> createState() => _ProductDetailPageState();
}

class _ProductDetailPageState extends ConsumerState<ProductDetailPage> {
  int _selectedImageIndex = 0;
  int _quantity = 1;

  @override
  Widget build(BuildContext context) {
    final products = ref.watch(productsProvider);
    final product = products.firstWhere(
      (p) => p.id == widget.productId || p.slug == widget.productId,
      orElse: () => products.first,
    );

    return Scaffold(
      appBar: const AppHeader(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            const CategoryMenuBar(),
            const SizedBox(height: 16),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Card(
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Sol Taraf: Görsel Galerisi
                      Expanded(
                        flex: 5,
                        child: Column(
                          children: [
                            Container(
                              height: 380,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(8),
                                border: Border.all(color: AppColors.borderGrey),
                              ),
                              child: Center(
                                child: Image.network(
                                  product.images[_selectedImageIndex],
                                  fit: BoxFit.contain,
                                  errorBuilder: (_, __, ___) => const Icon(Icons.directions_car, size: 80, color: Colors.grey),
                                ),
                              ),
                            ),
                            const SizedBox(height: 12),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: List.generate(product.images.length, (idx) {
                                return InkWell(
                                  onTap: () => setState(() => _selectedImageIndex = idx),
                                  child: Container(
                                    margin: const EdgeInsets.symmetric(horizontal: 4),
                                    padding: const EdgeInsets.all(4),
                                    decoration: BoxDecoration(
                                      border: Border.all(
                                        color: _selectedImageIndex == idx ? AppColors.primaryRed : AppColors.borderGrey,
                                        width: 2,
                                      ),
                                      borderRadius: BorderRadius.circular(6),
                                    ),
                                    child: Image.network(
                                      product.images[idx],
                                      width: 60,
                                      height: 60,
                                      fit: BoxFit.cover,
                                    ),
                                  ),
                                );
                              }),
                            )
                          ],
                        ),
                      ),

                      const SizedBox(width: 32),

                      // Sağ Taraf: Detaylar ve Sepet
                      Expanded(
                        flex: 6,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            // Marka Rozeti & Stok Durumu
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                                  decoration: BoxDecoration(
                                    color: AppColors.primaryNavy,
                                    borderRadius: BorderRadius.circular(4),
                                  ),
                                  child: Text(
                                    product.brandName ?? 'Orijinal Equipment',
                                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 12),
                                  ),
                                ),
                                Row(
                                  children: [
                                    const Icon(Icons.check_circle, color: AppColors.greenSuccess, size: 18),
                                    const SizedBox(width: 4),
                                    Text(
                                      'Stokta Var (${product.stockQuantity} Adet)',
                                      style: const TextStyle(color: AppColors.greenSuccess, fontWeight: FontWeight.bold, fontSize: 13),
                                    ),
                                  ],
                                )
                              ],
                            ),

                            const SizedBox(height: 12),

                            Text(
                              product.title,
                              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppColors.primaryNavy),
                            ),

                            const SizedBox(height: 8),

                            Text(
                              'Stok Kodu (SKU): ${product.sku}',
                              style: const TextStyle(color: AppColors.bodyText, fontSize: 13),
                            ),

                            const Divider(height: 24),

                            // Fiyat Bilgisi
                            Row(
                              children: [
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    if (product.hasDiscount)
                                      Text(
                                        '${product.price.toStringAsFixed(2)} ₺',
                                        style: const TextStyle(
                                          decoration: TextDecoration.lineThrough,
                                          color: Colors.grey,
                                          fontSize: 16,
                                        ),
                                      ),
                                    Text(
                                      '${product.activePrice.toStringAsFixed(2)} ₺',
                                      style: const TextStyle(
                                        color: AppColors.primaryRed,
                                        fontSize: 28,
                                        fontWeight: FontWeight.black,
                                      ),
                                    ),
                                    const Text('KDV Dahil / Hızlı Kargo', style: TextStyle(color: Colors.grey, fontSize: 12)),
                                  ],
                                ),
                              ],
                            ),

                            const SizedBox(height: 24),

                            // Adet Seçimi ve Sepete Ekle
                            Row(
                              children: [
                                Container(
                                  decoration: BoxDecoration(
                                    border: Border.all(color: AppColors.borderGrey),
                                    borderRadius: BorderRadius.circular(6),
                                  ),
                                  child: Row(
                                    children: [
                                      IconButton(
                                        onPressed: () {
                                          if (_quantity > 1) setState(() => _quantity--);
                                        },
                                        icon: const Icon(Icons.remove, size: 18),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.symmetric(horizontal: 12),
                                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                                        child: Text('$_quantity'),
                                      ),
                                      IconButton(
                                        onPressed: () => setState(() => _quantity++),
                                        icon: const Icon(Icons.add, size: 18),
                                      ),
                                    ],
                                  ),
                                ),

                                const SizedBox(width: 16),

                                Expanded(
                                  child: ElevatedButton.icon(
                                    onPressed: () {
                                      ref.read(cartProvider.notifier).addToCart(product, quantity: _quantity);
                                      ScaffoldMessenger.of(context).showSnackBar(
                                        SnackBar(
                                          content: Text('${product.title} sepete eklendi.'),
                                          backgroundColor: AppColors.greenSuccess,
                                        ),
                                      );
                                    },
                                    icon: const Icon(Icons.shopping_cart),
                                    label: const Text('SEPETE EKLE'),
                                    style: ElevatedButton.styleFrom(
                                      backgroundColor: AppColors.primaryRed,
                                      padding: const EdgeInsets.symmetric(vertical: 18),
                                    ),
                                  ),
                                ),
                              ],
                            ),

                            const SizedBox(height: 24),

                            // OEM Numaraları Tablosu
                            const Text('OEM VE MUADİL PARÇA KODLARI', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                            const SizedBox(height: 8),
                            Wrap(
                              spacing: 8,
                              runSpacing: 8,
                              children: product.oemCodes.map((oem) {
                                return Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                  decoration: BoxDecoration(
                                    color: AppColors.lightGrey,
                                    borderRadius: BorderRadius.circular(4),
                                    border: Border.all(color: AppColors.borderGrey),
                                  ),
                                  child: Text(
                                    oem,
                                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: AppColors.primaryNavy),
                                  ),
                                );
                              }).toList(),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),

            const SizedBox(height: 32),
            const AppFooter(),
          ],
        ),
      ),
    );
  }
}
