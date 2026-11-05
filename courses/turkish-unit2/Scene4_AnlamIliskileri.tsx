import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene4_AnlamIliskileri: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 2. ÜNİTE"
      conceptBadge="4. ADIM: ANLAM İLİŞKİLERİ"
      conceptHeading="EŞ, ZIT VE SESTEŞ SÖZCÜKLER"
      conceptSubheading="Kelimelerin dostlukları: Aynı anlam, karşıt anlam ve sesteş sözcükler"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Kelimelerin dostluklarına bakalım: Yazılışı farklı anlamı aynı olan eş anlamlılar, birbirinin tersi zıt anlamlılar ve yazılışı aynı anlamı farklı sesteşler!"
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
        {/* 1. Eş ve Zıt Anlam Karşılaştırması */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🤝',
              badge: 'EŞ ANLAMLI',
              title: 'Al = Kırmızı 🔴',
              explanation: 'Yazılışları farklı ama anlamları aynıdır. Mektep = Okul, Muallim = Öğretmen.',
              themeColor: COLOR_TOKENS.naturalGreen,
              bgGradient: 'linear-gradient(145deg, #091c18 0%, #05100e 100%)',
            }}
            rightItem={{
              icon: '⚖️',
              badge: 'ZIT ANLAMLI',
              title: 'Sıcak ↔️ Soğuk ❄️',
              explanation: 'Anlamca birbirinin tam tersidir. Gece ↔️ Gündüz, Büyük ↔️ Küçük.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Sesteş (Eş Sesli) Kavram Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🦆"
            tag="SESTEŞ (EŞ SESLİ)"
            title="'Çay' ve 'Yüz' Örnekleri"
            subtitle="Yazılışları aynı, anlamları tamamen bambaşka"
            content="Nehir kenarında akan 'çay' 🌊 ile bardakta sıcacık içtiğimiz 'çay' ☕ tamamen farklıdır. Suratımız olan 'yüz' 😊 ile suda 'yüzmek' 🏊‍♂️ birer sesteş sözcüktür!"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. 2. Ünite Başarı Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🏆 2. ÜNİTE ŞAMPİYONU"
            ruleText="Harika! Kök, Türemiş, Bileşik, Eş, Zıt ve Sesteş sözcükleri mükemmel öğrendin!"
            subHint="Şimdi sıra ünite testinde! Kendine güven ve başarıya adım at!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

