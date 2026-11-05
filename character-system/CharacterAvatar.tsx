import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLOR_TOKENS, SHADOW_TOKENS } from '../design-tokens';

export type CharacterMood = 'happy' | 'thinking' | 'excited' | 'explaining';

export interface CharacterAvatarProps {
  type?: 'owl' | 'student';
  isSpeaking?: boolean;
  emotion?: CharacterMood;
  size?: number;
  badgeLabel?: string;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  type = 'owl',
  isSpeaking = true,
  emotion = 'explaining',
  size = 280,
  badgeLabel = 'Bilge Baykuş',
}) => {
  const frame = useCurrentFrame();

  // Canlı Nefes ve Salınım Hareketi (Idle Breathing)
  const breathing = Math.sin(frame / 14) * 4;
  const eyeBlink = Math.sin(frame / 35) > 0.95 ? 0.1 : 1;
  const talkMovement = isSpeaking ? Math.abs(Math.sin(frame / 4)) * 6 : 0;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: `translateY(${breathing}px)`,
        userSelect: 'none',
      }}
    >
      {/* 3D Karakter Sahne Küresi */}
      <div
        style={{
          width: size,
          height: size,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: SHADOW_TOKENS.card3D,
        }}
      >
        {type === 'owl' ? (
          // BİLGE BAYKUŞ 3D VEKTÖR MODELİ
          <svg
            viewBox="0 0 200 200"
            width={size}
            height={size}
            style={{ overflow: 'visible' }}
          >
            <defs>
              <radialGradient id="owlBodyGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stop-color="#3b82f6" />
                <stop offset="50%" stop-color="#1d4ed8" />
                <stop offset="100%" stop-color="#0f172a" />
              </radialGradient>
              <radialGradient id="owlBellyGrad" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fef08a" />
                <stop offset="60%" stop-color="#f59e0b" />
                <stop offset="100%" stop-color="#b45309" />
              </radialGradient>
              <linearGradient id="goldGlasses" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" />
                <stop offset="50%" stop-color="#f59e0b" />
                <stop offset="100%" stop-color="#d97706" />
              </linearGradient>
            </defs>

            {/* Gövde */}
            <ellipse cx="100" cy="115" rx="65" ry="72" fill="url(#owlBodyGrad)" />

            {/* Karın (Altın Pofuduk Dokusu) */}
            <ellipse cx="100" cy="125" rx="42" ry="48" fill="url(#owlBellyGrad)" />

            {/* Kanatlar */}
            <path
              d={`M 35 110 Q 15 ${120 + talkMovement} 30 155 Q 50 145 55 120 Z`}
              fill="#1e40af"
            />
            <path
              d={`M 165 110 Q ${185 + (emotion === 'explaining' ? 12 : 0)} ${
                110 - talkMovement
              } 170 155 Q 150 145 145 120 Z`}
              fill="#1e40af"
            />

            {/* Sevimli Kulak Püskülleri */}
            <polygon points="50,60 70,30 80,68" fill="#1e3a8a" />
            <polygon points="150,60 130,30 120,68" fill="#1e3a8a" />

            {/* Gözler */}
            <circle cx="70" cy="85" r="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="130" cy="85" r="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />

            {/* Gözbebekleri (Blink Animasyonlu) */}
            <ellipse
              cx="72"
              cy="85"
              rx="12"
              ry={12 * eyeBlink}
              fill="#0f172a"
            />
            <ellipse
              cx="128"
              cy="85"
              rx="12"
              ry={12 * eyeBlink}
              fill="#0f172a"
            />
            {/* Göz Işıltıları */}
            <circle cx="68" cy="80" r="4" fill="#ffffff" />
            <circle cx="124" cy="80" r="4" fill="#ffffff" />

            {/* Altın Çerçeveli Bilge Gözlükleri */}
            <circle
              cx="70"
              cy="85"
              r="26"
              fill="none"
              stroke="url(#goldGlasses)"
              strokeWidth="4.5"
            />
            <circle
              cx="130"
              cy="85"
              r="26"
              fill="none"
              stroke="url(#goldGlasses)"
              strokeWidth="4.5"
            />
            <line
              x1="96"
              y1="85"
              x2="104"
              y2="85"
              stroke="url(#goldGlasses)"
              strokeWidth="5"
            />

            {/* Gaga (Konuşma Animasyonlu) */}
            <polygon
              points={`100,${98 + talkMovement} 90,110 110,110`}
              fill="#ea580c"
            />

            {/* Minik Ayaklar */}
            <ellipse cx="80" cy="184" rx="14" ry="7" fill="#ea580c" />
            <ellipse cx="120" cy="184" rx="14" ry="7" fill="#ea580c" />
          </svg>
        ) : (
          // KÂŞİF ÖĞRENCİ 3D AVATARI
          <svg viewBox="0 0 200 200" width={size} height={size}>
            <circle cx="100" cy="90" r="50" fill="#fde047" />
            <circle cx="85" cy="85" r="8" fill="#1e293b" />
            <circle cx="115" cy="85" r="8" fill="#1e293b" />
            <path
              d={`M 85 115 Q 100 ${125 + talkMovement} 115 115`}
              stroke="#0f172a"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Karakter İsim ve Durum Rozeti */}
      <div
        style={{
          marginTop: '8px',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'rgba(30, 41, 59, 0.9)',
          border: `1.5px solid ${COLOR_TOKENS.warmYellow}`,
          color: COLOR_TOKENS.yellowLight,
          fontSize: '15px',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        }}
      >
        <span style={{ fontSize: '16px' }}>{isSpeaking ? '🗣️' : '✨'}</span>
        <span>{badgeLabel}</span>
      </div>
    </div>
  );
};
