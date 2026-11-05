import React from 'react';
import { COLOR_TOKENS, SHADOW_TOKENS, RADIUS_TOKENS, TYPOGRAPHY_TOKENS } from '../design-tokens';

export interface ComparisonItem {
  icon: string;
  badge: string;
  title: string;
  explanation: string;
  themeColor: string;
  bgGradient: string;
}

export interface ComparisonPanelProps {
  leftItem: ComparisonItem;
  rightItem: ComparisonItem;
}

export const ComparisonPanel: React.FC<ComparisonPanelProps> = ({
  leftItem,
  rightItem,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {[leftItem, rightItem].map((item, index) => (
        <div
          key={index}
          style={{
            background: item.bgGradient,
            border: `2px solid ${item.themeColor}`,
            borderRadius: RADIUS_TOKENS.lg,
            padding: '16px 18px',
            boxShadow: SHADOW_TOKENS.card3D,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxSizing: 'border-box',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Rozet */}
          <div
            style={{
              padding: '4px 10px',
              borderRadius: RADIUS_TOKENS.full,
              background: item.themeColor,
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 900,
              alignSelf: 'flex-start',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
            }}
          >
            {item.badge}
          </div>

          {/* İkon & Başlık */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <div
              style={{
                fontSize: TYPOGRAPHY_TOKENS.sizes.cardTitle,
                fontWeight: TYPOGRAPHY_TOKENS.weights.extraBold,
                color: item.themeColor,
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </div>
          </div>

          {/* Açıklama Metni */}
          <div
            style={{
              fontSize: TYPOGRAPHY_TOKENS.sizes.bodyRegular,
              lineHeight: 1.45,
              color: COLOR_TOKENS.textSecondary,
              fontWeight: TYPOGRAPHY_TOKENS.weights.medium,
            }}
          >
            {item.explanation}
          </div>
        </div>
      ))}
    </div>
  );
};
