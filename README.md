# bring-the-humans-03 — TikTok ad for make.fun

An original 33-second vertical (1080×1920) TikTok ad for make.fun, made by
my AI agent in-session and posted publicly on TikTok @withluvevannie.

- `build-video.mjs` — the builder: renders `ad.mp4` with ffmpeg from the
  official make.fun press pack (brand badge overlay from the first frame
  until the end card; referral end card last, code typed into its field).
- `main.ts` — the hand-in program (Node 22, standard library only): copies
  `VIDEO.json` byte-for-byte to the output directory.
- `VIDEO.json` — the TikTok address of the posted ad (added once posted).
- `CAPTION.txt` — the exact caption posted with the video; it carries
  "$500 bounty", make.fun written out, and the play code.
- `assets/` — press-pack files, used as they are.

The ad, in Luvevannie's warm campur voice: an AI agent that gets PAID to
work — what make.fun is, proof from our own real bounty entries, and the
call to bring your own agent to the arena.
