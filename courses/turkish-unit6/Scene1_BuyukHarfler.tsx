import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene1_BuyukHarfler: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 6. ÜNİTE"
      conceptBadge="1. ADIM: BÜYÜK HARFLER"
      conceptHeading="BÜYÜK HARFLER VE ÖZEL İSİMLER"
      conceptSubheading="Cümle başları, kişi, şehir, ülke adları ve kesme işareti kuralları"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Tertemiz yazmanın kurallarını keşfediyoruz: Cümleler daima büyük harfle başlar! Kişi, şehir, ülke adları özel isimdir ve büyük harfle yazılır!"
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
        {/* 1. Özel İsim ve Kesme İşareti Akışı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Ali 👦',
                subLabel: 'Özel İsim (Büyük)',
                color: COLOR_TOKENS.coral,
              },
              {
                number: 2,
                label: "Kesme: 'nin",
                subLabel: "Ali'nin kitabı",
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 3,
                label: 'İstisna: -ler',
                subLabel: 'Türkler (Bitişik!)',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Özel İsim Kuralları Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🏙️"
            tag="YAZIM REHBERİ"
            title="Şehir, Ülke, Cadde ve Kurum Adları"
            subtitle="Türkiye, Ankara, Atatürk Caddesi"
            content="Özel isimlere gelen çekim ekleri kesme işaretiyle ayrılır: 'İstanbul\'a', 'Ayşe\'nin'. Ancak çok önemli kural: Çoğul eki olan '-ler / -lar' özel isimlere gelse bile kesmeyle ayrılmaz: 'Ahmetler', 'Türkler' bitişik yazılır!"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Özel isimlere gelen '-ler / -lar' çoğul eki ve yapım ekleri kesme işaretiyle ASLA ayrılmaz!"
            subHint="İpucu: 'Türkler' ve 'Ankaralı' sözcüklerinde kesme işareti kullanılmaz!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

