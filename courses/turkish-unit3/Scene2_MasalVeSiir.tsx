import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene2_MasalVeSiir: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 3. ÜNİTE"
      conceptBadge="2. ADIM: MASAL VE ŞİİR"
      conceptHeading="MASAL VE ŞİİR DÜNYASI"
      conceptSubheading="Olağanüstü kahramanlar, tekerlemeler, dizeler ve duyguların ritmi"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="explaining"
      isCharacterSpeaking={true}
      speechBubbleText="Masalların büyülü dünyasındayız! 'Bir varmış bir yokmuş' diye başlar, periler ve devler vardır. Şiir ise dizelerden oluşan duyguların ritmidir!"
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
        {/* 1. Masal vs Şiir Karşılaştırması */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🧚',
              badge: 'MASAL',
              title: 'Hayal Gücü & Tekerleme',
              explanation: '"Bir varmış bir yokmuş" ile başlar. Yer ve zaman belirsizdir, kahramanlar olağanüstüdür.',
              themeColor: COLOR_TOKENS.softPurple,
              bgGradient: 'linear-gradient(145deg, #180d2c 0%, #0a0514 100%)',
            }}
            rightItem={{
              icon: '📜',
              badge: 'ŞİİR',
              title: 'Dize & Kıta Ritmi',
              explanation: 'Her satırına "dize (mısra)", 4 dizelik gruplara "kıta (dörtlük)" denir. Yazan kişiye "şair" denir.',
              themeColor: COLOR_TOKENS.warmYellow,
              bgGradient: 'linear-gradient(145deg, #20170a 0%, #120c04 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Şiir Yapısı Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="✍️"
            tag="ŞİİR MİMARİSİ"
            title="Dize, Kıta ve Şair"
            subtitle="Duyguların ahenk ve ritimle buluşması"
            content="Dize: Şiirin her bir satırıdır 📝. Kıta / Dörtlük: Dört dizeden oluşan öbeklerdir. Şair: Şiiri yüreğinden kaleme döken yazardır 💡."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Masallarda yer ve zaman belirsizdir; şiirlerde ise her satıra dize, 4 satıra kıta denir!"
            subHint="İpucu: Masallar tekerleme ile başlar, mutlu sonla biter ve ders verir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

