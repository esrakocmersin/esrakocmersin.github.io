import 'dart:convert';

/// Kategori Modeli
class CategoryModel {
  final String id;
  final String name;
  final String slug;
  final String? parentId;
  final String? imageUrl;
  final int displayOrder;

  CategoryModel({
    required this.id,
    required this.name,
    required this.slug,
    this.parentId,
    this.imageUrl,
    this.displayOrder = 0,
  });

  factory CategoryModel.fromJson(Map<String, dynamic> json) {
    return CategoryModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      slug: json['slug'] ?? '',
      parentId: json['parent_id'],
      imageUrl: json['image_url'],
      displayOrder: json['display_order'] ?? 0,
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'slug': slug,
        'parent_id': parentId,
        'image_url': imageUrl,
        'display_order': displayOrder,
      };
}

/// Parça Üretici Markası (Bosch, Valeo vb.)
class BrandModel {
  final String id;
  final String name;
  final String slug;
  final String? logoUrl;
  final bool isFeatured;

  BrandModel({
    required this.id,
    required this.name,
    required this.slug,
    this.logoUrl,
    this.isFeatured = false,
  });

  factory BrandModel.fromJson(Map<String, dynamic> json) {
    return BrandModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      slug: json['slug'] ?? '',
      logoUrl: json['logo_url'],
      isFeatured: json['is_featured'] ?? false,
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'slug': slug,
        'logo_url': logoUrl,
        'is_featured': isFeatured,
      };
}

/// Araç Markası (Volkswagen, Renault, Ford vb.)
class VehicleBrandModel {
  final String id;
  final String name;
  final String? logoUrl;

  VehicleBrandModel({required this.id, required this.name, this.logoUrl});

  factory VehicleBrandModel.fromJson(Map<String, dynamic> json) {
    return VehicleBrandModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      logoUrl: json['logo_url'],
    );
  }
}

/// Araç Modeli (Golf, Megane, Focus)
class VehicleModel {
  final String id;
  final String brandId;
  final String name;
  final int yearStart;
  final int? yearEnd;

  VehicleModel({
    required this.id,
    required this.brandId,
    required this.name,
    required this.yearStart,
    this.yearEnd,
  });

  factory VehicleModel.fromJson(Map<String, dynamic> json) {
    return VehicleModel(
      id: json['id'] ?? '',
      brandId: json['brand_id'] ?? '',
      name: json['name'] ?? '',
      yearStart: json['year_start'] ?? 2000,
      yearEnd: json['year_end'],
    );
  }
}

/// Araç Motor Tipi (1.6 TDI CAYC 105 HP)
class VehicleEngineModel {
  final String id;
  final String modelId;
  final String engineName;
  final String? engineCode;
  final String fuelType;
  final int? powerHp;

  VehicleEngineModel({
    required this.id,
    required this.modelId,
    required this.engineName,
    this.engineCode,
    this.fuelType = 'Dizel',
    this.powerHp,
  });

  factory VehicleEngineModel.fromJson(Map<String, dynamic> json) {
    return VehicleEngineModel(
      id: json['id'] ?? '',
      modelId: json['model_id'] ?? '',
      engineName: json['engine_name'] ?? '',
      engineCode: json['engine_code'],
      fuelType: json['fuel_type'] ?? 'Dizel',
      powerHp: json['power_hp'],
    );
  }
}

/// OEM / Muadil Parça Kodu
class OemNumberModel {
  final String id;
  final String productId;
  final String oemCode;
  final String? brandName;

  OemNumberModel({
    required this.id,
    required this.productId,
    required this.oemCode,
    this.brandName,
  });

  factory OemNumberModel.fromJson(Map<String, dynamic> json) {
    return OemNumberModel(
      id: json['id'] ?? '',
      productId: json['product_id'] ?? '',
      oemCode: json['oem_code'] ?? '',
      brandName: json['brand_name'],
    );
  }
}

/// Ürün Modeli
class ProductModel {
  final String id;
  final String title;
  final String slug;
  final String sku;
  final double price;
  final double? discountPrice;
  final int stockQuantity;
  final String? description;
  final String? brandId;
  final String? brandName;
  final String? categoryId;
  final String? categoryName;
  final String? sourceUrl;
  final bool isFeatured;
  final bool isActive;
  final List<String> images;
  final List<String> oemCodes;
  final List<String> compatibleEngineIds;

  ProductModel({
    required this.id,
    required this.title,
    required this.slug,
    required this.sku,
    required this.price,
    this.discountPrice,
    this.stockQuantity = 10,
    this.description,
    this.brandId,
    this.brandName,
    this.categoryId,
    this.categoryName,
    this.sourceUrl,
    this.isFeatured = false,
    this.isActive = true,
    this.images = const [],
    this.oemCodes = const [],
    this.compatibleEngineIds = const [],
  });

  double get activePrice => discountPrice ?? price;
  bool get hasDiscount => discountPrice != null && discountPrice! < price;
  int get discountPercent =>
      hasDiscount ? (((price - discountPrice!) / price) * 100).round() : 0;

  factory ProductModel.fromJson(Map<String, dynamic> json) {
    List<String> imgList = [];
    if (json['images'] != null) {
      if (json['images'] is List) {
        imgList = List<String>.from(json['images']);
      }
    } else if (json['product_images'] != null && json['product_images'] is List) {
      imgList = (json['product_images'] as List)
          .map((e) => e['image_url'].toString())
          .toList();
    }

    List<String> oemList = [];
    if (json['oem_codes'] != null && json['oem_codes'] is List) {
      oemList = List<String>.from(json['oem_codes']);
    } else if (json['oem_numbers'] != null && json['oem_numbers'] is List) {
      oemList = (json['oem_numbers'] as List)
          .map((e) => e['oem_code'].toString())
          .toList();
    }

    return ProductModel(
      id: json['id'] ?? '',
      title: json['title'] ?? '',
      slug: json['slug'] ?? '',
      sku: json['sku'] ?? '',
      price: (json['price'] as num?)?.toDouble() ?? 0.0,
      discountPrice: (json['discount_price'] as num?)?.toDouble(),
      stockQuantity: json['stock_quantity'] ?? 10,
      description: json['description'],
      brandId: json['brand_id'],
      brandName: json['brands']?['name'] ?? json['brand_name'],
      categoryId: json['category_id'],
      categoryName: json['categories']?['name'] ?? json['category_name'],
      sourceUrl: json['source_url'],
      isFeatured: json['is_featured'] ?? false,
      isActive: json['is_active'] ?? true,
      images: imgList.isNotEmpty
          ? imgList
          : ['https://via.placeholder.com/600x600.png?text=Yedek+Parca'],
      oemCodes: oemList,
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'slug': slug,
        'sku': sku,
        'price': price,
        'discount_price': discountPrice,
        'stock_quantity': stockQuantity,
        'description': description,
        'brand_id': brandId,
        'category_id': categoryId,
        'source_url': sourceUrl,
        'is_featured': isFeatured,
        'is_active': isActive,
      };
}

/// Sepet Öğesi Modeli
class CartItemModel {
  final ProductModel product;
  int quantity;

  CartItemModel({required this.product, this.quantity = 1});

  double get totalPrice => product.activePrice * quantity;
}
