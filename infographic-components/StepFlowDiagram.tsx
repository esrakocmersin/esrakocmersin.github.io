import React from 'react';
import { COLOR_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS, TYPOGRAPHY_TOKENS } from '../design-tokens';

export interface StepItem {
  number: number;
  label: string;
  subLabel?: string;
  color: string;
}

export interface StepFlowDiagramProps {
  steps: StepItem[];
}

export const StepFlowDiagram: React.FC<StepFlowDiagramProps> = ({ steps }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        background: 'rgba(11, 17, 32, 0.90)',
        borderRadius: RADIUS_TOKENS.lg,
        padding: '14px 20px',
        border: `2px solid ${COLOR_TOKENS.vibrantBlue}`,
        boxShadow: SHADOW_TOKENS.card3D,
        boxSizing: 'border-box',
        backdropFilter: 'blur(16px)',
      }}
    >
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              flex: 1,
              textAlign: 'center',
            }}
          >
            {/* Numaralı Daire */}
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: step.color,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '16px',
                boxShadow: `0 0 16px ${step.color}88`,
              }}
            >
              {step.number}
            </div>

            {/* Metin */}
            <div
              style={{
                fontSize: TYPOGRAPHY_TOKENS.sizes.bodyLarge,
                fontWeight: 800,
                color: COLOR_TOKENS.textPrimary,
                lineHeight: 1.2,
              }}
            >
              {step.label}
            </div>

            {step.subLabel && (
              <div
                style={{
                  fontSize: TYPOGRAPHY_TOKENS.sizes.captionText,
                  color: COLOR_TOKENS.textSecondary,
                  fontWeight: 600,
                }}
              >
                {step.subLabel}
              </div>
            )}
          </div>

          {/* Adımlar arası ok işareti */}
          {idx < steps.length - 1 && (
            <div
              style={{
                fontSize: '18px',
                color: COLOR_TOKENS.primaryTurquoise,
                fontWeight: 900,
                padding: '0 8px',
                opacity: 0.9,
              }}
            >
              ➔
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
