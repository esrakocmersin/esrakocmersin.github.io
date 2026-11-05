import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { VIDEO_CONFIG } from '../../design-tokens';
import { Scene1_BuyukHarfler } from './Scene1_BuyukHarfler';
import { Scene2_MiVeDeYazimi } from './Scene2_MiVeDeYazimi';
import { Scene3_TemelNoktalama } from './Scene3_TemelNoktalama';
import { Scene4_UnlemSoruKesme } from './Scene4_UnlemSoruKesme';

export const SCENE_DURATION_FRAMES_U6 = 750;
export const TOTAL_UNIT6_FRAMES = SCENE_DURATION_FRAMES_U6 * 4; // 3000 frames (100 saniye)

export interface TurkishUnit6VideoProps {
  includeAudio?: boolean;
}

export const TurkishUnit6Video: React.FC<TurkishUnit6VideoProps> = ({
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
      {/* 1. ADIM: Büyük Harfler ve Özel İsimler (0 - 750 frame) */}
      <Sequence from={0} durationInFrames={SCENE_DURATION_FRAMES_U6} name="Adım 1: Büyük Harfler">
        <Scene1_BuyukHarfler />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u6_s1.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 2. ADIM: Kritik Ekler: -mi ve -de Yazımı (750 - 1500 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U6 * 1}
        durationInFrames={SCENE_DURATION_FRAMES_U6}
        name="Adım 2: -mi ve -de"
      >
        <Scene2_MiVeDeYazimi />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u6_s2.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 3. ADIM: Nokta, Virgül ve İki Nokta (1500 - 2250 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U6 * 2}
        durationInFrames={SCENE_DURATION_FRAMES_U6}
        name="Adım 3: Temel Noktalama"
      >
        <Scene3_TemelNoktalama />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u6_s3.mp3')} volume={1.0} />
        )}
      </Sequence>

      {/* 4. ADIM: Ünlem, Soru ve Tırnak İşareti (2250 - 3000 frame) */}
      <Sequence
        from={SCENE_DURATION_FRAMES_U6 * 3}
        durationInFrames={SCENE_DURATION_FRAMES_U6}
        name="Adım 4: Ünlem & Soru"
      >
        <Scene4_UnlemSoruKesme />
        {includeAudio && (
          <Audio src={staticFile('audio/courses/tr-u6_s4.mp3')} volume={1.0} />
        )}
      </Sequence>
    </div>
  );
};
