import React from 'react';
import { Composition } from 'remotion';
import { Demo60sScene } from './demo-scene/Demo60sScene';
import {
  TurkishUnit1Video,
  TOTAL_UNIT1_FRAMES,
  SCENE_DURATION_FRAMES,
  Scene1_Harfler,
  Scene2_Heceler,
  Scene3_GercekAnlam,
  Scene4_MecazAnlam,
  Scene5_TerimAnlam,
} from './courses/turkish-unit1';
import {
  TurkishUnit2Video,
  TOTAL_UNIT2_FRAMES,
  SCENE_DURATION_FRAMES_U2,
  Scene1_KokVeBasit,
  Scene2_TuremisKelime,
  Scene3_BilesikKelime,
  Scene4_AnlamIliskileri,
} from './courses/turkish-unit2';
import {
  TurkishUnit3Video,
  TOTAL_UNIT3_FRAMES,
  SCENE_DURATION_FRAMES_U3,
  Scene1_HikayeUnsurlari,
  Scene2_MasalVeSiir,
  Scene3_Deyimler,
  Scene4_AtasozuDeyimFark,
} from './courses/turkish-unit3';
import {
  TurkishUnit4Video,
  TOTAL_UNIT4_FRAMES,
  SCENE_DURATION_FRAMES_U4,
  Scene1_IsimSifat,
  Scene2_ZamirFiil,
  Scene3_YuklemOzne,
  Scene4_NesneVeDuzen,
} from './courses/turkish-unit4';
import {
  TurkishUnit5Video,
  TOTAL_UNIT5_FRAMES,
  SCENE_DURATION_FRAMES_U5,
  Scene1_OznelNesnel,
  Scene2_NedenSonucAmacSonuc,
  Scene3_Karsilastirma,
  Scene4_GenelOzel,
} from './courses/turkish-unit5';
import {
  TurkishUnit6Video,
  TOTAL_UNIT6_FRAMES,
  SCENE_DURATION_FRAMES_U6,
  Scene1_BuyukHarfler,
  Scene2_MiVeDeYazimi,
  Scene3_TemelNoktalama,
  Scene4_UnlemSoruKesme,
} from './courses/turkish-unit6';
import {
  TurkishUnit7Video,
  TOTAL_UNIT7_FRAMES,
  SCENE_DURATION_FRAMES_U7,
  Scene1_GorselOkuma,
  Scene2_BenzetmeSanati,
  Scene3_KisilestirmeSanati,
  Scene4_BetimlemeSanati,
} from './courses/turkish-unit7';
import { VIDEO_CONFIG } from './design-tokens';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 60 Saniyelik Örnek Demo Sahnesi */}
      <Composition
        id="Demo60sScene"
        component={Demo60sScene}
        durationInFrames={VIDEO_CONFIG.demoDurationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />

      {/* =========================================================================
          TÜRKÇE 1. ÜNİTE - HARF, HECE VE SÖZCÜKTE ANLAM (125 Saniye / 3750 Frame)
          ========================================================================= */}
      <Composition
        id="TurkishUnit1Video"
        component={TurkishUnit1Video}
        durationInFrames={TOTAL_UNIT1_FRAMES}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition id="TurkishUnit1-Adim1-Harfler" component={Scene1_Harfler} durationInFrames={SCENE_DURATION_FRAMES} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit1-Adim2-Heceler" component={Scene2_Heceler} durationInFrames={SCENE_DURATION_FRAMES} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit1-Adim3-GercekAnlam" component={Scene3_GercekAnlam} durationInFrames={SCENE_DURATION_FRAMES} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit1-Adim4-MecazAnlam" component={Scene4_MecazAnlam} durationInFrames={SCENE_DURATION_FRAMES} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit1-Adim5-TerimAnlam" component={Scene5_TerimAnlam} durationInFrames={SCENE_DURATION_FRAMES} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />

      {/* =========================================================================
          TÜRKÇE 2. ÜNİTE - KELİME YAPISI VE ANLAM İLİŞKİLERİ (100 Saniye / 3000 Frame)
          ========================================================================= */}
      <Composition
        id="TurkishUnit2Video"
        component={TurkishUnit2Video}
        durationInFrames={TOTAL_UNIT2_FRAMES}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition id="TurkishUnit2-Adim1-KokVeBasit" component={Scene1_KokVeBasit} durationInFrames={SCENE_DURATION_FRAMES_U2} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit2-Adim2-TuremisKelime" component={Scene2_TuremisKelime} durationInFrames={SCENE_DURATION_FRAMES_U2} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit2-Adim3-BilesikKelime" component={Scene3_BilesikKelime} durationInFrames={SCENE_DURATION_FRAMES_U2} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit2-Adim4-AnlamIliskileri" component={Scene4_AnlamIliskileri} durationInFrames={SCENE_DURATION_FRAMES_U2} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />

      {/* =========================================================================
          TÜRKÇE 3. ÜNİTE - METİN TÜRLERİ VE DEYİMLER (100 Saniye / 3000 Frame)
          ========================================================================= */}
      <Composition
        id="TurkishUnit3Video"
        component={TurkishUnit3Video}
        durationInFrames={TOTAL_UNIT3_FRAMES}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition id="TurkishUnit3-Adim1-HikayeUnsurlari" component={Scene1_HikayeUnsurlari} durationInFrames={SCENE_DURATION_FRAMES_U3} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit3-Adim2-MasalVeSiir" component={Scene2_MasalVeSiir} durationInFrames={SCENE_DURATION_FRAMES_U3} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit3-Adim3-Deyimler" component={Scene3_Deyimler} durationInFrames={SCENE_DURATION_FRAMES_U3} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit3-Adim4-AtasozuDeyimFark" component={Scene4_AtasozuDeyimFark} durationInFrames={SCENE_DURATION_FRAMES_U3} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />

      {/* =========================================================================
          TÜRKÇE 4. ÜNİTE - SÖZCÜK TÜRLERİ VE CÜMLENİN ÖGELERİ (100 Saniye / 3000 Frame)
          ========================================================================= */}
      <Composition
        id="TurkishUnit4Video"
        component={TurkishUnit4Video}
        durationInFrames={TOTAL_UNIT4_FRAMES}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition id="TurkishUnit4-Adim1-IsimSifat" component={Scene1_IsimSifat} durationInFrames={SCENE_DURATION_FRAMES_U4} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit4-Adim2-ZamirFiil" component={Scene2_ZamirFiil} durationInFrames={SCENE_DURATION_FRAMES_U4} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit4-Adim3-YuklemOzne" component={Scene3_YuklemOzne} durationInFrames={SCENE_DURATION_FRAMES_U4} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit4-Adim4-NesneVeDuzen" component={Scene4_NesneVeDuzen} durationInFrames={SCENE_DURATION_FRAMES_U4} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />

      {/* =========================================================================
          TÜRKÇE 5. ÜNİTE - CÜMLEDE ANLAM VE YARGILAR (100 Saniye / 3000 Frame)
          ========================================================================= */}
      <Composition
        id="TurkishUnit5Video"
        component={TurkishUnit5Video}
        durationInFrames={TOTAL_UNIT5_FRAMES}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition id="TurkishUnit5-Adim1-OznelNesnel" component={Scene1_OznelNesnel} durationInFrames={SCENE_DURATION_FRAMES_U5} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit5-Adim2-NedenSonucAmacSonuc" component={Scene2_NedenSonucAmacSonuc} durationInFrames={SCENE_DURATION_FRAMES_U5} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit5-Adim3-Karsilastirma" component={Scene3_Karsilastirma} durationInFrames={SCENE_DURATION_FRAMES_U5} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit5-Adim4-GenelOzel" component={Scene4_GenelOzel} durationInFrames={SCENE_DURATION_FRAMES_U5} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />

      {/* =========================================================================
          TÜRKÇE 6. ÜNİTE - YAZIM KURALLARI VE NOKTALAMA İŞARETLERİ (100 Saniye / 3000 Frame)
          ========================================================================= */}
      <Composition
        id="TurkishUnit6Video"
        component={TurkishUnit6Video}
        durationInFrames={TOTAL_UNIT6_FRAMES}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition id="TurkishUnit6-Adim1-BuyukHarfler" component={Scene1_BuyukHarfler} durationInFrames={SCENE_DURATION_FRAMES_U6} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit6-Adim2-MiVeDeYazimi" component={Scene2_MiVeDeYazimi} durationInFrames={SCENE_DURATION_FRAMES_U6} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit6-Adim3-TemelNoktalama" component={Scene3_TemelNoktalama} durationInFrames={SCENE_DURATION_FRAMES_U6} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit6-Adim4-UnlemSoruKesme" component={Scene4_UnlemSoruKesme} durationInFrames={SCENE_DURATION_FRAMES_U6} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />

      {/* =========================================================================
          TÜRKÇE 7. ÜNİTE - METİN TÜRLERİ, GÖRSEL OKUMA VE SÖZ SANATLARI (100 Saniye / 3000 Frame)
          ========================================================================= */}
      <Composition
        id="TurkishUnit7Video"
        component={TurkishUnit7Video}
        durationInFrames={TOTAL_UNIT7_FRAMES}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition id="TurkishUnit7-Adim1-GorselOkuma" component={Scene1_GorselOkuma} durationInFrames={SCENE_DURATION_FRAMES_U7} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit7-Adim2-BenzetmeSanati" component={Scene2_BenzetmeSanati} durationInFrames={SCENE_DURATION_FRAMES_U7} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit7-Adim3-KisilestirmeSanati" component={Scene3_KisilestirmeSanati} durationInFrames={SCENE_DURATION_FRAMES_U7} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
      <Composition id="TurkishUnit7-Adim4-BetimlemeSanati" component={Scene4_BetimlemeSanati} durationInFrames={SCENE_DURATION_FRAMES_U7} fps={VIDEO_CONFIG.fps} width={VIDEO_CONFIG.width} height={VIDEO_CONFIG.height} />
    </>
  );
};

export default RemotionRoot;
