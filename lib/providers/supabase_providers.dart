import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/product_model.dart';

import '../services/mock_data_service.dart';

// --- SEPET NOTIFIER ---
class CartNotifier extends StateNotifier<List<CartItemModel>> {
  CartNotifier() : super([]);

  void addToCart(ProductModel product, {int quantity = 1}) {
    final index = state.indexWhere((item) => item.product.id == product.id);
    if (index >= 0) {
      state[index].quantity += quantity;
      state = [...state];
    } else {
      state = [...state, CartItemModel(product: product, quantity: quantity)];
    }
  }

  void removeFromCart(String productId) {
    state = state.where((item) => item.product.id != productId).toList();
  }

  void updateQuantity(String productId, int quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    final index = state.indexWhere((item) => item.product.id == productId);
    if (index >= 0) {
      state[index].quantity = quantity;
      state = [...state];
    }
  }

  void clearCart() {
    state = [];
  }

  double get totalPrice =>
      state.fold(0.0, (sum, item) => sum + item.totalPrice);
  int get itemCount => state.fold(0, (sum, item) => sum + item.quantity);
}

final cartProvider =
    StateNotifierProvider<CartNotifier, List<CartItemModel>>((ref) {
  return CartNotifier();
});

// --- ARAÇ SEÇİM FİLTRESİ NOTIFIER ---
class VehicleFilterState {
  final VehicleBrandModel? selectedBrand;
  final VehicleModel? selectedModel;
  final VehicleEngineModel? selectedEngine;

  VehicleFilterState({
    this.selectedBrand,
    this.selectedModel,
    this.selectedEngine,
  });

  VehicleFilterState copyWith({
    VehicleBrandModel? selectedBrand,
    VehicleModel? selectedModel,
    VehicleEngineModel? selectedEngine,
    bool clearBrand = false,
    bool clearModel = false,
    bool clearEngine = false,
  }) {
    return VehicleFilterState(
      selectedBrand: clearBrand ? null : (selectedBrand ?? this.selectedBrand),
      selectedModel: clearModel ? null : (selectedModel ?? this.selectedModel),
      selectedEngine:
          clearEngine ? null : (selectedEngine ?? this.selectedEngine),
    );
  }

  bool get isVehicleSelected => selectedBrand != null && selectedModel != null;
}

class VehicleFilterNotifier extends StateNotifier<VehicleFilterState> {
  VehicleFilterNotifier() : super(VehicleFilterState());

  void selectBrand(VehicleBrandModel brand) {
    state = VehicleFilterState(selectedBrand: brand);
  }

  void selectModel(VehicleModel model) {
    state = state.copyWith(
      selectedModel: model,
      clearEngine: true,
    );
  }

  void selectEngine(VehicleEngineModel engine) {
    state = state.copyWith(selectedEngine: engine);
  }

  void reset() {
    state = VehicleFilterState();
  }
}

final vehicleFilterProvider =
    StateNotifierProvider<VehicleFilterNotifier, VehicleFilterState>((ref) {
  return VehicleFilterNotifier();
});

// --- ARAMA SORGUSU ---
final searchQueryProvider = StateProvider<String>((ref) => '');

// --- KATEGORİ FİLTRESİ ---
final selectedCategoryProvider = StateProvider<String?>((ref) => null);

// --- MARKA FİLTRESİ ---
final selectedBrandProvider = StateProvider<String?>((ref) => null);

// --- ÜRÜN YÖNETİMİ PROVIDER (ADMIN & SCRAPER) ---
class ProductsNotifier extends StateNotifier<List<ProductModel>> {
  ProductsNotifier() : super(MockDataService.sampleProducts);

  void addProduct(ProductModel product) {
    state = [product, ...state];
  }

  void updateProduct(ProductModel product) {
    state = [
      for (final item in state)
        if (item.id == product.id) product else item
    ];
  }

  void deleteProduct(String id) {
    state = state.where((item) => item.id != id).toList();
  }

  /// URL İçe Aktarma Mantığı (Client / Edge Function simülasyonu)
  Future<ProductModel> importFromUrl(String url) async {
    await Future.delayed(const Duration(seconds: 2));

    // Demo URL Scrape Sonucu
    final String cleanTitle = url.contains('balata')
        ? 'Orijinal Ön Fren Balata Seti (URL ile Eklendi)'
        : url.contains('filtre')
            ? 'Yüksek Performans Hava / Yağ Filtresi (URL ile Eklendi)'
            : 'İthal Muadil Otomotiv Parçası (URL ile Eklendi)';

    final newProduct = ProductModel(
      id: 'p-imported-${DateTime.now().millisecondsSinceEpoch}',
      title: cleanTitle,
      slug: 'imported-product-${DateTime.now().millisecondsSinceEpoch}',
      sku: 'OEM-${DateTime.now().millisecondsSinceEpoch.toString().substring(7)}',
      price: 1850.00,
      discountPrice: 1650.00,
      stockQuantity: 20,
      description: 'Bu ürün $url adresinden otomatik taranarak sisteme entegre edilmiştir. Tüm OEM ve teknik detaylar çekilmiştir.',
      sourceUrl: url,
      brandName: 'Orijinal Equipment',
      categoryName: 'Fren Sistemi',
      isFeatured: true,
      images: [
        'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?w=600',
      ],
      oemCodes: ['5Q0698151', 'VW-OEM-99283'],
    );

    addProduct(newProduct);
    return newProduct;
  }
}

final productsProvider =
    StateNotifierProvider<ProductsNotifier, List<ProductModel>>((ref) {
  return ProductsNotifier();
});

// --- FİLTRELENMİŞ ÜRÜNLER (SEARCH & FILTERED) ---
final filteredProductsProvider = Provider<List<ProductModel>>((ref) {
  final allProducts = ref.watch(productsProvider);
  final searchQuery = ref.watch(searchQueryProvider).trim().toLowerCase();
  final selectedCat = ref.watch(selectedCategoryProvider);
  final selectedBrand = ref.watch(selectedBrandProvider);
  final vehicleState = ref.watch(vehicleFilterProvider);

  return allProducts.where((product) {
    // 1. Kategori Filtresi
    if (selectedCat != null &&
        selectedCat.isNotEmpty &&
        product.categoryId != selectedCat &&
        product.categoryName != selectedCat) {
      return false;
    }

    // 2. Marka Filtresi
    if (selectedBrand != null &&
        selectedBrand.isNotEmpty &&
        product.brandId != selectedBrand &&
        product.brandName != selectedBrand) {
      return false;
    }

    // 3. Arama Metni / OEM Kodu Filtresi
    if (searchQuery.isNotEmpty) {
      final matchesTitle = product.title.toLowerCase().contains(searchQuery);
      final matchesSku = product.sku.toLowerCase().contains(searchQuery);
      final matchesOem = product.oemCodes
          .any((oem) => oem.toLowerCase().contains(searchQuery));

      if (!matchesTitle && !matchesSku && !matchesOem) {
        return false;
      }
    }

    // 4. Araç Uyum Filtresi
    if (vehicleState.selectedEngine != null) {
      if (product.compatibleEngineIds.isNotEmpty &&
          !product.compatibleEngineIds
              .contains(vehicleState.selectedEngine!.id)) {
        return false;
      }
    }

    return true;
  }).toList();
});
