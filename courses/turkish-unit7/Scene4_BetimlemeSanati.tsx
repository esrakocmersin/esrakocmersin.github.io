import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { StepFlowDiagram } from '../../infographic-components/StepFlowDiagram';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene4_BetimlemeSanati: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 7. ÜNİTE"
      conceptBadge="4. ADIM: BETİMLEME"
      conceptHeading="BETİMLEME (TASVİR)"
      conceptSubheading="Kelimelerle resim çizme sanatı: Renkler, kokular, sesler ve görüntüler"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Bir yeri veya kişiyi okuyucunun gözünde canlandıracak şekilde anlatmaya Betimleme denir. Kelimeler bir fırça, cümleler ise tablodur!"
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
        {/* 1. Duyu Organlarıyla Betimleme Akışı */}
        <SlideIn direction="down" delay={5}>
          <StepFlowDiagram
            steps={[
              {
                number: 1,
                label: 'Göz 👁️',
                subLabel: 'Mavi göl, yemyeşil çamlar',
                color: COLOR_TOKENS.primaryTurquoise,
              },
              {
                number: 2,
                label: 'Kulak 👂',
                subLabel: 'Şırıl şırıl akan su',
                color: COLOR_TOKENS.vibrantBlue,
              },
              {
                number: 3,
                label: 'Burun 👃',
                subLabel: 'Mis gibi kekik kokusu',
                color: COLOR_TOKENS.naturalGreen,
              },
            ]}
          />
        </SlideIn>

        {/* 2. Zihinde Canlandırma Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🖼️"
            tag="KELİMELERLE RESİM"
            title="Gözlerini Kapatınca Görüyor musun?"
            subtitle="Yazar kelimelerle fotoğraf çeker"
            content="'Ak sakallı, mavi ceketli, güler yüzlü ihtiyar adam elindeki bastonuyla tahta köprüden ağır ağır geçti.' ➔ Gözümüzün önünde hemen o dede ve köprü canlanır. İşte buna betimleme denir!"
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. 7. Ünite & TÜRKÇE MÜFREDATI FİNAL ROZETİ */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🏆 TÜRKÇE DERSİ ŞAMPİYONU"
            ruleText="TEBRİKLER! 4. Sınıf Türkçe dersinin 7 ünitesini de başarıyla ve ustalıkla tamamladın!"
            subHint="Bütün konuları kavradın; artık Türkçe dersinin parlayan yıldızısın!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

