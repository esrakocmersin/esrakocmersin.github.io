import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene2_Heceler: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 1. ÜNİTE"
      conceptBadge="2. ADIM: HECELER"
      conceptHeading="HECE TRENİ VE SATIR SONU"
      conceptSubheading="Ağzımızın tek bir hareketiyle çıkan ses birliği ve bölme kuralları"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="explaining"
      isCharacterSpeaking={true}
      speechBubbleText="Hece trenimize binelim! Bir sözcükte kaç hece olduğunu bulmanın en sihirli yolu: O sözcükteki ünlü harfleri saymaktır!"
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
        {/* 1. Heceleme Adım Diyagramı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Cum-hu',
                subLabel: '2 Ünlü (u, u)',
                color: COLOR_TOKENS.coral,
              },
              {
                number: 2,
                label: 'ri-yet',
                subLabel: '2 Ünlü (i, e)',
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 3,
                label: '= 4 Hece',
                subLabel: '4 ünlü = 4 hece!',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Satır Sonu Bölme Kural Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="✂️"
            tag="BÖLME KURALI"
            title="Tek Harf Asla Yalnız Bırakılamaz!"
            subtitle="Satır sonuna sığmayan sözcükleri hecelerinden böleriz"
            content="Yanlış: a- / raba ❌. Doğru: ara- / ba veya ar- / aba ✔️. Özel isimlerde ise satır sonuna kesme (') gelirse kısa çizgi (-) konmaz!"
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Satır sonunda veya satır başında asla tek bir harf yalnız bırakılamaz!"
            subHint="İpucu: 'Ankara'dan' satır sonunda: Ankara' / dan şeklinde kesmeyle ayrılır!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};
