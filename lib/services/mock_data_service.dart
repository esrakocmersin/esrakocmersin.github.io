import '../models/product_model.dart';

class MockDataService {
  static List<CategoryModel> get categories => [
        CategoryModel(id: 'cat-1', name: 'Fren Sistemi', slug: 'fren-sistemi', imageUrl: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?w=500', displayOrder: 1),
        CategoryModel(id: 'cat-2', name: 'Filtre Grubu', slug: 'filtre-grubu', imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500', displayOrder: 2),
        CategoryModel(id: 'cat-3', name: 'Motor Parçaları', slug: 'motor-parcalari', imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500', displayOrder: 3),
        CategoryModel(id: 'cat-4', name: 'Süspansiyon & Direksiyon', slug: 'suspansiyon-direksiyon', imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=500', displayOrder: 4),
        CategoryModel(id: 'cat-5', name: 'Elektrik & Aydınlatma', slug: 'elektrik-aydinlatma', imageUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500', displayOrder: 5),
        CategoryModel(id: 'cat-6', name: 'Debriyaj & Şanzıman', slug: 'debriyaj-sanziman', imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500', displayOrder: 6),
      ];

  static List<BrandModel> get brands => [
        BrandModel(id: 'b-1', name: 'Bosch', slug: 'bosch', isFeatured: true, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg'),
        BrandModel(id: 'b-2', name: 'Valeo', slug: 'valeo', isFeatured: true, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Valeo_Logo.svg'),
        BrandModel(id: 'b-3', name: 'Sachs', slug: 'sachs', isFeatured: true),
        BrandModel(id: 'b-4', name: 'Febi Bilstein', slug: 'febi', isFeatured: true),
        BrandModel(id: 'b-5', name: 'TRW', slug: 'trw', isFeatured: true),
        BrandModel(id: 'b-6', name: 'Mann Filter', slug: 'mann-filter', isFeatured: true),
        BrandModel(id: 'b-7', name: 'Kale Oto Radyatör', slug: 'kale', isFeatured: true),
        BrandModel(id: 'b-8', name: 'LuK', slug: 'luk', isFeatured: true),
      ];

  static List<VehicleBrandModel> get vehicleBrands => [
        VehicleBrandModel(id: 'vb-1', name: 'Volkswagen'),
        VehicleBrandModel(id: 'vb-2', name: 'Renault'),
        VehicleBrandModel(id: 'vb-3', name: 'Ford'),
        VehicleBrandModel(id: 'vb-4', name: 'Fiat'),
        VehicleBrandModel(id: 'vb-5', name: 'BMW'),
        VehicleBrandModel(id: 'vb-6', name: 'Mercedes-Benz'),
        VehicleBrandModel(id: 'vb-7', name: 'Audi'),
        VehicleBrandModel(id: 'vb-8', name: 'Peugeot'),
      ];

  static List<VehicleModel> getVehicleModels(String brandId) {
    if (brandId == 'vb-1') {
      return [
        VehicleModel(id: 'vm-1', brandId: 'vb-1', name: 'Golf VII (2012-2020)', yearStart: 2012, yearEnd: 2020),
        VehicleModel(id: 'vm-2', brandId: 'vb-1', name: 'Passat B8 (2014-2023)', yearStart: 2014, yearEnd: 2023),
        VehicleModel(id: 'vm-3', brandId: 'vb-1', name: 'Polo VI (2017+)', yearStart: 2017),
      ];
    } else if (brandId == 'vb-2') {
      return [
        VehicleModel(id: 'vm-4', brandId: 'vb-2', name: 'Clio IV (2012-2019)', yearStart: 2012, yearEnd: 2019),
        VehicleModel(id: 'vm-5', brandId: 'vb-2', name: 'Megane IV (2016+)', yearStart: 2016),
      ];
    }
    return [
      VehicleModel(id: 'vm-default', brandId: brandId, name: 'Standart Model', yearStart: 2015),
    ];
  }

  static List<VehicleEngineModel> getVehicleEngines(String modelId) {
    return [
      VehicleEngineModel(id: 've-1', modelId: modelId, engineName: '1.6 TDI 105 HP', engineCode: 'CAYC', fuelType: 'Dizel', powerHp: 105),
      VehicleEngineModel(id: 've-2', modelId: modelId, engineName: '1.4 TSI 125 HP', engineCode: 'CZCA', fuelType: 'Benzin', powerHp: 125),
      VehicleEngineModel(id: 've-3', modelId: modelId, engineName: '2.0 TDI 150 HP', engineCode: 'CRBC', fuelType: 'Dizel', powerHp: 150),
    ];
  }

  static List<ProductModel> sampleProducts = [
    ProductModel(
      id: 'p-1',
      title: 'Bosch Ön Fren Balatası Seti - VW Golf VII / Passat B8 / Audi A3',
      slug: 'bosch-on-fren-balatasi-vw-golf-7-passat-b8',
      sku: '0986494660',
      price: 1450.00,
      discountPrice: 1290.00,
      stockQuantity: 25,
      brandId: 'b-1',
      brandName: 'Bosch',
      categoryId: 'cat-1',
      categoryName: 'Fren Sistemi',
      isFeatured: true,
      description: 'Bosch Orijinal Kalite Ön Fren Balata Seti. Aşınma ikaz kablolu. VW Golf VII, Passat B8, Audi A3, Seat Leon 1.6 TDI ve 1.4 TSI araçlar için tam uyumludur.',
      images: [
        'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?w=600',
        'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600',
      ],
      oemCodes: ['5Q0698151', '5Q0698151AJ', '5Q0698151AH', 'BOSCH 0986494660'],
      compatibleEngineIds: ['ve-1', 've-2'],
    ),
    ProductModel(
      id: 'p-2',
      title: 'Mann Filter Yağ Filtresi - VW / Audi / Seat / Skoda 1.6 TDI - 2.0 TDI',
      slug: 'mann-filter-yag-filtresi-16-tdi-20-tdi',
      sku: 'HU7008z',
      price: 320.00,
      discountPrice: 285.00,
      stockQuantity: 150,
      brandId: 'b-6',
      brandName: 'Mann Filter',
      categoryId: 'cat-2',
      categoryName: 'Filtre Grubu',
      isFeatured: true,
      description: 'Mann-Filter Alman Malı Üstün Süzme Kapasiteli Kâğıt Yağ Filtresi. Tüm 1.6 TDI ve 2.0 TDI VAG Grubu motorlar ile %100 uyumlu.',
      images: [
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600',
      ],
      oemCodes: ['03L115562', '03L115562A', 'HU7008z'],
      compatibleEngineIds: ['ve-1', 've-3'],
    ),
    ProductModel(
      id: 'p-3',
      title: 'Sachs Ön Amortisör Sağ/Sol - Renault Clio IV / Captur',
      slug: 'sachs-on-amortisor-renault-clio-4',
      sku: '315354',
      price: 2450.00,
      discountPrice: 2190.00,
      stockQuantity: 12,
      brandId: 'b-3',
      brandName: 'Sachs',
      categoryId: 'cat-4',
      categoryName: 'Süspansiyon & Direksiyon',
      isFeatured: true,
      description: 'Sachs Gazlı Ön Amortisör. Yüksek konfor ve yol tutuşu sağlar. Renault Clio 4 ve Captur modellerine uygundur.',
      images: [
        'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600',
      ],
      oemCodes: ['543021464R', '543028292R', 'SACHS 315354'],
    ),
    ProductModel(
      id: 'p-4',
      title: 'Valeo Debriyaj Seti + Rulmanlı - Renault Megane IV / Clio IV 1.5 dCi',
      slug: 'valeo-debriyaj-seti-renault-15-dci',
      sku: '826818',
      price: 4850.00,
      discountPrice: 4290.00,
      stockQuantity: 8,
      brandId: 'b-2',
      brandName: 'Valeo',
      categoryId: 'cat-6',
      categoryName: 'Debriyaj & Şanzıman',
      isFeatured: true,
      description: 'Valeo Orijinal Ekipman Debriyaj Baskı Balata Seti ve Hidrolik Debriyaj Rulmanı. Renault 1.5 dCi K9K motorlar için.',
      images: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600',
      ],
      oemCodes: ['3000951034', '302050917R', 'VALEO 826818'],
    ),
    ProductModel(
      id: 'p-5',
      title: 'Kale Oto Radyatör Su Radyatörü - Ford Focus III / Kuga 1.6 TDCi',
      slug: 'kale-su-radyatoru-ford-focus-3-16-tdci',
      sku: 'KALE-342100',
      price: 3100.00,
      discountPrice: 2800.00,
      stockQuantity: 10,
      brandId: 'b-7',
      brandName: 'Kale Oto Radyatör',
      categoryId: 'cat-7',
      categoryName: 'Soğutma & Isıtma',
      isFeatured: false,
      description: 'Kale Alüminyum Gövde Yüksek Soğutma Kapasiteli Su Radyatörü. Ford Focus 3 ve C-Max 1.6 TDCi motorlar için.',
      images: [
        'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600',
      ],
      oemCodes: ['1710260', 'AV618005DA', 'KALE 342100'],
    ),
  ];
}
