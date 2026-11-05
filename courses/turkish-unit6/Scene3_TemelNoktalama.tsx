import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene3_TemelNoktalama: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 6. ÜNİTE"
      conceptBadge="3. ADIM: TEMEL NOKTALAMA"
      conceptHeading="NOKTA, VİRGÜL VE İKİ NOKTA"
      conceptSubheading="Cümle bitişi, eş görevli sözcükleri ayırma ve açıklama işaretleri"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Tamamlanan cümlenin sonuna Nokta konur. Ayrıca saat ile dakikanın arasına tek nokta konur! Virgül ise peş peşe gelen eş görevli kelimeleri ayırır."
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
        {/* 1. Üç Temel İşaret Kartları */}
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
                background: 'linear-gradient(145deg, #101c2e 0%, #08101e 100%)',
                border: `1.8px solid ${COLOR_TOKENS.vibrantBlue}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 900, color: COLOR_TOKENS.blueLight }}>.</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                NOKTA
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Cümle sonu & Saat (09.30)
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
              <div style={{ fontSize: '24px', fontWeight: 900, color: COLOR_TOKENS.greenLight }}>,</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                VİRGÜL
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Elma, armut, muz...
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(145deg, #20170a 0%, #120c04 100%)',
                border: `1.8px solid ${COLOR_TOKENS.warmYellow}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 900, color: COLOR_TOKENS.yellowLight }}>:</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                İKİ NOKTA
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Açıklama & Konuşma
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 2. Saat Yazımında Kritik Hata Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="⏰"
            tag="ÖNEMLİ MEB UYARISI"
            title="Saatler Arasına İki Nokta (:) Konmaz!"
            subtitle="Doğrusu: 09.30 · Yanlış: 09:30"
            content="Dijital saatlerde iki nokta üst üste görebilirsiniz; ancak Türk Dil Kurumu kuralına göre Türkçe yazımda saat ile dakika arasına YALNIZCA TEK NOKTA konur: 'Dersimiz 08.40'ta başlıyor.'"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Saat ve dakikaların arasına tek nokta konur; iki nokta konması yazım yanlışıdır!"
            subHint="İpucu: Virgül ise eş görevli sözcükleri ayırır, cümlenin nefes alma durağıdır!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

