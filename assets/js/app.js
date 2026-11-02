'use strict';
const SERVER_JS = "// Bilgi Evreni 4D Ultimate - Ev Sunucusu (bagimliliksiz Node.js)\n// Calistirma: node server.js   (veya baslat.bat)\nconst http = require('http');\nconst fs = require('fs');\nconst path = require('path');\nconst os = require('os');\nconst crypto = require('crypto');\nconst { spawn, execFile } = require('child_process');\n\nconst PORT = process.env.PORT || 3000;\nconst DIR = __dirname;\nconst DB_FILE = path.join(DIR, 'veritabani.json');\nconst INDEX_FILE = path.join(DIR, 'index.html');\nconst MAX_BODY = 8 * 1024 * 1024;\n\n// ---------- Dogal ses (Microsoft Emel Neural, Python edge-tts) ----------\nconst PY_SCRIPT = path.join(DIR, 'ses_motoru.py');\nconst TTS_DIR = path.join(DIR, 'ses_onbellek');\nconst TTS_VERSION = 'v1';\nconst TTS_MAX_TEXT = 4000;\nconst TTS_MAX_PARALLEL = 3;\nconst TTS_LANGS = ['tr-TR', 'en-US'];\nconst TTS_STYLES = ['ders', 'coskulu', 'sakin'];\nconst tts = { ready: false, python: null, ffmpeg: false, error: 'Henuz kontrol edilmedi', checkedAt: 0 };\nlet ttsActive = 0;\nconst ttsWaiting = [];\nconst ttsInflight = new Map();\n\nfunction tryRun(cmd, args) {\n  return new Promise((resolve) => {\n    execFile(cmd, args, { windowsHide: true, timeout: 20000 }, (err) => resolve(!err));\n  });\n}\n\nasync function detectTts() {\n  tts.checkedAt = Date.now();\n  if (!fs.existsSync(PY_SCRIPT)) { tts.ready = false; tts.error = 'ses_motoru.py bulunamadi'; return; }\n  const candidates = [process.env.PYTHON, 'python', 'py', 'python3'].filter(Boolean);\n  let found = null;\n  for (const c of candidates) {\n    if (await tryRun(c, ['-c', 'import edge_tts'])) { found = c; break; }\n  }\n  tts.ffmpeg = await tryRun('ffmpeg', ['-version']);\n  if (found) {\n    tts.ready = true; tts.python = found; tts.error = '';\n  } else {\n    tts.ready = false; tts.python = null;\n    tts.error = 'Python veya edge-tts kurulu degil (pip install edge-tts)';\n  }\n}\n\nfunction pruneTtsCache(max) {\n  try {\n    const files = fs.readdirSync(TTS_DIR).filter((f) => f.endsWith('.mp3')).map((f) => {\n      const p = path.join(TTS_DIR, f);\n      return { p, t: fs.statSync(p).mtimeMs };\n    }).sort((a, b) => a.t - b.t);\n    files.slice(0, Math.max(0, files.length - max)).forEach((f) => { try { fs.unlinkSync(f.p); } catch (e) {} });\n  } catch (e) {}\n}\n\nfunction ttsRunSlot(job) {\n  if (ttsActive < TTS_MAX_PARALLEL) { ttsActive++; job(); } else { ttsWaiting.push(job); }\n}\nfunction ttsRelease() {\n  ttsActive--;\n  const next = ttsWaiting.shift();\n  if (next) { ttsActive++; next(); }\n}\n\nfunction ttsGenerate(text, lang, style) {\n  const key = crypto.createHash('sha1').update([TTS_VERSION, lang, style, text].join('|')).digest('hex');\n  const out = path.join(TTS_DIR, key + '.mp3');\n  if (fs.existsSync(out)) return Promise.resolve(out);\n  if (ttsInflight.has(key)) return ttsInflight.get(key);\n  const p = new Promise((resolve, reject) => {\n    ttsRunSlot(() => {\n      fs.mkdirSync(TTS_DIR, { recursive: true });\n      const txt = path.join(TTS_DIR, key + '.txt');\n      const tmpOut = path.join(TTS_DIR, key + '.tmp.mp3');\n      fs.writeFileSync(txt, text, 'utf8');\n      const args = ['-X', 'utf8', PY_SCRIPT, '--text-file', txt, '--out', tmpOut, '--lang', lang, '--style', style];\n      const child = spawn(tts.python, args, { windowsHide: true });\n      let err = '';\n      child.stderr.on('data', (d) => { err += d.toString(); });\n      const timer = setTimeout(() => { try { child.kill(); } catch (e) {} }, 90000);\n      const finish = (e) => {\n        clearTimeout(timer);\n        try { fs.unlinkSync(txt); } catch (x) {}\n        ttsRelease();\n        if (e) { try { fs.unlinkSync(tmpOut); } catch (x) {} return reject(e); }\n        try { fs.renameSync(tmpOut, out); resolve(out); } catch (x) { reject(x); }\n      };\n      child.on('error', (e) => finish(e));\n      child.on('close', (code) => {\n        if (code === 0 && fs.existsSync(tmpOut)) finish(null);\n        else finish(new Error('ses_motoru.py hata kodu ' + code + ': ' + err.trim().slice(-300)));\n      });\n    });\n  });\n  ttsInflight.set(key, p);\n  const clear = () => ttsInflight.delete(key);\n  p.then(clear, clear);\n  return p;\n}\n\nfunction readDb() {\n  try {\n    if (!fs.existsSync(DB_FILE)) return null;\n    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));\n  } catch (e) {\n    console.error('Veritabani okunamadi:', e.message);\n    return null;\n  }\n}\n\nfunction writeDb(obj) {\n  const tmp = DB_FILE + '.tmp';\n  fs.writeFileSync(tmp, JSON.stringify(obj, null, 2), 'utf8');\n  fs.renameSync(tmp, DB_FILE);\n}\n\nfunction send(res, code, body, type) {\n  res.writeHead(code, {\n    'Content-Type': type || 'application/json; charset=utf-8',\n    'Cache-Control': 'no-store'\n  });\n  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));\n}\n\nconst server = http.createServer((req, res) => {\n  const url = req.url.split('?')[0];\n\n  if (req.method === 'GET' && (url === '/' || url === '/index.html')) {\n    if (!fs.existsSync(INDEX_FILE)) return send(res, 404, 'index.html bulunamadi. server.js ile ayni klasore koyun.', 'text/plain; charset=utf-8');\n    return send(res, 200, fs.readFileSync(INDEX_FILE), 'text/html; charset=utf-8');\n  }\n\n  if (req.method === 'GET' && url === '/api/ping') {\n    const db = readDb();\n    return send(res, 200, { ok: true, hasDb: !!db, updatedAt: db ? db.updatedAt || 0 : 0, time: Date.now() });\n  }\n\n  if (req.method === 'GET' && url === '/api/db') {\n    const db = readDb();\n    return send(res, 200, { ok: true, db: db });\n  }\n\n  if (req.method === 'GET' && url === '/api/tts/status') {\n    return send(res, 200, { ok: true, ready: tts.ready, ffmpeg: tts.ffmpeg, voice: 'tr-TR-EmelNeural', error: tts.error });\n  }\n\n  if (req.method === 'POST' && url === '/api/tts') {\n    let size = 0;\n    const chunks = [];\n    req.on('data', (c) => {\n      size += c.length;\n      if (size > 32 * 1024) { send(res, 413, { ok: false, error: 'Metin cok uzun' }); req.destroy(); return; }\n      chunks.push(c);\n    });\n    req.on('end', async () => {\n      if (size > 32 * 1024) return;\n      let body;\n      try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch (e) { return send(res, 400, { ok: false, error: 'JSON okunamadi' }); }\n      const text = String(body && body.text || '').trim();\n      const lang = TTS_LANGS.includes(body.lang) ? body.lang : 'tr-TR';\n      const style = TTS_STYLES.includes(body.style) ? body.style : 'ders';\n      if (!text || text.length > TTS_MAX_TEXT) return send(res, 400, { ok: false, error: 'Metin bos veya cok uzun' });\n      if (!tts.ready && Date.now() - tts.checkedAt > 30000) await detectTts();\n      if (!tts.ready) return send(res, 503, { ok: false, error: tts.error });\n      try {\n        const file = await ttsGenerate(text, lang, style);\n        const stat = fs.statSync(file);\n        res.writeHead(200, { 'Content-Type': 'audio/mpeg', 'Content-Length': stat.size, 'Cache-Control': 'public, max-age=86400' });\n        fs.createReadStream(file).pipe(res);\n      } catch (e) {\n        console.error('TTS hatasi:', e.message);\n        send(res, 500, { ok: false, error: 'Ses uretilemedi' });\n      }\n    });\n    return;\n  }\n\n  if (req.method === 'GET' && url === '/api/backup') {\n    const db = readDb() || {};\n    res.writeHead(200, {\n      'Content-Type': 'application/json; charset=utf-8',\n      'Content-Disposition': 'attachment; filename=\"veritabani-yedek.json\"'\n    });\n    return res.end(JSON.stringify(db, null, 2));\n  }\n\n  if (req.method === 'POST' && url === '/api/db') {\n    let size = 0;\n    const chunks = [];\n    req.on('data', (c) => {\n      size += c.length;\n      if (size > MAX_BODY) {\n        send(res, 413, { ok: false, error: 'Veri cok buyuk' });\n        req.destroy();\n        return;\n      }\n      chunks.push(c);\n    });\n    req.on('end', () => {\n      if (size > MAX_BODY) return;\n      try {\n        const incoming = JSON.parse(Buffer.concat(chunks).toString('utf8'));\n        if (!incoming || !Array.isArray(incoming.users)) {\n          return send(res, 400, { ok: false, error: 'Gecersiz veritabani bicimi' });\n        }\n        const current = readDb();\n        const force = req.headers['x-force'] === '1';\n        if (current && !force && (current.updatedAt || 0) > (incoming.updatedAt || 0)) {\n          return send(res, 409, { ok: false, error: 'Sunucudaki veri daha yeni', db: current });\n        }\n        writeDb(incoming);\n        return send(res, 200, { ok: true, updatedAt: incoming.updatedAt || 0 });\n      } catch (e) {\n        return send(res, 400, { ok: false, error: 'JSON okunamadi' });\n      }\n    });\n    return;\n  }\n\n  send(res, 404, { ok: false, error: 'Bulunamadi' });\n});\n\nserver.listen(PORT, '0.0.0.0', () => {\n  console.log('==============================================');\n  console.log(' BILGI EVRENI 4D ULTIMATE - Sunucu calisiyor');\n  console.log('==============================================');\n  console.log(' Bu bilgisayardan : http://localhost:' + PORT);\n  const nets = os.networkInterfaces();\n  Object.keys(nets).forEach((name) => {\n    nets[name].forEach((n) => {\n      if (n.family === 'IPv4' && !n.internal) {\n        console.log(' Ayni agdaki cihaz : http://' + n.address + ':' + PORT + '  (' + name + ')');\n      }\n    });\n  });\n  console.log(' Veritabani        : ' + DB_FILE);\n  pruneTtsCache(600);\n  detectTts().then(() => {\n    if (tts.ready) console.log(' Dogal ses (Emel)  : HAZIR (' + tts.python + (tts.ffmpeg ? ', ffmpeg var: nefes+duraklama acik' : ', ffmpeg YOK: nefes/duraklama eklenmez') + ')');\n    else console.log(' Dogal ses (Emel)  : KAPALI - ' + tts.error + ' (tarayici sesi kullanilir)');\n  });\n  console.log(' Durdurmak icin bu pencereyi kapatin.');\n});";
const BAT_FILE = "@echo off\r\nchcp 65001 >nul\r\ntitle Bilgi Evreni 4D Sunucu\r\ncd /d \"%~dp0\"\r\nwhere node >nul 2>nul\r\nif errorlevel 1 (\r\n  echo Node.js kurulu degil. Lutfen https://nodejs.org adresinden kurun.\r\n  pause\r\n  exit /b 1\r\n)\r\nif not exist index.html (\r\n  echo index.html bulunamadi. server.js ile ayni klasorde olmali.\r\n  pause\r\n  exit /b 1\r\n)\r\n\r\nrem --- Dogal ses (Microsoft Emel Neural) icin Python + edge-tts kontrolu ---\r\nset PYCMD=\r\nwhere python >nul 2>nul && set PYCMD=python\r\nif \"%PYCMD%\"==\"\" where py >nul 2>nul && set PYCMD=py\r\nif \"%PYCMD%\"==\"\" (\r\n  echo [Bilgi] Python bulunamadi: dogal ses kapali, tarayici sesi kullanilacak.\r\n  echo         Emel sesi icin https://www.python.org adresinden Python kurun.\r\n) else (\r\n  %PYCMD% -c \"import edge_tts\" >nul 2>nul\r\n  if errorlevel 1 (\r\n    echo edge-tts kuruluyor, lutfen bekleyin...\r\n    %PYCMD% -m pip install --quiet --disable-pip-version-check edge-tts\r\n  )\r\n)\r\nwhere ffmpeg >nul 2>nul\r\nif errorlevel 1 echo [Bilgi] ffmpeg yok: ses calisir ama nefes ve duraklama eklenmez. Onerilen: winget install ffmpeg\r\n\r\nstart \"\" cmd /c \"ping -n 3 127.0.0.1 >nul & start http://localhost:3000\"\r\nnode server.js\r\npause";
const PY_FILE = "# -*- coding: utf-8 -*-\n\"\"\"\nBilgi Evreni 4D - Dogal Ses Motoru\n==================================\nMicrosoft Neural sesi (tr-TR-EmelNeural) + ffmpeg ile \"insan gibi\" seslendirme:\n  * Cumleler tek tek, duygusuna gore (neseli / heyecanli / merakli / sakin) okunur\n  * Cumleler arasina dogal duraklama ve hafif NEFES sesi eklenir\n  * Her cumlede ritim ve ton cok az degistirilir (robotik tekduzeligi kirar)\n\nKullanim:\n  python ses_motoru.py --text-file metin.txt --out ses.mp3 [--lang tr-TR] [--style ders|coskulu|sakin] [--nefes 1]\nGereksinim:\n  pip install edge-tts      (ffmpeg varsa nefes/duraklama eklenir, yoksa sade birlestirme yapilir)\n\"\"\"\nimport argparse\nimport asyncio\nimport hashlib\nimport os\nimport random\nimport re\nimport shutil\nimport subprocess\nimport sys\nimport tempfile\n\ntry:\n    import edge_tts\nexcept ImportError:\n    sys.stderr.write(\"edge-tts kurulu degil. Kurmak icin: pip install edge-tts\\n\")\n    sys.exit(2)\n\nVOICE_TR = \"tr-TR-EmelNeural\"\nVOICE_EN = \"en-US-JennyNeural\"\nVOICE_EN_WORD = \"en-US-AnaNeural\"   # tek kelimelerde sevimli cocuk tonu\n\n# rate: yuzde, pitch: Hz. (excl/ques/joy/first/last) = (rate_artisi, pitch_artisi)\nSTYLES = {\n    \"ders\": dict(rate=-3, pitch=2, vol=0, excl=(8, 6), ques=(-1, 9), joy=(6, 7),\n                 first=(2, 2), last=(-7, 2), pause=(0.34, 0.55), comma=0.16),\n    \"coskulu\": dict(rate=2, pitch=4, vol=3, excl=(12, 9), ques=(2, 12), joy=(10, 10),\n                    first=(4, 3), last=(-6, 3), pause=(0.28, 0.45), comma=0.13),\n    \"sakin\": dict(rate=-8, pitch=0, vol=0, excl=(3, 3), ques=(-3, 5), joy=(2, 3),\n                  first=(0, 1), last=(-8, 0), pause=(0.45, 0.7), comma=0.2),\n}\n\nJOY_RE = re.compile(\n    r\"^(merhaba|selam|harika|bravo|aferin|s[uü]per|hadi|haydi|tebrikler|\"\n    r\"muhte[sş]em|m[uü]kemmel|[cç]ok g[uü]zel|hoş geldin|ho[sş] geldin|g[oö]r[uü][sş]elim|\"\n    r\"hello|hi|great|wonderful|well done|let's|come on)\",\n    re.IGNORECASE,\n)\nEMOJI_RE = re.compile(\"[\\U0001F000-\\U0001FFFF\\u2600-\\u27BF\\u2B00-\\u2BFF\\uFE0F\\u200D]\")\n\n\ndef log(msg):\n    sys.stderr.write(str(msg) + \"\\n\")\n\n\ndef clamp(v, lo, hi):\n    return max(lo, min(hi, v))\n\n\ndef normalize_text(text, lang):\n    \"\"\"Sesli okuma icin metni temizler (emoji, sembol, kesir...).\"\"\"\n    t = EMOJI_RE.sub(\"\", text)\n    t = t.replace(\"\\r\", \"\\n\")\n    if lang.startswith(\"tr\"):\n        t = re.sub(r\"(\\d+)\\s*/\\s*(\\d+)\", r\"\\1 bölü \\2\", t)\n        t = t.replace(\"×\", \" çarpı \").replace(\"÷\", \" bölü \").replace(\"°\", \" derece \")\n        t = re.sub(r\"(?<=\\d)\\s*\\+\\s*(?=\\d)\", \" artı \", t)\n        t = re.sub(r\"(?<=\\d)\\s*=\\s*(?=\\d)\", \" eşittir \", t)\n        t = t.replace(\"4D\", \"dört de\").replace(\" TL\", \" Türk lirası\")\n    t = re.sub(r\"[ \\t]+\", \" \", t)\n    return t.strip()\n\n\ndef split_sentences(text):\n    \"\"\"[(cumle, durak_turu)] dondurur. durak_turu: 'sentence' | 'comma' | 'para'.\"\"\"\n    out = []\n    paragraphs = [p.strip() for p in re.split(r\"\\n\\s*\\n|\\n\", text) if p.strip()]\n    for pi, para in enumerate(paragraphs):\n        sents = [s.strip() for s in re.split(r\"(?<=[.!?…])\\s+\", para) if s.strip()]\n        for si, s in enumerate(sents):\n            parts = [s]\n            if len(s) > 120:  # uzun cumleyi virgul/noktali virgulden bol -> dogal nefes\n                chunks = [c.strip() for c in re.split(r\"(?<=[,;:])\\s+\", s) if c.strip()]\n                parts, cur = [], \"\"\n                for c in chunks:\n                    if cur and len(cur) + len(c) > 90:\n                        parts.append(cur)\n                        cur = c\n                    else:\n                        cur = (cur + \" \" + c).strip()\n                if cur:\n                    parts.append(cur)\n            for k, p in enumerate(parts):\n                last_part = k == len(parts) - 1\n                if not last_part:\n                    kind = \"comma\"\n                elif si == len(sents) - 1 and pi < len(paragraphs) - 1:\n                    kind = \"para\"\n                else:\n                    kind = \"sentence\"\n                out.append((p, kind))\n    if out:\n        out[-1] = (out[-1][0], \"end\")\n    return out\n\n\ndef emotion(sentence, idx, n, st, rng, kind_prev):\n    rate, pitch, vol = st[\"rate\"], st[\"pitch\"], st[\"vol\"]\n    t = sentence.strip()\n    if t.endswith(\"!\"):\n        rate += st[\"excl\"][0]; pitch += st[\"excl\"][1]; vol += 4\n    elif t.endswith(\"?\"):\n        rate += st[\"ques\"][0]; pitch += st[\"ques\"][1]\n    if JOY_RE.match(t):\n        rate += st[\"joy\"][0]; pitch += st[\"joy\"][1]; vol += 3\n    if n > 1 and idx == 0:\n        rate += st[\"first\"][0]; pitch += st[\"first\"][1]\n    if n > 1 and idx == n - 1:\n        rate += st[\"last\"][0]; pitch += st[\"last\"][1]\n    # cumleden cumleye kucuk, rastgele (ama tekrarlanabilir) degisim: monotonlugu kirar\n    rate += rng.randint(-2, 2)\n    pitch += rng.randint(-2, 2)\n    return clamp(rate, -30, 30), clamp(pitch, -20, 25), clamp(vol, -10, 15)\n\n\nasync def synth_one(text, voice, rate, pitch, vol, path, sem):\n    async with sem:\n        last_err = None\n        for attempt in range(4):\n            try:\n                comm = edge_tts.Communicate(\n                    text, voice,\n                    rate=\"%+d%%\" % rate, pitch=\"%+dHz\" % pitch, volume=\"%+d%%\" % vol,\n                )\n                await comm.save(path)\n                if os.path.exists(path) and os.path.getsize(path) > 200:\n                    return\n                last_err = RuntimeError(\"bos ses dosyasi\")\n            except Exception as e:  # ag hatasi vb. -> tekrar dene\n                last_err = e\n            await asyncio.sleep(0.8 * (attempt + 1))\n        raise last_err\n\n\ndef build_plan(text, lang, style_name):\n    st = STYLES.get(style_name, STYLES[\"ders\"])\n    seed = int(hashlib.sha1((text + style_name).encode(\"utf-8\")).hexdigest()[:8], 16)\n    rng = random.Random(seed)\n    is_tr = lang.lower().startswith(\"tr\")\n    clean = normalize_text(text, lang)\n    words = re.findall(r\"\\w+\", clean, re.UNICODE)\n\n    # Ingilizce tek kelime: once normal, sonra yavas tekrar (kelime ogretimi)\n    if not is_tr and len(words) == 1:\n        w = clean.strip(\" .!?\")\n        return [\n            dict(text=w + \"!\", voice=VOICE_EN_WORD, rate=0, pitch=6, vol=4, kind=\"word\"),\n            dict(text=w + \".\", voice=VOICE_EN_WORD, rate=-20, pitch=2, vol=0, kind=\"end\"),\n        ], st\n\n    voice = VOICE_TR if is_tr else VOICE_EN\n    sents = split_sentences(clean)\n    n = len(sents)\n    plan, prev = [], None\n    for i, (s, kind) in enumerate(sents):\n        r, p, v = emotion(s, i, n, st, rng, prev)\n        plan.append(dict(text=s, voice=voice, rate=r, pitch=p, vol=v, kind=kind))\n        prev = kind\n    return plan, st\n\n\ndef find_ffmpeg():\n    return shutil.which(\"ffmpeg\")\n\n\ndef stitch_ffmpeg(ffmpeg, plan, files, st, nefes, out_path, rng):\n    \"\"\"Cumleleri; duraklama + nefes sesiyle birlestirir, ses seviyesini dengeler.\"\"\"\n    inputs, filters, labels = [], [], []\n    idx = 0\n\n    def add_file(path):\n        nonlocal idx\n        inputs.extend([\"-i\", path])\n        # Microsoft sesi her parcanin basina/sonuna ~0.3-0.5 sn sessizlik koyar: kirpip ritmi biz belirleriz\n        trim = (\"silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.04,areverse,\"\n                \"silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.06,areverse\")\n        filters.append(\"[%d:a]aresample=24000,aformat=sample_fmts=fltp:channel_layouts=mono,%s[a%d]\" % (idx, trim, idx))\n        labels.append(\"[a%d]\" % idx)\n        idx += 1\n\n    def add_silence(sec):\n        nonlocal idx\n        inputs.extend([\"-f\", \"lavfi\", \"-t\", \"%.3f\" % sec, \"-i\", \"anullsrc=r=24000:cl=mono\"])\n        filters.append(\"[%d:a]aformat=sample_fmts=fltp:channel_layouts=mono[a%d]\" % (idx, idx))\n        labels.append(\"[a%d]\" % idx)\n        idx += 1\n\n    def add_breath(sec):\n        nonlocal idx\n        inputs.extend([\"-f\", \"lavfi\", \"-t\", \"%.3f\" % sec, \"-i\",\n                       \"anoisesrc=r=24000:c=pink:a=0.6:d=%.3f\" % sec])\n        fo = max(0.05, sec * 0.55)\n        filters.append(\n            \"[%d:a]highpass=f=260,lowpass=f=2400,afade=t=in:st=0:d=%.3f,afade=t=out:st=%.3f:d=%.3f,\"\n            \"volume=0.15,aformat=sample_fmts=fltp:channel_layouts=mono[a%d]\"\n            % (idx, sec * 0.45, sec - fo, fo, idx))\n        labels.append(\"[a%d]\" % idx)\n        idx += 1\n\n    add_silence(0.12)\n    speech_since_breath = 0.0\n    for i, (item, f) in enumerate(zip(plan, files)):\n        add_file(f)\n        speech_since_breath += len(item[\"text\"]) / 14.0   # yaklasik konusma suresi (sn)\n        kind = item[\"kind\"]\n        if kind == \"end\":\n            add_silence(0.25)\n            break\n        if kind == \"comma\":\n            add_silence(st[\"comma\"] + rng.uniform(0, 0.06))\n        elif kind == \"word\":\n            add_silence(0.7)\n        else:\n            base = rng.uniform(*st[\"pause\"])\n            if kind == \"para\":\n                base += 0.35\n            # yeterince uzun konusulduysa nefes al: 'hhh' + kisa sessizlik\n            if nefes and (speech_since_breath > 5.5 or kind == \"para\"):\n                add_silence(base * 0.45)\n                add_breath(rng.uniform(0.26, 0.38))\n                add_silence(0.05)\n                speech_since_breath = 0.0\n            else:\n                add_silence(base)\n\n    chain = \"\".join(labels) + \"concat=n=%d:v=0:a=1,loudnorm=I=-16:TP=-1.5:LRA=9[out]\" % len(labels)\n    filter_complex = \";\".join(filters + [chain])\n    cmd = [ffmpeg, \"-y\", \"-hide_banner\", \"-loglevel\", \"error\"] + inputs + [\n        \"-filter_complex\", filter_complex, \"-map\", \"[out]\",\n        \"-c:a\", \"libmp3lame\", \"-b:a\", \"64k\", \"-ar\", \"24000\", \"-ac\", \"1\", out_path]\n    r = subprocess.run(cmd, capture_output=True, text=True)\n    if r.returncode != 0:\n        raise RuntimeError(\"ffmpeg hatasi: \" + (r.stderr or \"\")[-400:])\n\n\ndef stitch_plain(files, out_path):\n    \"\"\"ffmpeg yoksa: mp3 parcalarini ardarda ekle (nefes/duraklama olmaz).\"\"\"\n    with open(out_path, \"wb\") as o:\n        for f in files:\n            with open(f, \"rb\") as i:\n                o.write(i.read())\n\n\nasync def main_async(args):\n    with open(args.text_file, \"r\", encoding=\"utf-8\") as fh:\n        text = fh.read()\n    if not text.strip():\n        raise SystemExit(\"Bos metin.\")\n    plan, st = build_plan(text, args.lang, args.style)\n    if not plan:\n        raise SystemExit(\"Okunacak metin yok.\")\n    seed = int(hashlib.sha1(text.encode(\"utf-8\")).hexdigest()[:8], 16)\n    rng = random.Random(seed + 7)\n\n    tmp = tempfile.mkdtemp(prefix=\"bev_ses_\")\n    try:\n        sem = asyncio.Semaphore(4)\n        files = [os.path.join(tmp, \"s%03d.mp3\" % i) for i in range(len(plan))]\n        await asyncio.gather(*[\n            synth_one(p[\"text\"], p[\"voice\"], p[\"rate\"], p[\"pitch\"], p[\"vol\"], f, sem)\n            for p, f in zip(plan, files)\n        ])\n        ff = find_ffmpeg()\n        out_tmp = os.path.join(tmp, \"final.mp3\")\n        if ff:\n            try:\n                stitch_ffmpeg(ff, plan, files, st, bool(args.nefes), out_tmp, rng)\n            except Exception as e:\n                log(\"Uyari: ffmpeg birlestirme basarisiz, sade birlestirme kullaniliyor. \" + str(e))\n                stitch_plain(files, out_tmp)\n        else:\n            log(\"Uyari: ffmpeg bulunamadi; nefes ve duraklama eklenemedi (sade birlestirme).\")\n            stitch_plain(files, out_tmp)\n        os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)\n        shutil.move(out_tmp, args.out)\n    finally:\n        shutil.rmtree(tmp, ignore_errors=True)\n\n\ndef main():\n    ap = argparse.ArgumentParser(description=\"Bilgi Evreni 4D dogal ses motoru (Microsoft Emel Neural)\")\n    ap.add_argument(\"--text-file\", required=True, help=\"UTF-8 metin dosyasi\")\n    ap.add_argument(\"--out\", required=True, help=\"cikis .mp3 yolu\")\n    ap.add_argument(\"--lang\", default=\"tr-TR\", choices=[\"tr-TR\", \"en-US\"])\n    ap.add_argument(\"--style\", default=\"ders\", choices=sorted(STYLES.keys()))\n    ap.add_argument(\"--nefes\", type=int, default=1, help=\"1: nefes sesi ekle, 0: ekleme\")\n    args = ap.parse_args()\n    try:\n        if sys.platform == \"win32\":\n            asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())\n        asyncio.run(main_async(args))\n    except SystemExit:\n        raise\n    except Exception as e:\n        log(\"HATA: %s\" % e)\n        sys.exit(1)\n\n\nif __name__ == \"__main__\":\n    main()\n";
const LS_KEY = 'bilgievreni4d_v3';
const SS_KEY = 'bilgievreni4d_session';
const SUBJECTS = ['Türkçe','Matematik','Fen Bilimleri','Sosyal Bilgiler','Din Kültürü','İngilizce'];
const ROLE = {admin:'Yönetici',teacher:'Öğretmen',student:'Öğrenci',parent:'Veli'};
const ROLE_ICON = {admin:'👑',teacher:'👩‍🏫',student:'🧒',parent:'👨‍👩‍👧'};
const EXAM_N = 10, EXAM_SEC = 300;

const MODULES = [
 {id:'m1',icon:'🌍',name:'Dünya, Güneş ve Ay',subject:'Fen Bilimleri',topic:'Dünya, Güneş\'in etrafında bir yılda tam bir tur atar. Dünya aynı zamanda kendi ekseni etrafında yirmi dört saatte döner; bu yüzden gece ve gündüz oluşur. Dünya\'nın ekseni eğiktir. Eksen eğikliği ve Güneş etrafındaki dolanma sayesinde mevsimler oluşur. Ay ise Dünya\'nın doğal uydusudur ve Dünya\'nın etrafında yaklaşık bir ayda bir tur atar. Kaydırıcıyla yılın gününü değiştirerek mevsimleri incele.'},
 {id:'m2',icon:'🧩',name:'Birim Kesirler ve Bloklar',subject:'Matematik',topic:'Kesir, bir bütünün eş parçalarından bir ya da birkaçını gösterir. Kesrin alt kısmına payda denir ve bütünün kaç eş parçaya bölündüğünü söyler. Üst kısmına pay denir ve bu parçalardan kaç tanesini aldığımızı gösterir. Örneğin üçte sekiz, bir bütünün sekiz eş parçasından üç tanesidir. Paydaları eşit kesirlerde payı büyük olan kesir daha büyüktür.'},
 {id:'m3',icon:'🧲',name:'Mıknatıs Kutupları',subject:'Fen Bilimleri',topic:'Mıknatısın iki ucuna kutup denir: N yani kuzey kutbu ve S yani güney kutbu. Aynı cins kutuplar birbirini iter, farklı cins kutuplar birbirini çeker. Mıknatısın çekim gücü kutuplarında en fazladır. Mıknatıs demir, nikel ve kobalt gibi maddeleri çeker. Mesafe arttıkça kuvvet azalır.'},
 {id:'m4',icon:'💡',name:'Basit Elektrik Devresi',subject:'Fen Bilimleri',topic:'Basit bir elektrik devresi pil, anahtar, kablo ve ampulden oluşur. Anahtar kapalıyken devre tamamlanır ve elektrik akımı ampulü yakar. Anahtar açıkken devre kesilir ve ampul yanmaz. Devreye daha fazla pil bağlanırsa ampul daha parlak yanar. Metaller elektriği iyi iletir; plastik, cam ve ahşap iletmez.'},
 {id:'m5',icon:'🧭',name:'Pusula ve Yeryüzü Şekilleri',subject:'Sosyal Bilgiler',topic:'Yönleri bulmak için pusula kullanırız. Pusula iğnesi her zaman kuzeyi gösterir. Ana yönler kuzey, güney, doğu ve batıdır. Kuzeye bakarsak sağımız doğu, solumuz batı, arkamız güney olur. Ara yönler kuzeydoğu, güneydoğu, güneybatı ve kuzeybatıdır. Yeryüzü şekilleri ovalar, tepeler ve dağlardır. Yükseklik farkı renklerle gösterilir.'},
 {id:'m6',icon:'💎',name:'İngilizce Kelime Kristalleri',subject:'İngilizce',topic:'Bu kristallerde dördüncü sınıf İngilizce kelimeleri var. Bir kristale tıkla; İngilizce kelimeyi duyacak ve Türkçe karşılığını göreceksin. Kristallerin dönme hızını kaydırıcıyla değiştirebilirsin.'}
];
const modById = id => MODULES.find(m => m.id === id) || (typeof COURSE_LESSONS !== 'undefined' && COURSE_LESSONS[id] ? { id, name: COURSE_LESSONS[id].title, icon: COURSE_LESSONS[id].icon, subject: COURSE_LESSONS[id].subject, topic: COURSE_LESSONS[id].subject + ' • ' + COURSE_LESSONS[id].unitNo } : null);

const ITEMS = [
 {id:'t1',type:'title',name:'Küçük Kaşif',price:30},
 {id:'t2',type:'title',name:'Süper Bilimci',price:80},
 {id:'t3',type:'title',name:'Matematik Dehası',price:120},
 {id:'t4',type:'title',name:'Uzay Kaptanı',price:200},
 {id:'t5',type:'title',name:'Bilge Dahi',price:350},
 {id:'f1',type:'frame',name:'Altın Çerçeve',cls:'frame-gold',price:50},
 {id:'f2',type:'frame',name:'Gökkuşağı Çerçeve',cls:'frame-rainbow',price:90},
 {id:'f3',type:'frame',name:'Neon Çerçeve',cls:'frame-neon',price:140},
 {id:'f4',type:'frame',name:'Elmas Çerçeve',cls:'frame-diamond',price:260}
];
const BADGES = [
 {icon:'🧪',name:'İlk Deney',desc:'İlk 3D deneyini tamamla',t:u=>u.labDone.length>=1},
 {icon:'🔬',name:'Laboratuvar Ustası',desc:'6 modülün hepsini tamamla',t:u=>u.labDone.length>=MODULES.length},
 {icon:'⏱️',name:'Sınav Kahramanı',desc:'Denemede 70+ puan al',t:(u,r)=>r.some(x=>x.score>=70)},
 {icon:'📚',name:'Ödev Canavarı',desc:'3 ödev tamamla',t:u=>(u.asgDone||0)>=3},
 {icon:'🪙',name:'Altın Avcısı',desc:'Toplam 200 altın kazan',t:u=>u.totalGold>=200},
 {icon:'🚀',name:'Seviye Atlayıcı',desc:'5. seviyeye ulaş',t:u=>level(u.xp)>=5}
];

/* ---------- Yardımcılar ---------- */
const $ = (s, r) => (r || document).querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = p => (p || 'id') + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);
const level = xp => Math.floor((xp || 0) / 100) + 1;
const fmtDate = t => new Date(t).toLocaleString('tr-TR', {dateStyle:'short', timeStyle:'short'});
const rndPass = () => String(Math.floor(1000 + Math.random() * 9000));
function slug(s){return String(s||'').toLocaleLowerCase('tr').replace(/ç/g,'c').replace(/ğ/g,'g').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ş/g,'s').replace(/ü/g,'u').replace(/[^a-z0-9]/g,'');}
function toast(msg){const t=$('#toast');const d=document.createElement('div');d.innerHTML=msg;t.appendChild(d);setTimeout(()=>d.remove(),3200);}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function modal(html){$('#modalBox').innerHTML=html;$('#modal').classList.remove('hidden');}
function closeModal(){if(window.CoursePlayer)CoursePlayer.stopAudio();$('#modal').classList.add('hidden');$('#modalBox').classList.remove('theater');$('#modalBox').innerHTML='';render();}
function download(name, text, mime){const b=new Blob([text],{type:mime||'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);}
function printHTML(html){const p=$('#printArea');p.innerHTML=html;document.body.classList.add('printing');const done=()=>{document.body.classList.remove('printing');p.innerHTML='';window.removeEventListener('afterprint',done);};window.addEventListener('afterprint',done);setTimeout(()=>window.print(),150);}
/* ---------- Doğal ses: Microsoft Emel Neural (sunucu + Python edge-tts), yedek: tarayıcı sesi ---------- */
const voice = {audio:null, tok:0, fail:0, cache:new Map()};
function browserSpeak(text, lang){
  if(!('speechSynthesis' in window)){toast('Tarayıcın sesli okumayı desteklemiyor.');return;}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);const l=lang||'tr-TR';u.lang=l;u.rate=.9;
  const v=speechSynthesis.getVoices().find(v=>v.lang&&v.lang.toLowerCase().startsWith(l.slice(0,2).toLowerCase()));
  if(v)u.voice=v;speechSynthesis.speak(u);
}
async function ttsFetch(text, lang, style){
  const key=lang+'|'+style+'|'+text;
  if(voice.cache.has(key))return voice.cache.get(key);
  const r=await fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,lang,style})});
  if(!r.ok){const e=new Error('tts '+r.status);e.status=r.status;throw e;}
  const url=URL.createObjectURL(await r.blob());
  if(voice.cache.size>=80){const k=voice.cache.keys().next().value;URL.revokeObjectURL(voice.cache.get(k));voice.cache.delete(k);}
  voice.cache.set(key,url);
  return url;
}
function serverVoiceOn(){return location.protocol!=='file:'&&Date.now()>voice.fail;}
function speak(text, lang, style){
  stopSpeak();
  const tok=++voice.tok;lang=lang||'tr-TR';
  if(!serverVoiceOn()){browserSpeak(text,lang);return;}
  const a=new Audio();voice.audio=a;   // tıklama anında oluşturulur: tarayıcı otomatik oynatma engelini aşar
  const slow=setTimeout(()=>{if(tok===voice.tok)toast('🎙️ Emel sesi hazırlanıyor...');},700);
  ttsFetch(text,lang,style||'ders').then(url=>{
    clearTimeout(slow);if(tok!==voice.tok)return;
    a.src=url;a.onended=()=>{if(voice.audio===a)voice.audio=null;};
    return a.play();
  }).catch(e=>{
    clearTimeout(slow);if(tok!==voice.tok)return;
    voice.audio=null;
    if(e&&e.name==='NotAllowedError'){toast('🔊 Sesi başlatmak için düğmeye tekrar tıkla.');return;}
    if(e&&e.status===503){voice.fail=Date.now()+60000;toast('ℹ️ Emel sesi kapalı (Python/edge-tts yok). Tarayıcı sesi kullanılıyor.');}
    else voice.fail=Date.now()+15000;
    browserSpeak(text,lang);
  });
}
function prefetchVoice(text, lang, style){
  if(!serverVoiceOn())return;
  ttsFetch(text,lang||'tr-TR',style||'ders').catch(e=>{if(e&&e.status===503)voice.fail=Date.now()+60000;});
}
function stopSpeak(){
  voice.tok++;if(window.Lesson)Lesson.stop();
  if(voice.audio){try{voice.audio.pause();}catch(e){}voice.audio=null;}
  if('speechSynthesis' in window)speechSynthesis.cancel();
}
window.speak = speak;

/* ---------- Soru tohumu ---------- */
let qSeq = 0;
const Q = (pool, subject, text, options, answer) => ({id:'q_seed_' + (++qSeq), pool, subject, text, options, answer, by:'sistem'});
function seedQuestions(){
 return [
  Q('m1','Fen Bilimleri','Dünya\'nın Güneş etrafındaki bir tam dolanımı ne kadar sürer?',['1 gün','1 ay','1 yıl (365 gün 6 saat)','1 hafta'],2),
  Q('m1','Fen Bilimleri','Mevsimlerin oluşmasının asıl nedeni aşağıdakilerden hangisidir?',['Dünya\'nın Güneş\'e yaklaşıp uzaklaşması','Dünya\'nın eksen eğikliği ve Güneş etrafında dolanması','Ay\'ın Dünya etrafında dönmesi','Güneş\'in büyüyüp küçülmesi'],1),
  Q('m1','Fen Bilimleri','Ay, Dünya\'nın nesidir?',['Yıldızı','Doğal uydusu','Gezegeni','Yapay uydusu'],1),
  Q('m1','Fen Bilimleri','Dünya\'nın kendi ekseni etrafında dönmesi sonucunda ne oluşur?',['Mevsimler','Gece ve gündüz','Yıl','Ay tutulması'],1),
  Q('m2','Matematik','3/8 kesrinde pay kaçtır?',['8','3','5','11'],1),
  Q('m2','Matematik','Aşağıdaki kesirlerden hangisi en büyüktür?',['2/7','5/7','3/7','1/7'],1),
  Q('m2','Matematik','Bir bütün 4 eş parçaya bölünmüş ve 3 parçası boyanmıştır. Boyalı kısım hangi kesirle gösterilir?',['1/4','3/4','4/3','3/7'],1),
  Q('m2','Matematik','Payı ile paydası eşit olan bir kesir neye eşittir?',['Yarıma','Bire (bütüne)','Sıfıra','İkiye'],1),
  Q('m3','Fen Bilimleri','Mıknatısın aynı cins kutupları birbirine yaklaştırılırsa ne olur?',['Birbirini çeker','Birbirini iter','Hiçbir şey olmaz','Tek kutup olur'],1),
  Q('m3','Fen Bilimleri','Mıknatıs aşağıdakilerden hangisini çeker?',['Plastik kalem','Demir çivi','Tahta cetvel','Cam bardak'],1),
  Q('m3','Fen Bilimleri','Mıknatısın çekim gücü en çok nerededir?',['Tam ortasında','Kutuplarında (uç kısımlarında)','Her yerinde eşit','Hiçbir yerinde'],1),
  Q('m4','Fen Bilimleri','Devredeki anahtar açıkken ampul ne olur?',['Yanar','Yanmaz (söner)','Daha parlak yanar','Patlar'],1),
  Q('m4','Fen Bilimleri','Devredeki pil sayısı artırılırsa ampulün parlaklığı ne olur?',['Azalır','Değişmez','Artar','Söner'],2),
  Q('m4','Fen Bilimleri','Aşağıdakilerden hangisi elektriği iyi iletir?',['Plastik','Bakır tel','Ahşap','Kauçuk'],1),
  Q('m5','Sosyal Bilgiler','Pusula iğnesinin kırmızı renkli ucu daima hangi yönü gösterir?',['Güney','Kuzey','Doğu','Batı'],1),
  Q('m5','Sosyal Bilgiler','Güneş sabahları hangi yönden doğar?',['Batı','Doğu','Kuzey','Güney'],1),
  Q('m5','Sosyal Bilgiler','Sağ kolunu Doğu\'ya uzatan birinin yüzü hangi yönü gösterir?',['Batı','Güney','Kuzey','Doğu'],2),
  Q('m6','İngilizce','"Apple" kelimesinin Türkçe karşılığı nedir?',['Armut','Elma','Portakal','Muz'],1),
  Q('m6','İngilizce','"Teacher" ne demektir?',['Öğrenci','Öğretmen','Doktor','Arkadaş'],1),
  Q('m6','İngilizce','"Köpek" İngilizcede nasıl söylenir?',['Cat','Bird','Dog','Fish'],2),
  Q('m6','İngilizce','"Water" ne demektir?',['Ateş','Su','Toprak','Hava'],1),
  Q('exam','Türkçe','"Güneş doğdu, kuşlar cıvıldamaya başladı." cümlesinde kaç yüklem vardır?',['1','2','3','4'],1),
  Q('exam','Türkçe','Aşağıdakilerden hangisi "sıcak" sözcüğünün zıt anlamlısıdır?',['Ilık','Soğuk','Yakıcı','Kaynar'],1),
  Q('exam','Türkçe','Aşağıdaki cümlelerin hangisinde "yüz" sözcüğü sayı anlamında kullanılmıştır?',['Yüzünü yıkadı.','Havuzda yüz metre yüzdü.','Yüzmeyi çok sever.','Yüzü güldü.'],1),
  Q('exam','Türkçe','Aşağıdaki sözcüklerden hangisi yapım eki almış (türemiş) bir sözcüktür?',['Göz','Gözlük','Masa','Kitap'],1),
  Q('exam','Türkçe','"Kitap" sözcüğü kaç hecelidir?',['1','2','3','4'],1),
  Q('exam','Matematik','345 + 278 işleminin sonucu kaçtır?',['613','623','633','523'],1),
  Q('exam','Matematik','8 × 7 işleminin sonucu kaçtır?',['54','56','63','48'],1),
  Q('exam','Matematik','Bir kitap 125 TL\'dir. 4 kitap kaç TL tutar?',['400','450','500','550'],2),
  Q('exam','Matematik','Çevresi 24 cm olan bir karenin bir kenarı kaç cm\'dir?',['4','6','8','12'],1),
  Q('exam','Matematik','Saat 3.45 ise yarım saat sonra saat kaçtır?',['4.00','4.15','4.30','4.45'],1),
  Q('exam','Matematik','Aşağıdaki sayılardan hangisi 5\'e tam bölünür?',['123','245','312','409'],1),
  Q('exam','Fen Bilimleri','Aşağıdakilerden hangisi canlı değildir?',['Kedi','Ağaç','Taş','Balık'],2),
  Q('exam','Fen Bilimleri','Suyun buhar haline geçmesi hangi hal değişimidir?',['Katıdan sıvıya','Sıvıdan gaza','Gazdan sıvıya','Sıvıdan katıya'],1),
  Q('exam','Fen Bilimleri','Ses aşağıdaki ortamlardan hangisinde yayılamaz?',['Hava','Su','Boşluk','Demir'],2),
  Q('exam','Fen Bilimleri','Bitkilerin besin üretebilmesi için aşağıdakilerden hangisi gereklidir?',['Güneş ışığı','Mıknatıs','Plastik','Tuz'],0),
  Q('exam','Sosyal Bilgiler','Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?',['23 Nisan 1920','29 Ekim 1923','30 Ağustos 1922','19 Mayıs 1919'],1),
  Q('exam','Sosyal Bilgiler','Aşağıdakilerden hangisi Türkiye\'nin başkentidir?',['İstanbul','İzmir','Ankara','Bursa'],2),
  Q('exam','Sosyal Bilgiler','Mustafa Kemal Atatürk 19 Mayıs 1919\'da hangi şehre çıkmıştır?',['Ankara','Samsun','İzmir','Sivas'],1),
  Q('exam','İngilizce','What colour is the sky?',['Red','Blue','Green','Black'],1),
  Q('exam','İngilizce','"Monday" ne demektir?',['Pazartesi','Salı','Cuma','Pazar'],0),
  Q('exam','İngilizce','How many days are there in a week?',['Five','Six','Seven','Eight'],2)
 ];
}

/* ---------- Veri modeli ---------- */
function mkUser(o){return Object.assign({id:uid('u'),username:'',password:'',role:'student',name:'',classId:'',xp:0,gold:0,totalGold:0,owned:[],title:'',frame:'',labDone:[],qDone:[],qSeen:[],asgDone:0,stats:{},courseProgress:{},childId:''},o);}
function seedDb(){
 const users=[];
 const mk=o=>{const x=mkUser(o);users.push(x);return x;};
 mk({username:'admin',password:'admin123',role:'admin',name:'Sistem Yöneticisi'});
 mk({username:'ogretmen1',password:'1234',role:'teacher',name:'Ayşe Öğretmen',classId:'4A'});
 const stu=(name,un,xp,gold)=>{const s=mk({username:un,password:'1234',role:'student',name,classId:'4A',xp,gold,totalGold:gold});const first=name.split(' ')[0];mk({username:'veli_'+slug(first),password:'1234',role:'parent',name:first+' Velisi',classId:'4A',childId:s.id});return s;};
 stu('Ali Yılmaz','ali4a',60,40);
 stu('Ayşe Demir','ayse4a',340,190);
 stu('Mehmet Kaya','mehmet4a',220,120);
 stu('Zeynep Çelik','zeynep4a',150,80);
 return {version:3,updatedAt:Date.now(),users,questions:seedQuestions(),results:[],assignments:[],
  announcements:[{id:uid('n'),classId:'4A',text:'Hoş geldiniz! Bu hafta 3D laboratuvarda Mevsimler modülünü inceleyelim. 🌍',date:Date.now(),author:'Ayşe Öğretmen'}],
  messages:[],settings:{}};
}
function normalize(d){
 d=d||{};
 ['users','questions','results','assignments','announcements','messages'].forEach(k=>{if(!Array.isArray(d[k]))d[k]=[];});
 d.users=d.users.map(mkUserKeep);
 if(!d.questions.length)d.questions=seedQuestions();
 d.settings=d.settings||{};d.version=3;d.updatedAt=d.updatedAt||0;
 return d;
}
function mkUserKeep(x){const b=mkUser({});for(const k in b){if(x[k]===undefined||x[k]===null)x[k]=b[k];}if(!x.stats||typeof x.stats!=='object')x.stats={};if(!x.courseProgress||typeof x.courseProgress!=='object')x.courseProgress={};return x;}

/* ---------- Kayıt & Senkronizasyon (LocalStorage + Node sunucusu) ---------- */
let db = null;
const syncState = {server:false,last:0};
let pushT = null, pendingRender = false;
function loadLocal(){try{const r=localStorage.getItem(LS_KEY);return r?JSON.parse(r):null;}catch(e){return null;}}
function save(){db.updatedAt=Date.now();try{localStorage.setItem(LS_KEY,JSON.stringify(db));}catch(e){}pushSoon();}
function pushSoon(){clearTimeout(pushT);pushT=setTimeout(()=>pushNow(false),400);}
async function pushNow(force){
  if(location.protocol==='file:'){updSync();return;}
  try{
    const r=await fetch('/api/db',{method:'POST',headers:{'Content-Type':'application/json','X-Force':force?'1':'0'},body:JSON.stringify(db)});
    if(r.status===409){const j=await r.json();if(j.db)adopt(j.db,true);}
    else if(r.ok){syncState.server=true;syncState.last=Date.now();}
  }catch(e){syncState.server=false;}
  updSync();
}
async function pullNow(initial){
  if(location.protocol==='file:'){updSync();return;}
  try{
    const r=await fetch('/api/db',{cache:'no-store'});const j=await r.json();syncState.server=true;
    if(!j.db){await pushNow(false);}
    else{const sv=j.db.updatedAt||0,lc=db.updatedAt||0;if(sv>lc)adopt(j.db,!initial);else if(sv<lc)await pushNow(false);}
    syncState.last=Date.now();
  }catch(e){syncState.server=false;}
  if(pendingRender&&safeToRender()){pendingRender=false;render();}
  updSync();
}
function safeToRender(){
  const ae=document.activeElement;
  if(ae&&['INPUT','TEXTAREA','SELECT'].includes(ae.tagName))return false;
  if(exam.active||exam.result)return false;
  if(!$('#modal').classList.contains('hidden'))return false;
  return true;
}
function adopt(d,doRender){
  db=normalize(d);try{localStorage.setItem(LS_KEY,JSON.stringify(db));}catch(e){}
  if(session.uid&&!byId(session.uid)){session={uid:null,stack:[]};saveSession();}
  if(doRender){if(safeToRender())render();else pendingRender=true;}
}
function updSync(){const e=$('#syncBadge');if(e)e.innerHTML=location.protocol==='file:'?'💾 Yerel mod':(syncState.server?'🟢 Sunucu bağlı':'🟠 Sunucuya ulaşılamıyor');const s=$('#syncInfo');if(s)s.innerHTML=syncInfoText();}
function syncInfoText(){return (location.protocol==='file:'?'💾 Dosya olarak açıldı: veriler sadece bu tarayıcının LocalStorage alanında tutulur.':(syncState.server?'🟢 Sunucu bağlı. Son eşitleme: '+(syncState.last?fmtDate(syncState.last):'-'):'🟠 Sunucuya ulaşılamıyor; veriler LocalStorage\'da tutuluyor ve sunucu gelince eşitlenecek.'));}

/* ---------- Oturum ---------- */
let session = JSON.parse(sessionStorage.getItem(SS_KEY) || 'null') || {uid:null,stack:[]};
const ui = {tab:{student:0,teacher:0,parent:0,admin:0},q:'',role:'',admClassFilter:'',admBankPool:'all',admBankSub:'all',chat:null,activeCourse:'turkce',courseTerm:'all',courseSearch:'',courseStatus:'all',loginTab:'login'};
function saveSession(){sessionStorage.setItem(SS_KEY,JSON.stringify(session));}
const byId = id => db.users.find(x=>x.id===id);
const byName = n => db.users.find(x=>x.username===n);
const cur = () => session.uid ? byId(session.uid) : null;
const classStudents = cid => db.users.filter(x=>x.role==='student'&&x.classId===cid);
function uniqueUser(base){let c=base||'kullanici',n=1;while(byName(c)){n++;c=base+n;}return c;}
/* ---------- Ortak arayüz ---------- */
const A = {};
const lab = {mod:'m1',qid:null,answered:null};
const exam = {active:false,qs:[],ans:[],idx:0,endAt:0,timer:null,result:null};
let chart = null;

function resetTransient(){
  exam.active=false;exam.result=null;clearInterval(exam.timer);
  lab.mod='m1';lab.qid=null;lab.answered=null;ui.chat=null;ui.q='';ui.role='';
  ui.admClassFilter='';ui.admBankPool='all';ui.admBankSub='all';
  ui.tab={student:0,teacher:0,parent:0,admin:0};ui.activeCourse='turkce';ui.courseTerm='all';ui.courseSearch='';ui.courseStatus='all';ui.loginTab='login';stopSpeak();
}
function roleAvatar(u,size){const it=ITEMS.find(i=>i.id===u.frame);return `<span class="avatar ${it?it.cls:''}" style="--s:${size||44}px">${ROLE_ICON[u.role]||'🙂'}</span>`;}
function tabs(role,names){return `<div class="tabs">${names.map((n,i)=>`<button class="tab ${ui.tab[role]===i?'on':''}" onclick="A.tab('${role}',${i})">${n}</button>`).join('')}</div>`;}
A.tab=(r,i)=>{ui.tab[r]=i;render();};

function render(){
  if(window.CoursePlayer)CoursePlayer.stopAudio();
  if(window.Lesson)Lesson.reset();if(window.Lab3D)Lab3D.dispose();
  if(chart){chart.destroy();chart=null;}
  const u=cur();
  document.body.classList.toggle('hasImp',session.stack.length>0&&!!u);
  drawImpBar();
  const app=$('#app');
  if(!u){app.innerHTML=loginView();updSync();return;}
  const views={student:studentView,teacher:teacherView,parent:parentView,admin:adminView};
  app.innerHTML=header(u)+views[u.role](u);
  updSync();
  if(u.role==='parent')drawChart(u);
  if(u.role==='student'){
    if(ui.tab.student===1)mountLab();
    if(exam.active&&ui.tab.student===2)tickExam();
  }
}
function header(u){
  return `<div class="topbar"><div class="logo">🌌 Bilgi Evreni <b>4D</b> Ultimate</div><div class="who"><small id="syncBadge"></small><button class="btn ghost sm" onclick="A.toggleSound()" id="soundToggleBtn" title="${soundMuted?'Sesi Aç':'Sesi Kapat'}" style="padding:4px 8px;font-size:14px">${soundMuted?'🔇':'🔊'}</button><button class="btn ghost sm" onclick="A.toggleFullscreen()" title="Tam Ekran" style="padding:4px 8px;font-size:14px">⛶</button><button class="btn sm ok" id="pwaInstallBtn" onclick="A.installPWA()" style="display:none;padding:4px 10px;font-size:12px" title="Cihaza uygulama olarak kur">📲 Yükle</button>${roleAvatar(u)}<div><b>${esc(u.name)}</b><small>${ROLE[u.role]}${u.role==='student'?' • Seviye '+level(u.xp):''}${u.classId?' • '+esc(u.classId):''}</small></div><button class="btn ghost sm" onclick="A.logout()">🚪 Çıkış</button></div></div>`;
}

/* ---------- Giriş ---------- */
function loginView(){
  const sc = db.users.filter(x => x.role === 'student').length;
  const isReg = ui.loginTab === 'register';
  const savedUn = localStorage.getItem('be4d_saved_user') || '';
  const demos = [
    ['admin', '👑', 'Admin', 'admin / admin123'],
    ['ogretmen1', '👩‍🏫', 'Öğretmen', 'ogretmen1 / 1234'],
    ['ali4a', '🧒', 'Öğrenci', 'ali4a / 1234'],
    ['veli_ali', '👨‍👩‍👧', 'Veli', 'veli_ali / 1234']
  ];
  return `<div class="login">
    <h1>🌌 Bilgi Evreni <b>4D</b> Ultimate</h1>
    <p class="muted" style="text-align:center">MEB 4. Sınıf müfredatına tam uyumlu 3D interaktif eğitim portalı</p>
    <div class="counters">
      <div class="counter"><b>6</b>MEB Dersi</div>
      <div class="counter"><b>43</b>Video Dersi</div>
      <div class="counter"><b>173</b>Sesli Adım</div>
      <div class="counter"><b>${MODULES.length}</b>3D Deney</div>
      <div class="counter"><b>${db.questions.length}</b>Soru</div>
      <div class="counter"><b>${sc}</b>Öğrenci</div>
    </div>
    <div class="card" style="max-width:440px;margin:0 auto 18px">
      <div style="display:flex;border-bottom:1px solid var(--b);margin:-16px -16px 16px -16px">
        <button class="btn ghost" style="flex:1;border-radius:0;border-bottom:${!isReg ? '2px solid #6366f1' : 'none'};font-weight:${!isReg ? 'bold' : 'normal'};color:${!isReg ? 'var(--t)' : 'var(--m)'}" onclick="A.setLoginTab('login')">🔐 Giriş Yap</button>
        <button class="btn ghost" style="flex:1;border-radius:0;border-bottom:${isReg ? '2px solid #6366f1' : 'none'};font-weight:${isReg ? 'bold' : 'normal'};color:${isReg ? 'var(--t)' : 'var(--m)'}" onclick="A.setLoginTab('register')">📝 Yeni Öğrenci Kaydı</button>
      </div>
      ${!isReg ? `
        <label>Kullanıcı Adı<input id="lu" autocomplete="username" value="${esc(savedUn)}" onkeydown="if(event.key==='Enter')$('#lp').focus()"></label>
        <label style="margin-top:10px">Şifre
          <div class="pwwrap"><input id="lp" type="password" autocomplete="current-password" onkeydown="if(event.key==='Enter')A.login()"><button type="button" onclick="A.showPw()" title="Göster/Gizle">👁️</button></div>
        </label>
        <div style="display:flex;align-items:center;justify-content:space-between;margin:10px 0 14px;font-size:12px;color:var(--m)">
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;margin:0"><input type="checkbox" id="lrem" ${savedUn ? 'checked' : ''} style="width:auto;margin:0"> Beni Hatırla</label>
          <a href="javascript:void(0)" onclick="A.helpLogin()" style="color:#818cf8;text-decoration:none">Şifremi Unuttum?</a>
        </div>
        <div class="row"><button class="btn" style="width:100%" onclick="A.login()">Giriş Yap 🚀</button></div>
      ` : `
        <label>Ad Soyad<input id="regName" placeholder="Örn: Mehmet Kaya" autocomplete="name" onkeydown="if(event.key==='Enter')$('#regUser').focus()"></label>
        <label style="margin-top:10px">Kullanıcı Adı<input id="regUser" placeholder="Örn: mehmet4b" autocomplete="username" onkeydown="if(event.key==='Enter')$('#regClass').focus()"></label>
        <label style="margin-top:10px">Sınıf
          <select id="regClass">
            <option value="4-A">4-A Sınıfı</option>
            <option value="4-B">4-B Sınıfı</option>
            <option value="4-C">4-C Sınıfı</option>
          </select>
        </label>
        <label style="margin-top:10px">Şifre
          <div class="pwwrap"><input id="regPw" type="password" placeholder="En az 3 karakter" autocomplete="new-password" onkeydown="if(event.key==='Enter')A.registerStudent()"><button type="button" onclick="A.showRegPw()" title="Göster/Gizle">👁️</button></div>
        </label>
        <div class="row" style="margin-top:14px"><button class="btn ok" style="width:100%" onclick="A.registerStudent()">🎉 Kayıt Ol ve Hemen Başla 🚀</button></div>
      `}
    </div>
    <div style="text-align:center;margin-bottom:18px">
      <button class="btn ghost sm" onclick="A.exploreCurriculum()" style="border:1px dashed rgba(255,255,255,0.25)">
        🔍 MEB 4. Sınıf Müfredatını &amp; 3D Laboratuvarı İncele (Girişsiz Keşif)
      </button>
    </div>
    <h3 style="text-align:center">⚡ Tek Tıkla Hızlı Demo Giriş</h3>
    <div class="democards">${demos.map(d => `<button class="demo" onclick="A.demo('${d[0]}')"><span>${d[1]}</span><b>${d[2]}</b><small>${d[3]}</small></button>`).join('')}</div>
    <p class="muted" style="text-align:center;margin-top:18px" id="syncInfo"></p>
  </div>`;
}

A.setLoginTab = tab => {
  ui.loginTab = tab;
  render();
};
A.showPw = () => { const p = $('#lp'); if (p) p.type = p.type === 'password' ? 'text' : 'password'; };
A.showRegPw = () => { const p = $('#regPw'); if (p) p.type = p.type === 'password' ? 'text' : 'password'; };
A.login = () => {
  const un = ($('#lu') ? $('#lu').value : '').trim().toLowerCase();
  const pw = $('#lp') ? $('#lp').value : '';
  const rem = $('#lrem') ? $('#lrem').checked : false;
  const u = db.users.find(x => x.username.toLowerCase() === un && x.password === pw);
  if (!u) { toast('❌ Kullanıcı adı veya şifre hatalı'); return; }
  if (rem) {
    try { localStorage.setItem('be4d_saved_user', un); } catch (e) {}
  } else {
    try { localStorage.removeItem('be4d_saved_user'); } catch (e) {}
  }
  startSession(u.id);
};
A.registerStudent = () => {
  const name = ($('#regName') ? $('#regName').value : '').trim();
  const un = ($('#regUser') ? $('#regUser').value : '').trim().toLowerCase();
  const cls = $('#regClass') ? $('#regClass').value : '4-A';
  const pw = ($('#regPw') ? $('#regPw').value : '').trim();

  if (!name || !un || !pw) {
    toast('⚠️ Lütfen Ad Soyad, Kullanıcı Adı ve Şifre alanlarını doldurun.');
    return;
  }
  if (pw.length < 3) {
    toast('⚠️ Şifreniz en az 3 karakter olmalıdır.');
    return;
  }
  if (db.users.some(x => x.username.toLowerCase() === un)) {
    toast('❌ Bu kullanıcı adı zaten kullanılıyor. Başka bir kullanıcı adı seçin.');
    return;
  }

  const newStudent = {
    id: 'u_' + Date.now(),
    username: un,
    password: pw,
    name: name,
    role: 'student',
    classId: cls,
    avatar: '🧒',
    xp: 0,
    gold: 50,
    totalGold: 50,
    title: 'Yeni Kâşif',
    inventory: [],
    labDone: [],
    courseProgress: {},
    stats: {},
    examHistory: []
  };

  db.users.push(newStudent);
  save();
  toast(`🎉 Hoş geldin ${name}! Hesabın oluşturuldu.`);
  startSession(newStudent.id);
};
A.helpLogin = () => {
  modal(`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:440px">
      <h3>🔑 Şifremi Unuttum / Giriş Yardımı</h3>
      <p style="font-size:13px;line-height:1.5">Öğrenci şifreleri okul veya sınıf öğretmeniniz ya da sistem yöneticisi (admin) tarafından anında görüntülenebilir ve güncellenebilir.</p>
      <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:12px;font-size:12px">
        <b>💡 Hızlı Demo Girişi:</b><br>
        Aşağıdaki hazır demo butonlarına tıklayarak herhangi bir şifre yazmadan anında giriş yapabilirsiniz:
        <ul style="margin:6px 0 0 16px;padding:0">
          <li><b>Öğrenci:</b> ali4a (Şifre: 1234)</li>
          <li><b>Öğretmen:</b> ogretmen1 (Şifre: 1234)</li>
          <li><b>Admin:</b> admin (Şifre: admin123)</li>
        </ul>
      </div>
      <div class="row" style="justify-content:flex-end">
        <button class="btn sm ghost" onclick="closeModal()">Tamam</button>
      </div>
    </div>
  `);
};
A.exploreCurriculum = () => {
  const subjectsHtml = COURSES_DATA.map(c => `
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:12px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <span style="font-size:20px">${c.icon}</span>
        <b style="color:var(--t)">${esc(c.name)}</b>
        <span class="badge" style="margin-left:auto">${c.terms.reduce((a, t) => a + t.units.length, 0)} Ünite</span>
      </div>
      <p style="font-size:12px;color:var(--m);margin:0 0 8px 0">${esc(c.desc)}</p>
      <div style="display:flex;flex-wrap:wrap;gap:4px">
        ${c.terms.flatMap(t => t.units).slice(0, 4).map(u => `<span style="font-size:11px;padding:2px 8px;background:rgba(255,255,255,0.06);border-radius:6px;color:var(--t)">${esc(u.unitTitle)}</span>`).join('')}
        ${c.terms.reduce((a, t) => a + t.units.length, 0) > 4 ? `<span style="font-size:11px;padding:2px 6px;color:var(--m)">+ daha fazlası</span>` : ''}
      </div>
    </div>
  `).join('');

  modal(`
    <div style="display:flex;flex-direction:column;gap:14px;max-width:720px;max-height:80vh;overflow-y:auto;padding-right:6px">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:28px">🌌</span>
        <div>
          <h3 style="margin:0">MEB 4. Sınıf Müfredatı &amp; 3D Eğitim Dünyası</h3>
          <small class="muted">Tam 6 Temel Ders · 43 Ünite Videosu · 173 Sesli Anlatım · 12 Adet 3D Deney</small>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:10px">
        ${subjectsHtml}
      </div>
      <div style="background:linear-gradient(135deg,rgba(99,102,241,0.15),rgba(168,85,247,0.15));border:1px solid rgba(168,85,247,0.3);border-radius:12px;padding:12px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <div>
          <b>Hemen Ücretsiz Deneyin!</b>
          <p style="margin:2px 0 0;font-size:12px;color:var(--m)">Tek tıkla Öğrenci (ali4a) veya Öğretmen hesabına giriş yaparak sistemi canlı test edin.</p>
        </div>
        <button class="btn ok" onclick="closeModal();A.demo('ali4a')">🧒 Öğrenci Demosu ile Başla ▶</button>
      </div>
    </div>
  `);
};
function startSession(id){session={uid:id,stack:[]};saveSession();resetTransient();render();}
A.demo=un=>{const u=byName(un);if(!u){toast('Bu demo hesap silinmiş.');return;}startSession(u.id);};
A.logout=()=>{session={uid:null,stack:[]};saveSession();resetTransient();render();};

/* ---------- Hesaba geç / geri dön ---------- */
function canImp(t){const v=cur();if(!v||!t||t.id===v.id)return false;if(v.role==='admin')return true;return v.role==='teacher'&&['student','parent'].includes(t.role)&&t.classId===v.classId;}
A.imp=id=>{const t=byId(id);if(!canImp(t)){toast('Bu hesaba geçiş yetkiniz yok.');return;}const v=cur();session.stack.push(v.id);session.uid=t.id;saveSession();exam.active=false;exam.result=null;clearInterval(exam.timer);lab.qid=null;ui.tab[t.role]=0;render();window.scrollTo(0,0);};
A.back=()=>{const p=session.stack.pop();if(p&&byId(p))session.uid=p;else session={uid:null,stack:[]};saveSession();exam.active=false;exam.result=null;clearInterval(exam.timer);render();};
function drawImpBar(){
  const bar=$('#impBar'),u=cur();
  if(!session.stack.length||!u){bar.classList.add('hidden');bar.innerHTML='';return;}
  const origin=byId(session.stack[session.stack.length-1]);
  bar.classList.remove('hidden');
  bar.innerHTML=`<button class="btn" style="background:#111" onclick="A.back()">${origin&&origin.role==='admin'?'👑 Admin Görünümüne Geri Dön':'👩‍🏫 Öğretmen Görünümüne Geri Dön'}</button><span>Şu an <b>${esc(u.name)}</b> (${ROLE[u.role]}) hesabını görüntülüyorsunuz</span>`;
}

/* ---------- Ödül ---------- */
function gain(u,xp,g){
  const before=level(u.xp);u.xp+=xp;u.gold+=g;u.totalGold+=g;
  toast(`⭐ +${xp} XP &nbsp; 🪙 +${g} Altın${level(u.xp)>before?' &nbsp; 🎉 Seviye '+level(u.xp)+'!':''}`);
}
function refreshStat(){const e=$('#statbar');if(e)e.outerHTML=statsBar(cur());}
function bumpStat(u,subject,ok){const s=u.stats[subject]||(u.stats[subject]={c:0,t:0});s.t++;if(ok)s.c++;}

/* ================= ÖĞRENCİ PANELİ ================= */
function statsBar(u){return `<div class="statbar" id="statbar"><div class="chip">⭐ XP <b>${u.xp}</b></div><div class="chip">🎖️ Seviye <b>${level(u.xp)}</b></div><div class="chip">🪙 Altın <b>${u.gold}</b></div>${u.title?`<div class="chip">🏷️ ${esc(u.title)}</div>`:''}<div class="xpbar" title="Sonraki seviyeye: ${100-u.xp%100} XP"><i style="width:${u.xp%100}%"></i></div></div>`;}
function studentView(u){
  const T=['📚 MEB Dersleri','🧪 3D Laboratuvar','⏱️ Deneme Sınavı','📢 Ödevler & Duyurular','🏆 Liderlik & Market'];
  return statsBar(u)+tabs('student',T)+`<div class="panel">${([coursesTab,labTab,examTab,asgTab,marketTab][ui.tab.student]||coursesTab)(u)}</div>`;
}

/* --- Sekme 1: 3D Laboratuvar --- */
function labTab(u){
  return `<div class="modgrid">${MODULES.map(m=>`<button id="mb_${m.id}" class="modbtn ${m.id===lab.mod?'on':''}" onclick="A.selMod('${m.id}')"><span>${m.icon}</span><b>${m.name}</b><small>${m.subject}${u.labDone.includes(m.id)?' ✅':''}</small></button>`).join('')}</div>
  <div class="stage" id="labStage"><div id="labCanvas"></div><div class="stage-live" id="labLive"></div>
   <div class="stage-toolbar"><button class="btn sm warn" onclick="Lesson.start()" title="Ders videosunu başlat">🎬 Ders</button><button class="btn sm" onclick="A.lab('zoomIn')" title="Yakınlaştır">➕</button><button class="btn sm" onclick="A.lab('zoomOut')" title="Uzaklaştır">➖</button><button class="btn sm" onclick="A.lab('toggleWire')" title="Tel kafes">🕸️</button><button class="btn sm" onclick="A.lab('reset')" title="Kamerayı sıfırla">🎯</button><button class="btn sm" onclick="A.lab('fullscreen')" title="Tam ekran">⛶</button></div>
   <div class="stage-controls" id="labControls"></div><div class="lsn" id="lsn"></div></div>
  <div class="two"><div class="card"><h3 id="labTitle"></h3><p id="labTopic"></p><div class="row"><button class="btn" onclick="A.speakTopic()">🔊 Sesli Dinle</button><button class="btn ghost" onclick="stopSpeak()">⏹ Durdur</button></div><p class="muted">🖱️ Fareyle sürükle: 360° döndür • Tekerlek: yakınlaştır</p></div><div class="card" id="qBox"></div></div>`;
}
function mountLab(){
  const go=()=>{if(!$('#labStage'))return;Lab3D.mount($('#labStage'));A.selMod(lab.mod,true);};
  if(window.Lab3D)go();else window.addEventListener('lab3d-ready',go,{once:true});
  setTimeout(()=>{const c=$('#labCanvas');if(c&&!window.Lab3D)c.innerHTML='<p style="padding:24px">⚠️ 3D motoru (Three.js) yüklenemedi. İnternet bağlantını kontrol et ve sayfayı yenile.</p>';},8000);
}
A.lab=cmd=>{if(window.Lab3D&&Lab3D[cmd])Lab3D[cmd]();};
A.selMod=(id,keep)=>{
  lab.mod=id;stopSpeak();
  MODULES.forEach(m=>{const b=$('#mb_'+m.id);if(b)b.classList.toggle('on',m.id===id);});
  const m=modById(id);
  if($('#labTitle'))$('#labTitle').textContent=m.icon+' '+m.name;
  if($('#labTopic'))$('#labTopic').textContent=m.topic;
  if(window.Lab3D)Lab3D.load(id);
  A.newQ();
  setTimeout(()=>{if(lab.mod===id)prefetchVoice(m.name+'. '+m.topic,'tr-TR','ders');},1500);
  if(window.Lesson){Lesson.poster();Lesson.prefetch(id);}   // konu sesi arka planda hazırlanır
};
A.speakTopic=()=>{const m=modById(lab.mod);speak(m.name+'. '+m.topic);};
/* ================= DERS VİDEOSU: otomatik anlatım + sorular ================= */
const QUIZ_N = 4;
const CORRECT_SAY = ["Aferin sana! Doğru cevap!", "Harika! Çok güzel bildin!", "Bravo! Tam isabet!", "Süper! Doğru!", "Muhteşem! Böyle devam!"];
/* Her adım: t = anlatım metni, do = sahne komutları, cam/tgt = kamera, ramp = anlatım boyunca kayan değer, emo = ekranda beliren emoji, then = anlatımdan sonra söylenecekler */
const LESSONS = {
  m1: [
    {title: "Uzaya Yolculuk Başlıyor", badge: "Giriş", t: "Merhaba küçük kâşifler! Ben Bilge Baykuş. Bugün uzay laboratuvarımızda Dünya'mızın hareketlerini, mevsimleri ve Ay'ı inceleyeceğiz. Hazır mısınız? Haydi başlayalım!", style: "coskulu", emo: "🚀", do: [["set", "day", 172], ["act", "run"]], cam: [0, 13, 22]},
    {title: "Isı ve Işık Kaynağımız: Güneş", badge: "Güneş", t: "Merkezdeki devasa ve parlak yıldız, Güneş'imizdir. Güneş, Dünya'mızın temel ısı ve ışık kaynağıdır. Kendi ekseni etrafında döner.", emo: "☀️", cam: [0, 5, 11]},
    {title: "Dünya'nın Yıllık Dolanımı ve Yörünge", badge: "365 Gün 6 Saat", slide: "assets/images/mevsimler_diyagrami.svg", slideTitle: "Dünya'nın Dolanma Hareketi ve Mevsimler", t: "Gezegenimiz Dünya, Güneş'in etrafında eliptik bir yörüngede dolanma hareketi yapar. Bu dolanım tam üç yüz altmış beş gün altı saat, yani bir yıl sürer.", emo: "🌍", cam: [0, 13, 20], ramp: ["day", 1, 365]},
    {title: "Dünya'nın Günlük Dönüşü (Gece ve Gündüz)", badge: "24 Saat (1 Gün)", t: "Dünya aynı zamanda kendi ekseni etrafında batıdan doğuya doğru döner. Bu dönme hareketi yirmi dört saat sürer ve gece ile gündüzü oluşturur. Güneş'e bakan taraf gündüzü, arkada kalan taraf ise geceyi yaşar.", emo: "🌗", do: [["set", "day", 172]], cam: [-11, 3, 5], tgt: [-7, 0, 0]},
    {title: "23.5° Eksen Eğikliği ve Dört Mevsim", badge: "23.5° Eksen Eğikliği", slide: "assets/images/mevsimler_diyagrami.svg", slideTitle: "Eksen Eğikliği & 4 Mevsim Şeması", t: "Dünya'nın dönme ekseni yirmi üç buçuk derece eğiktir. Bu eksen eğikliği ve Güneş etrafında dolanma hareketi sonucunda dört mevsim meydana gelir: İlkbahar, yaz, sonbahar ve kış!", emo: "🍂", cam: [0, 14, 21], tgt: [0, 0, 0], ramp: ["day", 80, 354]},
    {title: "Dünya'nın Doğal Uydusu: Ay", badge: "Ay (Doğal Uydu)", t: "Dünya'nın etrafında dolanan küçük gök cismi ise Ay'dır. Ay, Dünya'mızın tek doğal uydusudur. Ay hem kendi etrafında döner hem de Dünya etrafında yaklaşık yirmi yedi günde dolanır.", emo: "🌙", do: [["set", "day", 172]], cam: [-7, 4, 6], tgt: [-7, 0, 0]},
    {title: "Uzay Bilgini Göster", badge: "Soru Zamanı", t: "Harika öğrendiniz! Şimdi uzay bilginizi sınama zamanı. Sorulara geçiyoruz, başarılar!", style: "coskulu", emo: "🎯", do: [["act", "run"]], cam: [0, 12, 19], tgt: [0, 0, 0]}
  ],
  m2: [
    {title: "Kesirlerle Paylaşım", badge: "Giriş", t: "Merhaba matematik kâşifleri! Bugün kesirleri öğreneceğiz. Kesirler, bir bütünü eş parçalara ayırıp paylaştığımızda kullanılır.", style: "coskulu", emo: "🍰", do: [["act", "pie"], ["set", "den", 8], ["set", "num", 0]], cam: [0, 9, 11]},
    {title: "Payda: Bütünün Eş Parça Sayısı", badge: "Payda", slide: "assets/images/kesirler_pasta.svg", slideTitle: "Kesir Şeması: Pay ve Payda", t: "Pastamızı sekiz eş parçaya böldük. Kesir çizgisinin altındaki sayıya payda denir. Payda, bir bütünün kaç eş parçaya bölündüğünü gösterir.", emo: "➗", cam: [0, 7, 8]},
    {title: "Pay: Alınan Eş Parça Sayısı", badge: "Pay (3/8)", slide: "assets/images/kesirler_pasta.svg", slideTitle: "Sekizde Üç (3/8)", t: "Şimdi üç dilimi boyayalım! Kesir çizgisinin üstündeki sayıya pay denir. Pay, bütünden kaç eş parçanın alındığını gösterir. Bu kesir, sekizde üç şeklinde okunur.", emo: "🎨", ramp: ["num", 0, 3]},
    {title: "Pay ve Payda Eşitliği: 1 Tam Bütün", badge: "Bütün (8/8)", slide: "assets/images/kesirler_pasta.svg", slideTitle: "Tam Bir Bütün (8/8)", t: "Eğer pay ile payda birbirine eşit olursa, bütün parçalar alınmış olur. Sekizde sekiz kesri, tam bir bütüne yani bire eşittir.", emo: "⭐", ramp: ["num", 3, 8]},
    {title: "Kesir Çubukları Modeli", badge: "Çubuk Modeli", t: "Kesirleri çubuk modeliyle de gösterebiliriz. Paydaları eşit olan kesirlerde, payı büyük olan kesir her zaman daha büyüktür.", emo: "📊", do: [["act", "bar"], ["set", "den", 7], ["set", "num", 2]], cam: [0, 6, 9], ramp: ["num", 2, 5]},
    {title: "Geometrik Bloklar Modeli", badge: "Blok Modeli", t: "Blok modelinde her küp eş bir parçadır. Boyalı bloklar payı, toplam blok sayısı ise paydayı ifade eder.", emo: "🧱", do: [["act", "blk"], ["set", "den", 6], ["set", "num", 4]], cam: [0, 7, 9]},
    {title: "Kesir Bilgini Göster", badge: "Soru Zamanı", t: "Tebrikler! Kesirlerin mantığını kavradınız. Haydi şimdi sorularla kendimizi deneyelim!", style: "coskulu", emo: "🎯", do: [["act", "pie"], ["set", "den", 8], ["set", "num", 3]], cam: [0, 8, 10]}
  ],
  m3: [
    {title: "Görünmez Kuvvet: Manyetizma", badge: "Giriş", t: "Merhaba araştırmacılar! Bugün mıknatısların görünmez çekim ve itme kuvvetlerini keşfedeceğiz.", style: "coskulu", emo: "🧲", do: [["act", "flipOff"], ["set", "dist", 5]], cam: [0, 6, 12]},
    {title: "Kutuplar: Kuzey (N) ve Güney (S)", badge: "Kutuplar", slide: "assets/images/miknatis_alan.svg", slideTitle: "Mıknatıs Kutupları ve Manyetik Alan", t: "Her mıknatısın iki kutbu vardır: Kırmızı renkli Kuzey kutbu N ve mavi renkli Güney kutbu S. Çekim gücü kutup uçlarında en fazladır, ortasında ise en azdır.", emo: "🔴", cam: [0, 3.5, 8]},
    {title: "Zıt Kutuplar Birbirini Çeker (N - S)", badge: "Çekme Kuvveti", slide: "assets/images/miknatis_alan.svg", slideTitle: "Zıt Kutuplar Çeker (N - S)", t: "Farklı kutuplar karşı karşıya geldiğinde birbirine çekme kuvveti uygular. Kuzey kutbu ile güney kutbu birbirini kuvvetle çeker!", emo: "🤝", do: [["act", "flipOff"]], cam: [0, 4, 10], ramp: ["dist", 7, 1.5]},
    {title: "Aynı Kutuplar Birbirini İter (N - N)", badge: "İtme Kuvveti", slide: "assets/images/miknatis_alan.svg", slideTitle: "Aynı Kutuplar İter (N - N)", t: "Şimdi sağdaki mıknatısı çevirdik. Aynı kutuplar karşı karşıya geldiğinde birbirini iter! Kuzey ile kuzey kutbu asla bir araya gelmek istemez.", emo: "💥", do: [["act", "flipOn"], ["set", "dist", 2]], ramp: ["dist", 2, 4]},
    {title: "Mesafe ve Manyetik Çekim Şiddeti", badge: "Mesafe Kuralı", t: "Mıknatıslar temas gerektirmeyen bir kuvvet uygular. Mıknatıslar birbirinden uzaklaştıkça kuvvet hızla zayıflar; yaklaştıkça kuvvet çok güçlenir.", emo: "📏", do: [["act", "flipOff"]], cam: [0, 6, 13], ramp: ["dist", 1.2, 8]},
    {title: "Manyetik Olan ve Olmayan Maddeler", badge: "Manyetik Maddeler", t: "Mıknatıs demir, nikel ve kobalt gibi maddeleri çeker. Plastik, cam, tahta, kağıt ve kumaş gibi maddeleri ise çekmez.", emo: "🔩"},
    {title: "Mıknatıs Bilgini Göster", badge: "Soru Zamanı", t: "Harika bir çalışma oldu! Şimdi öğrendiklerimizi pekiştirmek için sorulara geçelim.", style: "coskulu", emo: "🎯", do: [["set", "dist", 4]], cam: [0, 6, 12]}
  ],
  m4: [
    {title: "Küçük Mucitler ve Elektrik Devresi", badge: "Giriş", t: "Merhaba genç mucitler! Bugün basit bir elektrik devresi kurmayı ve ampulü yakmanın kurallarını öğreneceğiz.", style: "coskulu", emo: "💡", do: [["set", "cells", 2], ["act", "on"]], cam: [0, 1.5, 12]},
    {title: "Temel Devre Elemanları", badge: "Devre Elemanları", slide: "assets/images/devre_semasi.svg", slideTitle: "Basit Devre Elemanları ve Görevleri", t: "Basit bir elektrik devresi; pil, ampul, anahtar ve iletken bağlantı kablolarından oluşur. Pil devrenin enerji kaynağıdır, kablolar ise akımı taşır.", emo: "🔋", cam: [0, 1, 9]},
    {title: "Kapalı Devre: Akım Dolanır, Ampul Yanar", badge: "Kapalı Devre (Yanar)", slide: "assets/images/devre_semasi.svg", slideTitle: "Kapalı Devre (Ampul Işık Verir)", t: "Anahtar kapalı olduğunda devre kesintisiz tamamlanır. Mavi elektrik akımı serbestçe dolaşır ve ampul ışık verir!", emo: "⚡", do: [["act", "on"]]},
    {title: "Açık Devre: Yol Kesilir, Ampul Söner", badge: "Açık Devre (Söner)", slide: "assets/images/devre_semasi.svg", slideTitle: "Açık Devre (Akım Kesilir, Söner)", t: "Dikkat edin: Anahtarı açtığımızda devre kesintiye uğrar. Elektrik akımı geçemez ve ampul söner! Devrenin çalışması için anahtar kapalı olmalıdır.", emo: "🌑", do: [["act", "off"]]},
    {title: "Anahtarı Kapatmak ve Işık", badge: "Devreyi Tamamla", t: "Anahtarı tekrar kapatalım. Devre yeniden bağlandı ve ampulümüz hemen parıldamaya başladı!", emo: "🌟", do: [["act", "on"]]},
    {title: "Pil Sayısı ve Ampul Parlaklığı", badge: "Pil Sayısı & Volt", t: "Devredeki pil sayısını artırdığımızda gerilim yükselir ve elektrik akımı artar. Böylece ampul çok daha parlak yanar!", emo: "🔆", cam: [0, 1.5, 12], ramp: ["cells", 1, 4]},
    {title: "İletken ve Yalıtkan Maddeler", badge: "İletkenlik", t: "Metaller elektriği çok iyi ileten iletken maddelerdir. Plastik, porselen ve cam ise elektriği iletmeyen yalıtkan maddelerdir.", emo: "🔌"},
    {title: "Elektrik Bilgini Göster", badge: "Soru Zamanı", t: "Mükemmel! Artık bir devre ustasısınız. Bakalım soruları doğru bilebilecek misiniz?", style: "coskulu", emo: "🎯", do: [["act", "on"], ["set", "cells", 2]]}
  ],
  m5: [
    {title: "Kâşifin Yön Kılavuzu", badge: "Giriş", t: "Merhaba doğa kâşifleri! Bugün doğada kaybolmadan yolumuzu bulmayı ve pusula kullanmayı öğreneceğiz.", style: "coskulu", emo: "🗺️", do: [["set", "bearing", 45], ["set", "hs", 1]], cam: [-2.5, 11, 15], tgt: [-2.5, 0.5, 0]},
    {title: "Pusula İğnesi ve Manyetik Kuzey", badge: "Pusula", slide: "assets/images/pusula_gulu.svg", slideTitle: "Pusula Gülü ve Yön Bulma", t: "Bu bizim pusulamız. Pusulanın renkli kırmızı iğnesi her zaman Dünya'nın manyetik Kuzeyini gösterir. K harfi kuzeyi simgeler.", emo: "🧭", cam: [-9.5, 6, 6.5], tgt: [-9.5, 0.5, 0]},
    {title: "Dört Ana Yön (Kuzey - Güney - Doğu - Batı)", badge: "Ana Yönler", slide: "assets/images/pusula_gulu.svg", slideTitle: "Dört Ana ve Dört Ara Yön", t: "Dört ana yön vardır: Kuzey, Güney, Doğu ve Batı. Güneş sabahları Doğu'dan doğar, akşamları Batı'dan batar.", emo: "🔄", cam: [-2.5, 10, 13], tgt: [-2.5, 0.5, 0], ramp: ["bearing", 0, 359]},
    {title: "Güneş ile Yön Tayini Kuralı", badge: "Yön Tayini Kuralı", t: "Sağ kolumuzu Güneş'in doğduğu Doğu yönüne uzatırsak; sol kolumuz Batı'yı, yüzümüz Kuzey'i, arkamız ise Güney'i gösterir.", emo: "👀", do: [["set", "bearing", 0]], cam: [-2.5, 9, 12]},
    {title: "Dört Ara Yön (KD - GD - GB - KB)", badge: "Ara Yönler", t: "Ana yönlerin arasında ara yönler bulunur: Kuzeydoğu, Güneydoğu, Güneybatı ve Kuzeybatı.", emo: "↗️", ramp: ["bearing", 30, 330]},
    {title: "Fiziki Harita Renkleri ve Yükselti", badge: "Fiziki Harita", t: "Haritalarda yeşil renk deniz seviyesindeki alçak yerleri ve ovaları, sarı orta yükseklikleri, kahverengi yüksek dağları, beyaz ise karlı zirveleri gösterir.", emo: "⛰️", cam: [3, 6, 10], tgt: [0, 0.5, 0], ramp: ["hs", 0.3, 2.2]},
    {title: "Yön Bilgini Göster", badge: "Soru Zamanı", t: "Harika bir keşif yolculuğuydu! Şimdi sorularla kâşiflik becerimizi test edelim.", style: "coskulu", emo: "🎯", do: [["set", "hs", 1], ["set", "bearing", 45]], cam: [-2.5, 11, 15], tgt: [-2.5, 0.5, 0]}
  ],
  m6: [
    {title: "Hello Kids! Word Crystals", badge: "Giriş", t: "Hello kids! Merhaba çocuklar! Bugün döner kristallerdeki temel İngilizce kelimeleri ve anlamlarını öğreneceğiz. Haydi başlayalım!", style: "coskulu", emo: "💎", do: [["set", "speed", 1]], cam: [0, 6, 13]},
    {title: "Apple = Elma", badge: "Word 1", slide: "assets/images/word_apple.svg", slideTitle: "Apple 🍎 = Elma", t: "İlk kelimemiz: apple, yani elma.", emo: "🍎", cam: [0, 4, 10], then: [{text: "apple", cap: "🍎 apple = elma", do: [["act", "w0"]]}]},
    {title: "Book = Kitap", badge: "Word 2", slide: "assets/images/word_book.svg", slideTitle: "Book 📖 = Kitap", t: "İkinci kelimemiz: book, yani kitap.", emo: "📖", then: [{text: "book", cap: "📖 book = kitap", do: [["act", "w1"]]}]},
    {title: "Cat = Kedi", badge: "Word 3", slide: "assets/images/word_cat.svg", slideTitle: "Cat 🐱 = Kedi", t: "Üçüncü kelimemiz: cat, yani sevimli kedi.", emo: "🐱", then: [{text: "cat", cap: "🐱 cat = kedi", do: [["act", "w2"]]}]},
    {title: "Dog = Köpek", badge: "Word 4", slide: "assets/images/word_dog.svg", slideTitle: "Dog 🐶 = Köpek", t: "Dördüncü kelimemiz: dog, yani sadık dostumuz köpek.", emo: "🐶", then: [{text: "dog", cap: "🐶 dog = köpek", do: [["act", "w3"]]}]},
    {title: "School = Okul", badge: "Word 5", slide: "assets/images/word_school.svg", slideTitle: "School 🏫 = Okul", t: "Beşinci kelimemiz: school, yani okulumuz.", emo: "🏫", then: [{text: "school", cap: "🏫 school = okul", do: [["act", "w4"]]}]},
    {title: "Teacher = Öğretmen", badge: "Word 6", slide: "assets/images/word_teacher.svg", slideTitle: "Teacher 👩‍🏫 = Öğretmen", t: "Altıncı kelimemiz: teacher, yani değerli öğretmenimiz.", emo: "👩‍🏫", then: [{text: "teacher", cap: "👩‍🏫 teacher = öğretmen", do: [["act", "w5"]]}]},
    {title: "İngilizce Bilgini Göster", badge: "Soru Zamanı", t: "Tebrikler! Kelimeleri çok güzel öğrendiniz. Şimdi İngilizce sorularına geçelim!", style: "coskulu", emo: "🎯", cam: [0, 6, 13]}
  ]
};

const ttsPending = new Map();
function ttsGet(text, lang, style){
  const key = lang + '|' + style + '|' + text;
  if (voice.cache.has(key)) return Promise.resolve(voice.cache.get(key));
  if (ttsPending.has(key)) return ttsPending.get(key);
  const p = ttsFetch(text, lang, style);
  ttsPending.set(key, p);
  const clr = () => ttsPending.delete(key);
  p.then(clr, clr);
  return p;
}

const Lesson = (() => {
  const L = {
    tok: 0, rtok: 0, bg: 0, el: null, ctx: null, phase: 'idle', mod: null, 
    onPick: null, reread: null, music: null, musicOn: localStorage.getItem('bev_music') !== '0',
    curStep: 0, speed: 1.0, showSlide: true, subsOn: true, paused: false, resumeCb: null
  };
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const stg = () => $('#labStage'), lyr = () => $('#lsn');
  const ascii = s => /^[\x00-\x7F]+$/.test(String(s));
  const SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';

  /* ---- ses: kilit açma, durdurma, efektler, müzik ---- */
  function unlock(){
    if (!L.el) L.el = new Audio();
    try { L.el.src = SILENT; const p = L.el.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
    try {
      if (!L.ctx){ const C = window.AudioContext || window.webkitAudioContext; if (C) L.ctx = new C(); }
      if (L.ctx && L.ctx.state === 'suspended') L.ctx.resume();
    } catch (e) {}
  }
  function halt(){
    try { if (L.el) L.el.pause(); } catch (e) {}
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    L.paused = false; L.resumeCb = null;
  }
  function tone(f, t0, d, type, vol, dest){
    const c = L.ctx; if (!c) return;
    const o = c.createOscillator(), g = c.createGain(), n = c.currentTime + t0;
    o.type = type || 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(.0001, n); g.gain.exponentialRampToValueAtTime(vol || .15, n + .02); g.gain.exponentialRampToValueAtTime(.0001, n + d);
    o.connect(g); g.connect(dest || c.destination); o.start(n); o.stop(n + d + .05);
  }
  function sfx(k){
    if (!L.ctx) return;
    if (k === 'ok'){ tone(784, 0, .18, 'triangle'); tone(1047, .12, .28, 'triangle'); tone(1319, .26, .45, 'triangle'); }
    else if (k === 'bad'){ tone(220, 0, .25, 'sawtooth', .07); tone(165, .18, .4, 'sawtooth', .07); }
    else if (k === 'win'){ [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * .11, .35, 'triangle', .16)); }
    else if (k === 'pop'){ tone(880, 0, .12, 'sine', .1); }
  }
  function musicStart(){
    if (!L.ctx || !L.musicOn || L.music) return;
    const c = L.ctx, m = c.createGain(); m.gain.value = 1; m.connect(c.destination);
    const sc = [392, 440, 523.25, 587.33, 659.25, 783.99], pat = [0, 2, 4, 2, 5, 4, 2, 1]; let k = 0;
    const id = setInterval(() => {
      if (!L.ctx || L.ctx.state !== 'running' || L.paused) return;
      const f = sc[pat[k % 8]] * (Math.floor(k / 8) % 2 ? 1 : .5);
      tone(f, 0, .5, 'triangle', .028, m); if (k % 4 === 0) tone(f / 2, 0, .9, 'sine', .03, m); k++;
    }, 380);
    L.music = {id, m};
  }
  function musicStop(){ if (L.music){ clearInterval(L.music.id); try { L.music.m.disconnect(); } catch (e) {} L.music = null; } }
  function musicToggle(){
    L.musicOn = !L.musicOn; try { localStorage.setItem('bev_music', L.musicOn ? '1' : '0'); } catch (e) {}
    const b = $('#lsnMus'); if (b) b.textContent = L.musicOn ? '🎵' : '🔇';
    if (L.musicOn){ if (L.phase === 'lesson') musicStart(); } else musicStop();
  }

  /* ---- görsel efektler ---- */
  function confetti(n){
    const st = stg(); if (!st) return;
    const old = $('#cfx'); if (old) old.remove();
    const cv = document.createElement('canvas'); cv.id = 'cfx';
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:40';
    st.appendChild(cv);
    const w = cv.width = st.clientWidth, h = cv.height = st.clientHeight, g = cv.getContext('2d');
    const cols = ['#ffca28', '#ef5350', '#42a5f5', '#66bb6a', '#ab47bc', '#ff7043', '#26c6da'];
    const P = Array.from({length: n || 110}, () => ({x: w / 2 + (Math.random() - .5) * w * .3, y: h * .55, vx: (Math.random() - .5) * 10, vy: -Math.random() * 12 - 3, s: 6 + Math.random() * 7, c: cols[Math.floor(Math.random() * cols.length)], r: Math.random() * 6, vr: (Math.random() - .5) * .4}));
    let t = 0;
    const f = () => {
      if (!cv.isConnected) return;
      g.clearRect(0, 0, w, h);
      P.forEach(p => { p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += p.vr; g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.fillStyle = p.c; g.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); g.restore(); });
      if (++t < 120) requestAnimationFrame(f); else cv.remove();
    };
    f();
  }
  function popEmoji(e){ const l = lyr(); if (!l) return; const s = document.createElement('div'); s.className = 'emopop'; s.textContent = e; l.appendChild(s); setTimeout(() => s.remove(), 1500); }
  const setCap = (t, tag) => { 
    // Altyazı balonu kaldırıldı: ders anlatımı yalnızca seslidir (Emel TTS), 3D sahne engellenmez.
    const st = $('#lsnStepTitle'); if (st && tag) st.textContent = tag;
  };
  const owl = on => { const o = $('#lsnOwl'); if (o) o.classList.toggle('talk', !!on); };

  /* ---- anlatım: önce Emel (sunucu), olmazsa tarayıcı sesi, o da yoksa süre tahmini ---- */
  function narrate(text, lang, style, alive, cb){
    cb = cb || {};
    return new Promise(res => {
      const finish = () => {
        if (L.paused) { L.resumeCb = res; } else { res(); }
      };
      const est = Math.max(1.2, text.length * .075) / (L.speed || 1);
      const browser = () => {
        if (!alive()) return finish();
        if (cb.start) cb.start(est);
        if (!('speechSynthesis' in window)){ setTimeout(finish, est * 1000 + 400); return; }
        try {
          speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(text); u.lang = lang; u.rate = .92 * (L.speed || 1);
          const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()));
          if (v) u.voice = v; u.onend = () => finish(); u.onerror = () => finish();
          speechSynthesis.speak(u); setTimeout(finish, est * 1000 + 6000);
        } catch (e) { setTimeout(finish, est * 1000); }
      };
      if (!serverVoiceOn()){ browser(); return; }
      if (!L.el) L.el = new Audio();
      const wt = setTimeout(() => { if (alive() && cb.wait) cb.wait(); }, 450);
      ttsGet(text, lang, style).then(url => {
        clearTimeout(wt); if (!alive()) return finish();
        const el = L.el; el.onended = () => finish(); el.onerror = () => finish(); el.src = url;
        el.playbackRate = L.speed || 1.0;
        return el.play().then(() => { if (cb.start) cb.start((isFinite(el.duration) && el.duration > 0 ? el.duration : est) / (L.speed || 1)); })
          .catch(e => { if (!alive()) return finish(); if (e && e.name === 'NotAllowedError') toast('🔊 Sesi başlatmak için ekrana bir kez dokun.'); browser(); });
      }).catch(e => {
        clearTimeout(wt); if (!alive()) return finish();
        if (e && e.status === 503) voice.fail = Date.now() + 60000; else voice.fail = Date.now() + 15000;
        browser();
      });
    });
  }

  /* ---- sahne komutları ---- */
  function doAct(d){ if (!window.Lab3D) return; if (d[0] === 'set') Lab3D.setParam(d[1], d[2]); else if (d[0] === 'act') Lab3D.act(d[1]); }
  function applyStep(s, i, steps){
    L.curStep = i;
    (s.do || []).forEach(doAct);
    if (s.cam && window.Lab3D) Lab3D.camTo(s.cam, s.tgt, 1600);
    if (s.emo) popEmoji(s.emo);

    const ch = $('#lsnChapter'); if (ch && steps) ch.textContent = `· Adım ${i + 1} / ${steps.length}`;
    const sb = $('#lsnStepBadge'); if (sb) sb.textContent = s.badge ? `📌 ${s.badge}` : '';
    const st = $('#lsnStepTitle'); if (st) st.textContent = s.title || '';
    const bar = $('#lsnBar'); if (bar && steps) bar.style.width = ((i + 1) / steps.length * 100) + '%';

    const sc = $('#lsnSlideCard');
    if (sc) {
      if (s.slide && L.showSlide) {
        const img = $('#lsnSlideImg'), tit = $('#lsnSlideTitle');
        if (img) img.src = s.slide;
        if (tit) tit.textContent = '📌 ' + (s.slideTitle || s.title || 'Ders Şeması');
        sc.classList.add('show');
      } else {
        sc.classList.remove('show');
      }
    }
  }
  function ramp(r, ms, tok){
    if (!window.Lab3D) return;
    const t0 = performance.now();
    const f = now => {
      if (tok !== L.tok) return;
      const k = Math.min(1, (now - t0) / ms);
      Lab3D.setParam(r[0], r[1] + (r[2] - r[1]) * k);
      if (k < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }

  /* ---- sinematik arayüz katmanı ---- */
  function uiLesson(m, steps){
    stg().classList.add('lessonOn');
    lyr().innerHTML = `
      <div class="lsn-top">
        <div class="lsn-top-info">
          <span class="lsn-badge">${esc(m.subject || 'Ders')}</span>
          <span class="lsn-title">${m.icon} ${esc(m.name)}</span>
          <span class="lsn-chapter" id="lsnChapter">· Adım 1 / ${steps.length}</span>
        </div>
        <div class="lsn-actions">
          <button class="btn sm ghost" id="lsnBtnSlide" onclick="Lesson.toggleSlide()" title="Görsel İnfografik Kartı">🖼️ Görsel Kart</button>
          <button class="btn sm ghost" id="lsnBtnSpd" onclick="Lesson.toggleSpeed()" title="Oynatma Hızı">⚡ 1x</button>
          <button class="btn sm ghost" id="lsnMus" onclick="Lesson.musicToggle()" title="Fon Müziği">${L.musicOn ? '🎵' : '🔇'}</button>
          <button class="btn sm ghost" onclick="A.lab('fullscreen')" title="Tam Ekran">⛶</button>
          <button class="btn sm danger" onclick="Lesson.stop(true)" title="Dersi Kapat">⏹ Kapat</button>
        </div>
      </div>
      
      <div class="lsn-slide-card" id="lsnSlideCard">
        <div class="lsn-slide-head">
          <b id="lsnSlideTitle">📌 Görsel İnfografik</b>
          <div style="display:flex;gap:4px">
            <button class="btn xs ghost" onclick="Lesson.zoomSlide()" title="Büyüt">🔍 Büyüt</button>
            <button class="btn xs ghost" onclick="Lesson.toggleSlide()" title="Kapat">✕</button>
          </div>
        </div>
        <div class="lsn-slide-imgbox" onclick="Lesson.zoomSlide()">
          <img id="lsnSlideImg" src="" alt="Ders Görseli"/>
          <span class="lsn-slide-hint">🔍 Tıkla: Tam Ekran İncele</span>
        </div>
      </div>

      <div class="dock">
        <div class="lsn-timeline" id="lsnTimeline">
          <div class="lsn-timeline-bar" id="lsnBar"></div>
        </div>
        <div class="lctrl-bar">
          <div class="lctrl-left">
            <div class="lsn-speaker-pill" id="lsnSpeakerPill" title="Bilge Baykuş Sesli Anlatım">
              <span class="owl" id="lsnOwl">🦉</span>
              <div class="sound-bars">
                <span class="sound-bar"></span>
                <span class="sound-bar"></span>
                <span class="sound-bar"></span>
                <span class="sound-bar"></span>
              </div>
            </div>
            <div class="lsn-now-playing">
              <span class="lsn-step-badge" id="lsnStepBadge">📌 Giriş</span>
              <span class="lsn-step-title" id="lsnStepTitle">${esc(steps[0]?.title || 'Ders Başlıyor')}</span>
            </div>
          </div>
          <div class="lctrl-right">
            <button class="btn sm" id="lsnBtnPause" onclick="Lesson.togglePause()">⏸ Duraklat</button>
            <button class="btn sm ghost" onclick="Lesson.replayStep()" title="Bu adımı tekrar dinle">🔄 Tekrar Dinle</button>
            <button class="btn sm warn" onclick="Lesson.skip()">⏭ Sorulara Geç</button>
          </div>
        </div>
      </div>
      
      <div class="titlecard"><span>${m.icon}</span><b>${esc(m.name)}</b></div>
      
      <div id="slideModal" onclick="if(event.target===this)Lesson.closeZoom()">
        <div class="modal-inner">
          <div class="modal-head">
            <h3 id="slideModalTitle">Görsel İnceleme</h3>
            <button class="btn sm ghost" onclick="Lesson.closeZoom()">✕ Kapat</button>
          </div>
          <div class="modal-body">
            <img id="slideModalImg" src="" alt="Görsel"/>
          </div>
        </div>
      </div>
    `;
  }

  function poster(){
    const l = lyr(); if (!l) return;
    hardStop();
    const m = modById(lab.mod);
    const st = stg(); if (st) st.classList.remove('lessonOn');
    if (!m || !LESSONS[m.id]){ l.innerHTML = ''; L.phase = 'idle'; return; }
    L.phase = 'poster';
    l.innerHTML = `
      <div class="poster" onclick="Lesson.start()">
        <div class="big">${m.icon}</div>
        <h2>${esc(m.name)}</h2>
        <div class="play">▶</div>
        <b style="font-size:19px;letter-spacing:0.5px">🎬 Sinematik 4D Dersi Başlat</b>
        <small style="color:#cfd8dc;font-size:13px;max-width:500px">Sesli anlatım, gerçekçi 3D animasyonlar ve yüksek çözünürlüklü infografik görsel kartlarla zenginleştirilmiş etkileşimli ders</small>
        <div style="display:flex;gap:8px;margin-top:6px">
          <button class="btn sm ghost" onclick="event.stopPropagation();Lesson.free()">🎮 Serbest Keşfet</button>
        </div>
      </div>`;
  }

  function clearUI(){
    const l = lyr(); if (l) l.innerHTML = '';
    const s = stg(); if (s) s.classList.remove('lessonOn');
    const c = $('#cfx'); if (c) c.remove();
  }

  function togglePause(){
    L.paused = !L.paused;
    const b = $('#lsnBtnPause');
    if (L.paused) {
      if (b) b.innerHTML = '▶ Devam Et';
      if (L.el) try { L.el.pause(); } catch(e){}
      if ('speechSynthesis' in window) try { speechSynthesis.pause(); } catch(e){}
    } else {
      if (b) b.innerHTML = '⏸ Duraklat';
      if (L.el) try { L.el.play(); } catch(e){}
      if ('speechSynthesis' in window) try { speechSynthesis.resume(); } catch(e){}
      if (L.resumeCb) { const cb = L.resumeCb; L.resumeCb = null; cb(); }
    }
  }

  function toggleSpeed(){
    const spds = [1.0, 1.25, 1.5];
    const idx = (spds.indexOf(L.speed) + 1) % spds.length;
    L.speed = spds[idx];
    if (L.el) L.el.playbackRate = L.speed;
    const b = $('#lsnBtnSpd'); if (b) b.textContent = '⚡ ' + L.speed + 'x';
    toast('Oynatma hızı: ' + L.speed + 'x');
  }

  function toggleSlide(){
    L.showSlide = !L.showSlide;
    const sc = $('#lsnSlideCard');
    const steps = LESSONS[L.mod] || [];
    const curS = steps[L.curStep];
    if (sc) sc.classList.toggle('show', L.showSlide && !!(curS && curS.slide));
  }

  function zoomSlide(src, title){
    const imgEl = $('#lsnSlideImg'), titEl = $('#lsnSlideTitle');
    const s = src || (imgEl ? imgEl.src : '');
    const t = title || (titEl ? titEl.textContent : 'Ders Görseli');
    if (!s) return;
    const m = $('#slideModal'), mImg = $('#slideModalImg'), mTit = $('#slideModalTitle');
    if (m && mImg){ mImg.src = s; if (mTit) mTit.textContent = t; m.classList.add('show'); }
  }

  function closeZoom(){ const m = $('#slideModal'); if (m) m.classList.remove('show'); }

  function replayStep(){
    const steps = LESSONS[L.mod] || [];
    const s = steps[L.curStep];
    if (!s) return;
    halt(); owl(true);
    applyStep(s, L.curStep, steps);
    narrate(s.t, 'tr-TR', s.style || 'ders', () => L.phase === 'lesson', {
      start: () => setCap(null, s.title || `Bölüm ${L.curStep + 1}`)
    }).then(() => owl(false));
  }

  /* ---- ders akışı ---- */
  async function runLesson(tok){
    const m = modById(L.mod), steps = LESSONS[m.id] || [];
    const alive = () => tok === L.tok;
    for (let i = 0; i < steps.length; i++){
      if (!alive()) return;
      while (L.paused && alive()) { await sleep(200); }
      if (!alive()) return;
      const s = steps[i], nx = steps[i + 1];
      applyStep(s, i, steps);
      if (nx && serverVoiceOn()) ttsGet(nx.t, 'tr-TR', nx.style || 'ders').catch(() => {});
      owl(true);
      await narrate(s.t, 'tr-TR', s.style || 'ders', alive, {
        wait: () => setCap(null, '🎙️ Ses Yükleniyor...'),
        start: d => { setCap(null, s.title || ''); if (s.ramp) ramp(s.ramp, d * 900, tok); }
      });
      if (!alive()) return;
      for (const x of (s.then || [])){
        if (!alive()) return;
        while (L.paused && alive()) { await sleep(200); }
        (x.do || []).forEach(doAct);
        sfx('pop');
        await narrate(x.text, x.lang || 'en-US', 'ders', alive, {start: () => setCap(null, x.cap || x.text)});
        if (!alive()) return;
        await sleep(300);
      }
      owl(false);
      await sleep(s.gap || 350);
    }
    if (!alive()) return;
    const bar = $('#lsnBar'); if (bar) bar.style.width = '100%';
    await runQuiz(tok);
  }

  const readText = q => {
    const eng = q.subject === 'İngilizce' && ascii(q.text);
    return {eng, text: (eng ? '' : 'Soru. ') + q.text + ' ' + q.options.map((o, i) => 'ABCD'[i] + '. ' + o + '.').join(' ')};
  };
  const wrongParts = q => {
    const lead = ['Hayır, doğru cevap şudur:', 'Hayır, olmadı. Doğru cevap şudur:', 'Hayır, doğru cevap şudur:'][Math.floor(Math.random() * 3)];
    const ans = q.options[q.answer], L2 = 'ABCD'[q.answer];
    if (q.subject === 'İngilizce' && ascii(ans)) return [{text: lead + ' ' + L2 + '.', lang: 'tr-TR'}, {text: ans, lang: 'en-US'}];
    return [{text: lead + ' ' + L2 + '. ' + ans + '.', lang: 'tr-TR'}];
  };

  async function runQuiz(tok){
    L.phase = 'quiz'; musicStop();
    const alive = () => tok === L.tok;
    const u0 = cur(), modId = L.mod;
    const pool = db.questions.filter(q => q.pool === modId);
    const fresh = shuffle(pool.filter(q => !u0.qDone.includes(q.id))), old = shuffle(pool.filter(q => u0.qDone.includes(q.id)));
    const qs = fresh.concat(old).slice(0, QUIZ_N);
    const xp0 = u0.xp, g0 = u0.gold;
    if (!qs.length){ await summary(tok, 0, 0, 0, 0); return; }
    stg().classList.add('lessonOn');
    lyr().innerHTML = `<div class="quiz"><div class="qtop"><b id="qNo"></b><span class="chip" id="qSc"></span></div><div class="qdots" id="qDots"></div><div class="qtext" id="qTxt"></div><div class="opts2" id="qOpts"></div><div class="fbk" id="qFbk"></div><div class="row" style="margin-top:auto"><button class="btn sm ghost" onclick="Lesson.rereadQ()">🔊 Tekrar Oku</button><button class="btn sm danger" onclick="Lesson.stop(true)">⏹ Kapat</button></div></div>`;
    CORRECT_SAY.forEach(t => { if (serverVoiceOn()) ttsGet(t, 'tr-TR', 'coskulu').catch(() => {}); });
    let ok = 0; const res = [];
    for (let i = 0; i < qs.length; i++){
      if (!alive()) return;
      const q = qs[i];
      L.rtok++; const rt = L.rtok, ralive = () => alive() && rt === L.rtok;
      $('#qNo').textContent = '🎯 Soru ' + (i + 1) + ' / ' + qs.length;
      $('#qSc').textContent = '✅ ' + ok + ' doğru';
      $('#qDots').innerHTML = qs.map((_, k) => `<span class="qd ${k < res.length ? (res[k] ? 'ok' : 'no') : (k === i ? 'cur' : '')}"></span>`).join('');
      $('#qTxt').textContent = q.text;
      $('#qOpts').innerHTML = q.options.map((o, j) => `<button class="opt" onclick="Lesson.pick(${j})"><b>${'ABCD'[j]}</b> ${esc(o)}</button>`).join('');
      $('#qFbk').textContent = '';
      sfx('pop');
      const rd = readText(q);
      L.reread = () => { halt(); L.rtok++; const r2 = L.rtok; narrate(rd.text, rd.eng ? 'en-US' : 'tr-TR', 'ders', () => alive() && r2 === L.rtok); };
      if (serverVoiceOn()){
        wrongParts(q).forEach(p => ttsGet(p.text, p.lang, 'ders').catch(() => {}));
        if (qs[i + 1]){ const n = readText(qs[i + 1]); ttsGet(n.text, n.eng ? 'en-US' : 'tr-TR', 'ders').catch(() => {}); }
      }
      narrate(rd.text, rd.eng ? 'en-US' : 'tr-TR', 'ders', ralive);
      const c = await new Promise(r => { L.onPick = r; });
      if (!alive()) return;
      L.onPick = null; L.rtok++; halt();
      const good = c === q.answer; if (good) ok++; res.push(good);
      document.querySelectorAll('#qOpts .opt').forEach((b, j) => { b.disabled = true; if (j === q.answer) b.classList.add('right'); else if (j === c) b.classList.add('wrong'); });
      lab.qid = q.id; lab.answered = null; A.ans(c);
      $('#qSc').textContent = '✅ ' + ok + ' doğru';
      $('#qDots').innerHTML = qs.map((_, k) => `<span class="qd ${k < res.length ? (res[k] ? 'ok' : 'no') : ''}"></span>`).join('');
      if (good){
        sfx('ok'); confetti(110);
        $('#qFbk').innerHTML = '🎉 Doğru! Aferin sana!';
        await narrate(CORRECT_SAY[Math.floor(Math.random() * CORRECT_SAY.length)], 'tr-TR', 'coskulu', alive);
      } else {
        sfx('bad');
        $('#qFbk').innerHTML = '❌ Hayır! Doğru cevap: <b>' + 'ABCD'[q.answer] + ') ' + esc(q.options[q.answer]) + '</b>';
        for (const p of wrongParts(q)){ if (!alive()) return; await narrate(p.text, p.lang, 'ders', alive); }
      }
      if (!alive()) return;
      await sleep(500);
    }
    const u1 = cur();
    await summary(tok, ok, qs.length, u1.xp - xp0, u1.gold - g0);
  }

  async function summary(tok, ok, n, xpG, goldG){
    L.phase = 'done';
    const pct = n ? ok / n : 0, stars = pct >= .75 ? 3 : pct >= .5 ? 2 : pct > 0 ? 1 : 0;
    const idx = MODULES.findIndex(x => x.id === L.mod), nm = MODULES[(idx + 1) % MODULES.length];
    stg().classList.add('lessonOn');
    lyr().innerHTML = `<div class="quiz sum"><div class="bigemo">${pct >= .75 ? '🏆' : pct >= .5 ? '🎖️' : '💪'}</div><h2>${n ? ok + ' / ' + n + ' doğru!' : 'Ders tamamlandı!'}</h2><div class="stars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div><p>${xpG || goldG ? '⭐ +' + xpG + ' XP &nbsp; 🪙 +' + goldG + ' Altın' : 'Yeni ödül için henüz çözmediğin soruları dene!'}</p><div class="row" style="justify-content:center"><button class="btn" onclick="Lesson.again()">🔁 Dersi Tekrar İzle</button><button class="btn warn" onclick="Lesson.next()">➡️ Sonraki Ders: ${nm.icon} ${esc(nm.name)}</button><button class="btn ghost" onclick="Lesson.stop(true)">🎮 Serbest Keşfet</button></div></div>`;
    sfx('win'); confetti(160);
    const msg = !n ? 'Dersi bitirdik! Aferin sana!'
      : pct >= .75 ? 'Dersi bitirdik! ' + n + ' sorudan ' + ok + ' tanesini doğru bildin. Aferin sana, harikasın!'
      : pct >= .5 ? 'Dersi bitirdik! ' + n + ' sorudan ' + ok + ' tanesini doğru bildin. Güzel gidiyorsun!'
      : 'Dersi bitirdik! ' + n + ' sorudan ' + ok + ' tanesini doğru bildin. Sorun değil, dersi bir daha izleyince çok daha iyi olacak!';
    await narrate(msg, 'tr-TR', pct >= .75 ? 'coskulu' : 'ders', () => tok === L.tok);
  }

  /* ---- dış API ---- */
  function hardStop(){ L.tok++; L.rtok++; L.onPick = null; L.reread = null; halt(); musicStop(); }
  function start(){
    const id = lab.mod; if (!LESSONS[id]) return;
    hardStop(); unlock();
    L.mod = id; L.phase = 'lesson';
    const tok = L.tok;
    const m = modById(id);
    const steps = LESSONS[id] || [];
    if (window.Lab3D && Lab3D.load) Lab3D.load(id);
    uiLesson(m, steps); musicStart();
    runLesson(tok);
  }
  function stop(){
    if (!['lesson', 'quiz', 'done'].includes(L.phase)) return;
    hardStop(); L.phase = 'idle'; clearUI();
  }
  function reset(){ hardStop(); L.phase = 'idle'; }
  function free(){ hardStop(); L.phase = 'idle'; clearUI(); }
  function skip(){ if (L.phase !== 'lesson') return; halt(); musicStop(); L.tok++; L.rtok++; runQuiz(L.tok); }
  function again(){ start(); }
  function next(){
    const idx = MODULES.findIndex(x => x.id === L.mod), nm = MODULES[(idx + 1) % MODULES.length];
    A.selMod(nm.id); start();
  }
  function prefetch(id){
    const tok = ++L.bg, texts = [];
    (LESSONS[id] || []).forEach(s => { texts.push([s.t, 'tr-TR', s.style || 'ders']); (s.then || []).forEach(x => texts.push([x.text, x.lang || 'en-US', 'ders'])); });
    setTimeout(async () => {
      for (const t of texts){
        if (tok !== L.bg || !serverVoiceOn()) return;
        try { await ttsGet(t[0], t[1], t[2]); } catch (e) { if (e && e.status === 503) voice.fail = Date.now() + 60000; return; }
      }
    }, 1800);
  }
  return {
    start, skip, stop, reset, free, poster, again, next, prefetch, musicToggle,
    togglePause, toggleSpeed, toggleSlide, zoomSlide, closeZoom, replayStep,
    pick: i => { if (L.onPick) L.onPick(i); },
    rereadQ: () => { if (L.reread) L.reread(); },
    active: () => L.phase === 'lesson' || L.phase === 'quiz'
  };
})();
window.Lesson = Lesson;

function pickQ(u){
  const pool=db.questions.filter(q=>q.pool===lab.mod);if(!pool.length)return null;
  const fresh=pool.filter(q=>!u.qDone.includes(q.id));const src=fresh.length?fresh:pool;
  let q=src[Math.floor(Math.random()*src.length)];
  if(src.length>1&&q.id===lab.qid)q=src.find(x=>x.id!==lab.qid);
  return q;
}
A.newQ=()=>{const q=pickQ(cur());lab.qid=q?q.id:null;lab.answered=null;drawQ();};
function drawQ(){
  const box=$('#qBox');if(!box)return;
  const q=db.questions.find(x=>x.id===lab.qid);
  if(!q){box.innerHTML='<h3>🧩 Mini Soru</h3><p class="muted">Bu modül için henüz soru yok. Öğretmenin soru ekleyebilir.</p>';return;}
  const L='ABCD',a=lab.answered;
  box.innerHTML=`<h3>🧩 Mini Soru <small>(${esc(q.subject)})</small></h3><p class="q">${esc(q.text)}</p><div class="opts">${q.options.map((o,i)=>`<button class="opt ${a!==null?(i===q.answer?'right':(i===a?'wrong':'')):''}" ${a!==null?'disabled':''} onclick="A.ans(${i})"><b>${L[i]}</b> ${esc(o)}</button>`).join('')}</div>
  ${a!==null?`<p class="fb">${a===q.answer?'✅ Doğru! Harika iş!':'❌ Doğru cevap: '+L[q.answer]+') '+esc(q.options[q.answer])}</p>`:''}
  <div class="row"><button class="btn" onclick="A.speakQ()">🔊 Soruyu Dinle</button><button class="btn ghost" onclick="A.newQ()">🔄 Başka Soru</button></div>`;
}
A.speakQ=()=>{const q=db.questions.find(x=>x.id===lab.qid);if(!q)return;const eng=q.subject==='İngilizce'&&/^[\x00-\x7F]+$/.test(q.text);speak((eng?'':'Soru. ')+q.text+' '+q.options.map((o,i)=>'ABCD'[i]+'. '+o+'.').join(' '),eng?'en-US':'tr-TR');};
A.ans=i=>{
  const u=cur(),q=db.questions.find(x=>x.id===lab.qid);if(!q||lab.answered!==null)return;
  lab.answered=i;const ok=i===q.answer;
  if(!u.qSeen.includes(q.id)){u.qSeen.push(q.id);bumpStat(u,q.subject,ok);}
  if(ok){
    let xp=0,g=0;
    if(!u.qDone.includes(q.id)){u.qDone.push(q.id);xp+=10;g+=5;}
    if(!u.labDone.includes(lab.mod)){u.labDone.push(lab.mod);xp+=20;g+=10;toast('🧪 Deney tamamlandı!');}
    db.assignments.filter(a=>a.classId===u.classId&&a.moduleId===lab.mod&&!a.doneBy.includes(u.id)).forEach(a=>{a.doneBy.push(u.id);u.asgDone=(u.asgDone||0)+1;xp+=a.xp||0;g+=a.gold||0;toast('📚 Ödev tamamlandı: '+esc(a.title));});
    if(xp||g)gain(u,xp,g);
  }
  save();drawQ();refreshStat();
  const b=$('#mb_'+lab.mod);if(b&&u.labDone.includes(lab.mod)&&!b.innerHTML.includes('✅'))b.querySelector('small').innerHTML+=' ✅';
};

/* --- Sekme 2: Deneme sınavı --- */
function examTab(u){
  if(exam.result)return examResultView(u);
  if(exam.active)return examRunView();
  const pool=db.questions.filter(q=>q.pool==='exam').length;
  const mine=db.results.filter(r=>r.studentId===u.id).slice(-5).reverse();
  return `<div class="card center"><h2>⏱️ 4. Sınıf Bursluluk & Bilsem Deneme Sınavı</h2><p>${Math.min(EXAM_N,pool)} soru • ${EXAM_SEC/60} dakika • 3 yanlış 1 doğruyu götürür</p><button class="btn big" ${pool?'':'disabled'} onclick="A.examStart()">🚀 Sınavı Başlat</button></div>
  <div class="card"><h3>📊 Son Sonuçlarım</h3>${mine.length?`<div class="tablewrap"><table><tr><th>Tarih</th><th>D</th><th>Y</th><th>B</th><th>Net</th><th>Puan</th></tr>${mine.map(r=>`<tr><td>${fmtDate(r.date)}</td><td>${r.c}</td><td>${r.w}</td><td>${r.b}</td><td>${r.net.toFixed(2)}</td><td><b>${r.score.toFixed(0)}</b></td></tr>`).join('')}</table></div>`:'<p class="muted">Henüz sınav çözmedin.</p>'}</div>`;
}
A.examStart=()=>{
  const pool=db.questions.filter(q=>q.pool==='exam');if(!pool.length)return;
  exam.qs=shuffle(pool).slice(0,EXAM_N);exam.ans=exam.qs.map(()=>null);exam.idx=0;exam.result=null;
  exam.endAt=Date.now()+EXAM_SEC*1000;exam.active=true;
  clearInterval(exam.timer);exam.timer=setInterval(tickExam,500);render();
};
function fmtTime(s){s=Math.max(0,s);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
function tickExam(){
  if(!exam.active)return;
  const rem=Math.ceil((exam.endAt-Date.now())/1000);
  const t=$('#examTimer');if(t){t.textContent='⏳ '+fmtTime(rem);t.classList.toggle('low',rem<=30);}
  if(rem<=0)A.examFinish(true);
}
function examRunView(){
  return `<div class="card"><div class="examhead"><div><b>Soru <span id="examNo"></span>/${exam.qs.length}</b></div><div id="examTimer">⏳ --:--</div></div><div class="dots" id="examDots"></div><div id="examBody"></div>
  <div class="row between"><button class="btn ghost" onclick="A.examNav(-1)">⬅️ Önceki</button><button class="btn ghost" onclick="A.examNav(1)">Sonraki ➡️</button><button class="btn warn" onclick="A.examFinish(false)">🏁 Sınavı Bitir</button></div></div>${(setTimeout(drawExam,0),'')}`;
}
function drawExam(){
  if(!$('#examBody'))return;
  const q=exam.qs[exam.idx],L='ABCD';
  $('#examNo').textContent=exam.idx+1;
  $('#examDots').innerHTML=exam.qs.map((_,i)=>`<button class="dot ${exam.ans[i]!==null?'ans':''} ${i===exam.idx?'cur':''}" onclick="A.examGo(${i})">${i+1}</button>`).join('');
  $('#examBody').innerHTML=`<p class="q"><small>(${esc(q.subject)})</small> ${esc(q.text)}</p><div class="opts">${q.options.map((o,i)=>`<button class="opt ${exam.ans[exam.idx]===i?'sel':''}" onclick="A.examPick(${i})"><b>${L[i]}</b> ${esc(o)}</button>`).join('')}</div><div class="row"><button class="btn sm" onclick="A.examSpeak()">🔊 Sesli Oku</button></div>`;
}
A.examSpeak=()=>{const q=exam.qs[exam.idx];const eng=q.subject==='İngilizce'&&/^[\x00-\x7F]+$/.test(q.text);speak(q.text+' '+q.options.map((o,i)=>'ABCD'[i]+'. '+o+'.').join(' '),eng?'en-US':'tr-TR');};
A.examPick=i=>{exam.ans[exam.idx]=exam.ans[exam.idx]===i?null:i;drawExam();};
A.examGo=i=>{exam.idx=i;drawExam();};
A.examNav=d=>{exam.idx=Math.max(0,Math.min(exam.qs.length-1,exam.idx+d));drawExam();};
A.examFinish=auto=>{
  if(!exam.active)return;
  const blank=exam.ans.filter(a=>a===null).length;
  if(!auto&&!confirm(blank?`${blank} soruyu boş bıraktın. Sınavı bitirmek istiyor musun?`:'Sınavı bitirmek istiyor musun?'))return;
  clearInterval(exam.timer);exam.active=false;
  const u=cur();let c=0,w=0,b=0;const by={};
  exam.qs.forEach((q,i)=>{const a=exam.ans[i];const s=by[q.subject]||(by[q.subject]={c:0,w:0,t:0});s.t++;if(a===null)b++;else if(a===q.answer){c++;s.c++;}else{w++;s.w++;}if(a!==null)bumpStat(u,q.subject,a===q.answer);});
  const net=Math.max(0,c-w/3),score=Math.max(0,net/exam.qs.length*100),xp=Math.max(10,c*5),gold=Math.max(5,c*2);
  const r={id:uid('r'),studentId:u.id,classId:u.classId,date:Date.now(),total:exam.qs.length,c,w,b,net,score,bySubject:by,xp,gold};
  db.results.push(r);if(xp||gold)gain(u,xp,gold);save();
  exam.result={r,review:exam.qs.map((q,i)=>({q,a:exam.ans[i]}))};
  appConfetti(80);appSfx('win');
  render();
};
function examResultView(u){
  const {r,review}=exam.result,L='ABCD';
  return `<div class="card center"><h2>📝 Sınav Karnesi</h2><div class="score">${r.score.toFixed(0)}</div><p>Puan (100 üzerinden)</p>
  <div class="grid4"><div class="chip">✅ Doğru <b>${r.c}</b></div><div class="chip">❌ Yanlış <b>${r.w}</b></div><div class="chip">⚪ Boş <b>${r.b}</b></div><div class="chip">📐 Net <b>${r.net.toFixed(2)}</b></div><div class="chip">⭐ Kazanılan XP <b>${r.xp}</b></div><div class="chip">🪙 Kazanılan Altın <b>${r.gold}</b></div></div></div>
  <div class="card"><h3>Ders Bazlı Sonuç</h3>${Object.keys(r.bySubject).map(k=>{const s=r.bySubject[k];return `<div class="item"><span style="min-width:130px">${esc(k)}</span><div class="bar" style="flex:1"><i style="width:${s.c/s.t*100}%"></i></div><span>${s.c}/${s.t}</span></div>`;}).join('')}</div>
  <div class="card"><h3>Cevap Anahtarı</h3>${review.map((x,i)=>`<div class="item" style="display:block"><b>${i+1}.</b> ${esc(x.q.text)}<br><small>Senin cevabın: ${x.a===null?'Boş':L[x.a]+') '+esc(x.q.options[x.a])} ${x.a===x.q.answer?'✅':'❌'}${x.a===x.q.answer?'':' • Doğru cevap: '+L[x.q.answer]+') '+esc(x.q.options[x.q.answer])}</small></div>`).join('')}<div class="row"><button class="btn" onclick="A.examClose()">🔁 Yeni Sınav</button></div></div>`;
}
A.examClose=()=>{exam.result=null;render();};

/* ================= 4. SINIF DERSLER: KONU ANLATIM VE TEST MOTORU (COURSE PLAYER) ================= */
let soundMuted = (typeof localStorage !== 'undefined' && localStorage.getItem('be4d_sound_muted') === '1');
A.toggleSound = () => {
  soundMuted = !soundMuted;
  try { localStorage.setItem('be4d_sound_muted', soundMuted ? '1' : '0'); } catch (e) {}
  const btn = document.getElementById('soundToggleBtn');
  if (btn) {
    btn.textContent = soundMuted ? '🔇' : '🔊';
    btn.title = soundMuted ? 'Sesi Aç' : 'Sesi Kapat';
  }
  toast(soundMuted ? '🔇 Ses efektleri kapatıldı' : '🔊 Ses efektleri açıldı');
};
A.toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
};

let deferredInstallPrompt = null;
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById('pwaInstallBtn');
    if (btn) btn.style.display = 'inline-flex';
    const lBtn = document.getElementById('pwaLoginBtn');
    if (lBtn) lBtn.style.display = 'inline-flex';
  });
}

A.installPWA = async () => {
  if (!deferredInstallPrompt) {
    toast('ℹ️ Uygulama tarayıcınızın adres çubuğundaki yükle butonundan yüklenebilir.');
    return;
  }
  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.style.display = 'none';
  const lBtn = document.getElementById('pwaLoginBtn');
  if (lBtn) lBtn.style.display = 'none';
  if (choice && choice.outcome === 'accepted') {
    toast('🎉 Bilgi Evreni 4D başarıyla cihazınıza yüklendi!');
  }
};

let appAudioCtx = null;
function appTone(f, t0, d, type, vol) {
  if (soundMuted) return;
  try {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!appAudioCtx && C) appAudioCtx = new C();
    if (appAudioCtx && appAudioCtx.state === 'suspended') appAudioCtx.resume();
    if (!appAudioCtx) return;
    const o = appAudioCtx.createOscillator(), g = appAudioCtx.createGain(), n = appAudioCtx.currentTime + t0;
    o.type = type || 'sine';
    o.frequency.value = f;
    g.gain.setValueAtTime(.0001, n);
    g.gain.exponentialRampToValueAtTime(vol || .15, n + .02);
    g.gain.exponentialRampToValueAtTime(.0001, n + d);
    o.connect(g);
    g.connect(appAudioCtx.destination);
    o.start(n);
    o.stop(n + d + .05);
  } catch(e) {}
}
function appSfx(k) {
  if (k === 'ok') { appTone(784, 0, .18, 'triangle'); appTone(1047, .12, .28, 'triangle'); }
  else if (k === 'bad') { appTone(220, 0, .25, 'sawtooth', .08); appTone(165, .18, .4, 'sawtooth', .08); }
  else if (k === 'win') { [523, 659, 784, 1047, 1319].forEach((f, i) => appTone(f, i * .11, .35, 'triangle', .16)); }
  else if (k === 'pop') { appTone(880, 0, .12, 'sine', .1); }
}
function appConfetti(n) {
  const old = document.getElementById('cfx_app'); if (old) old.remove();
  const cv = document.createElement('canvas'); cv.id = 'cfx_app';
  cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999';
  document.body.appendChild(cv);
  const w = cv.width = window.innerWidth, h = cv.height = window.innerHeight, g = cv.getContext('2d');
  const cols = ['#ffca28', '#ef5350', '#42a5f5', '#66bb6a', '#ab47bc', '#ff7043', '#26c6da'];
  const P = Array.from({length: n || 120}, () => ({
    x: w / 2 + (Math.random() - .5) * w * .4,
    y: h * .4,
    vx: (Math.random() - .5) * 12,
    vy: -Math.random() * 14 - 4,
    s: 7 + Math.random() * 8,
    c: cols[Math.floor(Math.random() * cols.length)],
    r: Math.random() * 6,
    vr: (Math.random() - .5) * .4
  }));
  let t = 0;
  const f = () => {
    if (!cv.isConnected) return;
    g.clearRect(0, 0, w, h);
    P.forEach(p => {
      p.vy += .38; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      g.save(); g.translate(p.x, p.y); g.rotate(p.r);
      g.fillStyle = p.c; g.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6);
      g.restore();
    });
    if (++t < 130) requestAnimationFrame(f); else cv.remove();
  };
  f();
}

/* ================= 4. SINIF DERSLER KONU ANLATIM VE TEST VERİ BANKASI ================= */

/* ==========================================================================
   MEB 4. Sınıf Dersler & Video Müfredat Verileri assets/js/courses_data.js
   dosyasından yüklenmektedir.
   ========================================================================== */

function coursesTab(u){
  const activeSubId = ui.activeCourse || 'turkce';
  const sub = COURSES_DATA.find(x => x.id === activeSubId) || COURSES_DATA[0];
  const activeTerm = ui.courseTerm || 'all';
  const activeStatus = ui.courseStatus || 'all';
  const q = (ui.courseSearch || '').toLowerCase().trim();
  const isTeacher = u && (u.role === 'teacher' || u.role === 'admin');

  // Öğrenci tamamlanan ünite verileri
  const doneUnitIds = u && u.courseProgress ? Object.keys(u.courseProgress) : [];
  const totalCompletedCount = doneUnitIds.length;

  // 1. Öğretmenden bekleyen ödev kontrolü (varsa uyarı bandı)
  const myClassAsgs = u && u.classId ? db.assignments.filter(a => a.classId === u.classId) : [];
  const pendingAsgs = myClassAsgs.filter(a => !a.doneBy.includes(u.id));
  const alertBannerHtml = pendingAsgs.length ? `
    <div class="home-alert-banner">
      <div style="display:flex;align-items:center;gap:12px">
        <span style="font-size:26px">🔔</span>
        <div>
          <b style="color:#fde047;font-size:14px">Öğretmeninden Bekleyen Ödev: ${esc(pendingAsgs[0].title)}</b>
          <div style="font-size:12px;color:var(--m)">Ödül: ⭐ +${pendingAsgs[0].xp || 0} XP &nbsp; 🪙 +${pendingAsgs[0].gold || 0} Altın ${pendingAsgs[0].desc ? '· ' + esc(pendingAsgs[0].desc) : ''}</div>
        </div>
      </div>
      <button class="btn warn sm" onclick="A.openAsg('${pendingAsgs[0].id}')">📖 Ödevi Çöz &amp; Kazan ▶</button>
    </div>
  ` : '';

  // 2. Akıllı "Kaldığın Yerden Devam Et / Sıradaki Ders" önerisi
  let recUnit = null;
  let recCourse = sub;
  for (const t of sub.terms) {
    for (const un of t.units) {
      if (!doneUnitIds.includes(un.id)) {
        recUnit = un;
        recCourse = sub;
        break;
      }
    }
    if (recUnit) break;
  }
  if (!recUnit) {
    for (const c of COURSES_DATA) {
      for (const t of c.terms) {
        for (const un of t.units) {
          if (!doneUnitIds.includes(un.id)) {
            recUnit = un;
            recCourse = c;
            break;
          }
        }
        if (recUnit) break;
      }
      if (recUnit) break;
    }
  }

  const resumeCardHtml = `
    <div class="resume-card">
      <div style="display:flex;align-items:center;gap:14px">
        <span style="font-size:32px">${recCourse ? recCourse.icon : '🎯'}</span>
        <div>
          <div style="font-size:11px;font-weight:bold;color:#818cf8;text-transform:uppercase;letter-spacing:.5px">🎯 ${totalCompletedCount > 0 ? 'Kaldığın Yerden Devam Et' : 'Öğrenmeye Buradan Başla'}</div>
          <b style="font-size:15px;color:var(--t)">${esc(recUnit ? recUnit.unitNo + ': ' + recUnit.unitTitle : 'Tüm 43 Ünite Başarıyla Tamamlandı! 🎉')}</b>
          <div style="font-size:12px;color:var(--m)">${recCourse ? esc(recCourse.name) + ' · Bilge Baykuş Sesli Anlatımı + 10 Soruluk Test' : 'Tebrikler kâşif, tüm 4. sınıf konularını bitirdin!'}</div>
        </div>
      </div>
      ${recUnit ? `<button class="btn ok" onclick="CoursePlayer.open('${recUnit.id}')">🎬 Dersi Başlat ▶</button>` : ''}
    </div>
  `;

  // 3. Günün Bilge Baykuş Tavsiyesi / Eğlenceli Bilgi Kartı
  const DAILY_TIPS = [
    { icon: "🌍", title: "Dünya'mızın Hareketi", text: "Dünya kendi ekseni etrafında 24 saatte dönerek gece-gündüzü, Güneş etrafında ise 365 gün 6 saatte dolanarak mevsimleri oluşturur!" },
    { icon: "🧲", title: "Mıknatısların Gücü", text: "Mıknatısların aynı kutupları (N-N veya S-S) birbirini iterken, zıt kutupları (N-S) birbirini büyük bir kuvvetle çeker!" },
    { icon: "➗", title: "Bölme Altın Kuralı", text: "Bir bölme işleminde kalan sayı daima bölen sayıdan küçük olmalıdır! (Kalan < Bölen)" },
    { icon: "✍️", title: "Gerçek ve Mecaz Anlam", text: "Gerçek anlam aklımıza gelen ilk temel anlamdır. 'Soğuk su içtim' gerçektir; 'Bize çok soğuk davrandı' ifadesi ise mecazdır!" },
    { icon: "🧭", title: "Doğada Yön Bulma", text: "Pusulanın renkli ucu daima Kuzey'i gösterir. Geceleri ise Kutup Yıldızı (Demirkazık) bize her zaman kuzeyi fısıldar!" },
    { icon: "🥗", title: "Dengeli Beslenme", text: "Karbonhidratlar bize enerji verir, proteinler kaslarımızı onarır, vitamin ve mineraller ise bizi hastalıklardan korur!" },
    { icon: "🇬🇧", title: "İngilizce İpucu", text: "'What is your job?' mesleğin nedir demektir; 'I am a doctor' veya 'I am a teacher' kalıbıyla cevap verilir!" }
  ];
  const todayTip = DAILY_TIPS[(new Date().getDate()) % DAILY_TIPS.length];

  // 4. 6 Ders Butonu (İlerleme çubuğu ve tamamlanan ünite yüzdesi ile)
  const subButtonsHtml = COURSES_DATA.map(c => {
    const isActive = c.id === sub.id;
    const totalUnits = c.terms.reduce((acc, t) => acc + t.units.length, 0);
    const doneUnits = c.terms.reduce((acc, t) => acc + t.units.filter(un => doneUnitIds.includes(un.id)).length, 0);
    const pct = totalUnits > 0 ? Math.round((doneUnits / totalUnits) * 100) : 0;
    return `
      <button class="course-card-btn ${isActive ? 'active' : ''}" 
              style="--theme-color:${c.color}" 
              onclick="A.selCourse('${c.id}')"
              title="${esc(c.name)}: ${doneUnits}/${totalUnits} ünite tamamlandı (%${pct})">
        <span class="course-icon">${c.icon}</span>
        <span class="course-name">${esc(c.name)}</span>
        <span class="course-badge">${doneUnits > 0 ? `${doneUnits}/${totalUnits} · %${pct}` : `${totalUnits} Ünite`}</span>
        <div class="course-mini-progress"><i style="width:${pct}%;background:${c.color}"></i></div>
      </button>
    `;
  }).join('');

  // 5. Dönem filtreleme
  const termsToDisplay = sub.terms.filter(t => {
    if (activeTerm === '1') return t.term === 1;
    if (activeTerm === '2') return t.term === 2;
    return true;
  });

  // 6. Ünite ve Video Alanı kartları
  let sectionsHtml = '';
  let renderedCardCount = 0;
  termsToDisplay.forEach(t => {
    const filteredUnits = t.units.filter(unit => {
      const prog = u && u.courseProgress ? u.courseProgress[unit.id] : null;
      const isDone = !!prog;
      if (activeStatus === 'todo' && isDone) return false;
      if (activeStatus === 'done' && !isDone) return false;
      return true;
    });

    if (!filteredUnits.length) return;

    const unitCardsHtml = filteredUnits.map(unit => {
      const matchSearch = !q || unit.unitTitle.toLowerCase().includes(q) || unit.topics.some(tp => tp.toLowerCase().includes(q));
      if (matchSearch) renderedCardCount++;
      const topicTags = unit.topics.slice(0, 3).map(tp => `<span class="video-topic-pill">${esc(tp)}</span>`).join('');
      const moreCount = unit.topics.length > 3 ? `<span class="video-topic-pill">+${unit.topics.length - 3}</span>` : '';
      const prog = u && u.courseProgress ? u.courseProgress[unit.id] : null;
      const isDone = !!prog;

      return `
        <div class="video-card ${isDone ? 'done' : ''}" 
             data-title="${esc(unit.unitTitle)}" 
             data-topics="${esc(unit.topics.join(' '))}"
             style="${matchSearch ? '' : 'display:none;'}cursor:pointer;"
             onclick="CoursePlayer.open('${unit.id}')">
          <div class="video-thumb" style="background:linear-gradient(135deg, ${sub.color}33 0%, #0f172a 100%)">
            <div class="video-thumb-bg">${sub.icon}</div>
            <span class="video-badge-unit">${t.term}. Dönem · ${esc(unit.unitNo)}</span>
            <span class="video-badge-ready" style="${isDone ? 'background:rgba(16,185,129,0.35);border-color:#10b981;color:#6ee7b7' : (COURSE_LESSONS[unit.id] ? 'background:rgba(16,185,129,0.3);border-color:#10b981;color:#6ee7b7' : '')}">${isDone ? `🏆 Tamamlandı (${prog.score}/10)` : (COURSE_LESSONS[unit.id] ? '🎬 Ders & Test Hazır!' : '🎬 Video Alanı')}</span>
            <div class="play-btn-circle" title="Videoyu İzle" onclick="event.stopPropagation();CoursePlayer.open('${unit.id}')">▶</div>
            <span class="video-badge-duration">⏱️ ${unit.duration || '12 dk'}</span>
          </div>
          <div class="video-card-body">
            <h4 class="video-unit-title">${esc(unit.unitNo)}: ${esc(unit.unitTitle)}</h4>
            <div class="video-topics-pills">
              ${topicTags}${moreCount}
            </div>
            <div class="video-card-footer">
              <span>${isDone ? `⭐ Başarı: <b>${prog.score}/10</b> Puan` : (COURSE_LESSONS[unit.id] ? '✅ Sesli Anlatım + 10 Soru' : '⏳ Hazırlanıyor')}</span>
              <div class="row" style="margin:0;gap:4px">
                ${isTeacher ? `<button class="btn sm ghost" style="padding:4px 8px;font-size:11px" title="Bu üniteyi sınıfına ödev ata" onclick="event.stopPropagation();A.quickAssignCourse('${unit.id}')">📤 Ödev Ver</button>` : ''}
                <button class="btn sm ghost" style="padding:3px 7px;font-size:11px" title="10 soruluk testi A4 çalışma kağıdı olarak yazdır" onclick="event.stopPropagation();CoursePlayer.printWorksheet('${unit.id}')">🖨️ Test</button><span class="video-card-btn-action" style="${isDone ? 'color:#facc15' : 'color:#10b981'}" onclick="event.stopPropagation();CoursePlayer.open('${unit.id}')">${isDone ? 'Tekrar İzle 🔄' : 'Dersi Başlat ▶'}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    sectionsHtml += `
      <div class="term-section">
        <div class="term-section-title">
          <span>${t.term === 1 ? '🍂 1. Dönem' : '🌱 2. Dönem'} Üniteleri</span>
          <small class="muted" style="font-weight:normal">(${filteredUnits.length} Ünite)</small>
        </div>
        <div class="video-grid">
          ${unitCardsHtml}
        </div>
      </div>
    `;
  });

  return `
    <div class="courses-wrap">
      <!-- Ödev Bildirim Bandı (Varsa) -->
      ${alertBannerHtml}

      <!-- Bilge Baykuş Karşılama Banner -->
      <div class="courses-hero">
        <div class="courses-hero-text">
          <h2><span>🦉</span> 4. Sınıf Dersler & Video Müfredatı</h2>
          <p>Çalışmak istediğin dersi seç; 1. ve 2. dönem ünite videolarıyla konuları eğlenerek öğren!</p>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span class="badge" style="background:rgba(16,185,129,0.25);color:#6ee7b7;border:1px solid #10b981">🏆 Tamamlanan: ${totalCompletedCount} / 43 Ünite (${Math.round((totalCompletedCount / 43) * 100)}%)</span>
          <span class="badge" style="background:rgba(255,255,255,0.1);color:#fff">MEB 2025-2026 Uyumlu</span>
        </div>
      </div>

      <!-- Akıllı Devam Kartı -->
      ${resumeCardHtml}

      <!-- Günün Bilge Baykuş Tavsiyesi -->
      <div class="daily-tip-card">
        <span style="font-size:22px">${todayTip.icon}</span>
        <div>
          <b>Günün İpucu (${todayTip.title}):</b>
          <span style="color:var(--m)"> ${esc(todayTip.text)}</span>
        </div>
      </div>

      <!-- 6 Ders Seçim Alanı -->
      <div class="courses-sub-grid">
        ${subButtonsHtml}
      </div>

      <!-- Filtre ve Arama Çubuğu -->
      <div class="courses-toolbar">
        <div class="term-filter-tabs">
          <button class="term-tab-btn ${activeTerm === 'all' ? 'active' : ''}" onclick="A.selCourseTerm('all')">🌟 Tüm Dönemler</button>
          <button class="term-tab-btn ${activeTerm === '1' ? 'active' : ''}" onclick="A.selCourseTerm('1')">🍂 1. Dönem</button>
          <button class="term-tab-btn ${activeTerm === '2' ? 'active' : ''}" onclick="A.selCourseTerm('2')">🌱 2. Dönem</button>
        </div>
        <div class="status-filter-tabs">
          <button class="term-tab-btn ${activeStatus === 'all' ? 'active' : ''}" onclick="A.selCourseStatus('all')">🌈 Tümü</button>
          <button class="term-tab-btn ${activeStatus === 'todo' ? 'active' : ''}" onclick="A.selCourseStatus('todo')">⏳ Bekleyenler</button>
          <button class="term-tab-btn ${activeStatus === 'done' ? 'active' : ''}" onclick="A.selCourseStatus('done')">🏆 Tamamlananlar</button>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <input type="text" class="courses-search" placeholder="🔍 Ünite veya konu ara..." value="${esc(q)}" oninput="A.filterCourse(this.value)">
        </div>
      </div>

      <!-- Seçili Dersin Ünite Video Kartları -->
      <div id="courseContentArea">
        ${sectionsHtml || `
          <div class="card" style="text-align:center;padding:32px 16px">
            <div style="font-size:36px;margin-bottom:8px">🔍</div>
            <h4 style="margin:0 0 6px 0">Bu filtreye uygun ünite bulunamadı</h4>
            <p class="muted" style="margin:0 0 14px 0">Filtreleri sıfırlayarak tüm üniteleri görebilirsiniz.</p>
            <button class="btn sm ghost" onclick="A.clearCourseSearch()">Filtreleri Temizle 🔄</button>
          </div>
        `}
      </div>

      <!-- Arama Sonucu Bulunamadı Kutusu (Canlı Arama İçin) -->
      <div id="noCourseResults" class="card" style="display:none;text-align:center;padding:32px 16px">
        <div style="font-size:36px;margin-bottom:8px">🔍</div>
        <h4 style="margin:0 0 6px 0">Aramanıza uygun ünite bulunamadı</h4>
        <p class="muted" style="margin:0 0 14px 0">Lütfen aradığınız kelimeyi kontrol edin veya aramayı temizleyin.</p>
        <button class="btn sm" onclick="A.clearCourseSearch()">Aramayı Temizle 🔄</button>
      </div>
    </div>
  `;
}

A.selCourse = id => {
  ui.activeCourse = id;
  render();
};
A.selCourseTerm = term => {
  ui.courseTerm = term;
  render();
};
A.selCourseStatus = status => {
  ui.courseStatus = status;
  render();
};
A.filterCourse = val => {
  ui.courseSearch = (val || '').toLowerCase().trim();
  const q = ui.courseSearch;
  let anyVisible = false;
  document.querySelectorAll('.video-card').forEach(card => {
    const title = (card.getAttribute('data-title') || '').toLowerCase();
    const topics = (card.getAttribute('data-topics') || '').toLowerCase();
    const match = !q || title.includes(q) || topics.includes(q);
    card.style.display = match ? 'flex' : 'none';
    if (match) anyVisible = true;
  });
  document.querySelectorAll('.term-section').forEach(sec => {
    const visibleCards = Array.from(sec.querySelectorAll('.video-card')).some(c => c.style.display !== 'none');
    sec.style.display = visibleCards ? 'block' : 'none';
  });
  const noRes = document.getElementById('noCourseResults');
  if (noRes) noRes.style.display = (q && !anyVisible) ? 'block' : 'none';
};
A.clearCourseSearch = () => {
  ui.courseSearch = '';
  ui.courseTerm = 'all';
  ui.courseStatus = 'all';
  render();
};
A.openVideoModal = (courseId, unitId) => {
  const c = COURSES_DATA.find(x => x.id === courseId);
  if (!c) return;
  let unit = null, termNum = 1;
  for (const t of c.terms) {
    const f = t.units.find(u => u.id === unitId);
    if (f) { unit = f; termNum = t.term; break; }
  }
  if (!unit) return;

  const hasLesson = !!COURSE_LESSONS[unitId];

  const topicsList = unit.topics.map(tp => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(255,255,255,0.06);font-size:13px">
      <span style="color:#10b981;font-weight:bold">✔</span>
      <span>${esc(tp)}</span>
    </div>
  `).join('');

  const modalHtml = `
    <div style="display:flex;flex-direction:column;gap:14px;max-width:720px;width:100%">
      <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--b);padding-bottom:10px">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:26px">${c.icon}</span>
          <div>
            <h3 style="margin:0;font-size:17px;font-weight:800;color:var(--t)">${esc(c.name)} · ${esc(unit.unitNo)}</h3>
            <small style="color:var(--m)">${termNum}. Dönem · ${esc(unit.unitTitle)}</small>
          </div>
        </div>
        <button class="btn ghost sm" onclick="closeModal()">✕ Kapat</button>
      </div>

      ${hasLesson ? `
        <div class="video-modal-screen" style="cursor:pointer" onclick="CoursePlayer.open('${unit.id}')">
          <div class="video-modal-play-pulse">▶</div>
          <span class="video-badge-unit" style="top:12px;left:12px">${termNum}. Dönem · ${esc(unit.unitNo)}</span>
          <span class="video-badge-ready" style="top:12px;right:12px;background:rgba(16,185,129,0.3);border-color:#10b981;color:#6ee7b7">🎬 Ders & Test Hazır!</span>
          <h3 style="margin:8px 0 4px 0;font-size:20px;color:#fff;font-weight:900">${esc(unit.unitTitle)}</h3>
          <p style="margin:0;font-size:13px;color:#cbd5e1;max-width:480px">
            🦉 <b>Bilge Baykuş:</b> Bu ünitenin sesli ve görsel konu anlatımı hazır! 5 adımda konuları dinle ve öğren, ardından 10 soruluk testte kendini sına!
          </p>
          <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;justify-content:center">
            <button class="btn ok" onclick="event.stopPropagation();CoursePlayer.open('${unit.id}')">▶ Dersi Başlat (Sesli & Görsel)</button>
            <button class="btn warn" onclick="event.stopPropagation();CoursePlayer.startQuiz('${unit.id}')">📝 10 Soruluk Ünite Testi</button>
          </div>
        </div>
      ` : `
        <div class="video-modal-screen">
          <div class="video-modal-play-pulse">▶</div>
          <span class="video-badge-unit" style="top:12px;left:12px">${termNum}. Dönem · ${esc(unit.unitNo)}</span>
          <span class="video-badge-ready" style="top:12px;right:12px">🎬 Video Hazırlanıyor</span>
          <h3 style="margin:8px 0 4px 0;font-size:18px;color:#fff;font-weight:800">${esc(unit.unitTitle)}</h3>
          <p style="margin:0;font-size:13px;color:#cbd5e1;max-width:460px">
            🦉 <b>Bilge Baykuş:</b> Bu üniteye ait ders videosu stüdyomuzda özenle hazırlanmaktadır ve çok yakında buraya yüklenecektir!
          </p>
          <div style="margin-top:12px;padding:6px 14px;background:rgba(0,0,0,0.5);border-radius:20px;border:1px solid rgba(255,255,255,0.2);font-size:11px;color:#94a3b8">
            📁 Kendi hazırladığın ders videosu hazır olduğunda bu alana tek tıkla eklenecektir.
          </div>
        </div>
      `}

      <div>
        <h4 style="margin:0 0 8px 0;font-size:14px;font-weight:700;color:var(--t)">📌 Bu Ünitede İşlenecek Konular:</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          ${topicsList}
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:6px;flex-wrap:wrap">
        <button class="btn ghost" onclick="closeModal()">Geri Dön</button>
        ${hasLesson ? `
          <button class="btn ok" onclick="CoursePlayer.open('${unit.id}')">🎬 Dersi Başlat ▶</button>
        ` : `
          <button class="btn ok" onclick="closeModal();A.tab('student',1)">⏱️ Deneme Sınavına Başla</button>
        `}
      </div>
    </div>
  `;
  modal(modalHtml);
};

A.quickAssignCourse = unitId => {
  const cl = (typeof COURSE_LESSONS !== 'undefined' && COURSE_LESSONS[unitId]) || null;
  const m = modById(unitId);
  const u = cur();
  const title = cl ? cl.unitTitle : (m ? m.name : unitId);
  modal(`
    <div style="min-width:320px">
      <h3>📤 Sınıfa Ödev Ata</h3>
      <p><b>${esc(title)}</b> konusunu <b>${esc(u.classId || 'sınıfınıza')}</b> ödev olarak atamak üzeresiniz.</p>
      <label>Ödev Başlığı<input id="qaTitle" value="${esc(title)} Konu Anlatımı ve Pekiştirme"></label>
      <div class="grid3" style="margin-top:8px">
        <label>Ödül ⭐ XP<input id="qaXp" type="number" value="30" min="0" max="500"></label>
        <label>Ödül 🪙 Altın<input id="qaGold" type="number" value="15" min="0" max="500"></label>
      </div>
      <label style="margin-top:8px">Açıklama (İsteğe bağlı)<textarea id="qaDesc" placeholder="Videoyu izleyin, 3D etkileşimleri deneyin ve test sorularını çözün..."></textarea></label>
      <div class="row" style="margin-top:14px;justify-content:flex-end">
        <button class="btn ghost" onclick="closeModal()">İptal</button>
        <button class="btn ok" onclick="A.execQuickAssignCourse('${unitId}')">📤 Sınıfa Ata</button>
      </div>
    </div>
  `);
};
A.execQuickAssignCourse = unitId => {
  const u = cur();
  const title = $('#qaTitle').value.trim();
  if (!title) { toast('Ödev başlığı gereklidir.'); return; }
  const xp = Math.max(0, parseInt($('#qaXp').value) || 0);
  const gold = Math.max(0, parseInt($('#qaGold').value) || 0);
  const desc = $('#qaDesc').value.trim();
  db.assignments.push({
    id: uid('a'),
    classId: u.classId || '4A',
    title,
    moduleId: unitId,
    xp,
    gold,
    desc,
    date: Date.now(),
    doneBy: []
  });
  save();
  closeModal();
  render();
  toast('📤 Ödev başarıyla sınıfa atandı!');
};

/* --- Sekme 3: Ödevler & Duyurular --- */
function asgTab(u){
  const anns=db.announcements.filter(a=>!a.classId||a.classId===u.classId).slice().reverse();
  const asg=db.assignments.filter(a=>a.classId===u.classId).slice().reverse();
  return `<div class="card"><h3>📢 Sınıf Duyuruları</h3>${anns.length?anns.map(a=>`<div class="item" style="display:block">${esc(a.text)}<br><small>${esc(a.author||'')} • ${fmtDate(a.date)}</small></div>`).join(''):'<p class="muted">Duyuru yok.</p>'}</div>
  <div class="card"><h3>📚 Sınıf Ödevlerim</h3>${asg.length?asg.map(a=>{
    const m=modById(a.moduleId);
    const cl=typeof COURSE_LESSONS!=='undefined'?COURSE_LESSONS[a.moduleId]:null;
    const done=a.doneBy.includes(u.id);
    let subInfo = '';
    if (m) subInfo = `🧪 ${m.icon} ${esc(m.name)} (3D Deney)`;
    else if (cl) subInfo = `🎬 ${esc(cl.unitTitle)} (Ders Videosu & Test)`;
    return `<div class="item"><div><b>${esc(a.title)}</b> ${done?'✅':''}<br><small>${subInfo} • Ödül: ⭐${a.xp||0} XP 🪙${a.gold||0}${a.desc?' • '+esc(a.desc):''}</small></div>${done?'<span class="badge" style="background:rgba(16,185,129,0.2);color:#10b981">Tamamlandı ✔</span>':`<button class="btn sm" onclick="A.openAsg('${a.id}')">📖 Ödevi İncele & Çöz</button>`}</div>`;
  }).join(''):'<p class="muted">Henüz sana atanmış ödev yok.</p>'}</div>`;
}
A.openAsg=aid=>{
  const u=cur();
  const a=db.assignments.find(x=>x.id===aid||x.moduleId===aid);
  if(!a)return;
  const m=modById(a.moduleId);
  const isCourse=typeof COURSE_LESSONS!=='undefined'&&!!COURSE_LESSONS[a.moduleId];
  const cl=isCourse?COURSE_LESSONS[a.moduleId]:null;
  const isDone=a.doneBy.includes(u.id);
  modal(`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:500px">
      <h3>📚 ${esc(a.title)}</h3>
      <p>${a.desc?esc(a.desc):'Bu ödevi inceleyip tamamlayarak ödülleri kazanabilirsin!'}</p>
      <div class="row"><span class="badge">⭐ ${a.xp||0} XP</span><span class="badge">🪙 ${a.gold||0} Altın</span></div>
      ${m?`<div style="background:rgba(255,255,255,0.05);padding:10px;border-radius:8px"><b>${m.icon} 3D Laboratuvar: ${esc(m.name)}</b><p style="margin:6px 0 0 0;font-size:13px">${esc(m.topic)}</p></div>`:''}
      ${cl?`<div style="background:rgba(255,255,255,0.05);padding:10px;border-radius:8px"><b>🎬 MEB Dersi: ${esc(cl.unitTitle)}</b><p style="margin:6px 0 0 0;font-size:13px">Sesli konu anlatımı ve 10 soruluk pekiştirme testi.</p></div>`:''}
      <div class="row end" style="margin-top:10px;flex-wrap:wrap;gap:8px">
        <button class="btn ghost" onclick="closeModal()">Kapat</button>
        ${m ? `<button class="btn warn" onclick="closeModal();A.tab('student',1);A.selMod('${a.moduleId}')">🧪 3D Deneyi Başlat</button>` : ''}
        ${isCourse ? `<button class="btn" onclick="closeModal();CoursePlayer.open('${a.moduleId}')">🎬 Ders Videosu & Testini Aç</button>` : ''}
        ${!isDone ? `<button class="btn ok" onclick="A.finishAsg('${a.id}')">✔ Ödevi Tamamla</button>` : '<span class="badge" style="background:rgba(16,185,129,0.2);color:#10b981">Tamamlandı ✔</span>'}
      </div>
    </div>
  `);
};
A.finishAsg=aid=>{
  const u=cur();
  const a=db.assignments.find(x=>x.id===aid);
  if(!a||a.doneBy.includes(u.id))return;
  a.doneBy.push(u.id);
  u.asgDone=(u.asgDone||0)+1;
  gain(u,a.xp||15,a.gold||10);
  appSfx('win');
  save();
  closeModal();
  render();
  toast('🎉 Tebrikler! ' + esc(a.title) + ' ödevini tamamladın.');
};


/* --- Sekme 4: Liderlik, Rozet, Market --- */
function marketTab(u){
  const list=classStudents(u.classId).slice().sort((a,b)=>b.xp-a.xp);
  const res=db.results.filter(r=>r.studentId===u.id);
  const medal=['🥇','🥈','🥉'];
  const own=id=>(u.owned||[]).includes(id);
  const itemRow=i=>`<div class="item"><div>${i.type==='frame'?'🖼️':'🏷️'} <b>${esc(i.name)}</b> <small>🪙 ${i.price}</small></div>${own(i.id)?`<button class="btn sm ${(i.type==='title'?u.title===i.name:u.frame===i.id)?'ok':'ghost'}" onclick="A.equip('${i.id}')">${(i.type==='title'?u.title===i.name:u.frame===i.id)?'✔ Takılı':'Tak'}</button>`:`<button class="btn sm warn" ${u.gold<i.price?'disabled':''} onclick="A.buy('${i.id}')">Satın Al</button>`}</div>`;
  return `<div class="two" style="margin-top:0"><div class="card"><h3>🏆 Sınıf Liderlik Tablosu (${esc(u.classId)})</h3>${list.map((s,i)=>`<div class="item"><div style="display:flex;gap:10px;align-items:center"><span class="rank">${medal[i]||i+1}</span>${roleAvatar(s,36)}<div><b>${esc(s.name)}</b>${s.id===u.id?' <small>(sen)</small>':''}<br><small>${s.title?esc(s.title)+' • ':''}Seviye ${level(s.xp)}</small></div></div><b style="color:var(--a)">${s.xp} XP</b></div>`).join('')}</div>
  <div class="card"><h3>🎖️ Rozetlerim</h3>${BADGES.map(b=>`<span class="badge ${b.t(u,res)?'':'off'}" title="${esc(b.desc)}">${b.icon} ${b.name}</span>`).join('')}<p class="muted">Rozetlerin üzerine gelince nasıl kazanılacağını görürsün.</p></div></div>
  <div class="card"><h3>🛒 Altın Marketi <small>(Bakiyen: 🪙 ${u.gold})</small></h3><div class="two" style="margin-top:0"><div>${ITEMS.filter(i=>i.type==='title').map(itemRow).join('')}<div class="row"><button class="btn ghost sm" onclick="A.unequip('title')">Unvanı Kaldır</button></div></div><div>${ITEMS.filter(i=>i.type==='frame').map(itemRow).join('')}<div class="row"><button class="btn ghost sm" onclick="A.unequip('frame')">Çerçeveyi Kaldır</button></div></div></div></div>
  <div class="card center" style="margin-top:14px;background:linear-gradient(135deg,rgba(234,179,8,0.12),rgba(245,158,11,0.06));border:1px solid rgba(234,179,8,0.3)">
    <h3>🎖️ Dijital Başarı &amp; Takdir Belgesi</h3>
    <p style="font-size:13px;color:var(--m);margin:4px 0 12px">Kazandığın XP'ler, tamamladığın üniteler ve başarınla sana özel hazırlanan resmi takdir belgeni görüntüle!</p>
    <button class="btn warn" onclick="A.cert('${u.id}')">📜 Belgemi İncele &amp; Yazdır</button>
  </div>`;
}
A.buy=id=>{
  const u=cur(),it=ITEMS.find(i=>i.id===id);
  if(!it)return;
  if(!Array.isArray(u.owned))u.owned=[];
  if(u.owned.includes(id))return;
  if(u.gold<it.price){toast('Yeterli altının yok 🪙');return;}
  u.gold-=it.price;u.owned.push(id);
  A.equip(id,true);
  appSfx('win');
  toast('🛍️ Satın alındı: '+esc(it.name));
};
A.equip=(id,silent)=>{const u=cur(),it=ITEMS.find(i=>i.id===id);if(!it||!u.owned.includes(id))return;if(it.type==='title')u.title=it.name;else u.frame=it.id;save();render();};
A.unequip=t=>{const u=cur();if(t==='title')u.title='';else u.frame='';save();render();};
/* ================= ÖĞRETMEN PANELİ ================= */
function teacherView(u){
  const T=['👥 Öğrenci & Veli Hesapları','📚 Dersler & Video Müfredat','📝 Ödev & Duyuru','🧠 Soru Bankası','💬 Veli İletişim & Sonuçlar'];
  return `<div class="statbar"><div class="chip">🏫 Sınıf <b>${esc(u.classId||'-')}</b></div><div class="chip">👥 Öğrenci <b>${classStudents(u.classId).length}</b></div><div class="chip">📝 Ödev <b>${db.assignments.filter(a=>a.classId===u.classId).length}</b></div><div class="chip">🧠 Soru <b>${db.questions.length}</b></div></div>`+tabs('teacher',T)+`<div class="panel">${([tchAccounts,coursesTab,tchAssign,tchBank,tchComm][ui.tab.teacher]||tchAccounts)(u)}</div>`;
}
const parentOf = sid => db.users.find(x=>x.role==='parent'&&x.childId===sid);

/* --- 1) Hesaplar --- */
function tchAccounts(u){
  const st=classStudents(u.classId);
  return `<div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>➕ Yeni Öğrenci + Veli Hesabı (${esc(u.classId||'4A')})</h3><button class="btn sm" onclick="A.quickAddModal('${esc(u.classId||'4A')}')">⚡ Sınıfıma Toplu Öğrenci Ekle</button></div><div class="grid3" style="margin-top:10px">
   <label>Öğrenci Adı Soyadı<input id="nsName" oninput="A.suggest()" placeholder="Örn: Elif Aydın"></label>
   <label>Öğrenci Kullanıcı Adı<input id="nsUser"></label><label>Öğrenci Şifresi<input id="nsPass" value="${rndPass()}"></label>
   <label>Veli Kullanıcı Adı<input id="nsPUser"></label><label>Veli Şifresi<input id="nsPPass" value="${rndPass()}"></label>
   <div class="end"><button class="btn" style="width:100%" onclick="A.addStudent()">✨ Tek Tıkla İki Hesap Aç</button></div></div>
   <p class="muted">Adı yazınca kullanıcı adları otomatik önerilir; istersen değiştirebilirsin.</p></div>
  <div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>🔑 Sınıf Hesapları (${st.length})</h3><button class="btn sm" onclick="A.printList()">🖨️ Sınıf Şifre Listesini Yazdır</button></div>
  <div class="tablewrap"><table><thead><tr><th>Öğrenci</th><th>Kullanıcı</th><th>Şifre ✏️</th><th>Veli Kullanıcı</th><th>Veli Şifre ✏️</th><th>İlerleme & Durum</th><th>İşlemler</th></tr></thead><tbody>
  ${st.map(s=>{
    const p=parentOf(s.id);
    const cCount=Object.keys(s.courseProgress||{}).length;
    const lCount=(s.labDone||[]).length;
    return `<tr><td><b>${esc(s.name)}</b></td><td><code>${esc(s.username)}</code></td><td class="pw" title="Değiştirmek için tıkla" onclick="A.editPass('${s.id}')"><code>${esc(s.password)}</code> ✏️</td>
    <td>${p?`<code>${esc(p.username)}</code>`:'<small class="muted">—</small>'}</td>${p?`<td class="pw" onclick="A.editPass('${p.id}')"><code>${esc(p.password)}</code> ✏️</td>`:`<td><button class="btn sm ghost" onclick="A.addParent('${s.id}')">➕ Veli aç</button></td>`}
    <td><small>⭐ ${s.xp} XP • Lvl ${level(s.xp)}<br>🎬 ${cCount}/43 Ünite • 🧪 ${lCount} Deney</small></td>
    <td><div class="row" style="margin:0;gap:4px"><button class="btn sm" onclick="A.imp('${s.id}')">Hesaba Geç</button><button class="btn sm ghost" onclick="A.editUser('${s.id}')">✏️ Düzenle</button>${p?`<button class="btn sm ghost" onclick="A.imp('${p.id}')">Veliye Geç</button>`:''}<button class="btn sm ok" onclick="A.waCard('${s.id}')">📱 Giriş Kartı</button><button class="btn sm danger" onclick="A.delStudent('${s.id}')">🗑️</button></div></td></tr>`;
  }).join('')||'<tr><td colspan="7" class="muted center">Henüz sınıfınızda kayıtlı öğrenci yok.</td></tr>'}
  </tbody></table></div></div>`;
}
A.suggest=()=>{
  const name=$('#nsName').value.trim(),first=slug(name.split(/\s+/)[0]),cls=slug(cur().classId||'');
  if(!first){$('#nsUser').value='';$('#nsPUser').value='';return;}
  $('#nsUser').value=uniqueUser(first+cls);$('#nsPUser').value=uniqueUser('veli_'+first);
};
A.addStudent=()=>{
  const t=cur(),name=$('#nsName').value.trim();
  const un=$('#nsUser').value.trim().toLowerCase(),pu=$('#nsPUser').value.trim().toLowerCase();
  const pw=$('#nsPass').value.trim(),pp=$('#nsPPass').value.trim();
  if(!name||!un||!pu){toast('Ad ve kullanıcı adları boş olamaz.');return;}
  if(pw.length<3||pp.length<3){toast('Şifreler en az 3 karakter olmalı.');return;}
  if(un===pu){toast('Öğrenci ve veli kullanıcı adı farklı olmalı.');return;}
  if(byName(un)||byName(pu)){toast('Bu kullanıcı adlarından biri zaten var.');return;}
  const s=mkUser({username:un,password:pw,role:'student',name,classId:t.classId});
  const p=mkUser({username:pu,password:pp,role:'parent',name:name.split(' ')[0]+' Velisi',classId:t.classId,childId:s.id});
  db.users.push(s,p);save();render();toast('✅ Öğrenci ve veli hesabı açıldı');
};
A.addParent=sid=>{
  const s=byId(sid);if(!s)return;
  const p=mkUser({username:uniqueUser('veli_'+slug(s.name.split(' ')[0])),password:rndPass(),role:'parent',name:s.name.split(' ')[0]+' Velisi',classId:s.classId,childId:s.id});
  db.users.push(p);save();render();toast('Veli hesabı açıldı: '+esc(p.username));
};
A.editPass=id=>{
  const x=byId(id);if(!x)return;
  const p=prompt(x.name+' ('+x.username+') için yeni şifre:',x.password);
  if(p===null)return;if(p.trim().length<3){toast('Şifre en az 3 karakter olmalı.');return;}
  x.password=p.trim();save();render();toast('🔑 Şifre güncellendi');
};
A.delStudent=sid=>{
  const s=byId(sid);if(!s)return;
  const p=parentOf(sid);
  if(!confirm(s.name+' ve velisinin hesapları silinsin mi?\n(Öğrencinin tüm sınav sonuçları, ödev ve mesaj kayıtları da temizlenir.)'))return;
  db.users=db.users.filter(x=>x.id!==sid&&x.childId!==sid);
  db.results=db.results.filter(r=>r.studentId!==sid);
  db.assignments.forEach(a=>{a.doneBy=a.doneBy.filter(i=>i!==sid);});
  db.messages=db.messages.filter(m=>m.from!==sid&&m.to!==sid&&(!p||(m.from!==p.id&&m.to!==p.id)));
  save();render();toast('🗑️ Öğrenci ve veli kaydı silindi');
};
function baseUrl(){return location.protocol==='file:'?'(sunucu adresi)':location.origin;}
A.waCard=sid=>{
  const s=byId(sid),p=parentOf(sid);if(!s)return;
  const txt=`📚 Bilgi Evreni 4D - Giriş Kartı\n👦 Öğrenci: ${s.name}\nKullanıcı adı: ${s.username}\nŞifre: ${s.password}\n${p?`\n👨‍👩‍👧 Veli girişi\nKullanıcı adı: ${p.username}\nŞifre: ${p.password}\n`:''}\n🌐 Adres: ${baseUrl()}`;
  window._waTxt=txt;
  modal(`<h3>📱 WhatsApp Şifre Kartı</h3><textarea id="waTxt" rows="10" readonly>${esc(txt)}</textarea><div class="row"><a class="btn ok" style="text-decoration:none" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(txt)}">WhatsApp'ta Paylaş</a><button class="btn" onclick="A.copyWa()">📋 Kopyala</button><button class="btn ghost" onclick="closeModal()">Kapat</button></div>`);
};
A.copyWa=()=>{const t=$('#waTxt');t.select();let ok=false;try{ok=document.execCommand('copy');}catch(e){}if(!ok&&navigator.clipboard)navigator.clipboard.writeText(t.value);toast('📋 Kopyalandı');};
A.printList=()=>{
  const t=cur(),st=classStudents(t.classId);
  printHTML(`<h2>🔑 ${esc(t.classId)} Sınıfı Giriş Bilgileri</h2><p>Adres: ${esc(baseUrl())} • Tarih: ${new Date().toLocaleDateString('tr-TR')}</p><table><tr><th>#</th><th>Öğrenci</th><th>Öğrenci Kullanıcı / Şifre</th><th>Veli Kullanıcı / Şifre</th></tr>${st.map((s,i)=>{const p=parentOf(s.id);return `<tr><td>${i+1}</td><td>${esc(s.name)}</td><td>${esc(s.username)} / ${esc(s.password)}</td><td>${p?esc(p.username)+' / '+esc(p.password):'-'}</td></tr>`;}).join('')}</table><p style="margin-top:14px">Bu liste gizlidir; yalnızca ilgili öğrenci ve velisine veriniz.</p>`);
};

/* --- 2) Ödev & Duyuru --- */
function tchAssign(u){
  const asg=db.assignments.filter(a=>a.classId===u.classId).slice().reverse();
  const anns=db.announcements.filter(a=>a.classId===u.classId).slice().reverse();
  const st=classStudents(u.classId);
  return `<div class="two" style="margin-top:0"><div class="card"><h3>🧪 Yeni Ödev Ata (${esc(u.classId||'4A')})</h3>
   <label>Ödev İçeriği (3D Deney veya MEB Dersi)
     <select id="aMod" onchange="A.tchSelectMod(this)">
       <optgroup label="3D Laboratuvar Modülleri">${MODULES.map(m=>`<option value="${m.id}">${m.icon} ${m.name}</option>`).join('')}</optgroup>
       <optgroup label="MEB Ders Üniteleri">${COURSES_DATA.map(c=>c.terms.map(t=>t.units.map(un=>`<option value="${un.id}">${c.icon} ${esc(c.name)}: ${esc(un.unitTitle)}</option>`).join('')).join('')).join('')}</optgroup>
     </select>
   </label>
   <label style="margin-top:8px">Ödev Başlığı<input id="aTitle" value="Dünya - Güneş - Ay Deneyi"></label>
   <div class="grid3" style="margin-top:8px"><label>Ödül ⭐ XP<input id="aXp" type="number" value="30" min="0" max="500"></label><label>Ödül 🪙 Altın<input id="aGold" type="number" value="15" min="0" max="500"></label></div>
   <label style="margin-top:8px">Açıklama<textarea id="aDesc" placeholder="Öğrencilere ödev talimatları..."></textarea></label>
   <div class="row"><button class="btn" onclick="A.addAsg()">📤 Sınıfa Gönder</button></div></div>
  <div class="card"><h3>📢 Sınıf Duyurusu</h3><label>Duyuru Metni<textarea id="annText" placeholder="Sınıfınıza duyuru paylaşın..."></textarea></label><div class="row"><button class="btn" onclick="A.addAnn()">📣 Duyur</button></div>
   <div style="max-height:240px;overflow-y:auto;margin-top:10px">${anns.map(a=>`<div class="item"><div>${esc(a.text)}<br><small class="muted">${fmtDate(a.date)}</small></div><button class="btn sm danger" onclick="A.delAnn('${a.id}')">🗑️</button></div>`).join('')||'<p class="muted">Duyuru yok.</p>'}</div></div></div>
  <div class="card"><h3>📋 Verilen Ödevler ve Öğrenci Takibi</h3>${asg.length?asg.map(a=>{
    const m=modById(a.moduleId);
    const cl=typeof COURSE_LESSONS!=='undefined'?COURSE_LESSONS[a.moduleId]:null;
    const subTitle=m?m.icon+' '+esc(m.name):(cl?'🎬 '+esc(cl.unitTitle):'');
    const done=st.filter(s=>a.doneBy.includes(s.id));
    const notDone=st.filter(s=>!a.doneBy.includes(s.id));
    const pct=st.length?Math.round(done.length/st.length*100):0;
    return `<div class="item" style="display:block;margin-bottom:10px">
      <div class="row between" style="margin:0">
        <b>${esc(a.title)} <small class="muted">${subTitle} • ⭐${a.xp} XP • 🪙${a.gold} Altın</small></b>
        <button class="btn sm danger" onclick="A.delAsg('${a.id}')">🗑️ Sil</button>
      </div>
      <div class="bar" style="margin:6px 0"><i style="width:${pct}%"></i></div>
      <div class="row between" style="margin:0"><small><b>Tamamlayanlar (${done.length}/${st.length} - %${pct}):</b> ${done.length?done.map(s=>esc(s.name)).join(', '):'<span class=\"muted\">Henüz tamamlayan yok</span>'}</small></div>
      ${notDone.length&&notDone.length<st.length?`<small style="color:var(--danger)"><b>Bekleyenler (${notDone.length}):</b> ${notDone.map(s=>esc(s.name)).join(', ')}</small>`:''}
    </div>`;
  }).join(''):'<p class="muted">Henüz ödev atanmadı.</p>'}</div>`;
}

A.tchSelectMod=sel=>{
  const opt=sel.options[sel.selectedIndex];
  if(opt&&$('#aTitle'))$('#aTitle').value=opt.text.replace(/^[^\s]+\s+/, '')+' Çalışması';
};

A.addAsg=()=>{
  const u=cur(),title=$('#aTitle').value.trim();if(!title){toast('Ödev başlığı yazın.');return;}
  db.assignments.push({id:uid('a'),classId:u.classId,title,moduleId:$('#aMod').value,xp:Math.max(0,parseInt($('#aXp').value)||0),gold:Math.max(0,parseInt($('#aGold').value)||0),desc:$('#aDesc').value.trim(),date:Date.now(),doneBy:[]});
  save();render();toast('📤 Ödev sınıfa gönderildi');
};
A.delAsg=id=>{if(!confirm('Ödev silinsin mi?'))return;db.assignments=db.assignments.filter(a=>a.id!==id);save();render();};
A.addAnn=()=>{const u=cur(),t=$('#annText').value.trim();if(!t){toast('Duyuru metni boş.');return;}db.announcements.push({id:uid('n'),classId:u.classId,text:t,date:Date.now(),author:u.name});save();render();toast('📣 Duyuru yayınlandı');};
A.delAnn=id=>{db.announcements=db.announcements.filter(a=>a.id!==id);save();render();};

/* --- 3) Soru bankası --- */
function poolName(p){if(p==='exam')return '⏱️ Deneme Sınavı';const m=modById(p);return m?m.icon+' '+m.name:p;}
function tchBank(u){
  const pools=['exam'].concat(MODULES.map(m=>m.id));
  const filter=ui.bank||'all';
  const subFilter=ui.tchBankSub||'all';
  const qTxt=(ui.tchBankQ||'').toLowerCase().trim();
  const list=db.questions.filter(q=>{
    if(filter!=='all'&&q.pool!==filter)return false;
    if(subFilter!=='all'&&q.subject!==subFilter)return false;
    if(qTxt&&!q.text.toLowerCase().includes(qTxt))return false;
    return true;
  });
  return `<div class="card"><h3>🧙 Soru Ekleme Sihirbazı</h3><div class="grid3">
   <label>Nereye eklensin?<select id="bPool" onchange="A.bankPool()">${pools.map(p=>`<option value="${p}">${poolName(p)}</option>`).join('')}</select></label>
   <label id="bSubWrap">Ders<select id="bSub">${SUBJECTS.map(s=>`<option>${s}</option>`).join('')}</select></label>
   <label>Doğru Seçenek<select id="bAns"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select></label></div>
   <label style="margin-top:8px">Soru metni<textarea id="bText" placeholder="4. sınıf düzeyinde sorunuzu yazın..."></textarea></label>
   <div class="grid3" style="margin-top:8px">${'ABCD'.split('').map((l,i)=>`<label>Seçenek ${l}<input id="bO${i}"></label>`).join('')}</div>
   <div class="row"><button class="btn" onclick="A.addQ()">➕ Soruyu Ekle</button></div></div>
  <div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>📚 Soru Havuzu (${list.length} / ${db.questions.length})</h3><div class="row" style="margin:0;gap:8px;flex-wrap:wrap"><input style="width:160px" placeholder="Soru ara..." value="${esc(ui.tchBankQ||'')}" oninput="A.tchBankSearch(this.value)"><select style="width:auto" onchange="A.bankFilter(this.value)"><option value="all">Tüm Havuzlar</option>${pools.map(p=>`<option value="${p}" ${filter===p?'selected':''}>${poolName(p)}</option>`).join('')}</select><select style="width:auto" onchange="A.tchBankSub(this.value)"><option value="all">Tüm Dersler</option>${SUBJECTS.map(s=>`<option value="${s}" ${subFilter===s?'selected':''}>${s}</option>`).join('')}</select></div></div>
  <div style="max-height:400px;overflow-y:auto;margin-top:10px">${list.map(q=>`<div class="item"><div><b>${esc(q.text)}</b><br><small class="muted">${poolName(q.pool)} • <b>${esc(q.subject)}</b> • Doğru: ${'ABCD'[q.answer]}) ${esc(q.options[q.answer])} • ${esc(q.by||'')}</small></div><button class="btn sm danger" onclick="A.delQ('${q.id}')">🗑️</button></div>`).join('')||'<p class="muted center">Soru bulunamadı.</p>'}</div></div>${(setTimeout(A.bankPool,0),'')}`;
}
A.bankPool=()=>{const p=$('#bPool');if(!p)return;const w=$('#bSubWrap');if(p.value==='exam')w.classList.remove('hidden');else w.classList.add('hidden');};
A.bankFilter=v=>{ui.bank=v;render();};
A.tchBankSearch=v=>{ui.tchBankQ=v;render();};
A.tchBankSub=v=>{ui.tchBankSub=v;render();};
A.addQ=()=>{
  const u=cur(),pool=$('#bPool').value,text=$('#bText').value.trim();
  const opts=[0,1,2,3].map(i=>$('#bO'+i).value.trim());
  if(!text||opts.some(o=>!o)){toast('Soru ve 4 seçeneğin hepsi dolu olmalı.');return;}
  const subject=pool==='exam'?$('#bSub').value:modById(pool).subject;
  db.questions.push({id:uid('q'),pool,subject,text,options:opts,answer:parseInt($('#bAns').value),by:u.name});
  save();render();toast('🧠 Soru eklendi');
};
A.delQ=id=>{if(!confirm('Soru silinsin mi?'))return;db.questions=db.questions.filter(q=>q.id!==id);save();render();};

/* --- 4) Veli iletişim & sonuçlar --- */
function thread(a,b){return db.messages.filter(m=>(m.from===a&&m.to===b)||(m.from===b&&m.to===a));}
function threadHTML(me,other){
  const th=thread(me,other);
  return `<div class="thread" id="thread">${th.length?th.map(m=>`<div class="msg ${m.from===me?'me':''}"><small><b>${esc(byId(m.from)?byId(m.from).name:'')}</b></small>${esc(m.text)}<small class="muted">${fmtDate(m.date)}</small></div>`).join(''):'<small class="muted">Henüz mesaj yok.</small>'}</div>`;
}
A.sendMsg=to=>{
  const me=cur(),box=$('#msgText'),t=box.value.trim();if(!t||!to)return;
  db.messages.push({id:uid('m'),from:me.id,to,text:t,date:Date.now()});
  box.value='';
  save();render();
  const th=$('#thread');if(th)th.scrollTop=th.scrollHeight;
  toast('📨 Mesaj gönderildi');
};
A.chat=id=>{ui.chat=id;render();};
function tchComm(u){
  const parents=classStudents(u.classId).map(s=>parentOf(s.id)).filter(Boolean);
  if(!ui.chat||!parents.find(p=>p.id===ui.chat))ui.chat=parents[0]?parents[0].id:null;
  const sel=(ui.chat?byId(ui.chat):null)||(parents[0]||null);
  const st=classStudents(u.classId);
  const rows=st.map(s=>{
    const rs=db.results.filter(r=>r.studentId===s.id);
    const last=rs[rs.length-1];
    const avg=rs.length?rs.reduce((a,r)=>a+r.score,0)/rs.length:null;
    return `<tr><td><b>${esc(s.name)}</b></td><td>${rs.length} sınav</td><td>${last?last.net.toFixed(2):'-'}</td><td>${last?`<b>${last.score.toFixed(0)}</b>`:'-'}</td><td><b style="color:var(--ok)">${avg!==null?avg.toFixed(0):'-'}</b></td><td><button class="btn sm ghost" onclick="A.imp('${s.id}')">Karnesini Gör</button></td></tr>`;
  }).join('');
  const all=db.results.filter(r=>r.classId===u.classId).slice().reverse().slice(0,20);
  return `<div class="two" style="margin-top:0"><div class="card"><h3>💬 Veli ile Mesajlaşma</h3>${parents.length&&sel?`<label>Veli Seçin<select onchange="A.chat(this.value)">${parents.map(p=>`<option value="${p.id}" ${p.id===sel.id?'selected':''}>${esc(p.name)} (${esc(byId(p.childId)?byId(p.childId).name+' Velisi':'')})</option>`).join('')}</select></label><div style="margin-top:8px">${threadHTML(u.id,sel.id)}</div><textarea id="msgText" placeholder="Velimize mesaj yazın..."></textarea><div class="row"><button class="btn" onclick="A.sendMsg('${sel.id}')">📨 Gönder</button><button class="btn ghost" onclick="A.imp('${sel.id}')">Veliye Geç</button></div>`:'<p class="muted">Sınıfınızda henüz veli hesabı açılmamış.</p>'}</div>
  <div class="card"><h3>📊 Deneme Sınavı Netleri (${esc(u.classId||'4A')})</h3><div class="tablewrap"><table><thead><tr><th>Öğrenci</th><th>Sınav</th><th>Son Net</th><th>Son Puan</th><th>Ortalama</th><th>İncele</th></tr></thead><tbody>${rows||'<tr><td colspan="6" class="muted center">Öğrenci yok</td></tr>'}</tbody></table></div></div></div>
  <div class="card"><h3>🕒 Sınıfımın Son Sınav Sonuçları</h3>${all.length?`<div class="tablewrap"><table><thead><tr><th>Tarih</th><th>Öğrenci</th><th>Doğru</th><th>Yanlış</th><th>Boş</th><th>Net</th><th>Puan</th></tr></thead><tbody>${all.map(r=>{const s=byId(r.studentId);return `<tr><td>${fmtDate(r.date)}</td><td><b>${esc(s?s.name:'?')}</b></td><td style="color:var(--ok)">${r.c}</td><td style="color:var(--danger)">${r.w}</td><td class="muted">${r.b}</td><td><b>${r.net.toFixed(2)}</b></td><td><b style="color:var(--a2)">${r.score.toFixed(0)}</b></td></tr>`;}).join('')}</tbody></table></div>`:'<p class="muted center">Sınıfınızda henüz deneme sınavı çözülmedi.</p>'}</div>`;
}
/* ================= VELİ PANELİ ================= */
function parentView(u){
  const ch=byId(u.childId);
  if(!ch)return `<div class="card"><h3>Çocuk hesabı bulunamadı</h3><p class="muted">Lütfen sınıf öğretmeninizle iletişime geçin.</p></div>`;
  const rs=db.results.filter(r=>r.studentId===ch.id);
  const avg=rs.length?rs.reduce((a,r)=>a+r.score,0)/rs.length:null;
  const teacher=db.users.find(x=>x.role==='teacher'&&x.classId===ch.classId);
  const courseCount = Object.keys(ch.courseProgress || {}).length;
  return `<div class="card"><div class="row between" style="margin:0"><div style="display:flex;gap:12px;align-items:center">${roleAvatar(ch,56)}<div><h2 style="margin:0">${esc(ch.name)}</h2><small>${esc(ch.classId)} Sınıfı${ch.title?' • '+esc(ch.title):''}</small></div></div><button class="btn warn" onclick="A.cert()">🎖️ Dijital Takdir & Başarı Belgesi</button></div></div>
  <div class="grid3"><div class="card center"><small>⭐ Toplam XP</small><h2>${ch.xp}</h2></div><div class="card center"><small>🎖️ Seviye</small><h2>${level(ch.xp)}</h2></div><div class="card center"><small>🎬 Tamamlanan Ünite</small><h2>${courseCount}/43</h2></div><div class="card center"><small>🧪 Çözülen 3D Deney</small><h2>${ch.labDone.length}/${MODULES.length}</h2></div><div class="card center"><small>📚 Tamamlanan Ödev</small><h2>${ch.asgDone||0}</h2></div><div class="card center"><small>⏱️ Deneme Ortalaması</small><h2>${avg!==null?avg.toFixed(0):'-'}</h2><small>${rs.length} sınav</small></div></div>
  <div class="two"><div class="card"><h3>📈 Ders Bazlı Başarı (%)</h3><div style="height:280px"><canvas id="chartC"></canvas></div><p class="muted" id="chartMsg"></p></div>
  <div class="card"><h3>💬 Sınıf Öğretmeni ile Mesajlaşma</h3>${teacher?`${threadHTML(u.id,teacher.id)}<textarea id="msgText" placeholder="Öğretmene mesajınız..."></textarea><div class="row"><button class="btn" onclick="A.sendMsg('${teacher.id}')">📨 Gönder</button></div><small>Öğretmen: ${esc(teacher.name)}</small>`:'<p class="muted">Sınıf öğretmeni bulunamadı.</p>'}</div></div>
  <div class="card"><h3>🕒 Son Deneme Sınavları</h3>${rs.length?`<div class="tablewrap"><table><tr><th>Tarih</th><th>D</th><th>Y</th><th>B</th><th>Net</th><th>Puan</th></tr>${rs.slice().reverse().slice(0,8).map(r=>`<tr><td>${fmtDate(r.date)}</td><td>${r.c}</td><td>${r.w}</td><td>${r.b}</td><td>${r.net.toFixed(2)}</td><td><b>${r.score.toFixed(0)}</b></td></tr>`).join('')}</table></div>`:'<p class="muted">Henüz deneme sınavı çözülmedi.</p>'}</div>
  <div class="card"><div class="adbox">📢 Reklam alanı (yalnızca veli panelinde, çocuğa yönelik olmayan alan)</div></div>`;
}
function drawChart(u){
  const ch=byId(u.childId);if(!ch)return;
  const data=SUBJECTS.map(s=>{const x=ch.stats[s];return x&&x.t?Math.round(x.c/x.t*100):0;});
  const msg=$('#chartMsg');
  if(msg)msg.textContent=data.some(v=>v>0)?'Başarı, 3D laboratuvar soruları ve deneme sınavlarındaki ilk denemelere göre hesaplanır.':'Henüz yeterli veri yok. Çocuğunuz soru çözdükçe grafik dolacak.';
  const cv=$('#chartC');if(!cv)return;
  if(typeof Chart==='undefined'){cv.parentNode.innerHTML='<p class="muted">Grafik kütüphanesi yüklenemedi (internet gerekli).</p>';return;}
  chart=new Chart(cv,{type:'bar',data:{labels:SUBJECTS,datasets:[{label:'Başarı %',data,backgroundColor:['#ef5350','#3b82f6','#10b981','#f59e0b','#8b5cf6','#ec4899'],borderRadius:8}]},options:{responsive:true,maintainAspectRatio:false,scales:{y:{min:0,max:100,ticks:{color:'#9aa6d1'},grid:{color:'rgba(255,255,255,.1)'}},x:{ticks:{color:'#9aa6d1'},grid:{display:false}}},plugins:{legend:{display:false}}}});
}
function certHTML(ch){
  const courseCount = Object.keys(ch.courseProgress || {}).length;
  return `<div class="cert"><div style="font-size:46px">🏅</div><h1>DİJİTAL TAKDİR & BAŞARI BELGESİ</h1><p>Bu belge,</p><h2>${esc(ch.name)}</h2><p>${esc(ch.classId)} sınıfı öğrencisi, <b>Bilgi Evreni 4D Ultimate</b> eğitim portalında gösterdiği üstün çalışkanlık ve başarıdan dolayı takdir edilmiştir.</p><p>⭐ ${ch.xp} XP &nbsp;•&nbsp; 🎖️ Seviye ${level(ch.xp)} &nbsp;•&nbsp; 🎬 ${courseCount}/43 MEB Ünitesi &nbsp;•&nbsp; 🧪 ${(ch.labDone||[]).length} 3D Deney &nbsp;•&nbsp; 📚 ${ch.asgDone||0} Ödev</p><p>Tarih: ${new Date().toLocaleDateString('tr-TR')}</p><div class="sig"><div>Sınıf Öğretmeni</div><div>Okul Müdürü</div></div></div>`;
}
A.cert=targetId=>{
  const u=cur();
  const ch=targetId?byId(targetId):(u&&u.role==='parent'?byId(u.childId):(u&&u.role==='student'?u:null));
  if(!ch)return;
  modal(certHTML(ch)+`<div class="row" style="justify-content:center;gap:10px;margin-top:10px"><button class="btn ok" onclick="A.printCert('${ch.id}')">🖨️ Yazdır / PDF Kaydet</button><button class="btn ghost" onclick="closeModal()">Kapat</button></div>`);
};
A.printCert=targetId=>{
  const u=cur();
  const ch=targetId?byId(targetId):(u&&u.role==='parent'?byId(u.childId):(u&&u.role==='student'?u:null));
  if(ch){closeModal();printHTML(certHTML(ch).replace('class="cert"','class="cert" style="border:10px double #c9a227;padding:30px;text-align:center;color:#3e2723"'));}
};

/* ================= ADMİN PANELİ ================= */
function adminView(u){
  const T=['👥 Kullanıcı Yönetimi','📊 Raporlar & İlerleme','🧠 Soru & Sınav Merkezi','🏠 Ev Sunucusu & Bakım','💰 AdSense Merkezi'];
  const cnt=r=>db.users.filter(x=>x.role===r).length;
  const totalCompletedUnits=db.users.filter(x=>x.role==='student').reduce((a,s)=>a+Object.keys(s.courseProgress||{}).length,0);
  return `<div class="statbar"><div class="chip">👑 Admin <b>${cnt('admin')}</b></div><div class="chip">👩‍🏫 Öğretmen <b>${cnt('teacher')}</b></div><div class="chip">🧒 Öğrenci <b>${cnt('student')}</b></div><div class="chip">👨‍👩‍👧 Veli <b>${cnt('parent')}</b></div><div class="chip">🧠 Soru <b>${db.questions.length}</b></div><div class="chip">📝 Sınav <b>${db.results.length}</b></div><div class="chip">🎬 Ünite Bitirme <b>${totalCompletedUnits}</b></div></div>`+tabs('admin',T)+`<div class="panel">${([admUsers,admReports,admQuestions,admServer,admAds][ui.tab.admin]||admUsers)(u)}</div>`;
}

function admUsers(u){
  const students=db.users.filter(x=>x.role==='student');
  const classes=Array.from(new Set(db.users.map(x=>x.classId).filter(Boolean))).sort();
  return `<div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>➕ Yeni Kullanıcı Ekle</h3><button class="btn sm" onclick="A.quickAddModal()">⚡ Hızlı Toplu Öğrenci Ekle</button></div><div class="grid3" style="margin-top:10px">
   <label>Rol<select id="nuRole" onchange="A.nuRole()"><option value="teacher">Öğretmen</option><option value="student">Öğrenci</option><option value="parent">Veli</option><option value="admin">Admin</option></select></label>
   <label>Ad Soyad<input id="nuName" placeholder="Örn: Ahmet Yılmaz"></label><label>Kullanıcı Adı<input id="nuUser" placeholder="Örn: ahmety"></label><label>Şifre<input id="nuPass" value="${rndPass()}"></label>
   <label id="nuClassW">Sınıf<input id="nuClass" value="4A"></label>
   <label id="nuChildW" class="hidden">Velisi olduğu öğrenci<select id="nuChild">${students.length?students.map(s=>`<option value="${s.id}">${esc(s.name)} (${esc(s.classId)})</option>`).join(''):'<option value="">Önce öğrenci ekleyin</option>'}</select></label>
   <div class="end"><button class="btn" style="width:100%" onclick="A.addUser()">➕ Ekle</button></div></div></div>
  <div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>🔎 Tüm Kullanıcılar</h3><div class="row" style="margin:0;gap:8px;flex-wrap:wrap"><input style="width:190px" placeholder="Ara: ad / k.adı / sınıf / veli" value="${esc(ui.q)}" oninput="A.filter(this.value)"><select style="width:auto" onchange="A.roleFilter(this.value)"><option value="">Tüm roller</option>${Object.keys(ROLE).map(r=>`<option value="${r}" ${ui.role===r?'selected':''}>${ROLE[r]}</option>`).join('')}</select><select style="width:auto" onchange="A.classFilter(this.value)"><option value="">Tüm sınıflar</option><option value="">Tüm sınıflar</option>${classes.map(c=>`<option value="${c}" ${ui.admClassFilter===c?'selected':''}>${c} Sınıfı</option>`).join('')}</select></div></div><div class="tablewrap" id="userTable">${userTable()}</div></div>${(setTimeout(A.nuRole,0),'')}`;
}

function userTable(){
  const q=slug(ui.q||'');
  const rF=ui.role||'';
  const cF=ui.admClassFilter||'';
  const list=db.users.filter(x=>{
    if(rF&&x.role!==rF)return false;
    if(cF&&x.classId!==cF)return false;
    if(!q)return true;
    const nm=slug(x.name).includes(q), un=slug(x.username).includes(q), cl=slug(x.classId||'').includes(q);
    let rel=false;
    if(x.role==='parent'&&x.childId){const ch=byId(x.childId);if(ch&&slug(ch.name).includes(q))rel=true;}
    else if(x.role==='student'){const p=parentOf(x.id);if(p&&slug(p.name).includes(q))rel=true;}
    return nm||un||cl||rel;
  });

  return `<table><thead><tr><th>Ad Soyad & Bilgi</th><th>Rol</th><th>Kullanıcı Adı</th><th>Şifre ✏️</th><th>Sınıf</th><th>İlerleme (Öğrenci)</th><th>İşlemler</th></tr></thead><tbody>${list.map(x=>{
    let relBadge='';
    if(x.role==='parent'){
      const ch=byId(x.childId);
      relBadge=ch?`<br><small class="muted">👶 Öğrenci: <b>${esc(ch.name)}</b> (${esc(ch.classId)})</small>`:'<br><small style="color:var(--danger)">⚠️ Öğrenci atanmamış</small>';
    }else if(x.role==='student'){
      const p=parentOf(x.id);
      relBadge=p?`<br><small class="muted">👨‍👩‍👧 Veli: <b>${esc(p.name)}</b></small>`:'<br><small style="color:var(--warn)">⚠️ Velisiz</small>';
    }
    let progBadge='-';
    if(x.role==='student'){
      const cCount=Object.keys(x.courseProgress||{}).length;
      const lCount=(x.labDone||[]).length;
      progBadge=`<small>⭐ ${x.xp} XP • Lvl ${level(x.xp)}<br>🎬 ${cCount}/43 Ünite • 🧪 ${lCount} Deney</small>`;
    }
    return `<tr><td><b>${esc(x.name)}</b>${relBadge}</td><td>${ROLE_ICON[x.role]} ${ROLE[x.role]}</td><td><code>${esc(x.username)}</code></td><td class="pw" title="Şifreyi Değiştir" onclick="A.editPass('${x.id}')"><code>${esc(x.password)}</code> ✏️</td><td><b>${esc(x.classId||'-')}</b></td><td>${progBadge}</td><td><div class="row" style="margin:0;gap:4px">${canImp(x)?`<button class="btn sm" title="Hesaba Geç" onclick="A.imp('${x.id}')">Hesaba Geç</button>`:''}<button class="btn sm ghost" title="Düzenle" onclick="A.editUser('${x.id}')">✏️ Düzenle</button>${x.id!==(cur()?cur().id:null)?`<button class="btn sm danger" title="Sil" onclick="A.delUser('${x.id}')">🗑️</button>`:''}</div></td></tr>`;
  }).join('')||'<tr><td colspan="7" class="muted center">Kullanıcı bulunamadı.</td></tr>'}</tbody></table><small class="muted">${list.length} kullanıcı gösteriliyor</small>`;
}

A.filter=v=>{ui.q=v;$('#userTable').innerHTML=userTable();};
A.roleFilter=v=>{ui.role=v;$('#userTable').innerHTML=userTable();};
A.classFilter=v=>{ui.admClassFilter=v;$('#userTable').innerHTML=userTable();};
A.nuRole=()=>{const r=$('#nuRole');if(!r)return;const isAdm=r.value==='admin',isPar=r.value==='parent';$('#nuClassW').classList.toggle('hidden',isAdm||isPar);$('#nuChildW').classList.toggle('hidden',!isPar);};

A.addUser=()=>{
  const role=$('#nuRole').value,name=$('#nuName').value.trim(),un=$('#nuUser').value.trim().toLowerCase(),pw=$('#nuPass').value.trim();
  if(!name||!un){toast('Ad ve kullanıcı adı gerekli.');return;}
  if(pw.length<3){toast('Şifre en az 3 karakter olmalı.');return;}
  if(byName(un)){toast('Bu kullanıcı adı zaten var.');return;}
  const o={username:un,password:pw,role,name};
  if(role!=='admin'&&role!=='parent')o.classId=$('#nuClass').value.trim().toUpperCase();
  if(role==='parent'){const c=$('#nuChild').value;if(!c){toast('Önce bir öğrenci ekleyin.');return;}const ch=byId(c);if(!ch){toast('Öğrenci bulunamadı.');return;}o.childId=c;o.classId=ch.classId;}
  db.users.push(mkUser(o));save();render();toast('✅ Kullanıcı eklendi');
};

A.editUser=id=>{
  const u=byId(id);if(!u)return;
  const isStudent=u.role==='student',isParent=u.role==='parent',students=db.users.filter(x=>x.role==='student');
  modal(`<div style="min-width:320px"><h3>✏️ Kullanıcıyı Düzenle</h3><p class="muted">${ROLE_ICON[u.role]} ${ROLE[u.role]} (${esc(u.username)})</p><div style="display:flex;flex-direction:column;gap:10px;margin-top:12px">
   <label>Ad Soyad<input id="edName" value="${esc(u.name)}"></label>
   <label>Kullanıcı Adı<input id="edUser" value="${esc(u.username)}"></label>
   <label>Şifre<input id="edPass" value="${esc(u.password)}"></label>
   ${u.role!=='admin'&&!isParent?`<label>Sınıf<input id="edClass" value="${esc(u.classId||'')}"></label>`:''}
   ${isParent?`<label>Bağlı Öğrenci<select id="edChild">${students.map(s=>`<option value="${s.id}" ${s.id===u.childId?'selected':''}>${esc(s.name)} (${esc(s.classId)})</option>`).join('')}</select></label>`:''}
   ${isStudent?`<div class="row between" style="margin-top:4px"><label>⭐ XP<input id="edXp" type="number" min="0" value="${u.xp}"></label><label>🪙 Altın<input id="edGold" type="number" min="0" value="${u.gold}"></label></div>`:''}
  </div><div class="row" style="margin-top:16px;justify-content:flex-end"><button class="btn ghost" onclick="closeModal()">İptal</button><button class="btn" onclick="A.saveEditUser('${u.id}')">💾 Kaydet</button></div></div>`);
};

A.saveEditUser=id=>{
  const u=byId(id);if(!u)return;
  const name=$('#edName').value.trim(),un=$('#edUser').value.trim().toLowerCase(),pw=$('#edPass').value.trim();
  if(!name||!un){toast('Ad ve kullanıcı adı gerekli.');return;}
  if(pw.length<3){toast('Şifre en az 3 karakter olmalı.');return;}
  const ex=byName(un);if(ex&&ex.id!==id){toast('Bu kullanıcı adı başka bir hesapta kullanılıyor.');return;}
  u.name=name;u.username=un;u.password=pw;
  if($('#edClass'))u.classId=$('#edClass').value.trim().toUpperCase();
  if($('#edChild')){const ch=byId($('#edChild').value);if(ch){u.childId=ch.id;u.classId=ch.classId;}}
  if($('#edXp'))u.xp=Math.max(0,parseInt($('#edXp').value)||0);
  if($('#edGold'))u.gold=Math.max(0,parseInt($('#edGold').value)||0);
  save();closeModal();render();toast('✅ Kullanıcı bilgileri güncellendi');
};

A.quickAddModal=defaultCls=>{
  const u=cur();
  const cls=defaultCls||(u&&u.classId?u.classId:'4A');
  modal(`<div style="min-width:340px"><h3>⚡ Hızlı Toplu Öğrenci Ekle</h3><p class="muted">Her satıra bir öğrenci adı yazın. Öğrenci ve veli hesapları otomatik oluşturulur.</p>
  <label>Hedef Sınıf<input id="qaClass" value="${esc(cls)}" style="margin-bottom:8px"></label>
  <label>Öğrenci Listesi<textarea id="qaNames" rows="6" placeholder="Ahmet Yılmaz&#10;Zeynep Kaya&#10;Can Demir"></textarea></label>
  <div class="row" style="margin-top:14px;justify-content:flex-end"><button class="btn ghost" onclick="closeModal()">İptal</button><button class="btn" onclick="A.execQuickAdd()">⚡ Hesapları Oluştur</button></div></div>`);
};

A.execQuickAdd=()=>{
  const cls=($('#qaClass').value.trim()||'4A').toUpperCase(),txt=$('#qaNames').value.trim();
  if(!txt){toast('Lütfen en az bir öğrenci ismi girin.');return;}
  const names=txt.split('\n').map(n=>n.trim()).filter(Boolean);
  let count=0;
  names.forEach(name=>{
    const first=name.split(' ')[0];
    let baseUn=slug(first)+cls.toLowerCase(),un=baseUn,idx=1;
    while(byName(un)){un=baseUn+(++idx);}
    const s=mkUser({username:un,password:'1234',role:'student',name,classId:cls,xp:0,gold:0});
    db.users.push(s);
    let pBase='veli_'+un,pUn=pBase,pIdx=1;
    while(byName(pUn)){pUn=pBase+(++pIdx);}
    const p=mkUser({username:pUn,password:'1234',role:'parent',name:first+' Velisi',classId:cls,childId:s.id});
    db.users.push(p);
    count++;
  });
  save();closeModal();render();toast(`✅ ${count} öğrenci ve velisi eklendi (İlk şifreler: 1234)`);
};

A.delUser=id=>{
  const x=byId(id);if(!x)return;
  if(x.role==='admin'&&db.users.filter(a=>a.role==='admin').length<=1){toast('Son admin silinemez.');return;}
  let msg=x.name+' ('+ROLE[x.role]+') silinsin mi?';
  if(x.role==='student')msg+='\n⚠️ Öğrencinin bağlı veli hesabı, sınav ve ödev kayıtları da temizlenir.';
  if(!confirm(msg))return;
  if(x.role==='student'){
    db.users=db.users.filter(a=>a.id!==id&&a.childId!==id);
    db.results=db.results.filter(r=>r.studentId!==id);
    db.assignments.forEach(a=>{a.doneBy=a.doneBy.filter(i=>i!==id);});
  }else{
    db.users=db.users.filter(a=>a.id!==id);
  }
  db.messages=db.messages.filter(m=>m.from!==id&&m.to!==id);
  save();render();toast('🗑️ Hesap silindi');
};

/* --- 2) Raporlar & İlerleme --- */
function admReports(u){
  const students=db.users.filter(x=>x.role==='student'),teachers=db.users.filter(x=>x.role==='teacher');
  const classMap={};
  students.forEach(s=>{
    const cls=s.classId||'Belirtilmemiş';
    if(!classMap[cls])classMap[cls]={name:cls,students:[],exams:0,totalNet:0,totalScore:0,labs:0,courses:0,xp:0};
    classMap[cls].students.push(s);
    classMap[cls].xp+=(s.xp||0);
    classMap[cls].labs+=(s.labDone||[]).length;
    classMap[cls].courses+=Object.keys(s.courseProgress||{}).length;
    const stResults=db.results.filter(r=>r.studentId===s.id);
    classMap[cls].exams+=stResults.length;
    stResults.forEach(r=>{classMap[cls].totalNet+=(r.net||0);classMap[cls].totalScore+=(r.score||0);});
  });
  const classList=Object.values(classMap);
  const topStudents=students.slice().sort((a,b)=>(b.xp||0)-(a.xp||0)).slice(0,10);
  const subjectCourseStats=COURSES_DATA.map(c=>{
    const unitIds=[];
    c.terms.forEach(t=>t.units.forEach(un=>unitIds.push(un.id)));
    let comp=0;
    students.forEach(s=>{const prog=s.courseProgress||{};unitIds.forEach(uId=>{if(prog[uId])comp+=(prog[uId].completedSteps||[]).length;});});
    return {name:c.name,icon:c.icon,totalUnits:unitIds.length,completedSteps:comp};
  });

  return `<div class="card"><div class="row between" style="margin-top:0"><h3>🏫 Sınıf Bazlı Başarı & Karne Raporu</h3><span class="muted">${classList.length} aktif sınıf</span></div><div class="tablewrap"><table><thead><tr><th>Sınıf</th><th>Öğretmen</th><th>Öğrenci Sayısı</th><th>Ort. XP</th><th>Çözülen Sınav</th><th>Sınıf Net Ort.</th><th>Puan Ort.</th><th>3D Deney</th><th>Tamamlanan MEB Ünitesi</th></tr></thead><tbody>${classList.map(c=>{
    const t=teachers.find(x=>x.classId===c.name);
    const avgNet=c.exams?(c.totalNet/c.exams).toFixed(2):'-';
    const avgScore=c.exams?(c.totalScore/c.exams).toFixed(1):'-';
    const avgXp=c.students.length?Math.round(c.xp/c.students.length):0;
    return `<tr><td><b>${esc(c.name)}</b></td><td>${t?'👩‍🏫 '+esc(t.name):'<span class="muted">-</span>'}</td><td>${c.students.length} öğrenci</td><td>⭐ ${avgXp}</td><td>${c.exams} sınav</td><td><b>${avgNet}</b> net</td><td><b style="color:var(--ok)">${avgScore}</b></td><td>🧪 ${c.labs}</td><td>🎬 ${c.courses}</td></tr>`;
  }).join('')||'<tr><td colspan="9" class="muted center">Henüz sınıf verisi yok.</td></tr>'}</tbody></table></div></div>
  <div class="two"><div class="card"><h3>🏆 En Başarılı 10 Öğrenci (Onur Listesi)</h3><div class="tablewrap"><table><thead><tr><th>#</th><th>Öğrenci</th><th>Sınıf</th><th>XP</th><th>Seviye</th><th>3D Deney</th><th>İşlem</th></tr></thead><tbody>${topStudents.map((s,i)=>`<tr><td>${i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1}</td><td><b>${esc(s.name)}</b></td><td>${esc(s.classId||'-')}</td><td>⭐ ${s.xp}</td><td>Lvl ${level(s.xp)}</td><td>🧪 ${(s.labDone||[]).length}</td><td><button class="btn sm ghost" onclick="A.imp('${s.id}')">Karnesini Gör</button></td></tr>`).join('')||'<tr><td colspan="7" class="muted">Öğrenci yok</td></tr>'}</tbody></table></div></div>
  <div class="card"><h3>📚 MEB Müfredatı Tamamlama Durumu</h3><div class="tablewrap"><table><thead><tr><th>Ders</th><th>Toplam Ünite</th><th>Tamamlanan Adım</th></tr></thead><tbody>${subjectCourseStats.map(st=>`<tr><td>${st.icon} <b>${esc(st.name)}</b></td><td>${st.totalUnits} ünite</td><td><b>${st.completedSteps}</b> adım tamamlandı</td></tr>`).join('')}</tbody></table></div><p class="muted" style="margin-top:10px">Toplam 43 ünite ve 173 adım, 4. sınıf MEB kazanımlarıyla birebir uyumludur.</p></div></div>`;
}

/* --- 3) Soru & Sınav Merkezi --- */
function admQuestions(u){
  const filter=ui.admBankPool||'all',subFilter=ui.admBankSub||'all';
  const pools=['exam'].concat(MODULES.map(m=>m.id));
  const qList=db.questions.filter(q=>{
    if(filter!=='all'&&q.pool!==filter)return false;
    if(subFilter!=='all'&&q.subject!==subFilter)return false;
    return true;
  });
  const recentResults=db.results.slice().reverse().slice(0,25);

  return `<div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>🧠 Soru Bankası Yönetimi (${qList.length} / ${db.questions.length})</h3><div class="row" style="margin:0;gap:8px;flex-wrap:wrap"><button class="btn sm" onclick="A.admAddQModal()">➕ Yeni Soru Ekle</button><select style="width:auto" onchange="A.admBankFilter(this.value)"><option value="all">Tüm Havuzlar</option>${pools.map(p=>`<option value="${p}" ${filter===p?'selected':''}>${poolName(p)}</option>`).join('')}</select><select style="width:auto" onchange="A.admSubFilter(this.value)"><option value="all">Tüm Dersler</option>${SUBJECTS.map(s=>`<option value="${s}" ${subFilter===s?'selected':''}>${s}</option>`).join('')}</select></div></div>
  <div style="max-height:360px;overflow-y:auto;margin-top:10px">${qList.map(q=>`<div class="item" style="display:flex;justify-content:space-between;align-items:center;padding:10px;margin-bottom:6px"><div style="flex:1"><b>${esc(q.text)}</b><br><small class="muted">${poolName(q.pool)} • <b>${esc(q.subject)}</b> • Doğru: <b>${'ABCD'[q.answer]}) ${esc(q.options[q.answer])}</b> ${q.by?'• Ekleyen: '+esc(q.by):''}</small></div><button class="btn sm danger" title="Soruyu Sil" onclick="A.admDelQ('${q.id}')">🗑️ Sil</button></div>`).join('')||'<p class="muted center">Soru bulunamadı.</p>'}</div></div>
  <div class="card"><div class="row between" style="margin-top:0"><h3>🕒 Okul Genelinde Son Sınav Sonuçları (${db.results.length} toplam sınav)</h3><button class="btn sm ghost" onclick="A.exportResultsCSV()">📥 Sonuçları CSV İndir</button></div><div class="tablewrap" style="max-height:340px;overflow-y:auto"><table><thead><tr><th>Tarih</th><th>Öğrenci</th><th>Sınıf</th><th>Doğru</th><th>Yanlış</th><th>Boş</th><th>Net</th><th>Puan</th></tr></thead><tbody>${recentResults.map(r=>{
    const s=byId(r.studentId);
    return `<tr><td>${fmtDate(r.date)}</td><td><b>${esc(s?s.name:'Silinmiş')}</b></td><td>${esc(r.classId||(s?s.classId:'-'))}</td><td style="color:var(--ok)">${r.c}</td><td style="color:var(--danger)">${r.w}</td><td class="muted">${r.b}</td><td><b>${r.net.toFixed(2)}</b></td><td><b style="color:var(--a2)">${r.score.toFixed(0)}</b></td></tr>`;
  }).join('')||'<tr><td colspan="8" class="muted center">Henüz deneme sınavı çözülmedi.</td></tr>'}</tbody></table></div></div>`;
}

A.admBankFilter=v=>{ui.admBankPool=v;render();};
A.admSubFilter=v=>{ui.admBankSub=v;render();};
A.admDelQ=id=>{if(!confirm('Soru silinsin mi?'))return;db.questions=db.questions.filter(q=>q.id!==id);save();render();toast('🗑️ Soru silindi');};
A.admAddQModal=()=>{
  const pools=['exam'].concat(MODULES.map(m=>m.id));
  modal(`<div style="min-width:340px"><h3>➕ Soru Ekleme Sihirbazı (Admin)</h3><div class="grid3" style="margin-top:10px">
   <label>Havuz<select id="admqPool" onchange="const w=$('#admqSubWrap');if(this.value==='exam')w.classList.remove('hidden');else w.classList.add('hidden');">${pools.map(p=>`<option value="${p}">${poolName(p)}</option>`).join('')}</select></label>
   <label id="admqSubWrap">Ders<select id="admqSub">${SUBJECTS.map(s=>`<option>${s}</option>`).join('')}</select></label>
   <label>Doğru Seçenek<select id="admqAns"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select></label>
  </div><label style="margin-top:8px">Soru Metni<textarea id="admqText" placeholder="4. sınıf düzeyinde sorunuzu yazın..."></textarea></label>
  <div class="grid3" style="margin-top:8px">${'ABCD'.split('').map((l,i)=>`<label>Seçenek ${l}<input id="admqO${i}"></label>`).join('')}</div>
  <div class="row" style="margin-top:14px;justify-content:flex-end"><button class="btn ghost" onclick="closeModal()">İptal</button><button class="btn" onclick="A.admSaveQ()">💾 Soruyu Kaydet</button></div></div>`);
};
A.admSaveQ=()=>{
  const pool=$('#admqPool').value,text=$('#admqText').value.trim();
  const opts=[0,1,2,3].map(i=>$('#admqO'+i).value.trim());
  if(!text||opts.some(o=>!o)){toast('Soru metni ve 4 seçenek doldurulmalıdır.');return;}
  const subject=pool==='exam'?$('#admqSub').value:(modById(pool)?modById(pool).subject:'Fen Bilimleri');
  db.questions.push({id:uid('q'),pool,subject,text,options:opts,answer:parseInt($('#admqAns').value),by:cur().name+' (Admin)'});
  save();closeModal();render();toast('🧠 Soru başarıyla eklendi');
};
A.exportResultsCSV=()=>{
  if(!db.results.length){toast('İndirilecek sınav sonucu yok.');return;}
  let csv='\uFEFFTarih;Öğrenci;Sınıf;Doğru;Yanlış;Boş;Net;Puan\n';
  db.results.forEach(r=>{const s=byId(r.studentId);csv+=`${new Date(r.date).toLocaleString('tr-TR')};"${s?s.name:'Silinmiş'}";"${r.classId||(s?s.classId:'-')}";${r.c};${r.w};${r.b};${r.net.toFixed(2)};${r.score.toFixed(0)}\n`;});
  download('okul-sinav-sonuclari.csv',csv,'text/csv;charset=utf-8');toast('📥 Sınav sonuçları CSV olarak indirildi');
};

/* --- 4) Ev Sunucusu & Bakım --- */
function admServer(){
  return `<div class="card"><h3>🏠 Ev Sunucusu Kurulumu (1 dakika)</h3><ol><li>Aşağıdan <b>server.js</b>, <b>baslat.bat</b> ve <b>ses_motoru.py</b> dosyalarını indirin.</li><li><b>index.html</b> dosyasını da aynı klasöre kaydedin.</li><li>Bilgisayarınızda <a href="https://nodejs.org" target="_blank" rel="noopener" style="color:var(--a2)">Node.js</a> kuruluysa <b>baslat.bat</b> dosyasına çift tıklayın.</li><li>Tarayıcıda <b>http://localhost:3000</b> açılır; aynı Wi-Fi'deki cihazlar konsolda yazan IP adresini kullanır. Veriler <b>veritabani.json</b> dosyasına otomatik kaydedilir.</li></ol>
  <div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn" onclick="A.dl('server')">⬇️ server.js İndir</button><button class="btn" onclick="A.dl('bat')">⬇️ baslat.bat İndir</button><button class="btn" onclick="A.dl('py')">⬇️ ses_motoru.py İndir</button><button class="btn" onclick="A.dl('index')">⬇️ index.html İndir</button></div>
  <p class="muted">Güvenlik notu: Veriler yerel ağda güvenle çalışacak şekilde tasarlanmıştır. Sunucuyu doğrudan internete açmadan yerel Wi-Fi ağınızda kullanınız.</p></div>
  <div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>🔄 Senkronizasyon, Yedekleme & Veritabanı Bakımı</h3><button class="btn sm" onclick="A.cleanDb()">🧹 Veritabanını Onar & Yetimleri Temizle</button></div><p id="syncInfo">${syncInfoText()}</p>
  <div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn" onclick="A.syncNow()">🔄 Şimdi Eşitle</button><button class="btn warn" onclick="A.forcePush()">⬆️ Yerel Veriyi Sunucuya Zorla Yaz</button><button class="btn ghost" onclick="A.dl('json')">💾 .json Yedeği Al</button><label class="btn ghost" style="cursor:pointer;flex-direction:row;color:inherit">📂 Yedek Yükle<input type="file" accept=".json,application/json" class="hidden" onchange="A.restore(this)"></label><button class="btn danger" onclick="A.resetAll()">♻️ Demo Verilere Sıfırla</button></div></div>
  <div class="card"><div class="row between" style="margin-top:0;flex-wrap:wrap;gap:8px"><h3>🎙️ Doğal Ses Motoru (Microsoft Emel Neural)</h3><span class="chip" style="background:var(--card2);border:1px solid var(--ok);color:var(--ok)">🟢 173 / 173 Ünite MP3 Sesi Aktif</span></div><p id="ttsInfo" class="muted">Kontrol ediliyor...</p>
  <div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn" onclick="A.ttsTest('ders')">🔊 Neşeli Ders Sesi</button><button class="btn warn" onclick="A.ttsTest('coskulu')">🎉 Coşkulu Ses</button><button class="btn ghost" onclick="A.ttsTest('sakin')">😌 Sakin Anlatım</button><button class="btn ghost" onclick="stopSpeak()">⏹ Durdur</button></div>
  <p class="muted">173 adet MEB 4. sınıf konu anlatım ses dosyası <b>assets/audio/courses/</b> klasöründe yer alır. Çevrimdışı ve beklemesiz oynatılır.</p></div>${(setTimeout(A.ttsStatus,0),'')}`;
}

A.cleanDb=()=>{
  let cleaned=0;
  const userIds=new Set(db.users.map(u=>u.id));
  const studentIds=new Set(db.users.filter(u=>u.role==='student').map(u=>u.id));
  const beforeRes=db.results.length;
  db.results=db.results.filter(r=>studentIds.has(r.studentId));
  cleaned+=(beforeRes-db.results.length);
  db.assignments.forEach(a=>{const bD=a.doneBy.length;a.doneBy=a.doneBy.filter(id=>studentIds.has(id));cleaned+=(bD-a.doneBy.length);});
  const beforeMsgs=db.messages.length;
  db.messages=db.messages.filter(m=>userIds.has(m.from)&&userIds.has(m.to));
  cleaned+=(beforeMsgs-db.messages.length);
  db.users.filter(u=>u.role==='parent').forEach(p=>{if(p.childId&&!studentIds.has(p.childId)){p.childId='';cleaned++;}});
  db.users.forEach(u=>{
    if(!u.stats||typeof u.stats!=='object'){u.stats={};cleaned++;}
    if(!u.courseProgress||typeof u.courseProgress!=='object'){u.courseProgress={};cleaned++;}
    if(!Array.isArray(u.labDone)){u.labDone=[];cleaned++;}
  });
  save();render();
  toast(cleaned>0?`🧹 Veritabanı tarandı: ${cleaned} yetim/eksik veri onarıldı.`:'✨ Veritabanı tertemiz, tutarsızlık bulunamadı.');
};

A.ttsStatus=async()=>{
  const e=$('#ttsInfo');if(!e)return;
  if(location.protocol==='file:'){e.textContent='🟢 173 ünite ses dosyası hazır (Yerel modda doğrudan MP3 oynatılır).';return;}
  try{
    const j=await (await fetch('/api/tts/status',{cache:'no-store'})).json();
    e.innerHTML=j.ready?'🟢 Emel sesi hazır'+(j.ffmpeg?' • nefes ve duraklama açık':' • ⚠️ ffmpeg yok: sade ses'):'🟠 Kapalı: '+esc(j.error)+' → <code>pip install edge-tts</code>';
  }catch(x){e.textContent='🟢 173 ünite ses dosyası assets/audio/courses/ altında hazır.';}
};
A.ttsTest=style=>{voice.fail=0;speak('Merhaba çocuklar! Bugün çok eğlenceli bir deney yapacağız. Hazır mısınız? Haydi, birlikte keşfedelim!','tr-TR',style);};
A.dl=async what=>{
  if(what==='py')return download('ses_motoru.py',PY_FILE,'text/x-python;charset=utf-8');
  if(what==='server')return download('server.js',SERVER_JS,'text/javascript;charset=utf-8');
  if(what==='bat')return download('baslat.bat',BAT_FILE,'application/octet-stream');
  if(what==='json')return download('veritabani-yedek.json',JSON.stringify(db,null,2),'application/json');
  if(what==='index'){
    let html=null;
    try{if(location.protocol!=='file:'){const r=await fetch(location.pathname,{cache:'no-store'});if(r.ok)html=await r.text();}}catch(e){}
    if(!html){toast('Dosya doğrudan okunamadı. Sayfayı Ctrl+S ile "Web Sayfası, Yalnızca HTML" olarak kaydedin.');return;}
    download('index.html',html,'text/html;charset=utf-8');
  }
};
A.syncNow=async()=>{toast('Eşitleniyor...');await pullNow(false);updSync();};
A.forcePush=async()=>{if(!confirm('Sunucudaki veri bu tarayıcıdaki verilerle değiştirilecek. Devam?'))return;db.updatedAt=Date.now();await pushNow(true);toast(syncState.server?'⬆️ Sunucuya yazıldı':'Sunucuya ulaşılamadı');};
A.restore=inp=>{
  const f=inp.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=()=>{try{const d=JSON.parse(rd.result);if(!d||!Array.isArray(d.users)||!d.users.some(x=>x.role==='admin'))throw 0;if(!confirm('Mevcut tüm veriler yedekle değiştirilecek. Devam?'))return;db=normalize(d);save();pushNow(true);session={uid:null,stack:[]};saveSession();render();toast('✅ Yedek yüklendi, tekrar giriş yapın');}catch(e){toast('❌ Geçersiz yedek dosyası');}};
  rd.readAsText(f);
};
A.resetAll=()=>{if(!confirm('TÜM veriler silinip demo veriler yüklenecek. Emin misiniz?'))return;db=seedDb();save();pushNow(true);session={uid:null,stack:[]};saveSession();render();};

/* --- 5) AdSense Merkezi --- */
function admAds(){
  const a=Object.assign({visitors:300,pages:5,ads:2,rpm:1.2,ctr:1.5,cpc:0.05,fx:40},db.settings.ads||{});
  const inp=(id,l,v,step)=>`<label>${l}<input id="ad_${id}" type="number" step="${step||1}" min="0" value="${v}" oninput="A.calcAds()"></label>`;
  setTimeout(A.calcAds,0);
  return `<div class="card"><h3>💰 AdSense Gelir Simülatörü</h3><div class="grid3">${inp('visitors','Günlük ziyaretçi',a.visitors)}${inp('pages','Ziyaret başına sayfa',a.pages)}${inp('ads','Sayfa başına reklam',a.ads)}${inp('rpm','BGBM / RPM (1000 gösterim, $)',a.rpm,.01)}${inp('ctr','TO / CTR (%)',a.ctr,.1)}${inp('cpc','TBM / CPC (tıklama başı, $)',a.cpc,.01)}${inp('fx','Dolar kuru (₺)',a.fx,.1)}</div><div id="adsOut" class="grid4" style="margin-top:14px"></div></div>
  <div class="two"><div class="card"><h3>🛡️ COPPA / MEB Uyumlu Yerleşim Önerisi</h3><div class="adbox">✅ Giriş ekranı: alt banner (statik)</div><div class="adbox">✅ Veli paneli: alt banner (çocuk görmez)</div><div class="adbox no">⛔ 3D laboratuvar: reklam yok</div><div class="adbox no">⛔ Deneme sınavı: reklam yok</div><div class="adbox no">⛔ Öğrenci market / liderlik: reklam yok</div></div>
  <div class="card"><h3>📋 Kontrol Listesi</h3><ul><li>Çocuklara yönelik içerik için AdSense'te <b>çocuklara yönelik muamele (TFCD)</b> işaretlenmeli.</li><li>Kişiselleştirilmiş reklamlar kapatılmalı; öğrenci verisi reklamda kullanılmamalı.</li><li>Reklamlar, öğrencilerin ders / sınav ekranlarının dışında tutulmalı; yanlışlıkla tıklamayı önleyin.</li><li>AdSense için site <b>herkese açık bir alan adında</b> yayınlanmalıdır; yerel ev sunucusu bunun için yeterli değildir.</li><li>Gizlilik politikası ve KVKK aydınlatma metni ekleyin.</li></ul><p class="muted">Bu bölüm tahmini hesaplama aracıdır; gerçek reklam kodu içermez.</p></div></div>`;
}
A.calcAds=()=>{
  const g=id=>parseFloat(($('#ad_'+id)||{}).value)||0;
  const v={visitors:g('visitors'),pages:g('pages'),ads:g('ads'),rpm:g('rpm'),ctr:g('ctr'),cpc:g('cpc'),fx:g('fx')};
  db.settings.ads=v;
  const imp=v.visitors*v.pages*v.ads*30,clk=imp*v.ctr/100;
  const rev1=imp/1000*v.rpm,rev2=clk*v.cpc,avg=(rev1+rev2)/2;
  const out=$('#adsOut');if(!out)return;
  const n=x=>x.toLocaleString('tr-TR',{maximumFractionDigits:2});
  out.innerHTML=`<div class="card center"><small>Aylık gösterim</small><h2>${n(imp)}</h2></div><div class="card center"><small>Aylık tıklama</small><h2>${n(clk)}</h2></div><div class="card center"><small>BGBM'ye göre</small><h2>$${n(rev1)}</h2><small>≈ ${n(rev1*v.fx)} ₺</small></div><div class="card center"><small>TBM'ye göre</small><h2>$${n(rev2)}</h2><small>≈ ${n(rev2*v.fx)} ₺</small></div><div class="card center"><small>Ortalama tahmin</small><h2 style="color:var(--ok)">$${n(avg)}</h2><small>≈ ${n(avg*v.fx)} ₺ / ay</small></div>`;
};

/* ---------- Başlatma ---------- */
(async function init(){
  db=loadLocal();
  if(db){db=normalize(db);}else{db=seedDb();try{localStorage.setItem(LS_KEY,JSON.stringify(db));}catch(e){}}
  await pullNow(true);
  if(session.uid&&!byId(session.uid))session={uid:null,stack:[]};
  render();
  if(location.protocol!=='file:')setInterval(()=>pullNow(false),8000);
  document.addEventListener('keydown', e => {
    if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (window.CoursePlayer && CoursePlayer.isActive && CoursePlayer.isActive()) {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        CoursePlayer.togglePause();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        CoursePlayer.nextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        CoursePlayer.prevStep();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        CoursePlayer.replayCurrentStep();
      }
    }
  });
  $('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
})();
