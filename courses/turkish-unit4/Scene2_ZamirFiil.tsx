import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene2_ZamirFiil: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 4. ÜNİTE"
      conceptBadge="2. ADIM: ZAMİR & FİİL"
      conceptHeading="ZAMİRLER VE FİİLLER (EYLEM)"
      conceptSubheading="İsmin yerine geçen gizli kahramanlar ve iş, oluş bildiren fiiller"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="explaining"
      isCharacterSpeaking={true}
      speechBubbleText="İsmin yerine geçen gizli kahramanlara ZAMİR (adıl) denir: 'Ali geldi' yerine 'O geldi' deriz. İş ve hareket bildiren sözcükler ise FİİLDİR!"
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
        {/* 1. Zamir vs Fiil Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '👤',
              badge: 'ZAMİR (ADIL)',
              title: 'Ben, Sen, O, Biz...',
              explanation: 'İsmin yerine geçer: "Ahmet topu aldı" yerine "O bunu aldı" deriz. İsmin yerini tutar.',
              themeColor: COLOR_TOKENS.softPurple,
              bgGradient: 'linear-gradient(145deg, #180d2c 0%, #0a0514 100%)',
            }}
            rightItem={{
              icon: '🏃',
              badge: 'FİİL (EYLEM)',
              title: 'Koşmak, Okudu, Yazdı',
              explanation: 'İş, oluş, hareket ve zaman bildirir: "koştu", "yazıyor", "gelecek". Cümlenin motorudur.',
              themeColor: COLOR_TOKENS.naturalGreen,
              bgGradient: 'linear-gradient(145deg, #091c18 0%, #05100e 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Fiilsiz Cümle Olamaz Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="⚡"
            tag="CÜMLENİN MOTORU"
            title="Fiil Olmadan Hareket Olmaz!"
            subtitle="-mek / -mak eki alabilen sözcükler eylemdir"
            content="'Zeynep dün akşam ders...' dediğimizde cümle yarım kalır. Sonuna 'çalıştı' fiilini eklediğimiz anda yargı tamamlanır ve anlam kazanır!"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Zamir ismin yerini tutar; fiil ise iş, oluş ve hareket bildirerek cümleyi tamamlar!"
            subHint="İpucu: Sözcüğe '-mek / -mak' mastar eki gelebiliyorsa o sözcük kesinlikle eylemdir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

