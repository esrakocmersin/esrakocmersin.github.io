import React from 'react';
import { COLOR_TOKENS, SHADOW_TOKENS, RADIUS_TOKENS, TYPOGRAPHY_TOKENS } from '../design-tokens';
import { GlowPulse } from '../animation-presets';

export interface ConceptCard3DProps {
  icon?: string;
  title: string;
  subtitle?: string;
  content: string;
  tag?: string;
  themeColor?: string;
  isGlowing?: boolean;
}

export const ConceptCard3D: React.FC<ConceptCard3DProps> = ({
  icon = '💡',
  title,
  subtitle,
  content,
  tag = 'KAVRAM',
  themeColor = COLOR_TOKENS.naturalGreen,
  isGlowing = false,
}) => {
  const cardContent = (
    <div
      style={{
        width: '100%',
        background: 'rgba(11, 17, 32, 0.90)',
        borderRadius: RADIUS_TOKENS.lg,
        border: `2px solid ${themeColor}`,
        padding: '16px 22px',
        boxShadow: SHADOW_TOKENS.card3D,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxSizing: 'border-box',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Üst Başlık ve Etiket Şeridi */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '26px' }}>{icon}</span>
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: TYPOGRAPHY_TOKENS.sizes.cardTitle,
                fontWeight: TYPOGRAPHY_TOKENS.weights.black,
                color: COLOR_TOKENS.textPrimary,
                fontFamily: TYPOGRAPHY_TOKENS.fontFamily,
                lineHeight: 1.2,
              }}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                style={{
                  margin: 0,
                  fontSize: TYPOGRAPHY_TOKENS.sizes.captionText,
                  color: COLOR_TOKENS.textSecondary,
                  fontWeight: TYPOGRAPHY_TOKENS.weights.medium,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* 3D Küçük Etiket Rozeti */}
        <span
          style={{
            padding: '4px 10px',
            borderRadius: RADIUS_TOKENS.full,
            background: 'rgba(255, 255, 255, 0.1)',
            border: `1.5px solid ${themeColor}`,
            color: themeColor,
            fontSize: TYPOGRAPHY_TOKENS.sizes.badgeText,
            fontWeight: TYPOGRAPHY_TOKENS.weights.extraBold,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {tag}
        </span>
      </div>

      {/* İçerik Açıklama Alanı */}
      <div
        style={{
          fontSize: TYPOGRAPHY_TOKENS.sizes.bodyLarge,
          lineHeight: 1.45,
          color: COLOR_TOKENS.textSecondary,
          fontWeight: TYPOGRAPHY_TOKENS.weights.medium,
          fontFamily: TYPOGRAPHY_TOKENS.fontFamily,
        }}
      >
        {content}
      </div>
    </div>
  );

  if (isGlowing) {
    return <GlowPulse glowColor={themeColor}>{cardContent}</GlowPulse>;
  }

  return cardContent;
};
