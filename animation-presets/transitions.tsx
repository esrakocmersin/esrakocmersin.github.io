import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { SPRING_PRESETS } from './springs';

interface FadeInProps {
  children: React.ReactNode;
  delayInFrames?: number;
  delay?: number;
  durationInFrames?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delayInFrames,
  delay,
  durationInFrames = 15,
}) => {
  const frame = useCurrentFrame();
  const effectiveDelay = delayInFrames ?? delay ?? 0;
  const opacity = interpolate(
    frame,
    [effectiveDelay, effectiveDelay + durationInFrames],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return <div style={{ opacity, width: '100%', height: '100%' }}>{children}</div>;
};

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delayInFrames?: number;
  delay?: number;
  distance?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'up',
  delayInFrames,
  delay,
  distance = 60,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const effectiveDelay = delayInFrames ?? delay ?? 0;
  const progress = SPRING_PRESETS.snappyPop(fps, frame, effectiveDelay);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${(1 - progress) * distance}px)`;
      case 'down':
        return `translateY(${-(1 - progress) * distance}px)`;
      case 'left':
        return `translateX(${(1 - progress) * distance}px)`;
      case 'right':
        return `translateX(${-(1 - progress) * distance}px)`;
    }
  };

  return (
    <div
      style={{
        transform: getTransform(),
        opacity: progress,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

interface GlowPulseProps {
  children: React.ReactNode;
  glowColor?: string;
  color?: string;
  speedMultiplier?: number;
}

export const GlowPulse: React.FC<GlowPulseProps> = ({
  children,
  glowColor,
  color,
  speedMultiplier = 1,
}) => {
  const frame = useCurrentFrame();
  const effectiveColor = color ?? glowColor ?? 'rgba(245, 158, 11, 0.7)';
  const pulse = Math.sin((frame / 12) * speedMultiplier) * 0.5 + 0.5;
  const shadowSpread = 8 + pulse * 14;

  return (
    <div
      style={{
        filter: `drop-shadow(0 0 ${shadowSpread}px ${effectiveColor})`,
        display: 'inline-block',
        transition: 'filter 0.1s ease',
      }}
    >
      {children}
    </div>
  );
};
