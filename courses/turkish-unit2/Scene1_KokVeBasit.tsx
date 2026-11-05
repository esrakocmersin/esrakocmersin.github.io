import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene1_KokVeBasit: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 2. ÜNİTE"
      conceptBadge="1. ADIM: KÖK VE EK"
      conceptHeading="KÖK VE BASİT KELİMELER"
      conceptSubheading="Bir sözcüğün anlamlı en küçük parçası ve kök hali"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Merhaba kâşifim! Bir sözcüğün anlamlı en küçük parçasına KÖK denir. 'Göz', 'ev', 'balık' birer köktür ve yapım eki almamışsa basittir!"
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
        {/* 1. Kök ve Basit Kelime Akış Şeması */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Kök: Göz',
                subLabel: 'En küçük anlamlı parça',
                color: COLOR_TOKENS.coral,
              },
              {
                number: 2,
                label: 'Çekim Eki: -ler',
                subLabel: 'Gözler (Anlam değişmedi)',
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 3,
                label: '= Basit Kelime',
                subLabel: 'Yeni kelime doğmadı',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Basit Kelime Özellik Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🌱"
            tag="KÖK DURUMU"
            title="Yapım Eki Almamış Sözcükler"
            subtitle="Çoğul veya iyelik eki alsa bile basittir"
            content="'Kitaplar' veya 'evimiz' kelimeleri ek almıştır fakat yeni bir nesneye dönüşmemiştir. Anlam değişmediği için bu sözcükler BASİT kelimedir!"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Çekim eki alan sözcükler anlam değiştirmediği için BASİT kalmaya devam eder!"
            subHint="İpucu: Sözcüğe ek geldiğinde yeni bir eşya veya kavram doğmuyorsa o kelime basittir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

