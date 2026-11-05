import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { VIDEO_CONFIG } from '../../design-tokens';
import { Scene1_OznelNesnel } from './Scene1_OznelNesnel';
import { Scene2_NedenSonucAmacSonuc } from './Scene2_NedenSonucAmacSonuc';
import { Scene3_Karsilastirma } from './Scene3_Karsilastirma';
import { Scene4_GenelOzel } from './Scene4_GenelOzel';

export const SCENE_DURATION_FRAMES_U5 = 750;
export const TOTAL_UNIT5_FRAMES = SCENE_DURATION_FRAMES_U5 * 4; // 3000 frames (100 saniye)

export interface TurkishUnit5VideoProps {
  includeAudio?: boolean;
}

export const TurkishUnit5Video: React.FC<TurkishUnit5VideoProps> = ({
  includeAudio = true,
}) => {
  return (
    <div
      style={{
        width: VIDEO_CONFIG.width,
        height: VIDEO_CONFIG.height,
        position: 'relative',
        background: '#070b14',
      }}
    >
      {/* 1. ADIM: Öznel ve Nesnel Yargılar (0 - 750 frame) */}
      <Sequence from={0} durationInFrames={SCENE_DURATION_FRAMES_U5} name="Adım 1: Öznel & Nesnel">
        <Scene1_OznelNesnel />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u5_s1.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 2. ADIM: Neden-Sonuç ve Amaç-Sonuç (750 - 1500 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U5 * 1}
        durationInFrames={SCENE_DURATION_FRAMES_U5}
        name="Adım 2: Sebep & Amaç"
      >
        <Scene2_NedenSonucAmacSonuc />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u5_s2.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 3. ADIM: Karşılaştırma İfadeleri (1500 - 2250 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U5 * 2}
        durationInFrames={SCENE_DURATION_FRAMES_U5}
        name="Adım 3: Karşılaştırma"
      >
        <Scene3_Karsilastirma />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u5_s3.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 4. ADIM: Genel ve Özel İfadeler (2250 - 3000 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U5 * 3}
        durationInFrames={SCENE_DURATION_FRAMES_U5}
        name="Adım 4: Genel & Özel"
      >
        <Scene4_GenelOzel />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u5_s4.mp3')} volume={1.0} />
        )}
      </Sequence>
    </div>
  );
};
