import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../providers/supabase_providers.dart';
import '../../../../services/mock_data_service.dart';
import '../../../../widgets/app_footer.dart';
import '../../../../widgets/app_header.dart';
import '../../../../widgets/category_menu_bar.dart';
import '../../../../widgets/product_card.dart';

class CatalogPage extends ConsumerWidget {
  const CatalogPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final filteredProducts = ref.watch(filteredProductsProvider);
    final selectedCategory = ref.watch(selectedCategoryProvider);
    final selectedBrand = ref.watch(selectedBrandProvider);
    final searchQuery = ref.watch(searchQueryProvider);
    final vehicleState = ref.watch(vehicleFilterProvider);

    final categories = MockDataService.categories;
    final brands = MockDataService.brands;

    return Scaffold(
      appBar: const AppHeader(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            const CategoryMenuBar(),
            const SizedBox(height: 16),

            // Breadcrumb & Title
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Row(
                children: [
                  Text(
                    'Ana Sayfa / ${selectedCategory ?? 'Tüm Parçalar'} ${searchQuery.isNotEmpty ? ' / Search: "$searchQuery"' : ''}',
                    style: const TextStyle(color: AppColors.bodyText, fontSize: 13),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 16),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Sol Yan Filtre Paneli
                  SizedBox(
                    width: 260,
                    child: Card(
                      child: Padding(
                        padding: const EdgeInsets.all(16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Row(
                              children: [
                                Icon(Icons.filter_list, color: AppColors.primaryRed, size: 20),
                                SizedBox(width: 8),
                                Text('FİLTRELER', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                              ],
                            ),
                            const Divider(height: 24),

                            // Aktif Araç Filtresi Rozeti
                            if (vehicleState.selectedBrand != null) ...[
                              Container(
                                padding: const EdgeInsets.all(10),
                                decoration: BoxDecoration(
                                  color: AppColors.primaryNavy.withOpacity(0.08),
                                  borderRadius: BorderRadius.circular(6),
                                  border: Border.all(color: AppColors.primaryNavy.withOpacity(0.2)),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text('Seçili Araç:', style: TextStyle(fontSize: 11, color: AppColors.bodyText)),
                                    const SizedBox(height: 4),
                                    Text(
                                      '${vehicleState.selectedBrand?.name} ${vehicleState.selectedModel?.name ?? ''}',
                                      style: const TextStyle(fontWeight: FontWeight.bold, color: AppColors.primaryNavy, fontSize: 12),
                                    ),
                                    TextButton(
                                      onPressed: () => ref.read(vehicleFilterProvider.notifier).reset(),
                                      child: const Text('Filtreyi Kaldır', style: TextStyle(color: AppColors.primaryRed, fontSize: 11)),
                                    )
                                  ],
                                ),
                              ),
                              const SizedBox(height: 16),
                            ],

                            // Kategoriler
                            const Text('Kategoriler', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                            const SizedBox(height: 8),
                            ListTile(
                              dense: true,
                              title: const Text('Tüm Kategoriler'),
                              selected: selectedCategory == null,
                              onTap: () => ref.read(selectedCategoryProvider.notifier).state = null,
                            ),
                            ...categories.map((c) => ListTile(
                                  dense: true,
                                  title: Text(c.name),
                                  selected: selectedCategory == c.name,
                                  onTap: () => ref.read(selectedCategoryProvider.notifier).state = c.name,
                                )),

                            const Divider(height: 24),

                            // Markalar
                            const Text('Parça Markası', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                            const SizedBox(height: 8),
                            ListTile(
                              dense: true,
                              title: const Text('Tüm Markalar'),
                              selected: selectedBrand == null,
                              onTap: () => ref.read(selectedBrandProvider.notifier).state = null,
                            ),
                            ...brands.map((b) => ListTile(
                                  dense: true,
                                  title: Text(b.name),
                                  selected: selectedBrand == b.name,
                                  onTap: () => ref.read(selectedBrandProvider.notifier).state = b.name,
                                )),
                          ],
                        ),
                      ),
                    ),
                  ),

                  const SizedBox(width: 20),

                  // Ana Ürün Izgarası
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              '${filteredProducts.length} adet yedek parça bulundu.',
                              style: const TextStyle(fontWeight: FontWeight.bold, color: AppColors.primaryNavy, fontSize: 15),
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),
                        if (filteredProducts.isEmpty)
                          Container(
                            height: 300,
                            alignment: Alignment.center,
                            child: const Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(Icons.search_off, size: 64, color: Colors.grey),
                                SizedBox(height: 12),
                                Text('Aradığınız kriterlere uygun yedek parça bulunamadı.',
                                    style: TextStyle(fontSize: 16, color: AppColors.bodyText)),
                              ],
                            ),
                          )
                        else
                          GridView.builder(
                            shrinkWrap: true,
                            physics: const NeverScrollableScrollPhysics(),
                            itemCount: filteredProducts.length,
                            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                              crossAxisCount: 4,
                              childAspectRatio: 0.72,
                              crossAxisSpacing: 12,
                              mainAxisSpacing: 12,
                            ),
                            itemBuilder: (context, index) {
                              return ProductCard(product: filteredProducts[index]);
                            },
                          ),
                      ],
                    ),
                  )
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
