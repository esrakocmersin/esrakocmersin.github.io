import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../providers/supabase_providers.dart';

class AdminDashboardPage extends ConsumerWidget {
  const AdminDashboardPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final products = ref.watch(productsProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Row(
          children: [
            Icon(Icons.admin_panel_settings, color: Colors.white),
            SizedBox(width: 8),
            Text('YEDEKPARCA.COM.TR - Gelişmiş Admin Yönetim Paneli'),
          ],
        ),
        backgroundColor: AppColors.primaryNavy,
        actions: [
          IconButton(
            onPressed: () => context.go('/'),
            icon: const Icon(Icons.storefront),
            tooltip: 'Mağazaya Dön',
          ),
        ],
      ),
      body: Row(
        children: [
          // Admin Yan Menü
          NavigationRail(
            selectedIndex: 0,
            onDestinationSelected: (idx) {
              if (idx == 1) context.go('/admin/products');
            },
            labelType: NavigationRailLabelType.all,
            destinations: const [
              NavigationRailDestination(
                icon: Icon(Icons.dashboard_outlined),
                selectedIcon: Icon(Icons.dashboard),
                label: Text('Özet'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.inventory_2_outlined),
                selectedIcon: Icon(Icons.inventory_2),
                label: Text('Ürünler & URL Import'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.directions_car_outlined),
                selectedIcon: Icon(Icons.directions_car),
                label: Text('Araç Kataloğu'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.shopping_bag_outlined),
                selectedIcon: Icon(Icons.shopping_bag),
                label: Text('Siparişler'),
              ),
            ],
          ),

          const VerticalDivider(thickness: 1, width: 1),

          // Ana Dashboard İçeriği
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Genel Bakış ve Sistem Durumu',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppColors.primaryNavy),
                  ),
                  const SizedBox(height: 20),

                  // Metrik Kartları
                  Row(
                    children: [
                      _buildMetricCard('Toplam Ürün', '${products.length}', Icons.inventory, Colors.blue),
                      const SizedBox(width: 16),
                      _buildMetricCard('Toplam Sipariş', '128', Icons.shopping_cart, Colors.green),
                      const SizedBox(width: 16),
                      _buildMetricCard('Aylık Ciro', '142,500 ₺', Icons.attach_money, Colors.purple),
                      const SizedBox(width: 16),
                      _buildMetricCard('Kritik Stok', '3 Ürün', Icons.warning_amber_rounded, Colors.orange),
                    ],
                  ),

                  const SizedBox(height: 32),

                  // Hızlı İşlemler - URL İle Otomatik Aktarım
                  Card(
                    color: AppColors.primaryNavy,
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Row(
                        children: [
                          const Icon(Icons.link, color: AppColors.primaryRed, size: 48),
                          const SizedBox(width: 20),
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'URL ile Otomatik Ürün & Kategori İçe Aktarma',
                                  style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
                                ),
                                SizedBox(height: 4),
                                Text(
                                  'Herhangi bir yedek parça web sitesinden ürün linkini veya kategori linkini yapıştırarak başlık, fiyat, resimler ve OEM kodlarını saniyeler içinde veritabanınıza çekin.',
                                  style: TextStyle(color: Colors.white70, fontSize: 13),
                                ),
                              ],
                            ),
                          ),
                          ElevatedButton.icon(
                            onPressed: () => context.go('/admin/products'),
                            icon: const Icon(Icons.cloud_download),
                            label: const Text('URL İLE İÇE AKTAR'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: AppColors.primaryRed,
                              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }

  Widget _buildMetricCard(String title, String value, IconData icon, Color color) {
    return Expanded(
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            children: [
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: color.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(icon, color: color, size: 30),
              ),
              const SizedBox(width: 16),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(color: AppColors.bodyText, fontSize: 12)),
                  const SizedBox(height: 4),
                  Text(value, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 20, color: AppColors.primaryNavy)),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
