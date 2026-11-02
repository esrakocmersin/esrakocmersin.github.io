// Bilgi Evreni 4D Ultimate - Ev Sunucusu (bagimliliksiz Node.js)
// Calistirma: node server.js   (veya baslat.bat)
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { spawn, execFile } = require('child_process');

const PORT = process.env.PORT || 3000;
const DIR = __dirname;
const DB_FILE = path.join(DIR, 'veritabani.json');
const INDEX_FILE = path.join(DIR, 'index.html');
const MAX_BODY = 8 * 1024 * 1024;

// ---------- Dogal ses (Microsoft Emel Neural, Python edge-tts) ----------
const PY_SCRIPT = path.join(DIR, 'ses_motoru.py');
const TTS_DIR = path.join(DIR, 'ses_onbellek');
const TTS_VERSION = 'v1';
const TTS_MAX_TEXT = 4000;
const TTS_MAX_PARALLEL = 3;
const TTS_LANGS = ['tr-TR', 'en-US'];
const TTS_STYLES = ['ders', 'coskulu', 'sakin'];
const tts = { ready: false, python: null, ffmpeg: false, error: 'Henuz kontrol edilmedi', checkedAt: 0 };
let ttsActive = 0;
const ttsWaiting = [];
const ttsInflight = new Map();

function tryRun(cmd, args) {
  return new Promise((resolve) => {
    execFile(cmd, args, { windowsHide: true, timeout: 20000 }, (err) => resolve(!err));
  });
}

async function detectTts() {
  tts.checkedAt = Date.now();
  if (!fs.existsSync(PY_SCRIPT)) { tts.ready = false; tts.error = 'ses_motoru.py bulunamadi'; return; }
  const candidates = [process.env.PYTHON, 'python', 'py', 'python3'].filter(Boolean);
  let found = null;
  for (const c of candidates) {
    if (await tryRun(c, ['-c', 'import edge_tts'])) { found = c; break; }
  }
  tts.ffmpeg = await tryRun('ffmpeg', ['-version']);
  if (found) {
    tts.ready = true; tts.python = found; tts.error = '';
  } else {
    tts.ready = false; tts.python = null;
    tts.error = 'Python veya edge-tts kurulu degil (pip install edge-tts)';
  }
}

function pruneTtsCache(max) {
  try {
    const files = fs.readdirSync(TTS_DIR).filter((f) => f.endsWith('.mp3')).map((f) => {
      const p = path.join(TTS_DIR, f);
      return { p, t: fs.statSync(p).mtimeMs };
    }).sort((a, b) => a.t - b.t);
    files.slice(0, Math.max(0, files.length - max)).forEach((f) => { try { fs.unlinkSync(f.p); } catch (e) {} });
  } catch (e) {}
}

function ttsRunSlot(job) {
  if (ttsActive < TTS_MAX_PARALLEL) { ttsActive++; job(); } else { ttsWaiting.push(job); }
}
function ttsRelease() {
  ttsActive--;
  const next = ttsWaiting.shift();
  if (next) { ttsActive++; next(); }
}

function ttsGenerate(text, lang, style) {
  const key = crypto.createHash('sha1').update([TTS_VERSION, lang, style, text].join('|')).digest('hex');
  const out = path.join(TTS_DIR, key + '.mp3');
  if (fs.existsSync(out)) return Promise.resolve(out);
  if (ttsInflight.has(key)) return ttsInflight.get(key);
  const p = new Promise((resolve, reject) => {
    ttsRunSlot(() => {
      fs.mkdirSync(TTS_DIR, { recursive: true });
      const txt = path.join(TTS_DIR, key + '.txt');
      const tmpOut = path.join(TTS_DIR, key + '.tmp.mp3');
      fs.writeFileSync(txt, text, 'utf8');
      const args = ['-X', 'utf8', PY_SCRIPT, '--text-file', txt, '--out', tmpOut, '--lang', lang, '--style', style];
      const child = spawn(tts.python, args, { windowsHide: true });
      let err = '';
      child.stderr.on('data', (d) => { err += d.toString(); });
      const timer = setTimeout(() => { try { child.kill(); } catch (e) {} }, 90000);
      const finish = (e) => {
        clearTimeout(timer);
        try { fs.unlinkSync(txt); } catch (x) {}
        ttsRelease();
        if (e) { try { fs.unlinkSync(tmpOut); } catch (x) {} return reject(e); }
        try { fs.renameSync(tmpOut, out); resolve(out); } catch (x) { reject(x); }
      };
      child.on('error', (e) => finish(e));
      child.on('close', (code) => {
        if (code === 0 && fs.existsSync(tmpOut)) finish(null);
        else finish(new Error('ses_motoru.py hata kodu ' + code + ': ' + err.trim().slice(-300)));
      });
    });
  });
  ttsInflight.set(key, p);
  const clear = () => ttsInflight.delete(key);
  p.then(clear, clear);
  return p;
}

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) return null;
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {
    console.error('Veritabani okunamadi:', e.message);
    return null;
  }
}

function writeDb(obj) {
  const tmp = DB_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 2), 'utf8');
  fs.renameSync(tmp, DB_FILE);
}

function send(res, code, body, type) {
  res.writeHead(code, {
    'Content-Type': type || 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];

  if (req.method === 'GET' && (url === '/' || url === '/index.html')) {
    if (!fs.existsSync(INDEX_FILE)) return send(res, 404, 'index.html bulunamadi. server.js ile ayni klasore koyun.', 'text/plain; charset=utf-8');
    return send(res, 200, fs.readFileSync(INDEX_FILE), 'text/html; charset=utf-8');
  }

  // Statik dosya servisi (assets klasoru altindaki resim, doku ve sesler)
  if (req.method === 'GET' && url.startsWith('/assets/')) {
    const rel = decodeURIComponent(url.replace(/^\/+/, ''));
    const safePath = path.normalize(path.join(DIR, rel));
    if (safePath.startsWith(DIR) && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
      const ext = path.extname(safePath).toLowerCase();
      const mimes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
        '.mp3': 'audio/mpeg',
        '.json': 'application/json; charset=utf-8'
      };
      res.writeHead(200, {
        'Content-Type': mimes[ext] || 'application/octet-stream',
        'Cache-Control': 'public, max-age=604800'
      });
      return fs.createReadStream(safePath).pipe(res);
    }
    return send(res, 404, { ok: false, error: 'Dosya bulunamadi' });
  }

  if (req.method === 'GET' && url === '/api/ping') {
    const db = readDb();
    return send(res, 200, { ok: true, hasDb: !!db, updatedAt: db ? db.updatedAt || 0 : 0, time: Date.now() });
  }

  if (req.method === 'GET' && url === '/api/db') {
    const db = readDb();
    return send(res, 200, { ok: true, db: db });
  }

  if (req.method === 'GET' && url === '/api/tts/status') {
    return send(res, 200, { ok: true, ready: tts.ready, ffmpeg: tts.ffmpeg, voice: 'tr-TR-EmelNeural', error: tts.error });
  }

  if (req.method === 'POST' && url === '/api/tts') {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > 32 * 1024) { send(res, 413, { ok: false, error: 'Metin cok uzun' }); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', async () => {
      if (size > 32 * 1024) return;
      let body;
      try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch (e) { return send(res, 400, { ok: false, error: 'JSON okunamadi' }); }
      const text = String(body && body.text || '').trim();
      const lang = TTS_LANGS.includes(body.lang) ? body.lang : 'tr-TR';
      const style = TTS_STYLES.includes(body.style) ? body.style : 'ders';
      if (!text || text.length > TTS_MAX_TEXT) return send(res, 400, { ok: false, error: 'Metin bos veya cok uzun' });
      if (!tts.ready && Date.now() - tts.checkedAt > 30000) await detectTts();
      if (!tts.ready) return send(res, 503, { ok: false, error: tts.error });
      try {
        const file = await ttsGenerate(text, lang, style);
        const stat = fs.statSync(file);
        res.writeHead(200, { 'Content-Type': 'audio/mpeg', 'Content-Length': stat.size, 'Cache-Control': 'public, max-age=86400' });
        fs.createReadStream(file).pipe(res);
      } catch (e) {
        console.error('TTS hatasi:', e.message);
        send(res, 500, { ok: false, error: 'Ses uretilemedi' });
      }
    });
    return;
  }

  if (req.method === 'GET' && url === '/api/backup') {
    const db = readDb() || {};
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': 'attachment; filename="veritabani-yedek.json"'
    });
    return res.end(JSON.stringify(db, null, 2));
  }

  if (req.method === 'POST' && url === '/api/db') {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        send(res, 413, { ok: false, error: 'Veri cok buyuk' });
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => {
      if (size > MAX_BODY) return;
      try {
        const incoming = JSON.parse(Buffer.concat(chunks).toString('utf8'));
        if (!incoming || !Array.isArray(incoming.users)) {
          return send(res, 400, { ok: false, error: 'Gecersiz veritabani bicimi' });
        }
        const current = readDb();
        const force = req.headers['x-force'] === '1';
        if (current && !force && (current.updatedAt || 0) > (incoming.updatedAt || 0)) {
          return send(res, 409, { ok: false, error: 'Sunucudaki veri daha yeni', db: current });
        }
        writeDb(incoming);
        return send(res, 200, { ok: true, updatedAt: incoming.updatedAt || 0 });
      } catch (e) {
        return send(res, 400, { ok: false, error: 'JSON okunamadi' });
      }
    });
    return;
  }

  send(res, 404, { ok: false, error: 'Bulunamadi' });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('==============================================');
  console.log(' BILGI EVRENI 4D ULTIMATE - Sunucu calisiyor');
  console.log('==============================================');
  console.log(' Bu bilgisayardan : http://localhost:' + PORT);
  const nets = os.networkInterfaces();
  Object.keys(nets).forEach((name) => {
    nets[name].forEach((n) => {
      if (n.family === 'IPv4' && !n.internal) {
        console.log(' Ayni agdaki cihaz : http://' + n.address + ':' + PORT + '  (' + name + ')');
      }
    });
  });
  console.log(' Veritabani        : ' + DB_FILE);
  pruneTtsCache(600);
  detectTts().then(() => {
    if (tts.ready) console.log(' Dogal ses (Emel)  : HAZIR (' + tts.python + (tts.ffmpeg ? ', ffmpeg var: nefes+duraklama acik' : ', ffmpeg YOK: nefes/duraklama eklenmez') + ')');
    else console.log(' Dogal ses (Emel)  : KAPALI - ' + tts.error + ' (tarayici sesi kullanilir)');
  });
  console.log(' Durdurmak icin bu pencereyi kapatin.');
});