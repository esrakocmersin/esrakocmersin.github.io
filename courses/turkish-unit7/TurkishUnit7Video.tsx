import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { VIDEO_CONFIG } from '../../design-tokens';
import { Scene1_GorselOkuma } from './Scene1_GorselOkuma';
import { Scene2_BenzetmeSanati } from './Scene2_BenzetmeSanati';
import { Scene3_KisilestirmeSanati } from './Scene3_KisilestirmeSanati';
import { Scene4_BetimlemeSanati } from './Scene4_BetimlemeSanati';

export const SCENE_DURATION_FRAMES_U7 = 750;
export const TOTAL_UNIT7_FRAMES = SCENE_DURATION_FRAMES_U7 * 4; // 3000 frames (100 saniye)

export interface TurkishUnit7VideoProps {
  includeAudio?: boolean;
}

export const TurkishUnit7Video: React.FC<TurkishUnit7VideoProps> = ({
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
      {/* 1. ADIM: Görsel Okuma ve Grafik Yorumlama (0 - 750 frame) */}
      <Sequence from={0} durationInFrames={SCENE_DURATION_FRAMES_U7} name="Adım 1: Görsel Okuma">
        <Scene1_GorselOkuma />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u7_s1.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 2. ADIM: Benzetme Sanatı - Teşbih (750 - 1500 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U7 * 1}
        durationInFrames={SCENE_DURATION_FRAMES_U7}
        name="Adım 2: Benzetme"
      >
        <Scene2_BenzetmeSanati />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u7_s2.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 3. ADIM: Kişileştirme Sanatı - Teşhis (1500 - 2250 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U7 * 2}
        durationInFrames={SCENE_DURATION_FRAMES_U7}
        name="Adım 3: Kişileştirme"
      >
        <Scene3_KisilestirmeSanati />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u7_s3.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 4. ADIM: Betimleme - Kelimelerle Resim Çizmek (2250 - 3000 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U7 * 3}
        durationInFrames={SCENE_DURATION_FRAMES_U7}
        name="Adım 4: Betimleme"
      >
        <Scene4_BetimlemeSanati />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u7_s4.mp3')} volume={1.0} />
        )}
      </Sequence>
    </div>
  );
};
