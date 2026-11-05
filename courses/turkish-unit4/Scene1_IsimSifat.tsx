import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene1_IsimSifat: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 4. ÜNİTE"
      conceptBadge="1. ADIM: İSİM & SIFAT"
      conceptHeading="İSİMLER VE SIFATLAR (ÖNAD)"
      conceptSubheading="Varlıkları tanıtan isimler ve onların özelliklerini belirten sıfatlar"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Varlıkları tanıtan sözcüklere İSİM denir. İsimlerin önüne gelip rengini, sayısını veya durumunu belirten sözcüklere ise SIFAT (ÖNAD) deriz!"
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
        {/* 1. İsim vs Sıfat Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🍎',
              badge: 'İSİM (AD)',
              title: 'Elma, Masa, Çocuk',
              explanation: 'Varlıkları ve kavramları karşılayan temel sözcüklerdir. Tek başına bir nesneyi çağrıştırır.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '🎨',
              badge: 'SIFAT (ÖNAD)',
              title: 'Kırmızı Elma 🔴',
              explanation: 'İsmin önüne gelip rengini ("kırmızı"), sayısını ("üç"), durumunu ("çalışkan") niteler.',
              themeColor: COLOR_TOKENS.primaryTurquoise,
              bgGradient: 'linear-gradient(145deg, #091a26 0%, #050f17 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Sıfat Çeşitleri Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="✨"
            tag="ÖNAD ÖRNEKLERİ"
            title="İsme 'Nasıl?' ve 'Kaç?' Soruları"
            subtitle="Nasıl elma? Kırmızı elma! Kaç kalem? Üç kalem!"
            content="Sıfatlar daima isimden ÖNCE gelir! 'Kırmızı elma', 'üç kalem', 'bu çocuk' örneklerinde baştaki tüm kelimeler ismi niteleyen veya belirten birer sıfattır."
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Sıfat (önad), adı üstünde daima ismin ÖNÜNDE yer alır ve ona eşlik eder!"
            subHint="İpucu: İsme 'Nasıl?', 'Kaç?', 'Hangi?' sorularını sorarak sıfatı anında bul!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

