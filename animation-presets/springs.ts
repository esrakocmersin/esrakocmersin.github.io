import { spring } from 'remotion';

/**
 * Fiziksel Yay (Spring) ve Hareket Animasyon Ön Ayarları
 */
export const SPRING_PRESETS = {
  // Nazik ve yumuşak çocuk dostu giriş
  gentleBounce: (fps: number, frame: number, delay = 0) => {
    return spring({
      fps,
      frame: Math.max(0, frame - delay),
      config: {
        damping: 12,
        mass: 0.6,
        stiffness: 110,
      },
    });
  },

  // Dinamik ve dikkat çekici kart açılışı
  snappyPop: (fps: number, frame: number, delay = 0) => {
    return spring({
      fps,
      frame: Math.max(0, frame - delay),
      config: {
        damping: 9,
        mass: 0.4,
        stiffness: 160,
      },
    });
  },

  // Sinematik yavaş ve akıcı kamera yaklaşımı
  cinematicPan: (fps: number, frame: number, delay = 0) => {
    return spring({
      fps,
      frame: Math.max(0, frame - delay),
      config: {
        damping: 24,
        mass: 1.2,
        stiffness: 70,
      },
    });
  },
};

