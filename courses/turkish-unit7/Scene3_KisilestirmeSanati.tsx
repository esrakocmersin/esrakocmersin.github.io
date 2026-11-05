import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene3_KisilestirmeSanati: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 7. ÜNİTE"
      conceptBadge="3. ADIM: KİŞİLEŞTİRME"
      conceptHeading="KİŞİLEŞTİRME SANATI (TEŞHİS)"
      conceptSubheading="İnsana ait özelliklerin doğaya ve cansız varlıklara aktarılması"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="İnsana ait gülme, ağlama, fısıldama gibi duyguları hayvanlara ve doğaya aktarmaya Kişileştirme denir: 'Güneş neşeyle gülümsedi!'"
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
        {/* 1. Üç Canlı Kişileştirme Örneği */}
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
                background: 'linear-gradient(145deg, #20170a 0%, #120c04 100%)',
                border: `1.8px solid ${COLOR_TOKENS.warmYellow}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '2px' }}>☀️</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: COLOR_TOKENS.yellowLight }}>
                GÜNEŞ GÜLÜMSEDİ
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                İnsanın gülme özelliği
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(145deg, #091a26 0%, #050f17 100%)',
                border: `1.8px solid ${COLOR_TOKENS.primaryTurquoise}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '2px' }}>🍃</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: COLOR_TOKENS.turquoiseLight }}>
                RÜZGÂR FISILDADI
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Şarkı ve fısıltı
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(145deg, #180d2c 0%, #0a0514 100%)',
                border: `1.8px solid ${COLOR_TOKENS.softPurple}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '10px 8px',
                textAlign: 'center',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '2px' }}>🌳</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: COLOR_TOKENS.purpleLight }}>
                AĞAÇ HÜZÜNLENDİ
              </div>
              <div style={{ fontSize: '9px', color: COLOR_TOKENS.textSecondary, marginTop: '2px' }}>
                Hüzün duygusu
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 2. Masal ve Fabl Bağı Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🦊"
            tag="MASAL VE FABLLAR"
            title="Konuşan Hayvanlar ve Doğa"
            subtitle="Kargayla tilkinin konuşması birer kişileştirmedir"
            content="Fabllarda tilkinin kurnazca konuşması, karganın gururlanması, denizin öfkeyle kabarması hep kişileştirme sanatıdır. Varlıklar bir insan karakterine bürünür."
            themeColor={COLOR_TOKENS.naturalGreen}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="İnsana ait bir duygu veya eylem hayvan ya da bitkiye aktarılmışsa orada Kişileştirme vardır!"
            subHint="İpucu: Gerçekte gülemeyen, konuşamayan bir varlık insanca davranıyorsa teşhis yapılmıştır!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

