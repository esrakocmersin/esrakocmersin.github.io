import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene2_TuremisKelime: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 2. ÜNİTE"
      conceptBadge="2. ADIM: TÜREMİŞ"
      conceptHeading="TÜREMİŞ VE YAPIM EKLERİ"
      conceptSubheading="Kökten yepyeni anlamlı bir sözcüğün doğuşu (-lik, -ci, -li, -siz)"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="explaining"
      isCharacterSpeaking={true}
      speechBubbleText="Geldik türemiş kelimelere! Bir köke yapım eki eklenince yepyeni bir varlık doğar: 'Göz' görme organımızken 'Gözlük' bir eşyadır!"
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
        {/* 1. Kök vs Türemiş Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '👁️',
              badge: 'KÖK (BASİT)',
              title: 'Göz',
              explanation: 'İnsan ve hayvanların görme organıdır. Yalın kök durumundadır.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '👓',
              badge: 'TÜREMİŞ KELİME',
              title: 'Göz + lük = Gözlük',
              explanation: 'Daha net görmemizi sağlayan bir eşyadır. "-lük" yapım eki yeni kelime türetmiştir!',
              themeColor: COLOR_TOKENS.primaryTurquoise,
              bgGradient: 'linear-gradient(145deg, #091a26 0%, #050f17 100%)',
            }}
          />
        </SlideIn>

        {/* 2. 4'lü En Çok Kullanılan Yapım Ekleri Izgarası */}
        <SlideIn direction="up" delay={20}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              width: '100%',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.primaryTurquoise}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.turquoiseLight }}>
                -LİK EKİ
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Tuz ➔ Tuzluk
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.warmYellow}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.yellowLight }}>
                -Cİ EKİ (Meslek)
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Simit ➔ Simitçi
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.naturalGreen}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.greenLight }}>
                -Lİ EKİ (Sahiplik)
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Güneş ➔ Güneşli
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.coral}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.coralLight }}>
                -SİZ EKİ (Yokluk)
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Ev ➔ Evsiz
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Yapım eki, adı üstünde kelimeden YENİ bir anlam ve varlık YAPAR!"
            subHint="İpucu: Köke gelen ek yeni bir nesne veya meslek oluşturuyorsa türemiştir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

