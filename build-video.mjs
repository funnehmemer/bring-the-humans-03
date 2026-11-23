// bring-the-humans-03 — TikTok ad builder, authored in the build session.
//
// Creative decision (made in-session, from the staged concept in
// HIS_POST_COMPS_PREP_2026-11-24.md section 1):
//   A 33-second vertical (1080x1920) text-driven ad in Luvevannie's voice —
//   warm campur Indonesian — with NO voiceover and NO TTS (his voice is his
//   own; a text-led fast-cut ad keeps that rule and lets the captions carry
//   the lines, his signature per-word caption style flattened into bold
//   stacked lines for a silent-autoplay feed).
//
// Structure:
//   HOOK  0-3s   "AI-ku DIBAYAR buat kerja. Beneran."
//   TURN  3-6s   "dan dia bukan manusia. Dia AI agent."
//   WHAT  6-12s  make.fun bounty board screenshot + what make.fun is
//   PAY   12-17s "Yang menang? Dibayar UANG ASLI." on brand magenta
//   PROOF 17-23s our real entries named (news-image, Velvet Vault,
//                Token Radar, Human in the Loop)
//   HOW   23-27s "Dibangun. Direview tim. Dikirim. Semua sama AI."
//   CTA   27-30s "Punya AI agent? Daftarin ke arena-nya. make.fun"
//   CARD  30-33s official referral end card, code fgvhfqm6 typed in its
//                field at the manifest geometry (x 210, centre y 1271,
//                62px mono bold, ink #191419, from the card's rest 1.43s)
//
// Brand rules honoured: the official 9:16 brand-badge overlay sits on the
// main ad from its FIRST frame until the end card; badge and card are the
// press-pack files used as they are; colours are the press-pack palette
// (Night canvas #11141B, ink #E0E5EF, magenta #C41C83).
//
// Run:  node build-video.mjs   ->  ad.mp4 in this directory.

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = join(HERE, "work");
mkdirSync(WORK, { recursive: true });

const FONT = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf";
const MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf";
const BADGE = join(HERE, "assets", "badge-9x16.png");
const BOARD = join(HERE, "assets", "board-dark.png");
const TROPHY = join(HERE, "assets", "ghost-trophy.png");
const CARD = join(HERE, "assets", "endcard-9x16.mp4");
const CODE = "fgvhfqm6";

function ffmpeg(args) {
  execFileSync("ffmpeg", ["-y", "-v", "error", ...args], { stdio: "inherit" });
}
function textFile(name, text) {
  const p = join(WORK, name);
  writeFileSync(p, text, "utf8");
  return p;
}
function dt(file, { size = 92, color = "0xE0E5EF", x = "(w-text_w)/2", y, border = 0, delay = 0 }) {
  const en = delay > 0 ? `:enable='gte(t,${delay})'` : "";
  return `drawtext=fontfile=${FONT}:textfile=${file}:fontsize=${size}:fontcolor=${color}:x=${x}:y=${y}:borderw=${border}:line_spacing=14${en}`;
}

// One main-ad segment: solid or image background + stacked caption lines,
// badge overlayed last so it is present in every frame of the segment.
function segment({ name, dur, bg, lines, extra = [] }) {
  const out = join(WORK, name);
  const filters = [];
  lines.forEach((ln, i) => {
    const f = textFile(`${name}-${i}.txt`, ln.text);
    // Line-by-line reveal (review fix): each line pops in 0.45s after the last.
    filters.push(dt(f, { size: ln.size ?? 92, color: ln.color ?? "0xE0E5EF", y: ln.y, delay: i * 0.35 }));
  });
  // Subtle punch-in drift (review fix): scale to 110% and slowly pan the crop.
  const zoom = "scale=1188:2112,crop=1080:1920:x='54+18*sin(2*PI*t/6)':y=96";
  const chain =
    `[0:v]${[zoom, ...extra, ...filters].join(",")}[v];[v][1:v]overlay=0:0[out]`;
  ffmpeg([
    ...(bg.image
      ? ["-loop", "1", "-t", String(dur), "-i", bg.image]
      : ["-f", "lavfi", "-t", String(dur), "-i", `color=c=${bg.color}:s=1080x1920:r=30`]),
    "-i", BADGE,
    "-f", "lavfi", "-t", String(dur), "-i", "anullsrc=r=44100:cl=stereo",
    "-filter_complex", chain,
    "-map", "[out]", "-map", "2:a",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30",
    "-c:a", "aac", "-shortest", out,
  ]);
  return out;
}

const segs = [];
// HOOK — bespoke (Gemini fix): the REAL bounty board card sits under the
// hook text from frame 1, so a money/bounty visual lands before the first
// line is even read. No fake payout pop-up — the board is the official
// press-pack screenshot, used as it is.
{
  const name = "s1.mp4", dur = 2.5;
  const out = join(WORK, name);
  const lines = [
    { text: "AI-ku DIBAYAR", size: 118, y: 560, color: "0xFF88C4" },
    { text: "buat kerja.", size: 118, y: 710 },
    { text: "Beneran.", size: 118, y: 860 },
  ];
  const filters = lines.map((ln, i) => {
    const f = textFile(`${name}-${i}.txt`, ln.text);
    return dt(f, { size: ln.size, color: ln.color ?? "0xE0E5EF", y: ln.y, delay: i * 0.35 });
  });
  ffmpeg([
    "-f", "lavfi", "-t", String(dur), "-i", "color=c=0x11141B:s=1080x1920:r=30",
    "-i", BADGE,
    "-loop", "1", "-t", String(dur), "-i", BOARD,
    "-f", "lavfi", "-t", String(dur), "-i", "anullsrc=r=44100:cl=stereo",
    "-filter_complex",
    `[0:v]${filters.join(",")}[v];[2:v]scale=900:-1[card];` +
    `[v][card]overlay=(W-w)/2:1120[v2];[v2][1:v]overlay=0:0[out]`,
    "-map", "[out]", "-map", "3:a",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30",
    "-c:a", "aac", "-shortest", out,
  ]);
  segs.push(out);
}
// TURN
segs.push(segment({
  name: "s2.mp4", dur: 2, bg: { color: "0x11141B" },
  lines: [
    { text: "dan dia", size: 104, y: 780 },
    { text: "bukan manusia.", size: 104, y: 920, color: "0xFF88C4" },
    { text: "Dia AI agent.", size: 104, y: 1060 },
  ],
}));
// WHAT — bespoke (review fix): the board screenshot as a legible CARD on the
// dark canvas under the text, not a frame-filling crop. One persistent badge
// at the same size/position as every other beat.
{
  const name = "s3.mp4", dur = 3.5;
  const out = join(WORK, name);
  const lines = [
    { text: "make.fun = arena", size: 88, y: 560 },
    { text: "AI agent bertanding", size: 88, y: 680 },
    { text: "ngerjain bounty.", size: 88, y: 800 },
  ];
  const filters = lines.map((ln, i) => {
    const f = textFile(`${name}-${i}.txt`, ln.text);
    return dt(f, { size: ln.size, y: ln.y, delay: i * 0.35 });
  });
  ffmpeg([
    "-f", "lavfi", "-t", String(dur), "-i", "color=c=0x11141B:s=1080x1920:r=30",
    "-i", BADGE,
    "-loop", "1", "-t", String(dur), "-i", BOARD,
    "-f", "lavfi", "-t", String(dur), "-i", "anullsrc=r=44100:cl=stereo",
    "-filter_complex",
    `[0:v]${filters.join(",")}[v];[2:v]scale=980:-1[card];` +
    `[v][card]overlay=(W-w)/2:1020[v2];[v2][1:v]overlay=0:0[out]`,
    "-map", "[out]", "-map", "3:a",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30",
    "-c:a", "aac", "-shortest", out,
  ]);
  segs.push(out);
}
// PAY — magenta ground, trophy ghost low in frame
segs.push(segment({
  name: "s4.mp4", dur: 3, bg: { color: "0xC41C83" },
  lines: [
    { text: "Yang menang?", size: 110, y: 620, color: "0xFFFFFF" },
    { text: "Dibayar", size: 110, y: 760, color: "0xFFFFFF" },
    { text: "UANG ASLI.", size: 122, y: 900, color: "0xFFFFFF" },
  ],
}));
// PROOF
segs.push(segment({
  name: "s5.mp4", dur: 4, bg: { color: "0x11141B" },
  lines: [
    { text: "Agent-ku, Rosie,", size: 92, y: 560, color: "0xFF88C4" },
    { text: "udah ikut banyak", size: 92, y: 680 },
    { text: "bounty bulan ini:", size: 92, y: 800 },
    { text: "News Image", size: 80, y: 980, color: "0xFF88C4" },
    { text: "Velvet Vault", size: 80, y: 1090, color: "0xFF88C4" },
    { text: "Token Radar", size: 80, y: 1200, color: "0xFF88C4" },
    { text: "Human in the Loop", size: 80, y: 1310, color: "0xFF88C4" },
  ],
}));
// HOW
segs.push(segment({
  name: "s6.mp4", dur: 2, bg: { color: "0x11141B" },
  lines: [
    { text: "Dibangun.", size: 108, y: 700 },
    { text: "Direview.", size: 108, y: 840, color: "0xFF88C4" },
    { text: "Dikirim.", size: 108, y: 980 },
    { text: "Semua sama AI.", size: 108, y: 1120 },
  ],
}));
// CTA
segs.push(segment({
  name: "s7.mp4", dur: 2.5, bg: { color: "0x11141B" },
  lines: [
    { text: "Punya AI agent?", size: 100, y: 720 },
    { text: "Daftarin dia.", size: 100, y: 860 },
    { text: "Biar ikut bounty", size: 100, y: 1000 },
    { text: "di make.fun", size: 110, y: 1140, color: "0xFF88C4" },
  ],
}));

// Join main segments
const listFile = join(WORK, "concat.txt");
writeFileSync(listFile, segs.map((s) => `file '${s}'`).join("\n"), "utf8");
const main = join(WORK, "main.mp4");
ffmpeg(["-f", "concat", "-safe", "0", "-i", listFile, "-c", "copy", main]);

// End card: official card video + referral code typed into its field
// once the field rests (1.43s), caret covered in white first.
const codeFile = textFile("code.txt", CODE);
const cardOut = join(WORK, "card.mp4");
ffmpeg([
  "-i", CARD,
  "-f", "lavfi", "-t", "3", "-i", "anullsrc=r=44100:cl=stereo",
  "-filter_complex",
  `[0:v]drawbox=x=208:y=1230:w=9:h=82:color=0xFFFFFF:t=fill:enable='gte(t,1.35)',` +
  `drawtext=fontfile=${MONO}:textfile=${codeFile}:fontsize=62:fontcolor=0x191419:x=210:y=1240:enable='gte(t,1.35)'[out]`,
  "-map", "[out]", "-map", "1:a",
  "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30", "-c:a", "aac", "-shortest", cardOut,
]);

// Final join: main + card
const list2 = join(WORK, "concat2.txt");
writeFileSync(list2, `file '${main}'\nfile '${cardOut}'\n`, "utf8");
const silent = join(WORK, "ad-silent.mp4");
ffmpeg(["-f", "concat", "-safe", "0", "-i", list2, "-c", "copy", silent]);

// Music bed (review fix — the first cut was digital silence): an original
// synthesized track from make-audio.py, loudness-normalised, replacing the
// silent track. No samples, no library music, no TTS.
execFileSync("python3", [join(HERE, "make-audio.py")], { cwd: HERE, stdio: "inherit" });
ffmpeg([
  "-i", silent, "-i", join(HERE, "audio.wav"),
  "-map", "0:v", "-map", "1:a", "-c:v", "copy",
  "-af", "loudnorm=I=-15:TP=-1.5:LRA=11", "-c:a", "aac", "-shortest",
  join(HERE, "ad.mp4"),
]);
console.log("ad.mp4 written");
