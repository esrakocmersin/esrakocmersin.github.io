import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from '../../design-tokens';
import { SceneTemplate } from '../../scene-template/SceneTemplate';
import { ConceptCard3D } from '../../infographic-components/ConceptCard3D';
import { MemoryBadge } from '../../infographic-components/MemoryBadge';
import { SlideIn } from '../../animation-presets/transitions';

export const Scene3_Deyimler: React.FC = () => {
  return (
    <SceneTemplate
      lessonUnitTitle="4. SINIF TÜRKÇE · 3. ÜNİTE"
      conceptBadge="3. ADIM: DEYİMLER"
      conceptHeading="DEYİMLERİN RENKLİ DÜNYASI"
      conceptSubheading="Kalıplaşmış, mecaz anlamlı ve sözcükleri değiştirilemeyen anlatımlar"
      currentCategory="infographic"
      showCharacter={true}
      characterType="owl"
      characterMood="happy"
      isCharacterSpeaking={true}
      speechBubbleText="Türkçemizi süsleyen harika kalıplaşmış sözlerimiz vardır: Deyimler! Deyimler bir durumu anlatır, kelimeleri asla değiştirilemez!"
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
        {/* 1. Popüler Deyim Örnekleri Izgarası */}
        <SlideIn direction="down" delay={5}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              width: '100%',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.primaryTurquoise}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.turquoiseLight }}>
                🔔 ETEKLERİ ZİL ÇALMAK
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                Çok sevinmek, aşırı neşelenmek
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.warmYellow}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.yellowLight }}>
                👂 KULAK KABARTMAK
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                Belli etmeden dikkatle dinlemek
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.naturalGreen}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.greenLight }}>
                👁️ GÖZE GİRMEK
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                Beğeni ve sevgi kazanmak
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.18) 0%, rgba(7, 11, 20, 0.9) 100%)',
                border: `1.8px solid ${COLOR_TOKENS.coral}`,
                borderRadius: RADIUS_TOKENS.md,
                padding: '8px 10px',
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 800, color: COLOR_TOKENS.coralLight }}>
                👃 BURNU HAVADA OLMAK
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                Kibirli ve gururlu davranmak
              </div>
            </div>
          </div>
        </SlideIn>

        {/* 2. Kalıplaşmış Söz Kuralı */}
        <SlideIn direction="up" delay={20}>
          <ConceptCard3D
            icon="🔒"
            tag="KALIPLAŞMIŞ YAPI"
            title="Sözcüklerin Yeri Değiştirilemez!"
            subtitle="Yerine eş anlamlısı bile getirilemez"
            content="'Etekleri zil çalıyor' yerine 'Etekleri çan çalıyor' diyemezsiniz! Deyimler donmuş birer kalıptır, en az iki kelimeden oluşur ve çoğunlukla mecaz anlam taşır."
            themeColor={COLOR_TOKENS.warmYellow}
            isGlowing={false}
          />
        </SlideIn>

        {/* 3. Altın Kural Rozeti */}
        <SlideIn direction="up" delay={45}>
          <MemoryBadge
            prefix="🎯 ALTIN KURAL"
            ruleText="Deyimler kalıplaşmıştır; sözcükleri değiştirilemez ve anlık bir durumu tasvir eder!"
            subHint="İpucu: Deyimler öğüt vermez, kişinin o anki ruh halini veya durumunu anlatır!"
          />
        </SlideIn>
      </div>
    </SceneTemplate>
  );
};

