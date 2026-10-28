import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../core/constants/app_colors.dart';
import '../providers/supabase_providers.dart';

class AppHeader extends ConsumerStatefulWidget implements PreferredSizeWidget {
  const AppHeader({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(115);

  @override
  ConsumerState<AppHeader> createState() => _AppHeaderState();
}

class _AppHeaderState extends ConsumerState<AppHeader> {
  final TextEditingController _searchController = TextEditingController();

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final cartItems = ref.watch(cartProvider);
    final totalCartCount = ref.read(cartProvider.notifier).itemCount;

    return Column(
      children: [
        // Top Announcement Bar
        Container(
          color: AppColors.primaryNavy,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 6),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Row(
                children: [
                  Icon(Icons.local_shipping_outlined, color: Colors.white, size: 16),
                  SizedBox(width: 6),
                  Text(
                    '1000 TL Üzeri Ücretsiz Kargo | Orijinal & Garantili Parça',
                    style: TextStyle(color: Colors.white, fontSize: 12),
                  ),
                ],
              ),
              Row(
                children: [
                  const Icon(Icons.phone_in_talk, color: Colors.white, size: 14),
                  const SizedBox(width: 4),
                  const Text('Müşteri Destek: 0850 123 45 67',
                      style: TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold)),
                  const SizedBox(width: 16),
                  InkWell(
                    onTap: () => context.go('/admin'),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: AppColors.primaryRed,
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: const Text('Admin Panel',
                          style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold)),
                    ),
                  )
                ],
              ),
            ],
          ),
        ),

        // Main Header Container
        Container(
          color: AppColors.white,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          decoration: const BoxDecoration(
            border: Border(bottom: BorderSide(color: AppColors.borderGrey)),
          ),
          child: Row(
            children: [
              // Logo (yedekparca.com.tr Stili)
              InkWell(
                onTap: () => context.go('/'),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: AppColors.primaryRed,
                        borderRadius: BorderRadius.circular(6),
                      ),
                      child: const Icon(Icons.directions_car, color: Colors.white, size: 28),
                    ),
                    const SizedBox(width: 10),
                    RichText(
                      text: const TextSpan(
                        style: TextStyle(fontSize: 22, fontWeight: FontWeight.black, fontFamily: 'Roboto'),
                        children: [
                          TextSpan(text: 'YEDEKPARCA', style: TextStyle(color: AppColors.primaryNavy)),
                          TextSpan(text: '.COM.TR', style: TextStyle(color: AppColors.primaryRed)),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(width: 32),

              // Search Bar (OEM / Parça No / Ürün Adı Arama)
              Expanded(
                child: Container(
                  height: 44,
                  decoration: BoxDecoration(
                    color: AppColors.lightGrey,
                    borderRadius: BorderRadius.circular(22),
                    border: Border.all(color: AppColors.borderGrey),
                  ),
                  child: Row(
                    children: [
                      const SizedBox(width: 16),
                      const Icon(Icons.search, color: AppColors.bodyText),
                      const SizedBox(width: 10),
                      Expanded(
                        child: TextField(
                          controller: _searchController,
                          onChanged: (val) {
                            ref.read(searchQueryProvider.notifier).state = val;
                          },
                          onSubmitted: (val) {
                            ref.read(searchQueryProvider.notifier).state = val;
                            context.go('/catalog');
                          },
                          decoration: const InputDecoration(
                            hintText: 'OEM Numarası, Parça Kodu veya Ürün Adı Ara (Örn: 0986494660)...',
                            border: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            fillColor: Colors.transparent,
                            isDense: true,
                          ),
                        ),
                      ),
                      ElevatedButton(
                        onPressed: () {
                          ref.read(searchQueryProvider.notifier).state = _searchController.text;
                          context.go('/catalog');
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppColors.primaryRed,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(20),
                          ),
                          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                        ),
                        child: const Text('ARAMA YAP'),
                      ),
                      const SizedBox(width: 4),
                    ],
                  ),
                ),
              ),

              const SizedBox(width: 32),

              // Action Buttons: Favoriler & Sepet
              Row(
                children: [
                  OutlinedButton.icon(
                    onPressed: () => context.go('/login'),
                    icon: const Icon(Icons.person_outline, size: 20, color: AppColors.primaryNavy),
                    label: const Text('Giriş Yap', style: TextStyle(color: AppColors.primaryNavy)),
                    style: OutlinedButton.styleFrom(
                      side: const BorderSide(color: AppColors.borderGrey),
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Stack(
                    children: [
                      ElevatedButton.icon(
                        onPressed: () => context.go('/cart'),
                        icon: const Icon(Icons.shopping_cart_outlined, color: Colors.white, size: 20),
                        label: Text('SEPETİM (${totalCartCount})', style: const TextStyle(fontWeight: FontWeight.bold)),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppColors.primaryNavy,
                          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
                        ),
                      ),
                      if (totalCartCount > 0)
                        Positioned(
                          right: 8,
                          top: 4,
                          child: Container(
                            padding: const EdgeInsets.all(4),
                            decoration: const BoxDecoration(
                              color: AppColors.primaryRed,
                              shape: BoxShape.circle,
                            ),
                            child: Text(
                              '$totalCartCount',
                              style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ),
                    ],
                  )
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }
}
