import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene3_BilesikKelime: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 2. ÜNİTE"
      conceptBadge="3. ADIM: BİLEŞİK KELİME"
      conceptHeading="BİLEŞİK KELİMELER"
      conceptSubheading="İki ayrı kelimenin güçlerini birleştirip yeni bir kavram oluşturması"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="excited"
      isCharacterSpeaking={true}
      speechBubbleText="Bazen iki ayrı kelime el ele tutuşur ve yepyeni tek bir kavramı anlatır. 'Aslan' ile 'ağzı' birleşince 'aslanağzı' çiçeği olur!"
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
        {/* 1. Bileşik Kelime Oluşum Akışı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Aslan 🦁',
                subLabel: 'Ormanların kralı',
                color: COLOR_TOKENS.coral,
              },
              {
                number: 2,
                label: 'Ağzı 👄',
                subLabel: 'Organ adı',
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 3,
                label: '= Aslanağzı 🌸',
                subLabel: 'Güzel bir çiçek!',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Örnek Bileşik Kelimeler Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🤝"
            tag="GÜÇLERİNİ BİRLEŞTİRENLER"
            title="Daima Bitişik Yazılırlar!"
            subtitle="Kuş + Burnu ve Afyon + Karahisar örnekleri"
            content="'Kuş' ve 'burnu' birleşince lezzetli ve şifalı 'kuşburnu' çayı olur ☕. 'Afyon' ve 'karahisar' birleşince güzel şehrimiz 'Afyonkarahisar' oluşur 🏙️. Anlamları kaynaşmıştır."
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Bileşik sözcükler yeni ve tek bir kavramı karşıladığı için daima BİTİŞİK yazılır!"
            subHint="İpucu: Ayrı yazılmaz; 'kuşburnu' ve 'hanımeli' bitişik birer bileşik kelimedir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

