import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene3_Karsilastirma: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 5. ÜNİTE"
      conceptBadge="3. ADIM: KARŞILAŞTIRMA"
      conceptHeading="KARŞILAŞTIRMA İFADELERİ"
      conceptSubheading="En az iki farklı varlık, olay ya da durumu birbiriyle kıyaslayan ifadeler"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="En az iki varlığı kıyaslayan cümlelere Karşılaştırma denir: 'Daha, en, göre, kadar' anahtar kelimeleriyle farkı hemen buluruz!"
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
        {/* 1. Kıyaslama Örnek Akışı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Zürafa 🦒',
                subLabel: '1. Varlık',
                color: COLOR_TOKENS.warmYellow,
              },
              {
                number: 2,
                label: '...Daha Uzun',
                subLabel: 'Kıyaslama İfadesi',
                color: COLOR_TOKENS.primaryTurquoise,
              },
              {
                number: 3,
                label: 'Fil 🐘',
                subLabel: '2. Varlık',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Anahtar Sözcükler Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="⚖️"
            tag="SİHİRLİ ANAHTARLAR"
            title="'Daha, En, Göre, Kadar, Benzer'"
            subtitle="Bu kelimeler varsa karşılaştırma vardır"
            content="'Sınıfın EN çalışkanı Ayşe\'dir.' ➔ Ayşe diğer tüm öğrencilerle kıyaslanmıştır. 'Bugün düne GÖRE daha serin.' ➔ İki farklı gün hava durumu bakımından karşılaştırılmıştır."
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Karşılaştırma yapılabilmesi için en az 2 durumun benzer veya farklı yönlerinin kıyaslanması şarttır!"
            subHint="İpucu: 'Daha' ve 'en' kelimeleri karşılaştırma sorularının en büyük ipucudur!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

