import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene3_GercekAnlam: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 1. ÜNİTE"
      conceptBadge="3. ADIM: GERÇEK ANLAM"
      conceptHeading="GERÇEK (TEMEL) ANLAM"
      conceptSubheading="Sözcüğün sözlükteki ilk, asıl ve herkesçe bilinen somut anlamı"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Gerçek anlam, bir kelimeyi duyduğumuzda aklımıza gelen ilk somut görüntüdür. Duyu organlarımızla hissederiz!"
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
        {/* 1. Üçlü Somut Örnek Kartları */}
        <SlideIn direction="down" delay={5}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '8px',
              width: '100%',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(145deg, #1c1014 0%, #100609 100%)',
                border: `1.8px solid ${COLOR_TOKENS.coral}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '2px' }}>🔥</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: COLOR_TOKENS.coralLight }}>
                SICAK ÇORBA
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Fiziksel ısı
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(145deg, #0e1728 0%, #060c18 100%)',
                border: `1.8px solid ${COLOR_TOKENS.vibrantBlue}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '2px' }}>🪨</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: COLOR_TOKENS.blueLight }}>
                AĞIR TAŞ
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Tartılan kütle
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(145deg, #0c1c1a 0%, #050f0e 100%)',
                border: `1.8px solid ${COLOR_TOKENS.naturalGreen}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '2px' }}>🧊</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: COLOR_TOKENS.greenLight }}>
                BUZ ERİDİ
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Sıvılaşma
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 2. Kavram Derinlik Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="📖"
            tag="TANIM KARTI"
            title="Sözlükteki 1 Numaralı Anlam"
            subtitle="Herkes için aynı somut durumu ifade eder"
            content="'Kuşun kanadı kırıldı' cümlesinde kırılmak somut olarak parçalanmaktır. 5 duyu organımızla algılayabildiğimiz fiziksel gerçekliktir."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={false}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Gerçek anlam; sözlük kapağını açtığınızda kelimenin karşısında yazan 1. maddedir!"
            subHint="İpucu: Aklına ilk gelen fiziksel somut görüntü gerçek anlamın ta kendisidir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};
