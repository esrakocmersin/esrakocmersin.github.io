import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../core/constants/app_colors.dart';
import '../models/product_model.dart';
import '../providers/supabase_providers.dart';
import '../services/mock_data_service.dart';

class VehicleSelectorWidget extends ConsumerWidget {
  const VehicleSelectorWidget({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final vehicleState = ref.watch(vehicleFilterProvider);
    final vehicleNotifier = ref.read(vehicleFilterProvider.notifier);

    final brands = MockDataService.vehicleBrands;
    final models = vehicleState.selectedBrand != null
        ? MockDataService.getVehicleModels(vehicleState.selectedBrand!.id)
        : <VehicleModel>[];
    final engines = vehicleState.selectedModel != null
        ? MockDataService.getVehicleEngines(vehicleState.selectedModel!.id)
        : <VehicleEngineModel>[];

    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppColors.primaryNavy,
        borderRadius: BorderRadius.circular(10),
        boxShadow: const [
          BoxShadow(
            color: Colors.black12,
            blurRadius: 8,
            offset: Offset(0, 4),
          )
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(Icons.directions_car, color: AppColors.primaryRed, size: 28),
              SizedBox(width: 10),
              Text(
                'ARACINIZI SEÇİN, UYUMLU PARÇALARI BULUN',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 0.5,
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              // 1. MARKA SEÇİMİ
              Expanded(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: DropdownButtonHideUnderline(
                    child: DropdownButton<VehicleBrandModel>(
                      value: vehicleState.selectedBrand,
                      hint: const Text('1. Araç Markası Seçin'),
                      isExpanded: true,
                      items: brands.map((b) {
                        return DropdownMenuItem(
                          value: b,
                          child: Text(b.name, style: const TextStyle(color: AppColors.darkText)),
                        );
                      }).toList(),
                      onChanged: (val) {
                        if (val != null) vehicleNotifier.selectBrand(val);
                      },
                    ),
                  ),
                ),
              ),

              const SizedBox(width: 12),

              // 2. MODEL SEÇİMİ
              Expanded(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  decoration: BoxDecoration(
                    color: vehicleState.selectedBrand != null ? Colors.white : Colors.grey[300],
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: DropdownButtonHideUnderline(
                    child: DropdownButton<VehicleModel>(
                      value: vehicleState.selectedModel,
                      hint: const Text('2. Model Seçin'),
                      isExpanded: true,
                      items: models.map((m) {
                        return DropdownMenuItem(
                          value: m,
                          child: Text(m.name, style: const TextStyle(color: AppColors.darkText)),
                        );
                      }).toList(),
                      onChanged: vehicleState.selectedBrand != null
                          ? (val) {
                              if (val != null) vehicleNotifier.selectModel(val);
                            }
                          : null,
                    ),
                  ),
                ),
              ),

              const SizedBox(width: 12),

              // 3. MOTOR / VARYANT SEÇİMİ
              Expanded(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  decoration: BoxDecoration(
                    color: vehicleState.selectedModel != null ? Colors.white : Colors.grey[300],
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: DropdownButtonHideUnderline(
                    child: DropdownButton<VehicleEngineModel>(
                      value: vehicleState.selectedEngine,
                      hint: const Text('3. Motor Seçin'),
                      isExpanded: true,
                      items: engines.map((e) {
                        return DropdownMenuItem(
                          value: e,
                          child: Text('${e.engineName} (${e.fuelType})', style: const TextStyle(color: AppColors.darkText)),
                        );
                      }).toList(),
                      onChanged: vehicleState.selectedModel != null
                          ? (val) {
                              if (val != null) vehicleNotifier.selectEngine(val);
                            }
                          : null,
                    ),
                  ),
                ),
              ),

              const SizedBox(width: 12),

              // PARÇA BUL BUTONU
              ElevatedButton.icon(
                onPressed: () {
                  context.go('/catalog');
                },
                icon: const Icon(Icons.search, size: 20),
                label: const Text('PARÇA BUL'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primaryRed,
                  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
                ),
              ),

              if (vehicleState.selectedBrand != null) ...[
                const SizedBox(width: 8),
                IconButton(
                  onPressed: () => vehicleNotifier.reset(),
                  icon: const Icon(Icons.clear, color: Colors.white70),
                  tooltip: 'Temizle',
                ),
              ]
            ],
          ),
        ],
      ),
    );
  }
}
