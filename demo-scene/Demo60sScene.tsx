import React from 'react';
import { Sequence } from 'remotion';
import { VIDEO_CONFIG, COLOR_TOKENS } from '../design-tokens';
import { SceneTemplate } from '../scene-template/SceneTemplate';
import { ConceptCard3D } from '../infographic-components/ConceptCard3D';
import { ComparisonPanel } from '../infographic-components/ComparisonPanel';
import { StepFlowDiagram } from '../infographic-components/StepFlowDiagram';
import { MemoryBadge } from '../infographic-components/MemoryBadge';
import { SlideIn } from '../animation-presets/transitions';

export const Demo60sScene: React.FC = () => {
  return (
    <div style={{ width: VIDEO_CONFIG.width, height: VIDEO_CONFIG.height, position: 'relative' }}>
      {/* FAZ 1: BAŞLIK VE KAVRAM VURGULARI (Frame 0 - 270 / 9 Saniye) */}
      <Sequence from={0} durationInFrames={270}>
        <SceneTemplate
          lessonUnitTitle="4. SINIF TÜRKÇE · SÖZCÜKTE ANLAM"
          conceptBadge="HEDEF KAVRAM"
          conceptHeading="MECAZ ANLAM"
          conceptSubheading="Sözcüğün gerçek anlamından tamamen uzaklaşarak kazandığı yepyeni anlam!"
          currentCategory="titleEmphasis"
          showCharacter={true}
          characterType="owl"
          characterMood="happy"
          isCharacterSpeaking={true}
          speechBubbleText="Merhaba kâşifler! Bugün kelimelerin sihirli dünyasına adım atıyoruz. Kelimeler nasıl kanatlanır görelim!"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', alignItems: 'center' }}>
            <SlideIn direction="up" delay={15}>
              <ConceptCard3D
                title="🔍 Günün Anahtar Sorusu"
                subtitle="Kelimeler hislerimizi ve duygularımızı nasıl anlatır?"
                content="Bir kelime yalnızca ilk anlamıyla kalmaz; bazen sevgi, samimiyet veya derin bir duygu ifade etmek için kanatlanıp yeni bir anlam kazanır!"
                themeColor={COLOR_TOKENS.primaryTurquoise}
                icon="💡"
                tag="Kavram Haritası"
                isGlowing={true}
              />
            </SlideIn>

            <SlideIn direction="up" delay={45}>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                {['Gerçek Anlam', 'Mecaz Anlam', 'Terim Anlam'].map((item, idx) => (
                  <div
                    key={item}
                    style={{
                      background: idx === 1 ? 'linear-gradient(135deg, #06b6d4, #2563eb)' : 'rgba(255,255,255,0.06)',
                      padding: '6px 12px',
                      borderRadius: '10px',
                      fontWeight: 800,
                      fontSize: '11px',
                      color: '#ffffff',
                      border: idx === 1 ? '1.5px solid #67e8f9' : '1px solid rgba(255,255,255,0.1)',
                      boxShadow: idx === 1 ? '0 0 12px rgba(6,182,212,0.5)' : 'none',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </SceneTemplate>
      </Sequence>

      {/* FAZ 2: KARAKTER VE HİKÂYE ANİMASYONU (Frame 270 - 900 / 21 Saniye) */}
      <Sequence from={270} durationInFrames={630}>
        <SceneTemplate
          lessonUnitTitle="4. SINIF TÜRKÇE · KARAKTER ANLATIMI"
          conceptBadge="HİKÂYELİ ANLATIM"
          conceptHeading="SICAK BİR KARŞILAMA"
          conceptSubheading="Somut bir sıcaklıktan kalpten gelen bir samimiyete yolculuk"
          currentCategory="character"
          showCharacter={true}
          characterType="owl"
          characterMood="explaining"
          isCharacterSpeaking={true}
          speechBubbleText="Düşünün bakalım: 'Çorba çok sıcak' dediğimizde dilimizi yakan ısıyı kastediyoruz. Peki 'Bizi çok sıcak karşıladılar' dersek ne olur?"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <SlideIn direction="down" delay={10}>
              <ConceptCard3D
                title="📖 Hikâye Örneğimiz"
                subtitle="Kerem'in yeni okulundaki ilk günü"
                content="Kerem sınıfın kapısını çekinerek açtı. Öğretmeni gülümseyerek: 'Hoş geldin Kerem!' dedi. Kerem o an sınıfın onu ne kadar SICAK karşıladığını kalbinde hissetti!"
                themeColor={COLOR_TOKENS.warmYellow}
                icon="🎒"
                tag="Örnek Olay"
              />
            </SlideIn>

            <SlideIn direction="up" delay={30}>
              <StepFlowDiagram
                steps={[
                  {
                    number: 1,
                    label: 'Fiziksel Isı',
                    subLabel: 'Somut sıcaklık',
                    color: COLOR_TOKENS.coral,
                  },
                  {
                    number: 2,
                    label: 'Duygu Bağı',
                    subLabel: 'İç rahatlığı & güven',
                    color: COLOR_TOKENS.softPurple,
                  },
                  {
                    number: 3,
                    label: 'Mecaz Anlam',
                    subLabel: 'İçten & samimi',
                    color: COLOR_TOKENS.naturalGreen,
                  },
                ]}
              />
            </SlideIn>
          </div>
        </SceneTemplate>
      </Sequence>

      {/* FAZ 3: EĞİTİCİ İNFOGRAFİK VE BİLGİ KARTLARI (Frame 900 - 1800 / 30 Saniye) */}
      <Sequence from={900} durationInFrames={900}>
        <SceneTemplate
          lessonUnitTitle="4. SINIF TÜRKÇE · EĞİTİCİ İNFOGRAFİK"
          conceptBadge="KARŞILAŞTIRMA"
          conceptHeading="GERÇEK VS MECAZ ANLAM"
          conceptSubheading="İki anlam arasındaki farkı kristal netliğinde görelim!"
          currentCategory="infographic"
          showCharacter={true}
          characterType="owl"
          characterMood="happy"
          isCharacterSpeaking={false}
          speechBubbleText="Sol ve sağ panelleri inceleyin. Gerçek anlam fiziksel dünyayı, mecaz anlam ise zihnimizdeki duygusal benzetmeyi gösterir."
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', alignItems: 'center' }}>
            <SlideIn direction="left" delay={10}>
              <ComparisonPanel
                leftItem={{
                  icon: '🥣',
                  badge: 'GERÇEK ANLAM',
                  title: 'Fiziksel / Somut',
                  explanation: '"Çorba çok sıcaktı." — Dili yakar, termometreyle ölçülür.',
                  themeColor: COLOR_TOKENS.coral,
                  bgGradient: 'linear-gradient(145deg, #1f1014 0%, #100609 100%)',
                }}
                rightItem={{
                  icon: '🤝',
                  badge: 'MECAZ ANLAM',
                  title: 'Duygusal / Samimi',
                  explanation: '"Bizi çok sıcak karşıladı." — İçtenlik, candanlık bildirir.',
                  themeColor: COLOR_TOKENS.primaryTurquoise,
                  bgGradient: 'linear-gradient(145deg, #091a26 0%, #050f17 100%)',
                }}
              />
            </SlideIn>

            <SlideIn direction="up" delay={60}>
              <MemoryBadge
                prefix="🎯 ALTIN KURAL"
                ruleText="Bir sözcüğün mecaz anlam kazanması için gerçek anlamından tamamen kopması şarttır!"
                subHint="İpucu: 'Ağır çanta' somuttur; 'Ağır sözler söyledi' ise mecazdır!"
              />
            </SlideIn>
          </div>
        </SceneTemplate>
      </Sequence>
    </div>
  );
};
