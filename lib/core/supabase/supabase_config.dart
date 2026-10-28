import 'package:supabase_flutter/supabase_flutter.dart';

class SupabaseConfig {
  // Supabase URL & Anon Key (Kullanıcı kendi Supabase projesini bağlayabilir)
  static const String supabaseUrl = 'https://YOUR_SUPABASE_PROJECT_URL.supabase.co';
  static const String supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

  static bool _isInitialized = false;

  static Future<void> initialize() async {
    try {
      if (supabaseUrl.contains('YOUR_SUPABASE')) {
        print('Supabase varsayılan API anahtarları tanımlı değil. Mock/Yerel veri modunda çalışıyor.');
        return;
      }
      await Supabase.initialize(
        url: supabaseUrl,
        anonKey: supabaseAnonKey,
      );
      _isInitialized = true;
    } catch (e) {
      print('Supabase ilklendirme hatası: $e');
    }
  }

  static SupabaseClient? get client {
    if (_isInitialized) {
      return Supabase.instance.client;
    }
    return null;
  }
}
