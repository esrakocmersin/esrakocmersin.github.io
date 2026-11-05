import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { VIDEO_CONFIG } from '../../design-tokens';
import { Scene1_KokVeBasit } from './Scene1_KokVeBasit';
import { Scene2_TuremisKelime } from './Scene2_TuremisKelime';
import { Scene3_BilesikKelime } from './Scene3_BilesikKelime';
import { Scene4_AnlamIliskileri } from './Scene4_AnlamIliskileri';

// Her sahne 750 frame (25 saniye) x 4 sahne = 3000 frame (100 saniye / ~1 dk 40 sn)
export const SCENE_DURATION_FRAMES_U2 = 750;
export const TOTAL_UNIT2_FRAMES = SCENE_DURATION_FRAMES_U2 * 4; // 3000 frames

export interface TurkishUnit2VideoProps {
  includeAudio?: boolean;
}

export const TurkishUnit2Video: React.FC<TurkishUnit2VideoProps> = ({
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
      {/* 1. ADIM: Kök ve Ek Nedir? Basit Kelimeler (0 - 750 frame) */}
      <Sequence from={0} durationInFrames={SCENE_DURATION_FRAMES_U2} name="Adım 1: Kök ve Basit">
        <Scene1_KokVeBasit />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u2_s1.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 2. ADIM: Türemiş Kelimeler ve Yapım Ekleri (750 - 1500 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U2 * 1}
        durationInFrames={SCENE_DURATION_FRAMES_U2}
        name="Adım 2: Türemiş Kelimeler"
      >
        <Scene2_TuremisKelime />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u2_s2.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 3. ADIM: Bileşik Kelimeler: Güçlerini Birleştirenler (1500 - 2250 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U2 * 2}
        durationInFrames={SCENE_DURATION_FRAMES_U2}
        name="Adım 3: Bileşik Kelimeler"
      >
        <Scene3_BilesikKelime />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u2_s3.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 4. ADIM: Eş Anlam, Zıt Anlam ve Sesteş Sözcükler (2250 - 3000 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U2 * 3}
        durationInFrames={SCENE_DURATION_FRAMES_U2}
        name="Adım 4: Anlam İlişkileri"
      >
        <Scene4_AnlamIliskileri />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u2_s4.mp3')} volume={1.0} />
        )}
      </Sequence>
    </div>
  );
};
