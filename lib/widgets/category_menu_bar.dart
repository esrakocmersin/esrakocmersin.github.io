import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../core/constants/app_colors.dart';
import '../providers/supabase_providers.dart';
import '../services/mock_data_service.dart';

class CategoryMenuBar extends ConsumerWidget {
  const CategoryMenuBar({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final categories = MockDataService.categories;
    final selectedCategory = ref.watch(selectedCategoryProvider);

    return Container(
      color: AppColors.white,
      padding: const EdgeInsets.symmetric(horizontal: 24),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: AppColors.borderGrey, width: 1)),
      ),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          children: [
            // Tüm Kategoriler Menü Butonu
            InkWell(
              onTap: () {
                ref.read(selectedCategoryProvider.notifier).state = null;
                context.go('/catalog');
              },
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                color: selectedCategory == null ? AppColors.primaryRed : Colors.transparent,
                child: Row(
                  children: [
                    Icon(
                      Icons.menu,
                      color: selectedCategory == null ? Colors.white : AppColors.primaryNavy,
                      size: 20,
                    ),
                    const SizedBox(width: 8),
                    Text(
                      'TÜM KATEGORİLER',
                      style: TextStyle(
                        color: selectedCategory == null ? Colors.white : AppColors.primaryNavy,
                        fontWeight: FontWeight.bold,
                        fontSize: 13,
                      ),
                    ),
                  ],
                ),
              ),
            ),

            const SizedBox(width: 12),

            // Kategori Listesi
            ...categories.map((cat) {
              final isSelected = selectedCategory == cat.id || selectedCategory == cat.name;

              return InkWell(
                onTap: () {
                  ref.read(selectedCategoryProvider.notifier).state = cat.name;
                  context.go('/catalog');
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                  decoration: BoxDecoration(
                    border: Border(
                      bottom: BorderSide(
                        color: isSelected ? AppColors.primaryRed : Colors.transparent,
                        width: 2,
                      ),
                    ),
                  ),
                  child: Text(
                    cat.name.toUpperCase(),
                    style: TextStyle(
                      color: isSelected ? AppColors.primaryRed : AppColors.darkText,
                      fontWeight: isSelected ? FontWeight.bold : FontWeight.w600,
                      fontSize: 13,
                    ),
                  ),
                ),
              );
            }),
          ],
        ),
      ),
    );
  }
}
