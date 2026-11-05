import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene4_NesneVeDuzen: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 4. ÜNİTE"
      conceptBadge="4. ADIM: NESNE & DÜZEN"
      conceptHeading="NESNE VE KURALLI CÜMLE DÜZENİ"
      conceptSubheading="Özne + Nesne/Tümleç + Yüklem formülü ile kurallı cümleler"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Yapılan işten etkilenen varlığa NESNE denir. Yükleme 'Neyi?', 'Kimi?' veya 'Ne?' diye sorduğumuzda nesneyi hemen buluruz!"
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
        {/* 1. Kurallı Cümle Düzeni Akışı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'ÖZNE (Kim?)',
                subLabel: 'Zeynep',
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 2,
                label: 'NESNE (Neyi?)',
                subLabel: 'Kitabı',
                color: COLOR_TOKENS.warmYellow,
              },
              {
                number: 3,
                label: 'YÜKLEM (Son)',
                subLabel: 'Okudu',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Kurallı vs Devrik Cümle Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="📐"
            tag="CÜMLE DÜZENİ"
            title="Kurallı Cümlede Yüklem Sondadır!"
            subtitle="Devrik cümlede ise yüklem başa veya ortaya kaçar"
            content="Kurallı Cümle: 'Öğrenciler bahçede oynadı.' (Yüklem sonda ✔️). Devrik Cümle: 'Oynadı öğrenciler bahçede.' (Yüklem başta ⚠️). Dilimizin en doğal akışı kurallı dizilimdir."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. 4. Ünite Başarı Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🏆 4. ÜNİTE ŞAMPİYONU"
            ruleText="Harika! İsimler, Sıfatlar, Zamirler, Fiiller, Özne, Yüklem ve Nesneyi ustalıkla öğrendin!"
            subHint="Şimdi sıra 4. ünite testinde! Başarılar dilerim genç kâşifim!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

