# TEAM MISSION CONTROL REVIEW — bring-the-humans-03 TikTok ad

- **Entry:** make.fun `bring-the-humans-03` ($500, ranked by real TikTok views only, top 20 share)
- **Deadline:** Wed 25 Nov 02:00 WIB
- **File reviewed:** `ad.mp4` — 33.02 s, 1080×1920, h264/aac (ffprobe-verified)
- **Review date:** Tue 24 Nov 2026 (WIB), coordinator: Rosie
- **Gate rule:** nothing is posted to TikTok Studio or submitted before this review. This review is that gate.

## SYNTHESIS VERDICT: **PASS-WITH-FIXES**

The current render must **NOT** be posted as-is. The brief-compliance spine is
sound (badge, end card, caption, originality, real proof entries), but four
independent seats unanimously returned FIX, and the coordinator's own probe
found a silent audio track. All fixes are re-render-level, well inside the
~25 h runway. After the fix re-render, only the changed beats need a fast
re-check (frames + audio probe) before posting.

---

## Seat availability (honest record)

| Seat | Route | Status |
|---|---|---|
| Gemini Pro (subscription, withluvevannie@gmail.com) | live browser | ❌ NOT REACHED — this review ran in a subagent with no live-browser tool (`browser.browse` unavailable; only search/text-fetch). Parent agent must run this seat in its own browser if a literal subscription verdict is required. |
| Gemini Plus (subscription, playcare52@gmail.com) | live browser | ❌ NOT REACHED — same blocker as above. |
| ChatGPT Go (subscription) | live browser | ❌ NOT REACHED — same blocker as above. |
| NibieRouter (Claude / GPT / Grok / Gemini gateway seats) | connector | ❌ FAILED — HTTP **402 Payment Required** on the first call (gemini-2.5-pro). Balance exhausted; top-up is Evannie's step. No Nibie seat responded. |
| DeepSeek V4 Pro | Agent Nala | ✅ RESPONDED — **FIX** |
| Gemini 4 Argon (Gemini-family) | Agent Nala | ✅ RESPONDED — **FIX** |
| Kimi K2.8 | Agent Nala | ✅ RESPONDED — **FIX** |
| GLM 5.3 | Agent Nala | ✅ RESPONDED — **FIX** |
| Manus | browser | ⏸️ NOT CALLED — doctrine: decisive tie-breaks only; the vote was unanimous, no tie to break. |

Every seat that responded received: the full structure, the exact caption,
the hard checklist from `HIS_POST_COMPS_PREP_2026-11-24.md` §1, and the
coordinator's faithful frame-by-frame description (frames viewed directly:
0.1 s, 9 s, 14.5 s, 20 s, 25 s, 28.5 s, 32.5 s + contact sheet).

---

## Per-seat verdicts

### DeepSeek V4 Pro (Nala) — FIX
- Static 5–6 s text cards = view-time killer under views-only ranking; add motion (word reveal, zoom, stamps), especially proof (17–23 s) and the 23–27 s beat.
- Frame 9 s: enlarged badge overlaps board UI ("1 of 3" pager covered), board text truncated — press-pack "used as-is" risk; use the board at native layout, badge in a reserved corner, make bounty text legible or cut the beat.
- "puluhan bounty" claim unsupported on screen (only 4 named) — soften to "beberapa bounty bulan ini" or add a count/proof.
- Hook: "Beneran." is a soft second beat; lead with a concrete paid outcome in ≤2 s; frame 0.1 s bottom half reads unfinished.
- Caption: no fixes needed ($500 bounty ✓, make.fun ✓, play code ✓); end card verified.

### Gemini 4 Argon (Nala, Gemini-family) — FIX
- Hook/retention MUST-FIX: static dark frame, empty lower half, no proof payoff in 0–3 s. Open with a 0.5–1 s proof visual, cut to line 2 by ~1.5 s.
- Frame 9 s readability MUST-FIX: restore badge to standard top-left, clean readable board crop, overlay to lower third, not over UI.
- Press-pack MUST-FIX: enlarging/repositioning the badge at 9 s may violate "used as-is" — one approved lockup, consistent size/position throughout.
- Claim MUST-FIX: "puluhan" backed by only 4 names — show proof of dozens or change wording.
- US-viewability MUST-VERIFY before submission (cannot be checked from frames).
- Audio MUST-FIX: silent text-led ad underperforms — add licensed/trending music + text-pop SFX (no TTS).
- Caption compliant; keep.

### Kimi K2.8 (Nala) — FIX
- Frame 9 s violates "press-pack as-is" (enlarged centred badge over official UI, cropped/illegible screenshot) — asset unmodified at native scale, overlay outside screenshot bounds.
- "puluhan bounty" unverifiable/false-claim risk — change to a provable count/wording or name more real entries.
- Hook: text-only, static for the full first 3 s — animate word-by-word, cut faster, or open on the most visual asset.
- Cards hold 5–6 s static — cut beats to 2–3 s or add typewriter/line-reveal/zoom so no frame is fully still.
- Nice-to-have: fill/crop empty lower halves; dim/blur board behind overlay; caption's "everything I create, made with love" vs "Made by my AI agent" voice nit (optional).

### GLM 5.3 (Nala) — FIX
- Claim risk: "puluhan" vs 4 cited entries — change to the verifiable number or confirm 10+ ("puluhan" strictly implies 20+).
- The 4 named entries must each be real and publicly checkable (they are our real entries — News Image, Velvet Vault, Token Radar, Human in the Loop — coordinator confirms).
- Badge persistence: present in all viewed frames ✓, but the 9 s re-scale breaks the impression of one persistent element — keep one continuous badge.
- Hook: generic + 6 s before any visual proof will tank swipe-through — flash payout/board inside 0–3 s.
- 9 s board beat cluttered; static cards throughout; consider merging 23–27 s beat to shorten runtime to ~28 s.
- Caption strong and compliant; end-card code correct.

### Coordinator (Rosie) — own verified findings
- ✅ **Badge from first frame:** frame 0.1 s shows the official badge (ghost + wordmark, magenta pill) top-left; present in every viewed frame through the CTA. End card replaces it at 30 s+, as the brief allows.
- ✅ **End card:** frame 32.5 s is the official magenta referral card; code in its field reads exactly **fgvhfqm6**, letter-for-letter.
- ✅ **Caption:** carries "$500 bounty", "make.fun" written out, and "Play code: fgvhfqm6"; includes the brief's carrier line verbatim.
- ✅ **What/why:** the ad explains make.fun (arena where AI agents compete on bounties for real money) and gives a join CTA. Original, in Luvevannie's campur voice. No VO/TTS — own-voice rule respected.
- 🔴 **AUDIO IS SILENT — verified, not suspected:** `ffmpeg volumedetect` on `ad.mp4` → mean_volume **−91.0 dB**, max_volume **−91.0 dB** (digital silence across all 33 s). A silent TikTok reads as broken and will crater the views this comp is ranked on. This is the single most damaging defect in the render.
- 🟠 **Board beat (frame 9 s):** badge is visibly larger and centred vs its top-left size/position in every other frame — an inconsistency a press-pack "used as-is" check could flag, and it covers board UI. Background board text is truncated/illegible; the white overlay line itself is readable.
- 🟡 **Safe-zone note (counterpoint to the seats):** text sitting in the upper two-thirds is partly *correct* — TikTok's own caption/UI covers the bottom ~25 %. The fix is motion and balance, not moving text down into the caption zone.
- 🟡 **Language:** the ad is Indonesian campur; the brief requires US-*viewability*, not English. Compliant — but views will come overwhelmingly from the account's Indonesian audience, which is the audience @withluvevannie actually has. No change required.

---

## EXACT FIX LIST (for the re-render)

### MUST-FIX before posting
1. **Add audio.** Bake a copyright-free music bed into the re-render (with light text-pop SFX on line reveals), **or** add a TikTok sound in TikTok Studio at post time. Verify the final file is not silent (volumedetect mean > −40 dB) and that any sound used is not region-restricted in the US. No TTS, no voiceover.
2. **Fix the board beat (6–12 s).** Badge back to the *same* top-left size/position as every other frame — one persistent badge, no mid-video re-scale. Re-crop the board so the visible portion is legible (or dim/blur the board behind the overlay line); do not cover the board's own UI with the badge.
3. **Animate the text beats / kill the static holds.** Word-by-word or line-by-line reveal + subtle punch-in on every card; no fully static 5–6 s holds, especially 0–6 s (hook), 17–23 s (proof) and 23–27 s. Bring a money/proof visual into the first 3 s if the re-render allows it without breaking the badge rule.
4. **Resolve the "puluhan bounty" claim.** Either (a) verify from our submission records that Rosie's entries this month demonstrably number in the dozens and keep it, or (b) change the line to a provable wording (exact count or "beberapa bounty bulan ini"). Do not post an unverified quantity claim next to "UANG ASLI".

### Pre-post checks (not render fixes)
5. Post publicly on @withluvevannie, confirm US-viewable, no paid promotion / no botted views (disqualifiers), video stays up until results.
6. Caption posted **exactly** as in `CAPTION.txt` (already compliant — do not "improve" the carrier line away).
7. After posting: add `VIDEO.json` with the TikTok URL to the repo before submitting; last submission before Wed 25 Nov 02:00 WIB is the final entry.

### NICE-TO-HAVE (optional, only if free in the same re-render)
8. Consider trimming total runtime toward ~28–30 s by tightening the 23–27 s beat.
9. Add a subtle background element (ghost mascot watermark) to balance the empty lower halves — keeping all text clear of TikTok's bottom UI zone.

---

## What does NOT need fixing
Badge presence from frame 1 · end card + code fgvhfqm6 · caption compliance ·
originality · the what-is-make.fun explanation · the CTA · the magenta beat
(frame 14.5 s — the cleanest frame in the ad) · no-TTS compliance.

**Next step:** fix re-render → fast re-check of changed frames + audio probe
by the coordinator → post via TikTok Studio (Evannie's step) → VIDEO.json →
submit before Wed 25 Nov 02:00 WIB.

---

## FIX ROUND (Rosie, 2026-11-24 ~01:20 WIB) — all MUST-FIX items addressed, re-rendered v2

1. **Audio:** original synthesized music bed added (make-audio.py — Am-F-C-G pad + pluck arpeggio + 120 BPM kick/hat + pops at beat changes; no samples, no TTS). Verified: volumedetect mean **-14.8 dB** / max 0.0 dB (was -91 dB silence). Loudnorm -15 LUFS in mux.
2. **Board beat:** rebuilt bespoke — board screenshot is now a legible card (980px wide) on the dark canvas under the text; the single persistent badge is identical in size/position to every other beat (verified frame 9s).
3. **Static holds / hook:** line-by-line reveal (0.45s stagger) on every beat + subtle 110% punch-in pan; total tightened 33s -> 32s (23-27s beat now 3s).
4. **Claim:** "puluhan bounty" -> "udah ikut banyak bounty bulan ini" (provable wording; verified frame 20s).

Re-verified frames: 0.2s (badge + first line), 9s (board card), 20s (proof), 31.5s (end card, code fgvhfqm6). Duration 32.000s, 1080x1920.
Remaining gate: subscription-seat review (Gemini Pro/Plus + ChatGPT Go) of v2, run by Rosie in the main session.

## Subscription seat — ChatGPT Go (2026-11-24 01:15 WIB): FIX
1. Caption: add actual bounty URL + label play code unambiguously. [Rosie note: carrier line already contains make.fun/bounty/bring-the-humans-03 and "Play code: fgvhfqm6" — partially already satisfied; label can be strengthened.]
2. Proof beat: names alone weak for cold viewers — show real thumbnails/outputs; don't imply wins/earnings unverified.
3. Payment claim: keep accurate — don't imply every participant is paid.
4. CTA: make concrete — "Punya AI agent? Daftarin. Biar dia ikut bounty di make.fun."
5. End card: verify unmodified + code in field + readable hold. [Already verified by frames.]
Hook: strong concept, wants first 1-2s visually punchier with a money/bounty visual + immediate movement.

## Subscription seat — Gemini (2026-11-24 01:15 WIB): FIX
1. Cut 32s -> ~15-18s: text-only, slow beats tank retention in a views-only contest.
2. Proof: 4 titles without results = fluff; "Direview tim... Semua sama AI" reads contradictory. Suggests "Dibangun, dites, dan dikirim — semua sama AI."
3. Pattern interrupt 0-3s: money visual behind hook (live bounty scroll / payout pop-up). [Rosie: fake payout pop-up REJECTED — fabrication, doctrine. Real board screenshot used instead.]
4. Caption: match video language (Indonesian framing), keep required elements intact.
Hook: premise solid, needs immediate money cue + faster pacing.

## SYNTHESIS v3 (Rosie, coordinator): FIX ROUND 2
Convergent across ALL seats: pacing + hook visual + proof/CTA concreteness. v3 = ~22.5s tight cut, real board visual in hook beat from frame 1, concrete CTA ("Daftarin dia. Biar ikut bounty di make.fun"), "Dibangun. Direview. Dikirim." (drop "tim"), caption gets an Indonesian lead line while the required carrier line + play code stay verbatim. ChatGPT caption-URL point: already satisfied (carrier line holds the bounty URL; label strengthened to "Play code / kode referral").

## FIX ROUND 2 -> v3 (Rosie, 2026-11-24 ~01:24 WIB) — VERIFIED
- Runtime 32s -> **22.5s** (beats 2.5/2/3.5/3/4/2/2.5 + 3s card); reveal stagger 0.35s.
- Hook: real board card (official screenshot, $1,325 bounty visible) under hook text from frame 1 — money visual without fabrication.
- Proof/How: "Dibangun. Direview. Dikirim. Semua sama AI." (dropped "tim").
- CTA concrete: "Punya AI agent? Daftarin dia. Biar ikut bounty di make.fun".
- Caption: Indonesian lead line added; carrier line + "Play code / kode referral: fgvhfqm6" intact.
- Verified: duration 22.500s, audio mean -14.8 dB, frames 0.2/6/13/21.8s (badge, board, proof, end card fgvhfqm6).

## RE-CHECK v3 — SUBSCRIPTION SEATS (2026-11-24 01:19-01:20 WIB)
- ChatGPT Go: **PASS** — "No remaining required changes... Ready to submit."
- Gemini: **PASS**.
GATE CLEARED. Next: kit download, TikTok Studio post (Evannie's step per standing TikTok-manual rule), VIDEO.json, submit, verify zero failed checks.

## PLAY CODE VERIFIED (Rosie, 2026-11-24 ~01:27 WIB) — CAPTION CORRECTED
GET /api/competitions/bring-the-humans-03/play-code (X-API-Key) -> code **makefun-dingo-bobcat-jukebox** (n=0 of 4). This is the PLAY code; fgvhfqm6 is the REFERRAL code (CLI referrals confirms it) and stays on the end card only. CAPTION.txt updated: carries "$500 bounty" + make.fun + play code makefun-dingo-bobcat-jukebox + referral fgvhfqm6 labelled as referral. The prep's warning ("confirm the in-app play code matches") caught a real error — the first caption draft would have failed the play-code element.
Kit downloaded: ~/workspace/makefun/bring-the-humans-03-kitdl/ — starter main.ts pattern matches our main.ts (byte-copy VIDEO.json); starter VIDEO.json placeholder format {"url": "https://www.tiktok.com/@<handle>/video/<id>"}.
