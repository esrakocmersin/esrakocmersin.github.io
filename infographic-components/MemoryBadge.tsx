import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS, TYPOGRAPHY_TOKENS } from '../design-tokens';
import { GlowPulse } from '../animation-presets';

export interface MemoryBadgeProps {
  prefix?: string;
  ruleText: string;
  subHint?: string;
}

export const MemoryBadge: React.FC<MemoryBadgeProps> = ({
  prefix = '🎯 ALTIN KURAL',
  ruleText,
  subHint,
}) => {
  return (
    <GlowPulse glowColor={COLOR_TOKENS.warmYellow}>
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, rgba(28, 25, 23, 0.94) 0%, rgba(41, 37, 36, 0.94) 100%)',
          border: `2px solid ${COLOR_TOKENS.warmYellow}`,
          borderRadius: RADIUS_TOKENS.md,
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: SHADOW_TOKENS.card3D,
          boxSizing: 'border-box',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div
          style={{
            padding: '6px 12px',
            borderRadius: RADIUS_TOKENS.sm,
            background: COLOR_TOKENS.warmYellow,
            color: '#1c1917',
            fontSize: TYPOGRAPHY_TOKENS.sizes.badgeText,
            fontWeight: 900,
            whiteSpace: 'nowrap',
            letterSpacing: '0.8px',
          }}
        >
          {prefix}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
          <span
            style={{
              fontSize: TYPOGRAPHY_TOKENS.sizes.bodyLarge,
              fontWeight: 800,
              color: COLOR_TOKENS.yellowLight,
              lineHeight: 1.35,
            }}
          >
            {ruleText}
          </span>
          {subHint && (
            <span
              style={{
                fontSize: TYPOGRAPHY_TOKENS.sizes.captionText,
                color: COLOR_TOKENS.textSecondary,
                fontWeight: 600,
                lineHeight: 1.25,
              }}
            >
              {subHint}
            </span>
          )}
        </div>
      </div>
    </GlowPulse>
  );
};
