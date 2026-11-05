import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene3_YuklemOzne: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 4. ÜNİTE"
      conceptBadge="3. ADIM: YÜKLEM & ÖZNE"
      conceptHeading="CÜMLENİN İKİ BÜYÜK DİREĞİ"
      conceptSubheading="İşi ve yargıyı bildiren Yüklem ile işi yapan Özne"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Bir cümleyi ayakta tutan iki büyük direk vardır: İşi bildiren YÜKLEM ve o işi yapan ÖZNE! Yükleme 'Kim?' veya 'Ne?' sorusu özneyi buldurur!"
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
        {/* 1. Özne ve Yüklem Akış Şeması */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Zeynep 👧',
                subLabel: 'ÖZNE (Yapan Kim?)',
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 2,
                label: 'Kitap 📖',
                subLabel: 'Etkilenen Nesne',
                color: COLOR_TOKENS.warmYellow,
              },
              {
                number: 3,
                label: 'Okudu 👓',
                subLabel: 'YÜKLEM (Temel Direk)',
                color: COLOR_TOKENS.coral,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Cümlenin Ögelerini Bulma Formülü */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🏛️"
            tag="TEMEL ÖGELER"
            title="Önce Yüklem, Sonra Özne Bulunur!"
            subtitle="Yüklem genellikle cümlenin en sonundadır"
            content="'Zeynep kitap okudu.' cümlesinde: Okudu ➔ YÜKLEM. Okuyan kim? ➔ Zeynep (ÖZNE). Yüklem cümlenin kaptanıdır; bütün sorular önce yükleme sorulur!"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Ögeleri bulurken daima ilk olarak YÜKLEM tespit edilir, ardından 'Kim?' ile ÖZNE bulunur!"
            subHint="İpucu: Yüklem olmaksızın özne veya diğer ögeler bulunamaz!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

