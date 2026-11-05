import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene1_OznelNesnel: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 5. ÜNİTE"
      conceptBadge="1. ADIM: YARGI TÜRLERİ"
      conceptHeading="ÖZNEL VE NESNEL YARGILAR"
      conceptSubheading="Kanıtlanabilen nesnel gerçekler ile kişisel duygu içeren öznel yargılar"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Bugün düşüncelerimizi tartıyoruz! Kanıtlanabilir, herkese göre aynı olan yargılara NESNEL; kişisel zevk ve duygu içerenlere ÖZNEL deriz!"
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
        {/* 1. Nesnel vs Öznel Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🔬',
              badge: 'NESNEL YARGI',
              title: 'Kanıtlanabilir Gerçek',
              explanation: '"Türkiye\'nin başkenti Ankara\'dır." — Herkesçe kabul edilir, kişiden kişiye değişmez.',
              themeColor: COLOR_TOKENS.naturalGreen,
              bgGradient: 'linear-gradient(145deg, #091c18 0%, #05100e 100%)',
            }}
            rightItem={{
              icon: '🎨',
              badge: 'ÖZNEL YARGI',
              title: 'Kişisel Zevk & Yorum',
              explanation: '"En güzel renk mavidir." — Bana göre öyledir ama sana göre kırmızı olabilir. Kanıtlanamaz.',
              themeColor: COLOR_TOKENS.softPurple,
              bgGradient: 'linear-gradient(145deg, #180d2c 0%, #0a0514 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Öznel mi Nesnel mi Test Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="⚖️"
            tag="KONTROL FORMU"
            title="'Bana Göre mi, Herkese Göre mi?'"
            subtitle="Bu soruyla cevabı saniyeler içinde yakala"
            content="'Bu kitap çok sürükleyici.' ➔ Öznel (Bana göre). 'Kitap 120 sayfadan oluşuyor.' ➔ Nesnel (Açıp sayarız, kanıtlarız!)."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Nesnel yargılar bilimsel ve kanıtlanabilir; öznel yargılar ise beğeni ve duygu bildirir!"
            subHint="İpucu: 'Bence, bana göre' diyebiliyorsanız özneldir; deney ve belgeyle ispatlanıyorsa nesneldir!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

