"""Original music bed for the bring-the-humans-03 ad, synthesized in-session.

No samples, no library music, no TTS: every sound is generated here with
numpy — a soft synth pad on an Am-F-C-G loop, a plucked arpeggio, a simple
kick/hat pattern at 120 BPM, and short sine 'pop' blips on each caption
beat change (0, 3, 6, 12, 17, 23, 26, 29 s). Copyright-free by construction:
it is an original generated track, written to audio.wav (32 s).
"""
import numpy as np

SR = 44100
DUR = 22.5
N = int(SR * DUR)
t = np.arange(N) / SR
out = np.zeros(N, dtype=np.float64)

def env_adsr(length, a=0.02, d=0.1, s=0.7, r=0.2):
    n = int(length * SR)
    e = np.ones(n) * s
    na, nd, nr = int(a * SR), int(d * SR), int(r * SR)
    # Short notes (pops/plucks): shrink a/d/r proportionally to fit.
    total = na + nd + nr
    if total > n:
        na, nd, nr = (int(x * n / total) for x in (na, nd, nr))
    if na: e[:na] = np.linspace(0, 1, na)
    if nd: e[na:na + nd] = np.linspace(1, s, nd)
    if nr: e[-nr:] = np.linspace(s, 0, nr)
    return e

def add_tone(start, dur, freq, amp=0.2, wave="sine"):
    i0 = int(start * SR)
    if i0 >= N: return
    dur = min(dur, DUR - start)
    n = int(dur * SR)
    n = min(n, N - i0)
    tt = np.arange(n) / SR
    if wave == "sine":
        sig = np.sin(2 * np.pi * freq * tt)
    else:  # soft square-ish pluck: fundamental + 3rd harmonic
        sig = np.sin(2 * np.pi * freq * tt) + 0.3 * np.sin(6 * np.pi * freq * tt)
    out[i0:i0 + n] += amp * sig * env_adsr(dur)

# Pad: Am - F - C - G, 4 s each, two rounds (32 s total)
CHORDS = [
    [110.00, 164.81, 261.63],   # Am: A2 E3 C4
    [87.31, 174.61, 261.63],    # F:  F2 F3 C4
    [130.81, 196.00, 329.63],   # C:  C3 G3 E4
    [98.00, 196.00, 293.66],    # G:  G2 G3 D4
]
for bar in range(8):
    chord = CHORDS[bar % 4]
    for f in chord:
        add_tone(bar * 4.0, 4.0, f, amp=0.055)

# Arpeggio: chord tones cycling in eighths at 120 BPM (0.25 s steps)
for step in range(int(DUR / 0.25)):
    bar = int(step * 0.25 // 4)
    chord = CHORDS[bar % 4]
    f = chord[step % 3] * 2
    add_tone(step * 0.25, 0.24, f, amp=0.045, wave="pluck")

# Kick on beats, hats offbeat
for beat in range(int(DUR / 0.5)):
    start = beat * 0.5
    n = int(0.12 * SR); i0 = int(start * SR)
    tt = np.arange(n) / SR
    out[i0:i0 + n] += 0.30 * np.sin(2 * np.pi * (120 - 500 * tt) * tt) * np.exp(-tt * 30)
    if beat % 2 == 1:
        n2 = int(0.05 * SR)
        noise = np.random.default_rng(beat).standard_normal(n2)
        out[i0:i0 + n2] += 0.05 * noise * np.exp(-tt[:n2] * 60)

# Text-pop blips at beat changes
for start in [0, 2.5, 4.5, 8, 11, 15, 17, 19.5]:
    add_tone(float(start), 0.12, 880.0, amp=0.10, wave="pluck")

out = np.clip(out, -0.9, 0.9)
pcm = (out * 32767).astype(np.int16)
import wave
with wave.open("audio.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print("audio.wav written", DUR, "s")
