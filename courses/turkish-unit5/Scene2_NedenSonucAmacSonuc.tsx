import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene2_NedenSonucAmacSonuc: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 5. ÜNİTE"
      conceptBadge="2. ADIM: SEBEP & AMAÇ"
      conceptHeading="NEDEN-SONUÇ VE AMAÇ-SONUÇ"
      conceptSubheading="Hangi sebeple yapıldı? Hangi amaç uğruna yola çıkıldı?"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="explaining"
      isCharacterSpeaking={true}
      speechBubbleText="Eylemin gerekçesini ararken 'Neden?' ve 'Hangi amaçla?' sorularını sorarız: 'Kar yağdığı için tatil oldu' nedendir; 'Kazanmak için çalıştı' amaçtır!"
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
        {/* 1. Neden-Sonuç vs Amaç-Sonuç Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🌧️',
              badge: 'NEDEN-SONUÇ',
              title: 'Gerekçe & Sonuç',
              explanation: '"Kar yağdığı için okullar tatil edildi." — Kar yağması sebep, tatil edilmesi sonuçtur.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '🎯',
              badge: 'AMAÇ-SONUÇ',
              title: 'Hedef & Eylem',
              explanation: '"Sınavı kazanmak amacıyla çok çalıştı." — Kazanmak bir hedeftir, henüz gerçekleşmemiştir.',
              themeColor: COLOR_TOKENS.warmYellow,
              bgGradient: 'linear-gradient(145deg, #20170a 0%, #120c04 100%)',
            }}
          />
        </SlideIn>

        {/* 2. 'Amacıyla' Test Formülü Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🔑"
            tag="AYIRT ETME FORMÜLÜ"
            title="Cümleye '-mak Amacıyla' Yerleştir!"
            subtitle="Amaç-Sonuç cümlelerinde '-için' yerine '-amacıyla' cuk oturur"
            content="'İlaç almak için eczaneye gitti.' ➔ İlaç almak amacıyla gitti (Tam uydu ➔ Amaç-Sonuç!). 'Yağmur yağdığı için ıslandı.' ➔ Yağmur yağdığı amacıyla ıslandı (Anlamsız oldu ➔ Neden-Sonuç!)."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Neden-sonuçta sebep önceden gerçekleşmiştir; amaç-sonuçta ise henüz gerçekleşmemiş bir hedef vardır!"
            subHint="İpucu: '-mak amacıyla' formülüyle ikisini birbirine asla karıştırmazsın!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

