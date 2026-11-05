import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene1_GorselOkuma: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 7. ÜNİTE"
      conceptBadge="1. ADIM: GÖRSEL OKUMA"
      conceptHeading="GÖRSEL OKUMA VE GRAFİKLER"
      conceptSubheading="Resimlerin, simgelerin, grafiklerin ve işaretlerin dilini çözmek"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Yazıların yanında resimler, fotoğraflar ve grafikler de konuşur! Tabloları okumak ve simgeleri anlamak Görsel Okumadır!"
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
        {/* 1. Görsel Okuma Unsurları Akışı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Grafik & Tablo 📊',
                subLabel: 'Veri Yorumlama',
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 2,
                label: 'Levhalar 🛑',
                subLabel: 'Evrensel Simgeler',
                color: COLOR_TOKENS.coral,
              },
              {
                number: 3,
                label: 'Karikatür 🎨',
                subLabel: 'Ana Fikri Yakalama',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Dikkatli Gözlemci Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🔍"
            tag="GÖZLEM VE YORUM"
            title="Ayrıntılardan Duyguyu Yakala!"
            subtitle="Resimdeki ipuçları ana fikri verir"
            content="Bir fotoğraftaki kahramanın yüz ifadesi, duruşu veya arka plandaki hava durumu metindeki gizli duyguyu ele verir. Grafiklerde ise sütun boyları karşılaştırma yapmayı sağlar."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Görsel okuma; harfler olmadan da çizgi, renk ve sembollerle bilgiye ulaşma sanatıdır!"
            subHint="İpucu: Sınavlarda grafik sorularında en yüksek ve en düşük değerlere dikkatle odaklan!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

