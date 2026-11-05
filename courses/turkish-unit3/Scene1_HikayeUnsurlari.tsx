import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene1_HikayeUnsurlari: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 3. ÜNİTE"
      conceptBadge="1. ADIM: HİKÂYE UNSURLARI"
      conceptHeading="HİKÂYENİN 4 TEMEL TAŞI"
      conceptSubheading="Olay, Yer, Zaman ve Kişiler / Kahramanlar"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Merhaba kâşifim! Her hikâyenin gizli 4 anahtarı vardır: Yaşanan olay, yer, zaman ve kahramanlar. Bu dördünü bulduğunda hikâyeyi çözmüş olursun!"
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
        {/* 1. 4'lü Hikâye Unsurları Izgarası */}
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
                1. OLAY (Ne Oldu?)
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Yaşanan Macera & Durum
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
                2. YER / MEKÂN (Nerede?)
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Orman, Okul, Köy
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
                3. ZAMAN (Ne Zaman?)
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Sabah, Bir Sonbahar Günü
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
                4. KİŞİLER (Kimler?)
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                Kahramanlar & Varlıklar
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 2. Hikâye Haritası Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🗺️"
            tag="HİKÂYE HARİTASI"
            title="Metin Analizinde 4 Soru"
            subtitle="Kim? Nerede? Ne zaman? Ne yaşandı?"
            content="Bir metni okurken bu 4 sorunun yanıtını bulursanız hikâye haritasını kusursuz şekilde çıkarmış olursunuz. Olayların akışını anlamak çok kolaylaşır!"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Her hikâye; Olay, Yer, Zaman ve Kişiler olmak üzere 4 temel unsur üzerinde yükselir!"
            subHint="İpucu: Sorularda bu 4 unsurdan birinin eksikliği sorulabilir, dikkatle tara!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

