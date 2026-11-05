import React from 'react';
import { COLOR_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ComparisonPanel } from '../../infographic-components/ComparisonPanel';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene4_UnlemSoruKesme: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 6. ÜNİTE"
      conceptBadge="4. ADIM: DUYGU & AKTARMA"
      conceptHeading="ÜNLEM, SORU VE TIRNAK İŞARETİ"
      conceptSubheading="Cümlelerin trafik ışıkları: Heyecan, merak ve doğrudan aktarılan sözler"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Soru sorarken Soru İşareti (?); korku, sevinç, heyecan gibi güçlü duygularda Ünlem İşareti (!) kullanırız. Başkasının sözü ise Tırnak ('...') içine alınır!"
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
        {/* 1. Ünlem vs Soru Karşılaştırma Paneli */}
        <SlideIn direction="down" delay={5}>
          <ComparisonPanel
            leftItem={{
              icon: '❗',
              badge: 'ÜNLEM İŞARETİ',
              title: 'Güçlü Duygu & Seslenme',
              explanation: '"Eyvah, yangın var!", "Yaşasın, sınavı kazandım!" — Korku, coşku, telaş bildirir.',
              themeColor: COLOR_TOKENS.coral,
              bgGradient: 'linear-gradient(145deg, #201015 0%, #12070a 100%)',
            }}
            rightItem={{
              icon: '❓',
              badge: 'SORU İŞARETİ',
              title: 'Cevap Bekleyen Cümle',
              explanation: '"Ödevlerini bitirdin mi?", "Hangi kitabı okuyorsun?" — Merak ve yanıt bekler.',
              themeColor: COLOR_TOKENS.vibrantBlue,
              bgGradient: 'linear-gradient(145deg, #101c2e 0%, #08101e 100%)',
            }}
          />
        </SlideIn>

        {/* 2. Tırnak İşareti Kartı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="💬"
            tag="SÖZ AKTARIMI"
            title="Tırnak İşareti ('...')"
            subtitle="Başkasından aktarılan sözü aynen korur"
            content="Öğretmenimiz: 'Kitap okumak zihni açar.' dedi. Başkasına ait sözü değiştirmeden doğrudan aktarırken başına ve sonuna tırnak işareti konur."
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={true}
          />
        </SlideIn>

        {/* 3. 6. Ünite Başarı Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🏆 6. ÜNİTE ŞAMPİYONU"
            ruleText="Harika! Büyük harfler, soru eki -mi, bağlaç -de ve tüm noktalama işaretlerini öğrendin!"
            subHint="Noktalama işaretleri cümlelerimizin trafik ışıklarıdır; kurallara uyarak doğru yaz!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

