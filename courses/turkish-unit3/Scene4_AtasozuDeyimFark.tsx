import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene4_AtasozuDeyimFark: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 3. ÜNİTE"
      conceptBadge="4. ADIM: ATASÖZÜ VS DEYİM"
      conceptHeading="ATASÖZÜ İLE DEYİM FARKI"
      conceptSubheading="Öğüt veren atasözleri ile durum bildiren deyimler arasındaki fark"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="'Deyim mi atasözü mü?' diye düşünüyorsan sır şu: Atasözleri derin hayat dersi ve öğüt verir! Deyimler ise anlık bir durumu anlatır."
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
        {/* 1. Atasözü vs Deyim Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '🦉',
              badge: 'ATASÖZÜ (ÖĞÜT)',
              title: 'Damlaya Damlaya...',
              explanation: '"Damlaya damlaya göl olur." — Cümledir, ders ve öğüt verir. Bize tutumlu olmayı tembihler.',
              themeColor: COLOR_TOKENS.naturalGreen,
              bgGradient: 'linear-gradient(145deg, #091c18 0%, #05100e 100%)',
            }}
            rightItem={{
              icon: '👀',
              badge: 'DEYİM (DURUM)',
              title: 'Gözden Düşmek',
              explanation: '"Gözden düşmek." — Durum bildirir, öğüt vermez. Sevgi ve saygının kaybedildiğini anlatır.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Sihirli Ayırt Etme İpucu Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="💡"
            tag="AYIRT ETME SIRRI"
            title="Ders Veriyor mu? Durumu mu Anlatıyor?"
            subtitle="Test sorularında asla yanılmama formülü"
            content="Cümleyi okuduğunuzda 'Bana bir hayat dersi veriyor' diyorsanız ATASÖZÜDÜR. Eğer 'Bir kişinin o anki sevincini, üzüntüsünü veya tavrını anlatıyor' diyorsanız DEYİMDİR!"
            themeColor={COLOR_TOKENS.primaryTurquoise}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. 3. Ünite Başarı Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🏆 3. ÜNİTE ŞAMPİYONU"
            ruleText="Harika! Hikâye unsurları, masal, şiir, deyimler ve atasözlerini ustalıkla kavradın!"
            subHint="Şimdi öğrendiklerini pekiştirmek için 3. ünite testine başla!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

