import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene4_MecazAnlam: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 1. ÜNİTE"
      conceptBadge="4. ADIM: MECAZ ANLAM"
      conceptHeading="MECAZ ANLAM DÜNYASI"
      conceptSubheading="Sözcüğün gerçek anlamından tamamen uzaklaşarak hayal gücüyle kazandığı yeni anlam"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="excited"
      isCharacterSpeaking={true}
      speechBubbleText="Mecaz anlam; sözcüğün gerçek anlamından sıyrılıp duygularımızı anlatmasıdır. Kalp bardak gibi kırılmaz ama üzülünce kırıldı deriz!"
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
        {/* 1. Karşılaştırma Paneli (Kırılmak & Soğuk) */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🥛',
              badge: 'GERÇEK ANLAM',
              title: 'Bardak Kırıldı',
              explanation: 'Cam yere düştü ve parçalandı. Gözümüzle gördüğümüz somut fiziksel olaydır.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '💔',
              badge: 'MECAZ ANLAM',
              title: 'Kalbi Kırıldı',
              explanation: 'Sözlere üzüldü, gücendi. Kalp fiziksel olarak parçalanmaz; bu mecazdır.',
              themeColor: COLOR_TOKENS.softPurple,
              bgGradient: 'linear-gradient(145deg, #180d2c 0%, #0a0514 100%)',
            }}
          />
        </SlideIn>

        {/* 2. İkinci Örnek Kartı: Soğuk Davranış */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="❄️"
            tag="HAYAL GÜCÜ"
            title="'Bize Çok Soğuk Davrandı'"
            subtitle="Hava sıcaklığı değil, ilgisizlik ve mesafe anlatılır"
            content="Bir insan buzdolabı gibi üşütmez! Ama sevgisiz, mesafeli ve ilgisiz davranırsa 'soğuk' kelimesi mecaz anlam kazanır."
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Mecaz anlam kazanmış bir sözcük, ilk fiziksel anlamıyla tüm bağını koparmıştır!"
            subHint="İpucu: Gerçekte olması imkânsız veya duygusal bir benzetme varsa hemen 'Mecaz' de!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};
