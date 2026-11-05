import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene2_BenzetmeSanati: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 7. ÜNİTE"
      conceptBadge="2. ADIM: BENZETME"
      conceptHeading="BENZETME SANATI (TEŞBİH)"
      conceptSubheading="Zayıf olanın güçlü olana benzetilmesi ve 'gibi' anahtar sözcüğü"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="explaining"
      isCharacterSpeaking={true}
      speechBubbleText="Söz sanatları dilimize zarafet katar! İlk sanatımız Benzetme: Zayıf olan güçlü olana benzetilir. En büyük sihirli kelimemiz ise 'GİBİ' sözcüğüdür!"
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
        {/* 1. Benzetme Örnekleri Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🦁',
              badge: 'GÜÇLÜ ÖZELLİK',
              title: 'Aslan Gibi Cesur',
              explanation: '"Aslan gibi cesur askerlerimiz." — Cesaret bakımından güçlü olan aslana benzetilmiştir.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '☁️',
              badge: 'YUMUŞAKLIK',
              title: 'Pamuk Gibi Ekmek',
              explanation: '"Pamuk gibi yumuşacık ekmek." — Yumuşaklık yönünden pamuğa benzetilmiştir.',
              themeColor: COLOR_TOKENS.warmYellow,
              bgGradient: 'linear-gradient(145deg, #20170a 0%, #120c04 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Benzetmenin 4 Unsuru Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="💎"
            tag="TEŞBİH FORMÜLÜ"
            title="'İnci Gibi Parlayan Dişler'"
            subtitle="Benzeyen, Benzetilen, Benzetme Yönü, Benzetme Edatı"
            content="Benzeyen: Dişler ➔ Benzetilen: İnci ➔ Benzetme Yönü: Parlaklık ➔ Benzetme Edatı: 'Gibi'. 'Gibi' ve 'kadar' sözcükleri benzetmenin en belirgin işaretleridir."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Benzetme sanatında zayıf olan güçlü olana benzetilir ve çoğunlukla 'gibi' edatı kullanılır!"
            subHint="İpucu: Cümlede 'aslan gibi, inci gibi, buz gibi' kalıplarını gördüğünde Benzetmeyi işaretle!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

