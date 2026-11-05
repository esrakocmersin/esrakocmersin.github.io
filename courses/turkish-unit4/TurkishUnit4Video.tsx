import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { VIDEO_CONFIG } from '../../design-tokens';
import { Scene1_IsimSifat } from './Scene1_IsimSifat';
import { Scene2_ZamirFiil } from './Scene2_ZamirFiil';
import { Scene3_YuklemOzne } from './Scene3_YuklemOzne';
import { Scene4_NesneVeDuzen } from './Scene4_NesneVeDuzen';

export const SCENE_DURATION_FRAMES_U4 = 750;
export const TOTAL_UNIT4_FRAMES = SCENE_DURATION_FRAMES_U4 * 4; // 3000 frames (100 saniye)

export interface TurkishUnit4VideoProps {
  includeAudio?: boolean;
}

export const TurkishUnit4Video: React.FC<TurkishUnit4VideoProps> = ({
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
      {/* 1. ADIM: İsimler ve Sıfatlar (0 - 750 frame) */}
      <Sequence from={0} durationInFrames={SCENE_DURATION_FRAMES_U4} name="Adım 1: İsim & Sıfat">
        <Scene1_IsimSifat />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u4_s1.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 2. ADIM: Zamirler ve Fiiller (750 - 1500 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U4 * 1}
        durationInFrames={SCENE_DURATION_FRAMES_U4}
        name="Adım 2: Zamir & Fiil"
      >
        <Scene2_ZamirFiil />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u4_s2.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 3. ADIM: Cümlenin Ögeleri: Yüklem ve Özne (1500 - 2250 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U4 * 2}
        durationInFrames={SCENE_DURATION_FRAMES_U4}
        name="Adım 3: Yüklem & Özne"
      >
        <Scene3_YuklemOzne />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u4_s3.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 4. ADIM: Nesne ve Kurallı Cümle Düzeni (2250 - 3000 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U4 * 3}
        durationInFrames={SCENE_DURATION_FRAMES_U4}
        name="Adım 4: Nesne & Düzen"
      >
        <Scene4_NesneVeDuzen />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u4_s4.mp3')} volume={1.0} />
        )}
      </Sequence>
    </div>
  );
};
