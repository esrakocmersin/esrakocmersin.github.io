import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { VIDEO_CONFIG } from '../../design-tokens';
import { Scene1_HikayeUnsurlari } from './Scene1_HikayeUnsurlari';
import { Scene2_MasalVeSiir } from './Scene2_MasalVeSiir';
import { Scene3_Deyimler } from './Scene3_Deyimler';
import { Scene4_AtasozuDeyimFark } from './Scene4_AtasozuDeyimFark';

export const SCENE_DURATION_FRAMES_U3 = 750;
export const TOTAL_UNIT3_FRAMES = SCENE_DURATION_FRAMES_U3 * 4; // 3000 frames (100 saniye)

export interface TurkishUnit3VideoProps {
  includeAudio?: boolean;
}

export const TurkishUnit3Video: React.FC<TurkishUnit3VideoProps> = ({
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
      {/* 1. ADIM: Hikâye ve Hikâye Unsurları (0 - 750 frame) */}
      <Sequence from={0} durationInFrames={SCENE_DURATION_FRAMES_U3} name="Adım 1: Hikâye Unsurları">
        <Scene1_HikayeUnsurlari />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u3_s1.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 2. ADIM: Masal ve Şiir Dünyası (750 - 1500 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U3 * 1}
        durationInFrames={SCENE_DURATION_FRAMES_U3}
        name="Adım 2: Masal ve Şiir"
      >
        <Scene2_MasalVeSiir />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u3_s2.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 3. ADIM: Deyimlerin Renkli Dünyası (1500 - 2250 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U3 * 2}
        durationInFrames={SCENE_DURATION_FRAMES_U3}
        name="Adım 3: Deyimler"
      >
        <Scene3_Deyimler />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u3_s3.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 4. ADIM: Atasözü ile Deyim Arasındaki Fark (2250 - 3000 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U3 * 3}
        durationInFrames={SCENE_DURATION_FRAMES_U3}
        name="Adım 4: Atasözü vs Deyim"
      >
        <Scene4_AtasozuDeyimFark />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u3_s4.mp3')} volume={1.0} />
        )}
      </Sequence>
    </div>
  );
};
