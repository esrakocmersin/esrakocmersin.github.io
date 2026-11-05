import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { VIDEO_CONFIG } from '../../design-tokens';
import { Scene1_Harfler } from './Scene1_Harfler';
import { Scene2_Heceler } from './Scene2_Heceler';
import { Scene3_GercekAnlam } from './Scene3_GercekAnlam';
import { Scene4_MecazAnlam } from './Scene4_MecazAnlam';
import { Scene5_TerimAnlam } from './Scene5_TerimAnlam';

// Her sahne 750 frame (25 saniye) x 5 sahne = 3750 frame (125 saniye / ~2 dk 5 sn)
export const SCENE_DURATION_FRAMES = 750;
export const TOTAL_UNIT1_FRAMES = SCENE_DURATION_FRAMES * 5; // 3750 frames

export interface TurkishUnit1VideoProps {
  includeAudio?: boolean;
}

export const TurkishUnit1Video: React.FC<TurkishUnit1VideoProps> = ({
  includeAudio = true,
}) => {
  return (
    <div
      style={{
        width: VIDEO_CONFIG.width,
        height: VIDEO_CONFIG.height,
        position: 'relative',
        background: '#090d16',
      }}
    >
      {/* 1. ADIM: Alfabemiz ve 29 Harf Dünyası (0 - 750 frame / 0 - 25 sn) */}
      <Sequence from={0} durationInFrames={SCENE_DURATION_FRAMES} name="Adım 1: Harfler">
        <Scene1_Harfler />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u1_s1.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 2. ADIM: Hece Treni ve Satır Sonu Kuralları (750 - 1500 frame / 25 - 50 sn) */}
      <Sequence
        from={SCENE_DURATION_FRAMES * 1}
        durationInFrames={SCENE_DURATION_FRAMES}
        name="Adım 2: Heceler"
      >
        <Scene2_Heceler />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u1_s2.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 3. ADIM: Sözcükte Gerçek (Temel) Anlam (1500 - 2250 frame / 50 - 75 sn) */}
      <Sequence
        from={SCENE_DURATION_FRAMES * 2}
        durationInFrames={SCENE_DURATION_FRAMES}
        name="Adım 3: Gerçek Anlam"
      >
        <Scene3_GercekAnlam />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u1_s3.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 4. ADIM: Mecaz Anlam: Hayal Gücünün Kanatları (2250 - 3000 frame / 75 - 100 sn) */}
      <Sequence
        from={SCENE_DURATION_FRAMES * 3}
        durationInFrames={SCENE_DURATION_FRAMES}
        name="Adım 4: Mecaz Anlam"
      >
        <Scene4_MecazAnlam />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u1_s4.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 5. ADIM: Terim Anlam ve Ünite Özeti (3000 - 3750 frame / 100 - 125 sn) */}
      <Sequence
        from={SCENE_DURATION_FRAMES * 4}
        durationInFrames={SCENE_DURATION_FRAMES}
        name="Adım 5: Terim Anlam"
      >
        <Scene5_TerimAnlam />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u1_s5.mp3')} volume={1.0} />
        )}
      </Sequence>
    </div>
  );
};
