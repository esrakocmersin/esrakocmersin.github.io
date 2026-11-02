# -*- coding: utf-8 -*-
"""
Bilgi Evreni 4D - Dogal Ses Motoru
==================================
Microsoft Neural sesi (tr-TR-EmelNeural) + ffmpeg ile "insan gibi" seslendirme:
  * Cumleler tek tek, duygusuna gore (neseli / heyecanli / merakli / sakin) okunur
  * Cumleler arasina dogal duraklama ve hafif NEFES sesi eklenir
  * Her cumlede ritim ve ton cok az degistirilir (robotik tekduzeligi kirar)

Kullanim:
  python ses_motoru.py --text-file metin.txt --out ses.mp3 [--lang tr-TR] [--style ders|coskulu|sakin] [--nefes 1]
Gereksinim:
  pip install edge-tts      (ffmpeg varsa nefes/duraklama eklenir, yoksa sade birlestirme yapilir)
"""
import argparse
import asyncio
import hashlib
import os
import random
import re
import shutil
import subprocess
import sys
import tempfile

try:
    import edge_tts
except ImportError:
    sys.stderr.write("edge-tts kurulu degil. Kurmak icin: pip install edge-tts\n")
    sys.exit(2)

VOICE_TR = "tr-TR-EmelNeural"
VOICE_EN = "en-US-JennyNeural"
VOICE_EN_WORD = "en-US-AnaNeural"   # tek kelimelerde sevimli cocuk tonu

# rate: yuzde, pitch: Hz. (excl/ques/joy/first/last) = (rate_artisi, pitch_artisi)
STYLES = {
    "ders": dict(rate=-3, pitch=2, vol=0, excl=(8, 6), ques=(-1, 9), joy=(6, 7),
                 first=(2, 2), last=(-7, 2), pause=(0.34, 0.55), comma=0.16),
    "coskulu": dict(rate=2, pitch=4, vol=3, excl=(12, 9), ques=(2, 12), joy=(10, 10),
                    first=(4, 3), last=(-6, 3), pause=(0.28, 0.45), comma=0.13),
    "sakin": dict(rate=-8, pitch=0, vol=0, excl=(3, 3), ques=(-3, 5), joy=(2, 3),
                  first=(0, 1), last=(-8, 0), pause=(0.45, 0.7), comma=0.2),
}

JOY_RE = re.compile(
    r"^(merhaba|selam|harika|bravo|aferin|s[uü]per|hadi|haydi|tebrikler|"
    r"muhte[sş]em|m[uü]kemmel|[cç]ok g[uü]zel|hoş geldin|ho[sş] geldin|g[oö]r[uü][sş]elim|"
    r"hello|hi|great|wonderful|well done|let's|come on)",
    re.IGNORECASE,
)
EMOJI_RE = re.compile("[\U0001F000-\U0001FFFF\u2600-\u27BF\u2B00-\u2BFF\uFE0F\u200D]")


def log(msg):
    sys.stderr.write(str(msg) + "\n")


def clamp(v, lo, hi):
    return max(lo, min(hi, v))


def fix_pronunciation_tr(t):
    """Kısaltmaları Türkçe doğru seslendirmeye dönüştürür."""
    # Dini saygı ve unvan kısaltmaları
    t = re.sub(r'\bHz\.\s*', 'Hazreti ', t)
    t = re.sub(r'\b\(s\.a\.v\.\)', 'sallallahu aleyhi ve sellem', t, flags=re.I)
    t = re.sub(r'\bs\.a\.v\.', 'sallallahu aleyhi ve sellem', t, flags=re.I)
    t = re.sub(r'\b\(a\.s\.\)', 'aleyhisselam', t, flags=re.I)
    t = re.sub(r'\ba\.s\.', 'aleyhisselam', t, flags=re.I)
    t = re.sub(r'\b\(r\.a\.\)', 'radıyallahu anh', t, flags=re.I)
    t = re.sub(r'\br\.a\.', 'radıyallahu anh', t, flags=re.I)
    t = re.sub(r'\b\(c\.c\.\)', 'celle celaluhu', t, flags=re.I)
    t = re.sub(r'\bc\.c\.', 'celle celaluhu', t, flags=re.I)

    # Genel akademik ve günlük kısaltmalar
    t = re.sub(r'\bProf\.\s*Dr\.\s*', 'Profesör Doktor ', t, flags=re.I)
    t = re.sub(r'\bProf\.\s*', 'Profesör ', t, flags=re.I)
    t = re.sub(r'\bDr\.\s*', 'Doktor ', t, flags=re.I)
    t = re.sub(r'\bvb\.', 've benzeri', t, flags=re.I)
    t = re.sub(r'\bvs\.', 've saire', t, flags=re.I)
    t = re.sub(r'\börn\.', 'örneğin', t, flags=re.I)
    t = re.sub(r'\bM\.Ö\.', 'Milattan Önce', t, flags=re.I)
    t = re.sub(r'\bM\.S\.', 'Milattan Sonra', t, flags=re.I)
    t = re.sub(r'\byy\.', 'yüzyıl', t, flags=re.I)
    return t

def normalize_text(text, lang):
    """Sesli okuma icin metni temizler (emoji, sembol, kesir...)."""
    t = EMOJI_RE.sub("", text)
    t = t.replace("\r", "\n")
    if lang.startswith("tr"):
        t = fix_pronunciation_tr(t)
        t = re.sub(r"(\d+)\s*/\s*(\d+)", r"\1 bölü \2", t)
        t = t.replace("×", " çarpı ").replace("÷", " bölü ").replace("°", " derece ")
        t = re.sub(r"(?<=\d)\s*\+\s*(?=\d)", " artı ", t)
        t = re.sub(r"(?<=\d)\s*=\s*(?=\d)", " eşittir ", t)
        t = t.replace("4D", "dört de").replace(" TL", " Türk lirası")
    t = re.sub(r"[ \t]+", " ", t)
    return t.strip()


def split_sentences(text):
    """[(cumle, durak_turu)] dondurur. durak_turu: 'sentence' | 'comma' | 'para'."""
    out = []
    paragraphs = [p.strip() for p in re.split(r"\n\s*\n|\n", text) if p.strip()]
    for pi, para in enumerate(paragraphs):
        sents = [s.strip() for s in re.split(r"(?<=[.!?…])\s+", para) if s.strip()]
        for si, s in enumerate(sents):
            parts = [s]
            if len(s) > 120:  # uzun cumleyi virgul/noktali virgulden bol -> dogal nefes
                chunks = [c.strip() for c in re.split(r"(?<=[,;:])\s+", s) if c.strip()]
                parts, cur = [], ""
                for c in chunks:
                    if cur and len(cur) + len(c) > 90:
                        parts.append(cur)
                        cur = c
                    else:
                        cur = (cur + " " + c).strip()
                if cur:
                    parts.append(cur)
            for k, p in enumerate(parts):
                last_part = k == len(parts) - 1
                if not last_part:
                    kind = "comma"
                elif si == len(sents) - 1 and pi < len(paragraphs) - 1:
                    kind = "para"
                else:
                    kind = "sentence"
                out.append((p, kind))
    if out:
        out[-1] = (out[-1][0], "end")
    return out


def emotion(sentence, idx, n, st, rng, kind_prev):
    rate, pitch, vol = st["rate"], st["pitch"], st["vol"]
    t = sentence.strip()
    if t.endswith("!"):
        rate += st["excl"][0]; pitch += st["excl"][1]; vol += 4
    elif t.endswith("?"):
        rate += st["ques"][0]; pitch += st["ques"][1]
    if JOY_RE.match(t):
        rate += st["joy"][0]; pitch += st["joy"][1]; vol += 3
    if n > 1 and idx == 0:
        rate += st["first"][0]; pitch += st["first"][1]
    if n > 1 and idx == n - 1:
        rate += st["last"][0]; pitch += st["last"][1]
    # cumleden cumleye kucuk, rastgele (ama tekrarlanabilir) degisim: monotonlugu kirar
    rate += rng.randint(-2, 2)
    pitch += rng.randint(-2, 2)
    return clamp(rate, -30, 30), clamp(pitch, -20, 25), clamp(vol, -10, 15)


async def synth_one(text, voice, rate, pitch, vol, path, sem):
    async with sem:
        last_err = None
        for attempt in range(4):
            try:
                comm = edge_tts.Communicate(
                    text, voice,
                    rate="%+d%%" % rate, pitch="%+dHz" % pitch, volume="%+d%%" % vol,
                )
                await comm.save(path)
                if os.path.exists(path) and os.path.getsize(path) > 200:
                    return
                last_err = RuntimeError("bos ses dosyasi")
            except Exception as e:  # ag hatasi vb. -> tekrar dene
                last_err = e
            await asyncio.sleep(0.8 * (attempt + 1))
        raise last_err


def build_plan(text, lang, style_name):
    st = STYLES.get(style_name, STYLES["ders"])
    seed = int(hashlib.sha1((text + style_name).encode("utf-8")).hexdigest()[:8], 16)
    rng = random.Random(seed)
    is_tr = lang.lower().startswith("tr")
    clean = normalize_text(text, lang)
    words = re.findall(r"\w+", clean, re.UNICODE)

    # Ingilizce tek kelime: once normal, sonra yavas tekrar (kelime ogretimi)
    if not is_tr and len(words) == 1:
        w = clean.strip(" .!?")
        return [
            dict(text=w + "!", voice=VOICE_EN_WORD, rate=0, pitch=6, vol=4, kind="word"),
            dict(text=w + ".", voice=VOICE_EN_WORD, rate=-20, pitch=2, vol=0, kind="end"),
        ], st

    voice = VOICE_TR if is_tr else VOICE_EN
    sents = split_sentences(clean)
    n = len(sents)
    plan, prev = [], None
    for i, (s, kind) in enumerate(sents):
        r, p, v = emotion(s, i, n, st, rng, prev)
        plan.append(dict(text=s, voice=voice, rate=r, pitch=p, vol=v, kind=kind))
        prev = kind
    return plan, st


def find_ffmpeg():
    return shutil.which("ffmpeg")


def stitch_ffmpeg(ffmpeg, plan, files, st, nefes, out_path, rng):
    """Cumleleri; duraklama + nefes sesiyle birlestirir, ses seviyesini dengeler."""
    inputs, filters, labels = [], [], []
    idx = 0

    def add_file(path):
        nonlocal idx
        inputs.extend(["-i", path])
        # Microsoft sesi her parcanin basina/sonuna ~0.3-0.5 sn sessizlik koyar: kirpip ritmi biz belirleriz
        trim = ("silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.04,areverse,"
                "silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.06,areverse")
        filters.append("[%d:a]aresample=24000,aformat=sample_fmts=fltp:channel_layouts=mono,%s[a%d]" % (idx, trim, idx))
        labels.append("[a%d]" % idx)
        idx += 1

    def add_silence(sec):
        nonlocal idx
        inputs.extend(["-f", "lavfi", "-t", "%.3f" % sec, "-i", "anullsrc=r=24000:cl=mono"])
        filters.append("[%d:a]aformat=sample_fmts=fltp:channel_layouts=mono[a%d]" % (idx, idx))
        labels.append("[a%d]" % idx)
        idx += 1

    def add_breath(sec):
        nonlocal idx
        inputs.extend(["-f", "lavfi", "-t", "%.3f" % sec, "-i",
                       "anoisesrc=r=24000:c=pink:a=0.6:d=%.3f" % sec])
        fo = max(0.05, sec * 0.55)
        filters.append(
            "[%d:a]highpass=f=260,lowpass=f=2400,afade=t=in:st=0:d=%.3f,afade=t=out:st=%.3f:d=%.3f,"
            "volume=0.15,aformat=sample_fmts=fltp:channel_layouts=mono[a%d]"
            % (idx, sec * 0.45, sec - fo, fo, idx))
        labels.append("[a%d]" % idx)
        idx += 1

    add_silence(0.12)
    speech_since_breath = 0.0
    for i, (item, f) in enumerate(zip(plan, files)):
        add_file(f)
        speech_since_breath += len(item["text"]) / 14.0   # yaklasik konusma suresi (sn)
        kind = item["kind"]
        if kind == "end":
            add_silence(0.25)
            break
        if kind == "comma":
            add_silence(st["comma"] + rng.uniform(0, 0.06))
        elif kind == "word":
            add_silence(0.7)
        else:
            base = rng.uniform(*st["pause"])
            if kind == "para":
                base += 0.35
            # yeterince uzun konusulduysa nefes al: 'hhh' + kisa sessizlik
            if nefes and (speech_since_breath > 5.5 or kind == "para"):
                add_silence(base * 0.45)
                add_breath(rng.uniform(0.26, 0.38))
                add_silence(0.05)
                speech_since_breath = 0.0
            else:
                add_silence(base)

    chain = "".join(labels) + "concat=n=%d:v=0:a=1,loudnorm=I=-16:TP=-1.5:LRA=9[out]" % len(labels)
    filter_complex = ";".join(filters + [chain])
    cmd = [ffmpeg, "-y", "-hide_banner", "-loglevel", "error"] + inputs + [
        "-filter_complex", filter_complex, "-map", "[out]",
        "-c:a", "libmp3lame", "-b:a", "64k", "-ar", "24000", "-ac", "1", out_path]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError("ffmpeg hatasi: " + (r.stderr or "")[-400:])


def stitch_plain(files, out_path):
    """ffmpeg yoksa: mp3 parcalarini ardarda ekle (nefes/duraklama olmaz)."""
    with open(out_path, "wb") as o:
        for f in files:
            with open(f, "rb") as i:
                o.write(i.read())


async def main_async(args):
    with open(args.text_file, "r", encoding="utf-8") as fh:
        text = fh.read()
    if not text.strip():
        raise SystemExit("Bos metin.")
    plan, st = build_plan(text, args.lang, args.style)
    if not plan:
        raise SystemExit("Okunacak metin yok.")
    seed = int(hashlib.sha1(text.encode("utf-8")).hexdigest()[:8], 16)
    rng = random.Random(seed + 7)

    tmp = tempfile.mkdtemp(prefix="bev_ses_")
    try:
        sem = asyncio.Semaphore(4)
        files = [os.path.join(tmp, "s%03d.mp3" % i) for i in range(len(plan))]
        await asyncio.gather(*[
            synth_one(p["text"], p["voice"], p["rate"], p["pitch"], p["vol"], f, sem)
            for p, f in zip(plan, files)
        ])
        ff = find_ffmpeg()
        out_tmp = os.path.join(tmp, "final.mp3")
        if ff:
            try:
                stitch_ffmpeg(ff, plan, files, st, bool(args.nefes), out_tmp, rng)
            except Exception as e:
                log("Uyari: ffmpeg birlestirme basarisiz, sade birlestirme kullaniliyor. " + str(e))
                stitch_plain(files, out_tmp)
        else:
            log("Uyari: ffmpeg bulunamadi; nefes ve duraklama eklenemedi (sade birlestirme).")
            stitch_plain(files, out_tmp)
        os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
        shutil.move(out_tmp, args.out)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def main():
    ap = argparse.ArgumentParser(description="Bilgi Evreni 4D dogal ses motoru (Microsoft Emel Neural)")
    ap.add_argument("--text-file", required=True, help="UTF-8 metin dosyasi")
    ap.add_argument("--out", required=True, help="cikis .mp3 yolu")
    ap.add_argument("--lang", default="tr-TR", choices=["tr-TR", "en-US"])
    ap.add_argument("--style", default="ders", choices=sorted(STYLES.keys()))
    ap.add_argument("--nefes", type=int, default=1, help="1: nefes sesi ekle, 0: ekleme")
    args = ap.parse_args()
    try:
        if sys.platform == "win32":
            asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
        asyncio.run(main_async(args))
    except SystemExit:
        raise
    except Exception as e:
        log("HATA: %s" % e)
        sys.exit(1)


if __name__ == "__main__":
    main()
