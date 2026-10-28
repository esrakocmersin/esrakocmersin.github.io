import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../widgets/app_footer.dart';
import '../../../../widgets/app_header.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const AppHeader(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            const SizedBox(height: 40),
            Center(
              child: SizedBox(
                width: 420,
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(32),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'MÜŞTERİ / ADMIN GİRİŞİ',
                          style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppColors.primaryNavy),
                        ),
                        const SizedBox(height: 8),
                        const Text('Siparişlerinizi ve sepetinizi yönetmek için giriş yapın.',
                            style: TextStyle(color: AppColors.bodyText, fontSize: 13)),
                        const SizedBox(height: 24),
                        const TextField(
                          decoration: InputDecoration(
                            labelText: 'E-Posta Adresi',
                            prefixIcon: Icon(Icons.email_outlined),
                          ),
                        ),
                        const SizedBox(height: 16),
                        const TextField(
                          obscureText: true,
                          decoration: InputDecoration(
                            labelText: 'Şifre',
                            prefixIcon: Icon(Icons.lock_outline),
                          ),
                        ),
                        const SizedBox(height: 24),
                        ElevatedButton(
                          onPressed: () {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Başarıyla giriş yapıldı.')),
                            );
                            context.go('/');
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.primaryNavy,
                            minimumSize: const Size.fromHeight(50),
                          ),
                          child: const Text('GİRİŞ YAP'),
                        ),
                        const SizedBox(height: 12),
                        Center(
                          child: TextButton(
                            onPressed: () => context.go('/admin'),
                            child: const Text('Admin Paneline Git', style: TextStyle(color: AppColors.primaryRed)),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 60),
            const AppFooter(),
          ],
        ),
      ),
    );
  }
}
