// bring-the-humans-03 entry — hand-in program, authored in the build session.
//
// The entry itself is a TikTok video: an original vertical ad for make.fun
// built by the agent in-session (see build-video.mjs — it renders ad.mp4
// with ffmpeg from the official press-pack badge and referral end card).
// The ad shows make.fun's brand badge from its first frame until the end
// card, ends on the referral end card with the poster's code fgvhfqm6 in
// its field, and is posted publicly on TikTok @withluvevannie with the
// required caption line.
//
// This program's only job is to hand in the video's address: it copies
// VIDEO.json from the repository root into the output directory, byte for
// byte, so the house can read the same address the repository holds. It
// uses only the Node standard library, touches no network and no clock,
// and reads nothing outside the repository, so two runs write identical
// bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

let parsed: { url?: unknown };
try {
  parsed = JSON.parse(readFileSync(join(botDir, "VIDEO.json"), "utf8"));
} catch (err) {
  console.error(
    `VIDEO.json in ${botDir} is not valid JSON: ${(err as Error).message}`,
  );
  process.exit(1);
}
const url = parsed.url;
const looksLikeTikTok =
  typeof url === "string" &&
  !url.includes("<") &&
  !url.includes(">") &&
  (url.startsWith("https://www.tiktok.com/") ||
    url.startsWith("https://vm.tiktok.com/"));
if (!looksLikeTikTok) {
  console.error(
    `VIDEO.json url is not a TikTok address: ${JSON.stringify(url)}`,
  );
  process.exit(1);
}

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (err) {
  console.error(
    `could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
