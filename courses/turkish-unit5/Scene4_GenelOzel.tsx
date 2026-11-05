import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene4_GenelOzel: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 5. ÜNİTE"
      conceptBadge="4. ADIM: GENEL & ÖZEL"
      conceptHeading="GENEL VE ÖZEL İFADELER"
      conceptSubheading="Bütün bir türü kapsayan genel anlam ile tek bir çeşidi anlatan özel anlam"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Bütün bir türü kapsayan kelimeler GENEL, o türün tek bir örneği ise ÖZELDİR: 'Meyve' geneldir, 'Amasya Elması' ise özel bir çeşittir!"
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
        {/* 1. Genelden Özele Sıralama Akışı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Canlı 🌍',
                subLabel: 'En Genel Kapsam',
                color: COLOR_TOKENS.softPurple,
              },
              {
                number: 2,
                label: 'Hayvan 🐾',
                subLabel: 'Orta Kapsam',
                color: COLOR_TOKENS.primaryTurquoise,
              },
              {
                number: 3,
                label: 'Kedi 🐱',
                subLabel: 'En Özel Örnek',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Genel vs Özel Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🎯"
            tag="KAPSAM FARKI"
            title="Genelden Özele / Özelden Genele"
            subtitle="Soru kökünün yönüne dikkat edin"
            content="'Varlık ➔ Bitki ➔ Çiçek ➔ Gül' sıralaması GENELDEN ÖZELE doğru bir dizilimdir. Tersine 'Papatya ➔ Çiçek ➔ Bitki' dersek ÖZELDEN GENELE gitmiş oluruz."
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. 5. Ünite Başarı Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🏆 5. ÜNİTE ŞAMPİYONU"
            ruleText="Mükemmel! Öznel, Nesnel, Neden-Sonuç, Amaç-Sonuç, Karşılaştırma ve Genel-Özel anlamı tamamladın!"
            subHint="Şimdi öğrendiklerini 5. ünite testinde kanıtlama zamanı!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

