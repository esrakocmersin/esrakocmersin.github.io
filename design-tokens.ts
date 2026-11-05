/**
 * ============================================================================
 * MASTER VISUAL STYLE PROFILE - DESIGN TOKENS (PIXAR 3D 4:5 FORMAT)
 * Cinematic 3D Pixar Studio – Rich Infographic Focus
 * ============================================================================
 */

export const VIDEO_CONFIG = {
  // 4*5 Dikey Sinematik Pixar Formatı (4:5 Aspect Ratio)
  width: 800,
  height: 1000,
  aspectRatio: '4:5' as const,
  fps: 30,
  demoDurationInSeconds: 60,
  demoDurationInFrames: 60 * 30, // 1800 frames

  // Görsel Dağılım: Baykuş ve Altyazı kaldırıldı; alan bütünüyle Pixar 3D ve İnfografiğe verildi
  distribution: {
    titleEmphasis: 0.15, // %15: Başlık ve Hedef Kavram (150px)
    infographicAndScene: 0.85, // %85: Pixar 3D Sahne ve Eğitici İnfografikler (850px)
  },

  // 4:5 Güvenli Alanlar
  safeArea: {
    top: 40,
    bottom: 40,
    left: 30,
    right: 30,
  },
} as const;

export const COLOR_TOKENS = {
  // Sinematik Pixar 3D Renk Paleti
  primaryTurquoise: '#06b6d4',
  turquoiseLight: '#67e8f9',
  turquoiseDark: '#0891b2',

  vibrantBlue: '#2563eb',
  blueLight: '#60a5fa',
  blueDark: '#1d4ed8',

  warmYellow: '#f59e0b',
  yellowLight: '#fef08a',
  yellowDark: '#d97706',

  coral: '#f43f5e',
  coralLight: '#fda4af',
  coralDark: '#be123c',

  softPurple: '#8b5cf6',
  purpleLight: '#c084fc',
  purpleDark: '#6d28d9',

  naturalGreen: '#10b981',
  greenLight: '#86efac',
  greenDark: '#047857',

  // 3D Pixar Cam Yüzeyler ve Aydınlatma
  bgDeepNavy: '#070b14',
  bgCardDark: 'rgba(11, 17, 32, 0.88)',
  bgGlass: 'rgba(255, 255, 255, 0.12)',
  bgGlassBorder: 'rgba(255, 255, 255, 0.22)',

  // Tipografi Renkleri
  textPrimary: '#ffffff',
  textSecondary: '#e2e8f0',
  textMuted: '#94a3b8',
  textHighlight: '#fef08a',
} as const;

export const TYPOGRAPHY_TOKENS = {
  fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif",
  fontMono: "'Consolas', 'Courier New', monospace",

  sizes: {
    displayHeader: '30px',
    sectionHeader: '24px',
    cardTitle: '20px',
    bodyLarge: '17px',
    bodyRegular: '15px',
    badgeText: '12px',
    captionText: '11px',
  },

  weights: {
    regular: 400,
    medium: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },

  lineHeights: {
    tight: 1.15,
    snug: 1.28,
    relaxed: 1.45,
  },
} as const;

export const SHADOW_TOKENS = {
  card3D: '0 16px 36px -6px rgba(0, 0, 0, 0.75), 0 0 15px rgba(255, 255, 255, 0.1) inset',
  floating: '0 20px 45px -8px rgba(0, 0, 0, 0.8)',
  glowTurquoise: '0 0 24px rgba(6, 182, 212, 0.7)',
  glowYellow: '0 0 24px rgba(245, 158, 11, 0.7)',
  glowGreen: '0 0 24px rgba(16, 185, 129, 0.7)',
  glowCoral: '0 0 24px rgba(244, 63, 94, 0.7)',
  glowPurple: '0 0 24px rgba(139, 92, 246, 0.7)',
} as const;

export const RADIUS_TOKENS = {
  sm: '8px',
  md: '14px',
  lg: '20px',
  xl: '28px',
  full: '9999px',
} as const;
