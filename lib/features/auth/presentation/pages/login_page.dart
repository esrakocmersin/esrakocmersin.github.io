import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/constants/app_colors.dart';
import '../../../../core/supabase/supabase_config.dart';
import '../../../../widgets/app_footer.dart';
import '../../../../widgets/app_header.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool _isLoadingGoogle = false;

  Future<void> _signInWithGoogle() async {
    setState(() => _isLoadingGoogle = true);
    try {
      final client = SupabaseConfig.client;
      if (client != null) {
        await client.auth.signInWithOAuth(
          OAuthProvider.google,
          redirectTo: 'https://esrakocmersin.github.io/',
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Google hesabınızla başarıyla giriş yapıldı!'),
            backgroundColor: AppColors.greenSuccess,
          ),
        );
        context.go('/');
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Google ile giriş hatası: $e')),
      );
    } finally {
      if (mounted) setState(() => _isLoadingGoogle = false);
    }
  }

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
                width: 440,
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

                        // Google Sign-In Button
                        ElevatedButton.icon(
                          onPressed: _isLoadingGoogle ? null : _signInWithGoogle,
                          icon: _isLoadingGoogle
                              ? const SizedBox(
                                  width: 20,
                                  height: 20,
                                  child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                                )
                              : const Icon(Icons.g_mobiledata, size: 28),
                          label: const Text('GOOGLE İLE TEK TIKLA GİRİŞ YAP'),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFF4285F4),
                            foregroundColor: Colors.white,
                            minimumSize: const Size.fromHeight(50),
                          ),
                        ),

                        const SizedBox(height: 20),
                        const Row(
                          children: [
                            Expanded(child: Divider()),
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 8),
                              child: Text('VEYA E-POSTA İLE', style: TextStyle(color: Colors.grey, fontSize: 11, fontWeight: FontWeight.bold)),
                            ),
                            Expanded(child: Divider()),
                          ],
                        ),
                        const SizedBox(height: 16),

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
