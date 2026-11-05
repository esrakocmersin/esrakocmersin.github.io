import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene5_TerimAnlam: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 1. ÜNİTE"
      conceptBadge="5. ADIM: TERİM ANLAM"
      conceptHeading="TERİM ANLAM & ÖZET"
      conceptSubheading="Bilim, sanat, spor veya meslek alanlarına ait özel kavram sözcükleri"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Ve son durağımız: Terim Anlam! Bilim, sanat, spor veya meslek alanlarına ait özel kavramlara terim denir. Nota müzikte, açı matematikte terimdir!"
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
        {/* 1. 4'lü Alan Kartları Izgarası */}
        <SlideIn direction="down" delay={5}>
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
                📐 MATEMATİK
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Üçgen · Açı · Kesir
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
                ⚽ SPOR ALANI
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Penaltı · Korner · Smaç
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.softPurple}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.purpleLight }}>
                🎭 TİYATRO & SANAT
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Perde · Sahne · Kostüm
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
                🎵 MÜZİK ALANI
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Nota · Sol Anahtarı
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 2. Terim vs Mecaz Karşılaştırması */}
        <SlideIn direction="up" delay={20}>
          <ComparisonPanel
            leftItem={{
              icon: '🩺',
              badge: 'TERİM ANLAM',
              title: 'Miyop / Teşhis',
              explanation: '"Doktor miyop teşhisi koydu." — Tıp alanına ait resmi terimdir.',
              themeColor: COLOR_TOKENS.primaryTurquoise,
              bgGradient: 'linear-gradient(145deg, #091a26 0%, #050f17 100%)',
            }}
            rightItem={{
              icon: '👀',
              badge: 'MECAZ ANLAM',
              title: 'Göze Girmek',
              explanation: '"Öğretmenin gözüne girdi." — Beğeni kazanmaktır; terim değil mecazdır!',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
          />
        </SlideIn>

        {/* 3. 1. Ünite Şampiyonluk Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🏆 ŞAMPİYONLUK"
            ruleText="Harfler, Heceler, Gerçek, Mecaz ve Terim Anlamı tamamladın!"
            subHint="Şimdi test sorularını çözerek öğrendiklerini taçlandırma zamanı!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};
