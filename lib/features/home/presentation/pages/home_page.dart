import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../providers/supabase_providers.dart';
import '../../../../services/mock_data_service.dart';
import '../../../../widgets/app_footer.dart';
import '../../../../widgets/app_header.dart';
import '../../../../widgets/category_menu_bar.dart';
import '../../../../widgets/product_card.dart';
import '../../../../widgets/vehicle_selector_widget.dart';

class HomePage extends ConsumerWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final products = ref.watch(productsProvider);
    final featuredProducts = products.where((p) => p.isFeatured).toList();
    final categories = MockDataService.categories;
    final brands = MockDataService.brands;

    return Scaffold(
      appBar: const AppHeader(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Kategori Menü Çubuğu
            const CategoryMenuBar(),

            const SizedBox(height: 16),

            // Main Banner & Vehicle Selector Section
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                children: [
                  // Banner Carousel
                  Container(
                    height: 220,
                    width: double.infinity,
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(
                        colors: [AppColors.primaryNavy, Color(0xFF2C3E66)],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    padding: const EdgeInsets.all(32),
                    child: Row(
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                                decoration: BoxDecoration(
                                  color: AppColors.primaryRed,
                                  borderRadius: BorderRadius.circular(4),
                                ),
                                child: const Text(
                                  'ORİJİNAL & İTHAL YEDEK PARÇALAR',
                                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 11),
                                ),
                              ),
                              const SizedBox(height: 12),
                              const Text(
                                'Aracınız İçin Doğru Parça, Doğru Fiyat!',
                                style: TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.black),
                              ),
                              const SizedBox(height: 8),
                              const Text(
                                'Şase numarası ile sorgulama yapın, aracınıza %100 uyumlu parçayı keşfedin.',
                                style: TextStyle(color: Colors.white70, fontSize: 14),
                              ),
                            ],
                          ),
                        ),
                        const Icon(Icons.build_circle_outlined, size: 140, color: Colors.white12),
                      ],
                    ),
                  ),

                  const SizedBox(height: 20),

                  // Aracınızı Seçin Sihirbazı
                  const VehicleSelectorWidget(),
                ],
              ),
            ),

            const SizedBox(height: 32),

            // Popüler Kategoriler
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'ÖNE ÇIKAN KATEGORİLER',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.primaryNavy),
                  ),
                  const SizedBox(height: 16),
                  GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: categories.length,
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 6,
                      childAspectRatio: 1.1,
                      crossAxisSpacing: 12,
                      mainAxisSpacing: 12,
                    ),
                    itemBuilder: (context, index) {
                      final cat = categories[index];
                      return InkWell(
                        onTap: () {
                          ref.read(selectedCategoryProvider.notifier).state = cat.name;
                          context.go('/catalog');
                        },
                        child: Card(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(Icons.precision_manufacturing_outlined, size: 36, color: AppColors.primaryRed),
                              const SizedBox(height: 8),
                              Text(
                                cat.name,
                                textAlign: TextAlign.center,
                                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: AppColors.primaryNavy),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ],
              ),
            ),

            const SizedBox(height: 32),

            // Çok Satan & Öne Çıkan Parçalar
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'ÇOK SATAN YEDEK PARÇALAR',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.primaryNavy),
                      ),
                      TextButton(
                        onPressed: () => context.go('/catalog'),
                        child: const Row(
                          children: [
                            Text('Tümünü Gör', style: TextStyle(color: AppColors.primaryRed, fontWeight: FontWeight.bold)),
                            Icon(Icons.chevron_right, color: AppColors.primaryRed, size: 18),
                          ],
                        ),
                      )
                    ],
                  ),
                  const SizedBox(height: 16),
                  GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: featuredProducts.length,
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 5,
                      childAspectRatio: 0.72,
                      crossAxisSpacing: 12,
                      mainAxisSpacing: 12,
                    ),
                    itemBuilder: (context, index) {
                      return ProductCard(product: featuredProducts[index]);
                    },
                  ),
                ],
              ),
            ),

            const SizedBox(height: 32),

            // Anlaşmalı Markalar
            Container(
              color: AppColors.white,
              padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 24),
              child: Column(
                children: [
                  const Text(
                    'POPÜLER PARÇA MARKALARI',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppColors.primaryNavy),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: brands.map((b) {
                      return Container(
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                        decoration: BoxDecoration(
                          border: Border.all(color: AppColors.borderGrey),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Text(
                          b.name,
                          style: const TextStyle(fontWeight: FontWeight.bold, color: AppColors.bodyText),
                        ),
                      );
                    }).toList(),
                  )
                ],
              ),
            ),

            const SizedBox(height: 32),

            // Footer
            const AppFooter(),
          ],
        ),
      ),
    );
  }
}
