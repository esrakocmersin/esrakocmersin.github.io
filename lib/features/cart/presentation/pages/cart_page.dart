import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../providers/supabase_providers.dart';
import '../../../../widgets/app_footer.dart';
import '../../../../widgets/app_header.dart';
import '../../../../widgets/category_menu_bar.dart';

class CartPage extends ConsumerWidget {
  const CartPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cartItems = ref.watch(cartProvider);
    final cartNotifier = ref.read(cartProvider.notifier);

    return Scaffold(
      appBar: const AppHeader(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            const CategoryMenuBar(),
            const SizedBox(height: 24),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'SEPETİM VE ÖDEME',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppColors.primaryNavy),
                  ),
                  const SizedBox(height: 16),

                  if (cartItems.isEmpty)
                    Container(
                      height: 300,
                      width: double.infinity,
                      alignment: Alignment.center,
                      child: const Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.shopping_cart_outlined, size: 80, color: Colors.grey),
                          SizedBox(height: 16),
                          Text('Sepetinizde henüz ürün bulunmuyor.', style: TextStyle(fontSize: 16, color: AppColors.bodyText)),
                        ],
                      ),
                    )
                  else
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Sepetteki Ürünler
                        Expanded(
                          flex: 7,
                          child: Card(
                            child: Padding(
                              padding: const EdgeInsets.all(16),
                              child: Column(
                                children: cartItems.map((item) {
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(vertical: 8),
                                    child: Row(
                                      children: [
                                        Image.network(
                                          item.product.images.isNotEmpty ? item.product.images.first : '',
                                          width: 70,
                                          height: 70,
                                          fit: BoxFit.cover,
                                        ),
                                        const SizedBox(width: 16),
                                        Expanded(
                                          child: Column(
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                item.product.title,
                                                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                                              ),
                                              Text('SKU: ${item.product.sku}', style: const TextStyle(color: Colors.grey, fontSize: 12)),
                                            ],
                                          ),
                                        ),
                                        Row(
                                          children: [
                                            IconButton(
                                              onPressed: () => cartNotifier.updateQuantity(item.product.id, item.quantity - 1),
                                              icon: const Icon(Icons.remove_circle_outline, size: 20),
                                            ),
                                            Text('${item.quantity}', style: const TextStyle(fontWeight: FontWeight.bold)),
                                            IconButton(
                                              onPressed: () => cartNotifier.updateQuantity(item.product.id, item.quantity + 1),
                                              icon: const Icon(Icons.add_circle_outline, size: 20),
                                            ),
                                          ],
                                        ),
                                        const SizedBox(width: 16),
                                        Text(
                                          '${item.totalPrice.toStringAsFixed(2)} ₺',
                                          style: const TextStyle(fontWeight: FontWeight.bold, color: AppColors.primaryRed, fontSize: 15),
                                        ),
                                        IconButton(
                                          onPressed: () => cartNotifier.removeFromCart(item.product.id),
                                          icon: const Icon(Icons.delete_outline, color: Colors.grey),
                                        ),
                                      ],
                                    ),
                                  );
                                }).toList(),
                              ),
                            ),
                          ),
                        ),

                        const SizedBox(width: 20),

                        // Sipariş Özeti
                        Expanded(
                          flex: 4,
                          child: Card(
                            child: Padding(
                              padding: const EdgeInsets.all(20),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text('SİPARİŞ ÖZETİ', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                                  const Divider(height: 24),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      const Text('Ara Toplam:'),
                                      Text('${cartNotifier.totalPrice.toStringAsFixed(2)} ₺', style: const TextStyle(fontWeight: FontWeight.bold)),
                                    ],
                                  ),
                                  const SizedBox(height: 8),
                                  const Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text('Kargo Ücreti:'),
                                      Text('ÜCRETSİZ', style: TextStyle(color: AppColors.greenSuccess, fontWeight: FontWeight.bold)),
                                    ],
                                  ),
                                  const Divider(height: 24),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      const Text('GENEL TOPLAM:', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                                      Text(
                                        '${cartNotifier.totalPrice.toStringAsFixed(2)} ₺',
                                        style: const TextStyle(fontWeight: FontWeight.black, color: AppColors.primaryRed, fontSize: 20),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 20),
                                  ElevatedButton(
                                    onPressed: () {
                                      ScaffoldMessenger.of(context).showSnackBar(
                                        const SnackBar(
                                          content: Text('Siparişiniz başarıyla tamamlandı!'),
                                          backgroundColor: AppColors.greenSuccess,
                                        ),
                                      );
                                      cartNotifier.clearCart();
                                    },
                                    style: ElevatedButton.styleFrom(
                                      backgroundColor: AppColors.primaryRed,
                                      minimumSize: const Size.fromHeight(50),
                                    ),
                                    child: const Text('ÖDEMEYE GEÇ (3D SECURE)'),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                ],
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
