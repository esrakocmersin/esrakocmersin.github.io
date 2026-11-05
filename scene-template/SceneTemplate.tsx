import React from 'react';
import { useCurrentFrame, Img, staticFile } from 'remotion';
import { VIDEO_CONFIG, COLOR_TOKENS, TYPOGRAPHY_TOKENS, SHADOW_TOKENS, RADIUS_TOKENS } from '../design-tokens';
import { GlowPulse } from '../animation-presets/transitions';
import { CharacterAvatar, CharacterMood } from '../character-system/CharacterAvatar';

export interface SceneTemplateProps {
  // Title & Header (%15 Concept Focus - 150px)
  lessonUnitTitle?: string;
  conceptHeading?: string;
  conceptSubheading?: string;
  conceptBadge?: string;
  currentCategory?: 'titleEmphasis' | 'character' | 'infographic';
  showCharacter?: boolean;
  characterType?: 'owl' | 'student';
  characterMood?: CharacterMood;
  isCharacterSpeaking?: boolean;
  speechBubbleText?: string;

  // Pixar 3D Arka Plan Görseli
  pixarBgImage?: string;

  // Infographic & 3D Canvas (%85 Hacim - 850px)
  children?: React.ReactNode;

  // HUD
  showStoryboardHUD?: boolean;
}

export const SceneTemplate: React.FC<SceneTemplateProps> = ({
  lessonUnitTitle = '4. SINIF TÜRKÇE · 1. ÜNİTE',
  conceptHeading,
  conceptSubheading,
  conceptBadge,
  currentCategory = 'infographic',
  showCharacter = false,
  characterType = 'owl',
  characterMood = 'explaining',
  isCharacterSpeaking = false,
  speechBubbleText,
  pixarBgImage = 'images/tr_u1_pixar.jpg',
  children,
  showStoryboardHUD = true,
}) => {
  const frame = useCurrentFrame();

  // Sinematik yavaş kamera nefesi (3D Parallax Breathing)
  const bgScale = 1.04 + Math.sin(frame / 60) * 0.02;
  const p1 = Math.sin(frame / 25) * 12;

  return (
    <div
      style={{
        width: `${VIDEO_CONFIG.width}px`,
        height: `${VIDEO_CONFIG.height}px`,
        position: 'relative',
        background: '#070b14',
        overflow: 'hidden',
        fontFamily: TYPOGRAPHY_TOKENS.fontFamily,
        color: COLOR_TOKENS.textPrimary,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
      data-category={currentCategory}
    >
      {/* 1. PIXAR 3D SİNEMATİK ARKA PLAN KATMANI */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {pixarBgImage && (
          <Img
            src={staticFile(pixarBgImage)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${bgScale})`,
              filter: 'brightness(0.68) saturate(1.25)',
              transition: 'transform 0.1s linear',
            }}
          />
        )}
        {/* Sinematik Derinlik & Vinyet Gradyanı */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 35%, rgba(7, 11, 20, 0.45) 0%, rgba(7, 11, 20, 0.95) 90%), linear-gradient(180deg, rgba(7,11,20,0.85) 0%, rgba(3,6,12,0.92) 100%)',
          }}
        />
      </div>

      {/* 2. Üst 4:5 HUD Çubuğu */}
      {showStoryboardHUD && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '20px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '6px 14px',
            background: 'rgba(7, 11, 20, 0.85)',
            borderRadius: RADIUS_TOKENS.full,
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(10px)',
            zIndex: 99,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: COLOR_TOKENS.primaryTurquoise,
                boxShadow: '0 0 10px #06b6d4',
              }}
            />
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.8px' }}>
              PIXAR 3D CINEMATIC · 4:5 FORMAT
            </span>
          </div>

          <div
            style={{
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '6px',
              background: 'rgba(6, 182, 212, 0.25)',
              border: `1px solid ${COLOR_TOKENS.primaryTurquoise}`,
              color: COLOR_TOKENS.turquoiseLight,
              fontWeight: 900,
            }}
          >
            %85 3D İnfografik & Sahne · %15 Başlık
          </div>
        </div>
      )}

      {/* 3. BÖLÜM: BAŞLIK VE KAVRAM VURGULARI (%15 Hacim - 150px) */}
      <div
        style={{
          height: '150px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '44px 30px 4px 30px',
          boxSizing: 'border-box',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {lessonUnitTitle && (
          <div
            style={{
              fontSize: TYPOGRAPHY_TOKENS.sizes.badgeText,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: COLOR_TOKENS.turquoiseLight,
              fontWeight: 900,
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            {lessonUnitTitle}
            {conceptBadge && (
              <span
                style={{
                  background: 'rgba(245, 158, 11, 0.25)',
                  color: COLOR_TOKENS.warmYellow,
                  border: `1px solid ${COLOR_TOKENS.warmYellow}`,
                  padding: '2px 8px',
                  borderRadius: RADIUS_TOKENS.full,
                  fontSize: '10px',
                  letterSpacing: '1px',
                  marginLeft: '4px',
                }}
              >
                {conceptBadge}
              </span>
            )}
          </div>
        )}

        {conceptHeading && (
          <GlowPulse glowColor={COLOR_TOKENS.primaryTurquoise}>
            <h1
              style={{
                fontSize: TYPOGRAPHY_TOKENS.sizes.displayHeader,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.15,
                background: `linear-gradient(135deg, #ffffff 45%, ${COLOR_TOKENS.turquoiseLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 6px 20px rgba(6, 182, 212, 0.55)',
              }}
            >
              {conceptHeading}
            </h1>
          </GlowPulse>
        )}

        {conceptSubheading && (
          <p
            style={{
              fontSize: TYPOGRAPHY_TOKENS.sizes.bodyRegular,
              color: COLOR_TOKENS.textSecondary,
              marginTop: '4px',
              marginBottom: 0,
              fontWeight: 600,
              maxWidth: '680px',
              textShadow: '0 2px 6px rgba(0,0,0,0.8)',
            }}
          >
            {conceptSubheading}
          </p>
        )}
      </div>

      {/* 4. BÖLÜM: 3D İNFOGRAFİK VE GÖRSEL KONU ANLATIMI (%85 Hacim - 850px) */}
      <div
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 36px 36px 36px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 20,
        }}
      >
        {children}
      </div>

      {showCharacter && (
        <div
          style={{
            position: 'absolute',
            right: '22px',
            bottom: '18px',
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          {speechBubbleText && (
            <div
              style={{
                maxWidth: '340px',
                marginBottom: '4px',
                padding: '10px 14px',
                borderRadius: '14px 14px 2px 14px',
                background: 'rgba(7, 11, 20, 0.94)',
                border: `1px solid ${COLOR_TOKENS.primaryTurquoise}`,
                color: COLOR_TOKENS.textPrimary,
                fontSize: '13px',
                fontWeight: 600,
                lineHeight: 1.4,
                boxShadow: SHADOW_TOKENS.card3D,
              }}
            >
              {speechBubbleText}
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CharacterAvatar
              type={characterType}
              emotion={characterMood}
              isSpeaking={isCharacterSpeaking}
              size={112}
            />
          </div>
        </div>
      )}
    </div>
  );
};
