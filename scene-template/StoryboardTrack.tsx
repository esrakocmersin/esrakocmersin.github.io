import React from 'react';
import { COLOR_TOKENS } from '../design-tokens';

export interface StoryboardTrackProps {
  currentCategory?: 'character' | 'infographic' | 'titleEmphasis';
  showDebugBar?: boolean;
}

export const StoryboardTrack: React.FC<StoryboardTrackProps> = ({
  currentCategory = 'infographic',
  showDebugBar = true,
}) => {
  if (!showDebugBar) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '8px',
        left: '12px',
        right: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 10px',
        background: 'rgba(7, 11, 20, 0.85)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span style={{ fontSize: '9px', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.5px' }}>
          RATIO:
        </span>
        <span
          style={{
            fontSize: '9px',
            padding: '1px 6px',
            borderRadius: '4px',
            background:
              currentCategory === 'character'
                ? COLOR_TOKENS.vibrantBlue
                : 'rgba(255,255,255,0.06)',
            color: '#fff',
            fontWeight: currentCategory === 'character' ? 900 : 500,
          }}
        >
          %35 Karakter
        </span>
        <span
          style={{
            fontSize: '9px',
            padding: '1px 6px',
            borderRadius: '4px',
            background:
              currentCategory === 'infographic'
                ? COLOR_TOKENS.naturalGreen
                : 'rgba(255,255,255,0.06)',
            color: '#fff',
            fontWeight: currentCategory === 'infographic' ? 900 : 500,
          }}
        >
          %50 İnfografik
        </span>
        <span
          style={{
            fontSize: '9px',
            padding: '1px 6px',
            borderRadius: '4px',
            background:
              currentCategory === 'titleEmphasis'
                ? COLOR_TOKENS.warmYellow
                : 'rgba(255,255,255,0.06)',
            color: currentCategory === 'titleEmphasis' ? '#000' : '#fff',
            fontWeight: currentCategory === 'titleEmphasis' ? 900 : 500,
          }}
        >
          %15 Başlık
        </span>
      </div>

      <div style={{ fontSize: '9px', color: COLOR_TOKENS.primaryTurquoise, fontWeight: 800 }}>
        4:6 · 540x810
      </div>
    </div>
  );
};
