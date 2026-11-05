import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene1_Harfler: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 1. ÜNİTE"
      conceptBadge="1. ADIM: HARFLER"
      conceptHeading="ALFABEMİZ VE 29 HARF"
      conceptSubheading="8 Ünlü (Sesli) ve 21 Ünsüz (Sessiz) Harfin Büyülü Dünyası"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Merhaba kâşifim! Ben Bilge Baykuş. Bugün Türkçemizin temel taşı olan 29 harfi ve ses kurallarını keşfedeceğiz!"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          alignItems: 'center',
        }}
      >
        {/* 1. Üst 3D Dağılım Kartı */}
        <SlideIn direction="down" delay={5}>
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(7, 11, 20, 0.88) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.primaryTurquoise}`,
                borderRadius: RADIUS_TOKENS.lg,
                padding: '8px 12px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 900, color: COLOR_TOKENS.turquoiseLight, lineHeight: 1 }}>
                8
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                ÜNLÜ (SESLİ) HARF
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Tek başına okunabilen sesler
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(7, 11, 20, 0.88) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.vibrantBlue}`,
                borderRadius: RADIUS_TOKENS.lg,
                padding: '8px 12px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 900, color: COLOR_TOKENS.blueLight, lineHeight: 1 }}>
                21
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                ÜNSÜZ (SESSİZ) HARF
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Ünlüler yardımıyla seslenenler
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 2. Kalın ve İnce Ünlüler Karşılaştırma Paneli */}
        <SlideIn direction="up" delay={20}>
          <ComparisonPanel
            leftItem={{
              icon: '🔊',
              badge: 'KALIN ÜNLÜLER',
              title: 'A · I · O · U',
              explanation: 'Gırtlaktan tok ve dolgun çıkan harflerdir. Örnek: "Okul", "Bulut", "Balık".',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '🎶',
              badge: 'İNCE ÜNLÜLER',
              title: 'E · İ · Ö · Ü',
              explanation: 'Ağzın ön kısmından zarifçe söylenen harflerdir. Örnek: "Güneş", "Çiçek", "Öğrenci".',
              themeColor: COLOR_TOKENS.primaryTurquoise,
              bgGradient: 'linear-gradient(145deg, #091a26 0%, #050f17 100%)',
            }}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Türkçede her hecede mutlaka ama mutlaka BİR TANE ünlü (sesli) harf bulunur!"
            subHint="İpucu: Bir sözcükte kaç ünlü harf varsa, o sözcük tam o kadar hecelidir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};
