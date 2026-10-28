import 'package:flutter/material.dart';

import '../core/constants/app_colors.dart';

class AppFooter extends StatelessWidget {
  const AppFooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Advantages Bar
        Container(
          color: AppColors.white,
          padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 32),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildAdvantageItem(
                Icons.verified_user_outlined,
                '%100 ORİJİNAL VE GARANTİLİ',
                'Tüm ürünlerimiz üretici garantisindedir.',
              ),
              _buildAdvantageItem(
                Icons.local_shipping_outlined,
                'HIZLI KARGO',
                'Saat 16:00\'ya kadar verilen siparişler aynı gün kargoda.',
              ),
              _buildAdvantageItem(
                Icons.lock_outline,
                'GÜVENLİ ALIŞVERİŞ',
                '256-Bit SSL güvenlik ve 3D Secure ödeme koruması.',
              ),
              _buildAdvantageItem(
                Icons.headset_mic_outlined,
                'UZMAN CANLI DESTEK',
                'Şase numarası ile parçanızı birebir doğrulayalım.',
              ),
            ],
          ),
        ),

        // Main Footer
        Container(
          color: AppColors.primaryNavy,
          padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 32),
          child: Column(
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // Kurumsal
                  _buildFooterColumn(
                    'KURUMSAL',
                    ['Hakkımızda', 'İletişim & Konum', 'Banka Hesaplarımız', 'Müşteri Yorumları', 'Kariyer'],
                  ),
                  // Müşteri Hizmetleri
                  _buildFooterColumn(
                    'MÜŞTERİ HİZMETLERİ',
                    ['Sıkça Sorulan Sorular', 'İade ve Değişim Şartları', 'Gizlilik ve Güvenlik', 'Mesafeli Satış Sözleşmesi', 'Kargo Takip'],
                  ),
                  // Popüler Kategoriler
                  _buildFooterColumn(
                    'POPÜLER PARÇALAR',
                    ['Fren Balatası & Diski', 'Hava & Yağ Filtreleri', 'Amortisör ve Yaylar', 'Debriyaj Setleri', 'Aydınlatma & Far'],
                  ),
                  // İletişim Bilgileri
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'İLETİŞİM',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontSize: 14,
                        ),
                      ),
                      const SizedBox(height: 12),
                      const Text('Müşteri Hizmetleri:', style: TextStyle(color: Colors.grey, fontSize: 12)),
                      const Text('0850 123 45 67', style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold)),
                      const SizedBox(height: 8),
                      const Text('E-Posta:', style: TextStyle(color: Colors.grey, fontSize: 12)),
                      const Text('destek@yedekparca.com.tr', style: TextStyle(color: Colors.white, fontSize: 13)),
                    ],
                  )
                ],
              ),

              const Divider(color: Colors.white24, height: 40),

              // Bottom Copyright & Payment Badges
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '© 2025 YEDEKPARCA.COM.TR - Tüm Hakları Saklıdır.',
                    style: TextStyle(color: Colors.grey, fontSize: 12),
                  ),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(4)),
                        child: const Text('256-Bit SSL', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold)),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(4)),
                        child: const Text('3D SECURE', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold)),
                      ),
                    ],
                  )
                ],
              )
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildAdvantageItem(IconData icon, String title, String subtitle) {
    return Row(
      children: [
        Icon(icon, color: AppColors.primaryRed, size: 36),
        const SizedBox(width: 12),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: AppColors.primaryNavy)),
            const SizedBox(height: 2),
            Text(subtitle, style: const TextStyle(color: AppColors.bodyText, fontSize: 11)),
          ],
        )
      ],
    );
  }

  Widget _buildFooterColumn(String title, List<String> links) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14),
        ),
        const SizedBox(height: 12),
        ...links.map((link) => Padding(
              padding: const EdgeInsets.only(bottom: 6),
              child: InkWell(
                onTap: () {},
                child: Text(
                  link,
                  style: const TextStyle(color: Colors.grey, fontSize: 12),
                ),
              ),
            )),
      ],
    );
  }
}
