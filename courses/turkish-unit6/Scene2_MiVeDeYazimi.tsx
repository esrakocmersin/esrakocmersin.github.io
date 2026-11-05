import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene2_MiVeDeYazimi: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 6. ÜNİTE"
      conceptBadge="2. ADIM: Mİ VE DE YAZIMI"
      conceptHeading="SORU EKİ 'Mİ' VE BAĞLAÇ 'DE'"
      conceptSubheading="Daima ayrı yazılan soru eki ile cümleden çıkınca anlamı bozulmayan bağlaç"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="explaining"
      isCharacterSpeaking={true}
      speechBubbleText="İki altın kural: Soru eki olan 'mı, mi, mu, mü' daima AYRI yazılır! Bağlaç olan 'de/da' ise cümleden çıkınca anlam bozulmazsa ayrı yazılır!"
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
        {/* 1. Soru Eki vs Bağlaç Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '❓',
              badge: 'SORU EKİ (AYRI)',
              title: '-mı / -mi / -mu / -mü',
              explanation: '"Okula geldin mi?", "Beni dinler misin?" — Kendinden önceki sözcükten daima ayrı yazılır.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '🔗',
              badge: 'BAĞLAÇ OLAN DE (AYRI)',
              title: '-de / -da Bağlacı',
              explanation: '"Sen de bizimle gel." — "de"yi cümleden çıkarınca anlam bozulmaz: "Sen bizimle gel." Ayrı yazılır!',
              themeColor: COLOR_TOKENS.naturalGreen,
              bgGradient: 'linear-gradient(145deg, #091c18 0%, #05100e 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Bulunma Eki vs Bağlaç Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🏠"
            tag="BULUNMA HALİ"
            title="Bulunma Eki '-de' Bitişik Yazılır!"
            subtitle="Nerede? sorusuna cevap veriyorsa ve çıkınca anlam bozuluyorsa"
            content="'Kalemim evde kaldı.' ➔ 'de'yi çıkarırsak: 'Kalemim ev kaldı' (Anlam bozuldu!). Demek ki yer bildiriyor, ektir ve bitişik yazılmalıdır!"
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Cümleden '-de'yi attığında anlam bozulmuyorsa bağlaçtır (ayrı); bozuluyorsa ektir (bitişik)!"
            subHint="İpucu: Soru eki olan 'mi' ise hiçbir zaman bitişik yazılmaz, daima bağımsızdır!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

