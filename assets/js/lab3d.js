import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

let R = null;
const MODS = {};
const mat = (c, o) => new THREE.MeshStandardMaterial(Object.assign({color:c, roughness:.55, metalness:.1}, o || {}));
function sprite(text, o){
  o = o || {};
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  g.font = 'bold ' + (o.font || 64) + 'px "Segoe UI", Arial, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 8; g.strokeStyle = 'rgba(0,0,0,.75)'; g.strokeText(text, 128, 64);
  g.fillStyle = o.color || '#ffffff'; g.fillText(text, 128, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({map:t, transparent:true, depthTest:false}));
  const k = o.scale || 1; s.scale.set(2 * k, k, 1); s.renderOrder = 10;
  return s;
}
function lights(scene, amb, dir){
  scene.add(new THREE.AmbientLight(0xffffff, amb == null ? 1.1 : amb));
  const d = new THREE.DirectionalLight(0xffffff, dir == null ? 2.4 : dir);
  d.position.set(5, 9, 7); scene.add(d);
}
function line(pts, color, opacity){
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({color, transparent:true, opacity:opacity == null ? 1 : opacity}));
}
function disposeObj(o){
  o.traverse(x => {
    if (x.geometry) x.geometry.dispose();
    if (x.material) (Array.isArray(x.material) ? x.material : [x.material]).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
  });
}

/* ===== Modül 1: Dünya - Güneş - Ay ===== */
MODS.m1 = {
  cam:[0, 11, 17],
  sliders:[{id:'day', label:'📅 Yılın günü', min:1, max:365, step:1, value:172}],
  buttons:[{id:'play', label:'⏯ Oynat / Duraklat'}],
  build(scene, api){
    // Yıldızlar (Starfield)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1200;
    const starPos = new Float32Array(starCount * 3);
    const starCols = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 55 + Math.random() * 45;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      starPos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      starPos[i * 3 + 2] = r * Math.cos(ph);
      const col = Math.random() > 0.3 ? 0xffffff : (Math.random() > 0.5 ? 0x90caf9 : 0xffe082);
      const cc = new THREE.Color(col);
      starCols[i * 3] = cc.r; starCols[i * 3 + 1] = cc.g; starCols[i * 3 + 2] = cc.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCols, 3));
    const starMat = new THREE.PointsMaterial({size: 1.1, vertexColors: true, transparent: true, opacity: 0.85});
    scene.add(new THREE.Points(starGeo, starMat));

    scene.add(new THREE.AmbientLight(0xffffff, .65));
    const sunLight = new THREE.PointLight(0xfff3e0, 5, 0, 0);
    scene.add(sunLight);

    // Güneş
    const sun = new THREE.Mesh(new THREE.SphereGeometry(1.85, 48, 48), new THREE.MeshBasicMaterial({color:0xffd54f}));
    scene.add(sun);
    
    // Corona Parlaması
    const flareCv = document.createElement('canvas'); flareCv.width = 256; flareCv.height = 256;
    const fg = flareCv.getContext('2d');
    const fGrad = fg.createRadialGradient(128, 128, 15, 128, 128, 128);
    fGrad.addColorStop(0, 'rgba(255, 255, 220, 1)');
    fGrad.addColorStop(0.35, 'rgba(255, 183, 77, 0.7)');
    fGrad.addColorStop(0.7, 'rgba(255, 112, 67, 0.25)');
    fGrad.addColorStop(1, 'rgba(255, 87, 34, 0)');
    fg.fillStyle = fGrad; fg.fillRect(0, 0, 256, 256);
    const flareTex = new THREE.CanvasTexture(flareCv);
    const flareMat = new THREE.SpriteMaterial({map: flareTex, transparent: true, blending: THREE.AdditiveBlending});
    const flareSprite = new THREE.Sprite(flareMat);
    flareSprite.scale.set(9.5, 9.5, 1);
    scene.add(flareSprite);

    const sl = sprite('Güneş', {scale:1.2, font:60, color:'#ffe082'}); sl.position.set(0, 3.8, 0); scene.add(sl);

    // Yörünge Halkası
    const pts = []; for (let i = 0; i <= 128; i++){ const a = i / 128 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * 7, 0, Math.sin(a) * 7)); }
    scene.add(line(pts, 0x4fc3f7, .65));

    // 4 Ekinoks / Gün Dönümü Noktaları (Yörüngenin dışına yerleştirildi, Dünya ile çarpışma engellendi)
    const seasonsInfo = [
      { name: "🌸 21 Mart (İlkbahar)", col: "#81c784", a: (80 - 354) / 365 * Math.PI * 2 },
      { name: "☀️ 21 Haziran (Yaz)", col: "#ffb74d", a: (172 - 354) / 365 * Math.PI * 2 },
      { name: "🍂 23 Eylül (Sonbahar)", col: "#ff8a80", a: (265 - 354) / 365 * Math.PI * 2 },
      { name: "❄️ 21 Aralık (Kış)", col: "#90caf9", a: 0 }
    ];
    seasonsInfo.forEach(s => {
      const orbitPos = new THREE.Vector3(Math.cos(s.a) * 7, 0, Math.sin(s.a) * 7);
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), new THREE.MeshBasicMaterial({color: s.col}));
      dot.position.copy(orbitPos); scene.add(dot);

      const outerPos = new THREE.Vector3(Math.cos(s.a) * 8.8, 0, Math.sin(s.a) * 8.8);
      scene.add(line([orbitPos, outerPos], parseInt(s.col.replace('#', '0x')), 0.35));

      const pin = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshBasicMaterial({color: s.col}));
      pin.position.copy(outerPos); scene.add(pin);
      const lbl = sprite(s.name, {scale: 0.72, font: 46, color: s.col});
      lbl.position.set(outerPos.x, 0.55, outerPos.z); scene.add(lbl);
    });

    // Dünya Dokusu (Yedek Canvas)
    const c = document.createElement('canvas'); c.width = 512; c.height = 256;
    const g = c.getContext('2d');
    g.fillStyle = '#1e6fd9'; g.fillRect(0, 0, 512, 256); g.fillStyle = '#3fae4b';
    [[90,90,50,30],[150,160,30,40],[300,80,70,35],[380,150,45,30],[270,175,25,20],[440,70,30,20],[60,175,30,15]].forEach(b => { g.beginPath(); g.ellipse(b[0], b[1], b[2], b[3], 0, 0, 7); g.fill(); });
    g.fillStyle = '#fff'; g.fillRect(0, 0, 512, 14); g.fillRect(0, 242, 512, 14);
    
    const texLoader = new THREE.TextureLoader();
    const earthTex = texLoader.load('/assets/textures/earth.jpg', () => {}, undefined, () => { earthTex.image = c; earthTex.needsUpdate = true; });
    earthTex.colorSpace = THREE.SRGBColorSpace;
    const cloudsTex = texLoader.load('/assets/textures/earth_clouds.png', () => {}, undefined, () => {});
    cloudsTex.colorSpace = THREE.SRGBColorSpace;
    const moonTex = texLoader.load('/assets/textures/moon.jpg', () => {}, undefined, () => {});
    moonTex.colorSpace = THREE.SRGBColorSpace;

    const eg = new THREE.Group(); scene.add(eg);
    const tilt = new THREE.Group(); tilt.rotation.z = -23.5 * Math.PI / 180; eg.add(tilt);

    // Dünya Küresi
    const earth = new THREE.Mesh(new THREE.SphereGeometry(.82, 48, 48), new THREE.MeshStandardMaterial({map:earthTex, roughness:.65, metalness:.05}));
    tilt.add(earth);

    // Bulut Katmanı
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(.84, 48, 48), new THREE.MeshStandardMaterial({map:cloudsTex, transparent:true, opacity:.55, blending:THREE.AdditiveBlending}));
    tilt.add(clouds);

    // Eksen Çizgisi ve Kutuplar
    tilt.add(line([new THREE.Vector3(0, -1.35, 0), new THREE.Vector3(0, 1.35, 0)], 0xff5252));
    const nl = sprite('Kuzey Kutbu (K)', {scale:.58, font:48, color:'#ff5252'}); nl.position.set(0, 1.55, 0); tilt.add(nl);
    const slbl = sprite('Güney Kutbu (G)', {scale:.58, font:48, color:'#82b1ff'}); slbl.position.set(0, -1.55, 0); tilt.add(slbl);

    // Ay
    const moon = new THREE.Mesh(new THREE.SphereGeometry(.23, 32, 32), new THREE.MeshStandardMaterial({map:moonTex, roughness:.85})); 
    eg.add(moon);
    const ml = sprite('Ay', {scale:.52, font:52, color:'#e0e0e0'}); ml.position.set(0, .5, 0); moon.add(ml);

    let day = 172, play = true, ma = 0;
    const season = d => d >= 80 && d < 172 ? '🌸 İlkbahar' : d >= 172 && d < 265 ? '☀️ Yaz' : d >= 265 && d < 354 ? '🍂 Sonbahar' : '❄️ Kış';
    function place(){ const th = (day - 354) / 365 * Math.PI * 2; eg.position.set(Math.cos(th) * 7, 0, Math.sin(th) * 7); }
    function live(){ const d = Math.round(day); api.info('Gün <b>' + d + '</b> · Kuzey Yarım Küre: <b>' + season(d) + '</b> · Eksen Eğikliği: <b>23.5°</b>'); }
    place(); live();
    return {
      update(t, dt){
        if (play){ day += dt * 18; if (day > 365) day -= 365; api.sync('day', Math.round(day)); place(); live(); }
        earth.rotation.y += dt * 4;
        clouds.rotation.y += dt * 4.6;
        moon.rotation.y += dt * 1.5;
        ma += dt * 1.6;
        moon.position.set(Math.cos(ma) * 1.6, Math.sin(ma * .5) * .18, Math.sin(ma) * 1.6);
        sun.rotation.y += dt * .2;
      },
      set(id, v){ if (id === 'day'){ play = false; day = v; place(); live(); } },
      act(id){ if (id === 'play') play = !play; if (id === 'run') play = true; if (id === 'pause') play = false; }
    };
  }
};

/* ===== Modül 2: Kesirler ve geometrik bloklar ===== */
MODS.m2 = {
  cam:[0, 8, 10],
  sliders:[{id:'den', label:'➗ Payda (parça sayısı)', min:1, max:12, step:1, value:8}, {id:'num', label:'🔢 Pay (boyalı parça)', min:0, max:12, step:1, value:3}],
  buttons:[{id:'pie', label:'🥧 Pasta'}, {id:'bar', label:'📊 Çubuk'}, {id:'blk', label:'🧱 Bloklar'}],
  build(scene, api){
    lights(scene, 1.1, 2.4);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 11), mat(0x1a237e, {roughness:1}));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -.5; scene.add(floor);
    let obj = new THREE.Group(); scene.add(obj);
    let den = 8, num = 3, mode = 'pie';
    const ON = 0xff7043, OFF = 0x90a4ae;
    const part = (geo, on) => new THREE.Mesh(geo, mat(on ? ON : OFF, {transparent:!on, opacity:on ? 1 : .55}));
    function rebuild(){
      scene.remove(obj); disposeObj(obj); obj = new THREE.Group(); scene.add(obj);
      if (num > den) num = den;
      if (mode === 'pie'){
        const L = Math.PI * 2 / den, gap = den > 1 ? .05 : 0;
        for (let i = 0; i < den; i++){
          const on = i < num;
          const m = part(new THREE.CylinderGeometry(3, 3, on ? 1 : .6, 48, 1, false, i * L, Math.max(.01, L - gap)), on);
          const mid = i * L + L / 2;
          if (on && den > 1) m.position.set(Math.sin(mid) * .25, .2, Math.cos(mid) * .25);
          obj.add(m);
        }
      } else if (mode === 'bar'){
        const w = 8 / den;
        for (let i = 0; i < den; i++){
          const on = i < num;
          const m = part(new THREE.BoxGeometry(w - .08, on ? 1.6 : 1, 1.6), on);
          m.position.set(-4 + w * (i + .5), on ? .3 : 0, 0); obj.add(m);
        }
      } else {
        const cols = Math.min(den, 6), rows = Math.ceil(den / cols);
        for (let i = 0; i < den; i++){
          const on = i < num;
          const m = part(new THREE.BoxGeometry(1.2, 1.2, 1.2), on);
          m.position.set((i % cols - (cols - 1) / 2) * 1.4, .1, (Math.floor(i / cols) - (rows - 1) / 2) * 1.4); obj.add(m);
        }
      }
      const lb = sprite(num + '/' + den, {scale:2, font:90, color:'#ffe082'}); lb.position.set(0, 3.2, 0); obj.add(lb);
      api.applyWire(); live();
    }
    function live(){ api.info('<b>' + num + '/' + den + '</b> · Pay: ' + num + ' · Payda: ' + den + ' · ≈ %' + Math.round(num / den * 100) + (num === den ? ' · Tam bir bütün!' : '')); }
    rebuild();
    return {
      update(t, dt){ if (mode === 'pie') obj.rotation.y += dt * .25; },
      set(id, v){
        if (id === 'den'){ den = v; if (num > den){ num = den; api.sync('num', num); } }
        if (id === 'num') num = Math.min(v, den);
        rebuild();
      },
      act(id){ mode = id; rebuild(); }
    };
  }
};

/* ===== Modül 3: Mıknatıs kutupları ===== */
MODS.m3 = {
  cam:[0, 6, 12],
  sliders:[{id:'dist', label:'↔️ Mıknatıslar arası mesafe', min:1, max:8, step:.1, value:4}],
  buttons:[{id:'flip', label:'🔄 Sağ Mıknatısı Çevir'}, {id:'field', label:'🧲 Alan Çizgileri'}],
  build(scene, api){
    lights(scene, 1.2, 2.5);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 12), mat(0x101a42, {roughness:0.95}));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -.8; scene.add(floor);
    let d = 4, flip = false, showField = true;
    function field(){
      const g = new THREE.Group();
      for (let j = 0; j < 4; j++) for (let k = 0; k < 4; k++){
        const B = 1 + j * .9, ph = k * Math.PI / 2, pts = [];
        for (let i = 0; i <= 32; i++){ const s = i / 32 * Math.PI, r = B * Math.sin(s); pts.push(new THREE.Vector3(2 * Math.cos(s), r * Math.cos(ph), r * Math.sin(ph))); }
        g.add(line(pts, 0xffee58, .75));
      }
      return g;
    }
    function magnet(){
      const g = new THREE.Group();
      const a = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 1.2), mat(0xd32f2f, {roughness:0.35, metalness:0.4})); a.position.x = 1;
      const b = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 1.2), mat(0x1976d2, {roughness:0.35, metalness:0.4})); b.position.x = -1;
      const n = sprite('N (Kuzey)', {scale:.85, color:'#ff8a80', font:64}); n.position.set(1, 1.35, 0);
      const s = sprite('S (Güney)', {scale:.85, color:'#82b1ff', font:64}); s.position.set(-1, 1.35, 0);
      const f = field(); g.userData.field = f;
      g.add(a, b, n, s, f); return g;
    }
    const MA = magnet(), MB = magnet(); scene.add(MA, MB);

    // Hareketli Manyetik Akı Parçacıkları (Flowing Magnetic Particles)
    const pCount = 32;
    const pGeo = new THREE.SphereGeometry(0.065, 8, 8);
    const pMat = new THREE.MeshBasicMaterial({color: 0xffca28});
    const pGroup = new THREE.Group(); scene.add(pGroup);
    const particles = [];
    for (let i = 0; i < pCount; i++) {
      const pm = new THREE.Mesh(pGeo, pMat);
      pm.userData = { t: Math.random(), b: 1 + (i % 3) * 0.9, ph: (i % 4) * Math.PI / 2, spd: 0.25 + Math.random() * 0.2 };
      pGroup.add(pm);
      particles.push(pm);
    }

    function place(){
      MA.position.x = -(d / 2 + 2); MB.position.x = d / 2 + 2; MB.rotation.y = flip ? Math.PI : 0;
      MA.userData.field.visible = MB.userData.field.visible = pGroup.visible = showField;
      const f = 1 / (d * d), bars = Math.max(1, Math.min(10, Math.round(f * 8)));
      api.info('Mesafe: <b>' + d.toFixed(1) + '</b> birim · Yüzleşen kutuplar: <b>' + (flip ? 'N – N' : 'N – S') + '</b> → <b style="color:' + (flip ? '#ff8a80' : '#a5d6a7') + '">' + (flip ? 'İTME KUVVETİ 💥' : 'ÇEKME KUVVETİ 🤝') + '</b> · Kuvvet: ' + '█'.repeat(bars) + '░'.repeat(10 - bars));
    }
    place();
    return {
      update(t, dt){
        const a = Math.min(.07, .05 / (d * d));
        MB.position.x = d / 2 + 2 + Math.sin(t * 30) * a * (flip ? 1 : -1);
        if (showField) {
          particles.forEach(p => {
            p.userData.t = (p.userData.t + dt * p.userData.spd) % 1;
            const s = p.userData.t * Math.PI;
            const r = p.userData.b * Math.sin(s);
            p.position.set(MA.position.x + 2 * Math.cos(s), r * Math.cos(p.userData.ph), r * Math.sin(p.userData.ph));
          });
        }
      },
      set(id, v){ if (id === 'dist'){ d = v; place(); } },
      act(id){ if (id === 'flip') flip = !flip; if (id === 'flipOn') flip = true; if (id === 'flipOff') flip = false; if (id === 'field') showField = !showField; place(); }
    };
  }
};

/* ===== Modül 4: Basit elektrik devresi ===== */
MODS.m4 = {
  cam:[0, 1.5, 12],
  sliders:[{id:'cells', label:'🔋 Pil sayısı', min:1, max:4, step:1, value:2}],
  buttons:[{id:'sw', label:'🔘 Anahtarı Aç / Kapat'}],
  build(scene, api){
    lights(scene, 1.0, 2.0);
    let cells = 2, closed = true;
    const wireM = mat(0xb0bec5, {metalness:.8, roughness:.3});
    const Y = new THREE.Vector3(0, 1, 0);
    function seg(a, b){
      const va = new THREE.Vector3(a[0], a[1], 0), vb = new THREE.Vector3(b[0], b[1], 0), len = va.distanceTo(vb);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, len, 10), wireM);
      m.position.copy(va).add(vb).multiplyScalar(.5);
      m.quaternion.setFromUnitVectors(Y, vb.clone().sub(va).normalize()); scene.add(m);
      const s = new THREE.Mesh(new THREE.SphereGeometry(.07, 10, 10), wireM); s.position.copy(va); scene.add(s);
    }
    const P = [[-4, .6], [-4, 2], [4, 2], [4, -2], [-4, -2], [-4, -.6]];
    for (let i = 0; i < P.length - 1; i++) seg(P[i], P[i + 1]);
    const endS = new THREE.Mesh(new THREE.SphereGeometry(.07, 10, 10), wireM); endS.position.set(-4, -.6, 0); scene.add(endS);
    // anahtar
    [-.6, .6].forEach(y => { const p = new THREE.Mesh(new THREE.SphereGeometry(.16, 16, 16), mat(0xffd54f, {metalness:.7})); p.position.set(-4, y, 0); scene.add(p); });
    const pivot = new THREE.Group(); pivot.position.set(-4, -.6, 0); scene.add(pivot);
    const lever = new THREE.Mesh(new THREE.BoxGeometry(.12, 1.25, .12), mat(0xd32f2f)); lever.position.y = .62; pivot.add(lever);
    const swl = sprite('Anahtar', {scale:.65, font:52, color:'#ffd54f'}); swl.position.set(-5.3, 0, 0); scene.add(swl);
    // ampul
    const bulbMat = new THREE.MeshStandardMaterial({color:0xfff9c4, emissive:0xffeb3b, emissiveIntensity:0, transparent:true, opacity:.75, roughness:.15});
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(.65, 32, 32), bulbMat); bulb.position.set(0, 2.75, 0); scene.add(bulb);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .35, 20), mat(0x9e9e9e, {metalness:.9, roughness:.2})); base.position.set(0, 2.1, 0); scene.add(base);
    const filPts = [new THREE.Vector3(-0.12, 2.5, 0), new THREE.Vector3(-0.06, 2.8, 0), new THREE.Vector3(0, 2.85, 0), new THREE.Vector3(0.06, 2.8, 0), new THREE.Vector3(0.12, 2.5, 0)];
    const filMat = new THREE.LineBasicMaterial({color:0xffee58, linewidth:3});
    const filLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(filPts), filMat); scene.add(filLine);
    const bl = sprite('Ampul', {scale:.65, font:52, color:'#fff59d'}); bl.position.set(0, 3.8, 0); scene.add(bl);
    const bulbLight = new THREE.PointLight(0xffe082, 0, 0, 0); bulbLight.position.set(0, 2.75, 1); scene.add(bulbLight);
    // piller
    let pack = new THREE.Group(); scene.add(pack);
    function buildPack(){
      scene.remove(pack); disposeObj(pack); pack = new THREE.Group();
      for (let i = 0; i < cells; i++){
        const body = new THREE.Mesh(new THREE.CylinderGeometry(.45, .45, .9, 24), mat(0x43a047)); body.rotation.z = Math.PI / 2;
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(.18, .18, .12, 16), mat(0xffd54f, {metalness:.8})); cap.rotation.z = Math.PI / 2; cap.position.x = .5;
        const g = new THREE.Group(); g.add(body, cap); g.position.x = (i - (cells - 1) / 2) * 1.1; pack.add(g);
      }
      pack.position.set(0, -2, 0);
      const t = sprite(cells + ' Pil (' + (cells * 1.5).toFixed(1) + ' V)', {scale:.65, font:48, color:'#a5d6a7'});
      t.position.set(0, 1.15, 0); pack.add(t);
      scene.add(pack); api.applyWire();
    }
    // elektronlar
    const loop = [[-4, -.6], [-4, -2], [4, -2], [4, 2], [-4, 2], [-4, .6], [-4, -.6]];
    const cum = [0]; for (let i = 1; i < loop.length; i++) cum.push(cum[i - 1] + Math.hypot(loop[i][0] - loop[i - 1][0], loop[i][1] - loop[i - 1][1]));
    const L = cum[cum.length - 1], N = 18;
    const em = new THREE.MeshBasicMaterial({color:0x4fc3f7});
    const els = []; for (let i = 0; i < N; i++){ const e = new THREE.Mesh(new THREE.SphereGeometry(.1, 10, 10), em); scene.add(e); els.push(e); }
    function at(s){ s = ((s % L) + L) % L; let i = 1; while (i < cum.length - 1 && cum[i] < s) i++; const f = (s - cum[i - 1]) / (cum[i] - cum[i - 1]); return [loop[i - 1][0] + (loop[i][0] - loop[i - 1][0]) * f, loop[i - 1][1] + (loop[i][1] - loop[i - 1][1]) * f]; }
    let off = 0;
    function live(){ const pct = closed ? cells * 25 : 0; api.info('Anahtar: <b>' + (closed ? 'KAPALI (devre tamam)' : 'AÇIK (devre kesik)') + '</b> · Pil: ' + cells + ' (' + (cells * 1.5).toFixed(1) + ' V) · Ampul parlaklığı: <b>%' + pct + '</b>'); }
    buildPack(); live();
    return {
      update(t, dt){
        pivot.rotation.z += ((closed ? 0 : -.9) - pivot.rotation.z) * Math.min(1, dt * 10);
        if (closed) off += dt * (.8 + cells * .9);
        els.forEach((e, i) => { const p = at(off + i * L / N); e.position.set(p[0], p[1], .12); e.visible = closed; });
        const k = closed ? .35 + cells * .55 : 0;
        bulbMat.emissiveIntensity += (k - bulbMat.emissiveIntensity) * Math.min(1, dt * 8);
        bulbLight.intensity = closed ? cells * 1.6 : 0;
        filMat.color.set(closed ? 0xffffff : 0x616161);
      },
      set(id, v){ if (id === 'cells'){ cells = Math.round(v); buildPack(); live(); } },
      act(id){ if (id === 'sw'){ closed = !closed; live(); } if (id === 'on'){ closed = true; live(); } if (id === 'off'){ closed = false; live(); } }
    };
  }
};

/* ===== Modül 5: Pusula ve yeryüzü şekilleri ===== */
MODS.m5 = {
  cam:[-2.5, 11, 15], target:[-2.5, .5, 0],
  sliders:[{id:'bearing', label:'🧭 Bakış yönü (derece)', min:0, max:359, step:1, value:45}, {id:'hs', label:'⛰️ Yükseklik ölçeği', min:.2, max:2.5, step:.1, value:1}],
  buttons:[{id:'col', label:'🎨 Yükselti Renkleri'}],
  build(scene, api){
    lights(scene, 1.1, 2.4);
    const S = 12, N = 60;
    const geo = new THREE.PlaneGeometry(S, S, N, N); geo.rotateX(-Math.PI / 2);
    const hf = (x, z) => 1.6 * Math.exp(-((x - 2) ** 2 + (z + 1) ** 2) / 3.5) + 1.1 * Math.exp(-((x + 2.5) ** 2 + (z - 1.5) ** 2) / 2.5) + .5 * Math.exp(-((x - 1) ** 2 + (z - 3) ** 2) / 2) + .1 * Math.sin(x * 1.3) * Math.cos(z * 1.1) + .1;
    const pos = geo.attributes.position; let maxH = 0;
    for (let i = 0; i < pos.count; i++){ const h = Math.max(0, hf(pos.getX(i), pos.getZ(i))); pos.setY(i, h); if (h > maxH) maxH = h; }
    const cols = new Float32Array(pos.count * 3), lo = new THREE.Color(0x4caf50), mid = new THREE.Color(0x8d6e63), hi = new THREE.Color(0xffffff), cc = new THREE.Color();
    for (let i = 0; i < pos.count; i++){ const t = pos.getY(i) / maxH; if (t < .5) cc.copy(lo).lerp(mid, t * 2); else cc.copy(mid).lerp(hi, (t - .5) * 2); cols[i * 3] = cc.r; cols[i * 3 + 1] = cc.g; cols[i * 3 + 2] = cc.b; }
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3)); geo.computeVertexNormals();
    const tm = new THREE.MeshStandardMaterial({vertexColors:true, flatShading:true, roughness:.95});
    const terr = new THREE.Mesh(geo, tm); scene.add(terr);
    const base = new THREE.Mesh(new THREE.BoxGeometry(S, .4, S), mat(0x5d4037)); base.position.y = -.2; scene.add(base);
    const card = (t, x, z, col) => { const s = sprite(t, {scale:1.0, font:76, color:col || '#fff'}); s.position.set(x, 1.4, z); scene.add(s); };
    card('K', 0, -7.2, '#ff8a80'); card('G', 0, 7.2); card('D', 7.2, 0); card('B', -7.2, 0);
    // pusula kadranı
    const dial = new THREE.Group(); dial.position.set(-9.5, .2, 0); scene.add(dial);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, .2, 48), mat(0xeceff1)); dial.add(disc);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, .1, 12, 48), mat(0xffb300, {metalness:.7})); ring.rotation.x = Math.PI / 2; ring.position.y = .1; dial.add(ring);
    const dl = (t, x, z, c) => { const s = sprite(t, {scale:.75, font:76, color:c}); s.position.set(x, .9, z); dial.add(s); };
    dl('K', 0, -3.0, '#ff8a80'); dl('G', 0, 3.0, '#fff'); dl('D', 3.0, 0, '#fff'); dl('B', -3.0, 0, '#fff');
    const rc = new THREE.Mesh(new THREE.ConeGeometry(.24, 1.7, 16).rotateX(-Math.PI / 2), mat(0xe53935)); rc.position.set(0, .35, -.85); dial.add(rc);
    const wc = new THREE.Mesh(new THREE.ConeGeometry(.24, 1.7, 16).rotateX(Math.PI / 2), mat(0xf5f5f5)); wc.position.set(0, .35, .85); dial.add(wc);
    const arrowDial = new THREE.Group(); arrowDial.position.set(0, .6, 0); dial.add(arrowDial);
    const ad = new THREE.Mesh(new THREE.ConeGeometry(.2, 1.9, 16).rotateX(-Math.PI / 2), mat(0xffeb3b, {emissive:0x665500})); ad.position.z = -1.0; arrowDial.add(ad);
    const dlab = sprite('Pusula', {scale:.8, font:56}); dlab.position.set(0, 1.9, 0); dial.add(dlab);
    // gezgin oku
    const walker = new THREE.Group(); scene.add(walker);
    const wb = new THREE.Mesh(new THREE.SphereGeometry(.28, 16, 16), mat(0xffeb3b)); walker.add(wb);
    const wa = new THREE.Mesh(new THREE.ConeGeometry(.22, 1.4, 16).rotateX(-Math.PI / 2), mat(0xff7043)); wa.position.z = -.9; walker.add(wa);
    const names = ['Kuzey', 'Kuzeydoğu', 'Doğu', 'Güneydoğu', 'Güney', 'Güneybatı', 'Batı', 'Kuzeybatı'];
    let b = 45, hs = 1, colors = true;
    function apply(){
      terr.scale.y = hs;
      walker.position.set(0, Math.max(0, hf(0, 0)) * hs + .45, 0); walker.rotation.y = -b * Math.PI / 180;
      arrowDial.rotation.y = -b * Math.PI / 180;
      api.info('Yön: <b>' + names[Math.round(b / 45) % 8] + '</b> (' + b + '°) · Pusula iğnesi hep <b>Kuzey</b>\'i gösterir · En yüksek tepe: ~' + Math.round(maxH * hs * 1000) + ' m');
    }
    apply();
    return {
      update(t, dt){ walker.children[0].scale.setScalar(1 + Math.sin(t * 4) * .08); },
      set(id, v){ if (id === 'bearing') b = Math.round(v); if (id === 'hs') hs = v; apply(); },
      act(id){ if (id === 'col'){ colors = !colors; tm.vertexColors = colors; tm.color.set(colors ? 0xffffff : 0x8d6e63); tm.needsUpdate = true; } }
    };
  }
};

/* ===== Modül 6: İngilizce kelime kristalleri ===== */
MODS.m6 = {
  cam:[0, 6, 13],
  sliders:[{id:'speed', label:'🌀 Dönme hızı', min:0, max:3, step:.1, value:1}],
  buttons:[{id:'next', label:'⏭ Sonraki Kelime'}, {id:'say', label:'🔊 Tekrar Söyle'}],
  build(scene, api){
    lights(scene, 1.0, 2.2);
    const W = [['apple','elma'],['book','kitap'],['cat','kedi'],['dog','köpek'],['school','okul'],['teacher','öğretmen'],['friend','arkadaş'],['family','aile'],['house','ev'],['water','su'],['sun','güneş'],['moon','ay']];
    const ring = new THREE.Group(); scene.add(ring);
    const cr = [];
    W.forEach((w, i) => {
      const col = new THREE.Color().setHSL(i / W.length, .75, .55);
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(.95), new THREE.MeshStandardMaterial({color:col, transparent:true, opacity:.88, roughness:.15, metalness:.35, emissive:col, emissiveIntensity:.15}));
      const a = i / W.length * Math.PI * 2; m.position.set(Math.cos(a) * 5.2, 0, Math.sin(a) * 5.2);
      m.userData.i = i; const lb = sprite(w[0], {scale:1.1, font:64}); lb.position.set(0, 1.6, 0); m.add(lb);
      ring.add(m); cr.push(m);
    });
    let speed = 1, sel = 0;
    function select(i, say){
      sel = i; cr.forEach((m, k) => m.scale.setScalar(k === i ? 1.45 : 1));
      api.info('<b style="font-size:16px">' + W[i][0] + '</b> = ' + W[i][1] + ' · (kristale tıkla, kelimeyi dinle)');
      const img = document.getElementById('lsnSlideImg'), tit = document.getElementById('lsnSlideTitle'), sc = document.getElementById('lsnSlideCard');
      if (img && tit && sc && sc.classList.contains('show')) {
        img.src = 'assets/images/word_' + W[i][0] + '.svg';
        tit.textContent = '📌 ' + W[i][0] + ' = ' + W[i][1];
      }
      if (say && window.speak && !(window.Lesson && Lesson.active())) window.speak(W[i][0], 'en-US');
    }
    select(0, false);
    return {
      update(t, dt){ ring.rotation.y += dt * speed * .3; cr.forEach((m, k) => { m.rotation.y += dt * 1.2; m.rotation.x = Math.sin(t + k) * .2; }); },
      set(id, v){ if (id === 'speed') speed = v; },
      act(id){ if (/^w\d+$/.test(id)) select(parseInt(id.slice(1), 10), false); if (id === 'next') select((sel + 1) % W.length, true); if (id === 'say' && window.speak) window.speak(W[sel][0], 'en-US'); },
      pick(rc){ const h = rc.intersectObjects(cr, false); if (h.length) select(h[0].object.userData.i, true); }
    };
  }
};

/* ===== Motor ===== */
const fmt = v => (Math.round(v * 100) / 100).toString();
function applyWire(){ if (!R || !R.scene) return; R.scene.traverse(o => { if (o.isMesh) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { m.wireframe = R.wire; }); }); }
function mount(stage){
  dispose();
  const holder = stage.querySelector('#labCanvas');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({antialias:true}); }
  catch (e) { holder.innerHTML = '<p style="padding:24px">⚠️ Tarayıcın WebGL desteklemiyor veya kapalı; 3D sahne açılamadı.</p>'; return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  holder.appendChild(renderer.domElement);
  const camera = new THREE.PerspectiveCamera(50, 1, .1, 300);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.minDistance = 2; controls.maxDistance = 45;
  R = {stage, holder, renderer, camera, controls, scene:null, mod:null, def:null, wire:false, raf:0, last:performance.now(), live:stage.querySelector('#labLive'), ctl:stage.querySelector('#labControls'), lastInfo:''};
  const resize = () => { const w = holder.clientWidth || 600, h = holder.clientHeight || 400; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); };
  R.ro = new ResizeObserver(resize); R.ro.observe(holder); resize();
  let down = null; const cv = renderer.domElement;
  cv.addEventListener('pointerdown', e => { down = [e.clientX, e.clientY]; });
  cv.addEventListener('pointerup', e => {
    if (!down || !R) return;
    const moved = Math.hypot(e.clientX - down[0], e.clientY - down[1]); down = null;
    if (moved > 5 || !R.mod || !R.mod.pick) return;
    const r = cv.getBoundingClientRect(), rc = new THREE.Raycaster();
    rc.setFromCamera(new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera);
    R.mod.pick(rc);
  });
  const loop = now => {
    if (!R) return;
    R.raf = requestAnimationFrame(loop);
    const dt = Math.min(.05, (now - R.last) / 1000); R.last = now;
    if (R.mod) R.mod.update(now / 1000, dt);
    if (R.tween){ const tw = R.tween, k = Math.min(1, (performance.now() - tw.t0) / tw.ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; camera.position.lerpVectors(tw.p0, tw.p1, e); controls.target.lerpVectors(tw.g0, tw.g1, e); if (k >= 1) R.tween = null; }
    controls.update();
    if (R.scene) renderer.render(R.scene, camera);
  };
  R.raf = requestAnimationFrame(loop);
}
function stars(scene){
  const p = []; for (let i = 0; i < 500; i++){ const v = new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize().multiplyScalar(70 + Math.random() * 20); p.push(v); }
  scene.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(p), new THREE.PointsMaterial({color:0xffffff, size:.35, sizeAttenuation:true})));
}
function load(id){
  if (!R || !MODS[id]) return;
  if (R.scene) disposeObj(R.scene);
  const def = MODS[id]; R.def = def; R.lastInfo = '';
  R.scene = new THREE.Scene(); R.scene.background = new THREE.Color(0x070b1f); stars(R.scene);
  const api = {
    info(h){ if (R && h !== R.lastInfo){ R.lastInfo = h; R.live.innerHTML = h; } },
    sync(sid, v){ if (!R) return; const e = R.ctl.querySelector('[data-s="' + sid + '"]'); if (e){ e.value = v; const o = R.ctl.querySelector('[data-o="' + sid + '"]'); if (o) o.textContent = fmt(v); } },
    applyWire
  };
  R.mod = def.build(R.scene, api);
  R.ctl.innerHTML = def.sliders.map(s => '<label class="sl">' + s.label + ' <b data-o="' + s.id + '">' + fmt(s.value) + '</b><input type="range" data-s="' + s.id + '" min="' + s.min + '" max="' + s.max + '" step="' + s.step + '" value="' + s.value + '"></label>').join('') + def.buttons.map(b => '<button class="btn sm" data-b="' + b.id + '">' + b.label + '</button>').join('');
  R.ctl.querySelectorAll('input[data-s]').forEach(inp => inp.addEventListener('input', () => { const v = parseFloat(inp.value); R.ctl.querySelector('[data-o="' + inp.dataset.s + '"]').textContent = fmt(v); R.mod.set(inp.dataset.s, v); }));
  R.ctl.querySelectorAll('button[data-b]').forEach(btn => btn.addEventListener('click', () => R.mod.act(btn.dataset.b)));
  reset(); applyWire();
}
function zoom(f){ if (!R) return; const v = R.camera.position.clone().sub(R.controls.target).multiplyScalar(f); const l = Math.max(2.5, Math.min(44, v.length())); v.setLength(l); R.camera.position.copy(R.controls.target).add(v); }
function toggleWire(){ if (!R) return; R.wire = !R.wire; applyWire(); }
function reset(){ if (!R || !R.def) return; R.tween = null; R.camera.position.set.apply(R.camera.position, R.def.cam); R.controls.target.set.apply(R.controls.target, R.def.target || [0, 0, 0]); R.controls.update(); }
function fullscreen(){ if (!R) return; if (document.fullscreenElement) document.exitFullscreen(); else if (R.stage.requestFullscreen) R.stage.requestFullscreen(); }
function dispose(){
  if (!R) return;
  cancelAnimationFrame(R.raf); if (R.ro) R.ro.disconnect();
  if (R.scene) disposeObj(R.scene);
  R.controls.dispose(); R.renderer.dispose();
  if (R.renderer.domElement.parentNode) R.renderer.domElement.parentNode.removeChild(R.renderer.domElement);
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  R = null;
}
function setParam(id, v){
  if (!R || !R.mod || !R.ctl) return;
  v = parseFloat(v);
  const e = R.ctl.querySelector('[data-s="' + id + '"]');
  if (e){
    const st = parseFloat(e.step) || 0;
    if (st) v = Math.round(v / st) * st;
    v = Math.max(parseFloat(e.min), Math.min(parseFloat(e.max), v));
    e.value = v;
    const o = R.ctl.querySelector('[data-o="' + id + '"]'); if (o) o.textContent = fmt(v);
  }
  R.mod.set(id, v);
}
function actMod(id){ if (R && R.mod) R.mod.act(id); }
function camTo(pos, tgt, ms){
  if (!R) return;
  const t = tgt || (R.def && R.def.target) || [0, 0, 0];
  R.tween = {p0: R.camera.position.clone(), p1: new THREE.Vector3(pos[0], pos[1], pos[2]), g0: R.controls.target.clone(), g1: new THREE.Vector3(t[0], t[1], t[2]), t0: performance.now(), ms: ms || 1500};
}
window.Lab3D = {mount, load, dispose, zoomIn:() => zoom(.8), zoomOut:() => zoom(1.25), toggleWire, reset, fullscreen, setParam, act:actMod, camTo};
window.dispatchEvent(new Event('lab3d-ready'));
