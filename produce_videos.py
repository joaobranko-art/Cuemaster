#!/usr/bin/env python3
"""
Martifer Metal - Narrated Video Production
Generates English and Arabic narrated versions with a modern Middle Eastern soundtrack.
Uses espeak-ng for TTS and numpy for soundtrack synthesis.
"""

import subprocess
import os
import struct
import numpy as np
from pydub import AudioSegment
from pydub.effects import low_pass_filter, high_pass_filter

OUTPUT_DIR = "/home/user/Cuemaster/output"
VIDEO_SRC = "/root/.claude/uploads/93e94378-1a07-5776-af63-44a1c0043027/475c170b-MARTIFER20METAL20get.gt.mp4"
DURATION = 330  # seconds
SR = 44100

os.makedirs(OUTPUT_DIR, exist_ok=True)

SEGMENTS = [
    (0, 18,
     "Where vision meets steel. Martifer Metal. Engineering the structures that define skylines and connect nations.",
     "حيث تلتقي الرؤية بالفولاذ. مارتيفر ميتال. نهندس الهياكل التي تحدد الأفق وتربط الأمم."),

    (20, 38,
     "Inside our world-class manufacturing facilities, precision is not just a standard. It is our language. Every beam, every joint, crafted with unwavering exactitude.",
     "داخل منشآتنا التصنيعية العالمية، الدقة ليست مجرد معيار. إنها لغتنا. كل عارضة، كل وصلة، مصنوعة بدقة لا تتزعزع."),

    (40, 58,
     "From the spark of the weld to the sweep of the crane, our teams work day and night, bringing monumental visions to life. Innovation forged in fire.",
     "من شرارة اللحام إلى حركة الرافعة، تعمل فرقنا ليلاً ونهاراً لتحويل الرؤى العظيمة إلى واقع. ابتكار مصاغ في النار."),

    (60, 78,
     "Martifer Metal transforms raw concept into engineered reality. Our design philosophy bridges the gap between imagination and the built world.",
     "مارتيفر ميتال تحول المفهوم الخام إلى واقع هندسي. فلسفتنا التصميمية تسد الفجوة بين الخيال والعالم المبني."),

    (80, 102,
     "State-of-the-art robotics and computer guided machinery ensure every component meets the highest international standards. Technology in service of excellence.",
     "الروبوتات المتطورة والآلات الموجهة بالحاسوب تضمن أن كل مكون يلبي أعلى المعايير الدولية. التكنولوجيا في خدمة التميز."),

    (104, 128,
     "Meeting deadlines across continents. From landmark bridges to iconic structures, Martifer delivers on time, every time. With zero compromise on quality.",
     "الالتزام بالمواعيد عبر القارات. من الجسور البارزة إلى الهياكل الأيقونية، مارتيفر تسلم في الوقت المحدد، في كل مرة. دون أي تنازل عن الجودة."),

    (130, 158,
     "With a global footprint spanning Europe, the Americas, and the Middle East, Martifer operates where ambition builds. Our facilities in Brazil power projects across the region.",
     "بحضور عالمي يمتد عبر أوروبا والأمريكتين والشرق الأوسط، تعمل مارتيفر حيث يُبنى الطموح. منشآتنا في البرازيل تدعم المشاريع في جميع أنحاء المنطقة."),

    (160, 188,
     "Heavy industry meets surgical precision. Our crane systems and logistics capabilities handle the most demanding structural elements. Moving mountains of steel, with grace.",
     "الصناعة الثقيلة تلتقي بالدقة الجراحية. أنظمة الرافعات وقدراتنا اللوجستية تتعامل مع أكثر العناصر الهيكلية تطلباً. تنقل جبالاً من الفولاذ برشاقة."),

    (190, 218,
     "Martifer's special works division creates architectural masterpieces. Museums, stadiums, cultural landmarks. Each a testament to the art of engineering.",
     "قسم الأعمال الخاصة في مارتيفر يبتكر تحفاً معمارية. متاحف، ملاعب، معالم ثقافية. كل منها شهادة على فن الهندسة."),

    (220, 248,
     "Martifer Aluminios: where glass and metal create the modern facades that shape our cities. Elegance engineered at every scale.",
     "مارتيفر ألومينيوش. حيث يخلق الزجاج والمعدن الواجهات الحديثة التي تشكل مدننا. أناقة مهندسة على كل مستوى."),

    (250, 278,
     "Our engineering teams combine advanced design with decades of structural expertise. Every project begins with a blueprint of brilliance.",
     "فرقنا الهندسية تجمع بين التصميم المتقدم وعقود من الخبرة الهيكلية. كل مشروع يبدأ بمخطط من التألق."),

    (280, 305,
     "People are our greatest asset. A culture of collaboration, innovation, and relentless pursuit of perfection, drives everything we do.",
     "الناس هم أعظم ثرواتنا. ثقافة التعاون والابتكار والسعي الدؤوب نحو الكمال تدفع كل ما نقوم به."),

    (308, 328,
     "Martifer Metal. Building tomorrow's world, today. Where steel meets the sky, you will find us.",
     "مارتيفر ميتال. نبني عالم الغد، اليوم. حيث يلتقي الفولاذ بالسماء، ستجدوننا."),
]


def generate_narration_espeak(lang, segments, output_path):
    """Generate narration using espeak-ng with post-processing enhancement."""
    print(f"  Generating {lang} narration with espeak-ng...")

    final_audio = AudioSegment.silent(duration=DURATION * 1000)

    voice = "en-us" if lang == "en" else "ar"
    speed = 140 if lang == "en" else 130
    pitch = 40 if lang == "en" else 45

    for i, (start, end, en_text, ar_text) in enumerate(segments):
        text = en_text if lang == "en" else ar_text
        seg_path = os.path.join(OUTPUT_DIR, f"seg_{lang}_{i}.wav")

        subprocess.run([
            "espeak-ng", "-v", voice,
            "-s", str(speed),
            "-p", str(pitch),
            "-a", "180",
            "-w", seg_path,
            text
        ], capture_output=True)

        seg_audio = AudioSegment.from_wav(seg_path)
        seg_audio = low_pass_filter(seg_audio, 6000)
        seg_audio = high_pass_filter(seg_audio, 80)

        # Add slight reverb effect via delay mixing
        reverb = AudioSegment.silent(duration=40) + seg_audio - 12
        seg_audio = seg_audio.overlay(reverb)

        available_ms = (end - start) * 1000
        if len(seg_audio) > available_ms:
            speed_factor = len(seg_audio) / available_ms
            if speed_factor < 2.0:
                seg_audio = speed_up_audio(seg_audio, speed_factor)

        # Fade in/out for smoothness
        seg_audio = seg_audio.fade_in(100).fade_out(200)

        start_ms = start * 1000
        final_audio = final_audio.overlay(seg_audio, position=start_ms)

        os.remove(seg_path)

    final_audio = final_audio + 3  # Boost narration slightly
    final_audio.export(output_path, format="wav")
    print(f"  Narration saved: {output_path}")


def speed_up_audio(audio_seg, factor):
    """Speed up audio using ffmpeg atempo filter."""
    tmp_in = os.path.join(OUTPUT_DIR, "_tmp_speed_in.wav")
    tmp_out = os.path.join(OUTPUT_DIR, "_tmp_speed_out.wav")
    audio_seg.export(tmp_in, format="wav")

    filters = []
    remaining = factor
    while remaining > 2.0:
        filters.append("atempo=2.0")
        remaining /= 2.0
    filters.append(f"atempo={remaining:.4f}")
    filter_str = ",".join(filters)

    subprocess.run([
        "ffmpeg", "-y", "-i", tmp_in,
        "-filter:a", filter_str,
        tmp_out
    ], capture_output=True)

    result = AudioSegment.from_wav(tmp_out)
    for f in [tmp_in, tmp_out]:
        if os.path.exists(f):
            os.remove(f)
    return result


def generate_soundtrack(output_path, duration_sec=330, sample_rate=44100):
    """
    Generate a modern Middle Eastern cinematic soundtrack.
    Interstellar emotion with Hijaz maqam, layered textures, cinematic swells.
    """
    print("  Generating Middle Eastern cinematic soundtrack...")

    sr = sample_rate
    total_samples = duration_sec * sr
    t = np.linspace(0, duration_sec, total_samples, endpoint=False)
    mix = np.zeros(total_samples, dtype=np.float64)

    # D Hijaz maqam: D Eb F# G A Bb C# D
    base_freq = 73.42  # D2
    hijaz_ratios = [1, 16/15, 5/4, 4/3, 3/2, 8/5, 15/8, 2]
    hijaz_freqs = [base_freq * r for r in hijaz_ratios]

    # ─── Layer 1: Deep drone / resonant pad ───
    for harm, amp in [(1, 0.10), (2, 0.05), (3, 0.025), (4, 0.012)]:
        f = base_freq * harm
        drone = np.sin(2 * np.pi * f * t) * amp
        drone += np.sin(2 * np.pi * (f * 1.004) * t) * amp * 0.5  # detuned
        drone *= (1 + 0.25 * np.sin(2 * np.pi * 0.07 * t))  # LFO
        mix += drone

    # Sub bass
    mix += np.sin(2 * np.pi * base_freq * 0.5 * t) * 0.06 * (1 + 0.15 * np.sin(2 * np.pi * 0.04 * t))

    # ─── Layer 2: Ethereal string pad (Interstellar organ feel) ───
    pad_chords = [
        (0, 60, [0, 2, 4]),      # D F# A
        (60, 120, [0, 3, 4]),     # D G A
        (120, 180, [0, 2, 5]),    # D F# Bb (tension)
        (180, 240, [0, 3, 4]),    # D G A
        (240, 280, [0, 2, 4]),    # D F# A
        (280, 330, [0, 3, 7]),    # D G D (resolution)
    ]

    for ch_start, ch_end, degrees in pad_chords:
        s_s = int(ch_start * sr)
        s_e = min(int(ch_end * sr), total_samples)
        ch_len = s_e - s_s
        ch_t = np.linspace(0, ch_end - ch_start, ch_len, endpoint=False)

        # Crossfade envelope
        env = np.ones(ch_len)
        xfade = min(int(3 * sr), ch_len // 3)
        if xfade > 0:
            env[:xfade] = np.linspace(0, 1, xfade)
            env[-xfade:] = np.linspace(1, 0, xfade)

        for deg in degrees:
            oct = deg // 8
            idx = deg % 8
            f = hijaz_freqs[idx] * (2 ** (oct + 2))  # Higher octave for pads
            for detune, d_amp in [(1.0, 0.04), (1.003, 0.025), (0.997, 0.025)]:
                tone = np.sin(2 * np.pi * f * detune * ch_t) * d_amp
                tone *= env
                tone *= (0.7 + 0.3 * np.sin(2 * np.pi * 0.035 * ch_t))
                mix[s_s:s_e] += tone

    # ─── Layer 3: Melodic phrases (oud/ney-like) ───
    melody_notes = [
        # Opening (0-55s) - contemplative, spacious
        (2, 6, 0, 2), (7, 10, 2, 2), (11, 13, 4, 2), (14, 17, 3, 2),
        (18, 20, 2, 2), (21, 24, 0, 2), (25, 28, 1, 2), (29, 33, 2, 2),
        (34, 37, 4, 2), (38, 41, 5, 2), (42, 45, 4, 2), (46, 50, 2, 2),
        (51, 55, 0, 2),
        # Building (55-110s)
        (56, 59, 0, 3), (60, 63, 2, 3), (64, 66, 4, 3), (67, 70, 5, 3),
        (71, 74, 7, 2), (75, 78, 5, 3), (79, 82, 4, 3), (83, 86, 2, 3),
        (87, 90, 4, 3), (91, 94, 5, 3), (95, 98, 7, 3), (99, 103, 0, 3),
        (104, 108, 7, 2), (109, 112, 5, 2),
        # Peak (110-180s) - higher register, emotional
        (113, 116, 0, 3), (117, 120, 2, 3), (121, 123, 4, 3),
        (124, 127, 5, 3), (128, 132, 7, 3), (133, 136, 0, 4),
        (137, 140, 7, 3), (141, 144, 5, 3), (145, 149, 4, 3),
        (150, 154, 2, 3), (155, 159, 0, 3), (160, 163, 7, 2),
        (164, 168, 5, 2), (169, 173, 7, 3), (174, 178, 4, 3),
        # Resolute (180-250s)
        (180, 184, 0, 3), (185, 189, 4, 3), (190, 194, 7, 2),
        (195, 199, 0, 3), (200, 204, 2, 3), (205, 209, 4, 3),
        (210, 214, 5, 3), (215, 219, 4, 3), (220, 224, 2, 3),
        (225, 229, 0, 3), (230, 234, 7, 2), (235, 239, 5, 2),
        (240, 244, 4, 2), (245, 250, 0, 2),
        # Finale (250-330s) - grand, resolving
        (252, 256, 0, 3), (257, 261, 2, 3), (262, 266, 4, 3),
        (267, 271, 5, 3), (272, 276, 7, 3), (277, 282, 0, 4),
        (283, 288, 7, 3), (289, 295, 5, 3), (296, 302, 4, 2),
        (303, 310, 2, 2), (311, 320, 0, 2), (321, 330, 0, 2),
    ]

    for n_start, n_end, degree, octave in melody_notes:
        freq = hijaz_freqs[degree % 8] * (2 ** (octave + degree // 8))
        s_s = int(n_start * sr)
        s_e = min(int(n_end * sr), total_samples)
        n_len = s_e - s_s
        if n_len <= 0:
            continue

        n_t = np.linspace(0, n_end - n_start, n_len, endpoint=False)

        # Envelope
        env = np.ones(n_len)
        attack = min(int(0.12 * sr), n_len // 4)
        release = min(int(0.4 * sr), n_len // 3)
        if attack > 0:
            env[:attack] = np.linspace(0, 1, attack)
        if release > 0:
            env[-release:] = np.linspace(1, 0, release)

        # Vibrato
        vib = 1 + 0.004 * np.sin(2 * np.pi * 5.2 * n_t)

        # Rich harmonic tone
        tone = np.sin(2 * np.pi * freq * vib * n_t) * 0.5
        tone += np.sin(2 * np.pi * freq * 2 * vib * n_t) * 0.22
        tone += np.sin(2 * np.pi * freq * 3 * n_t) * 0.10
        tone += np.sin(2 * np.pi * freq * 4 * n_t) * 0.04
        tone += np.sin(2 * np.pi * freq * 5 * n_t) * 0.02

        tone *= env * 0.09
        mix[s_s:s_e] += tone

    # ─── Layer 4: Percussion (frame drum / riq) ───
    bpm = 72
    beat_sec = 60.0 / bpm

    for beat_time in np.arange(0, duration_sec, beat_sec):
        beat_pos = int(beat_time * sr)
        if beat_pos >= total_samples:
            break

        # Dynamic volume
        pv = 0.05
        if beat_time < 10:
            pv *= beat_time / 10
        if beat_time > 315:
            pv *= max(0, (330 - beat_time) / 15)

        beat_num = int(beat_time / beat_sec)

        # Doum on downbeat
        d_len = min(int(0.18 * sr), total_samples - beat_pos)
        d_t = np.linspace(0, 0.18, d_len, endpoint=False)
        d_env = np.exp(-d_t * 15)
        doum = np.sin(2 * np.pi * 55 * d_t) * d_env * pv
        doum += np.sin(2 * np.pi * 82 * d_t) * d_env * pv * 0.4
        mix[beat_pos:beat_pos + d_len] += doum

        # Tek on off-beat
        tek_pos = beat_pos + int(beat_sec * sr / 2)
        if tek_pos < total_samples:
            tk_len = min(int(0.04 * sr), total_samples - tek_pos)
            tk_t = np.linspace(0, 0.04, tk_len, endpoint=False)
            tk_env = np.exp(-tk_t * 50)
            tek = np.sin(2 * np.pi * 900 * tk_t) * tk_env * pv * 0.3
            tek += np.random.uniform(-1, 1, tk_len) * tk_env * pv * 0.15
            mix[tek_pos:tek_pos + tk_len] += tek

        # Ornamental riq pattern
        if beat_num % 4 in [2, 3]:
            for offset_frac in [0.25, 0.75]:
                riq_pos = beat_pos + int(beat_sec * sr * offset_frac)
                if riq_pos < total_samples:
                    r_len = min(int(0.025 * sr), total_samples - riq_pos)
                    r_t = np.linspace(0, 0.025, r_len, endpoint=False)
                    r_env = np.exp(-r_t * 70)
                    riq = np.sin(2 * np.pi * 3200 * r_t) * r_env * pv * 0.12
                    riq += np.random.uniform(-1, 1, r_len) * r_env * pv * 0.08
                    mix[riq_pos:riq_pos + r_len] += riq

    # ─── Layer 5: Cinematic swells ───
    swells = [
        (0, 12, 0.04),
        (55, 70, 0.05),
        (115, 135, 0.06),
        (190, 210, 0.05),
        (260, 285, 0.07),
        (310, 328, 0.05),
    ]

    for sw_start, sw_end, sw_amp in swells:
        s_s = int(sw_start * sr)
        s_e = min(int(sw_end * sr), total_samples)
        s_len = s_e - s_s
        s_t = np.linspace(0, sw_end - sw_start, s_len, endpoint=False)

        env = np.sin(np.pi * np.linspace(0, 1, s_len))

        for mult, a in [(1, 1.0), (1.5, 0.6), (2, 0.4), (3, 0.2)]:
            f = base_freq * 2 * mult
            sw = np.sin(2 * np.pi * f * s_t) * env * sw_amp * a
            sw += np.sin(2 * np.pi * (f * 1.002) * s_t) * env * sw_amp * a * 0.4
            mix[s_s:s_e] += sw

    # ─── Post-processing ───
    # Fade in/out
    fade_in = min(5 * sr, total_samples)
    fade_out = min(8 * sr, total_samples)
    mix[:fade_in] *= np.linspace(0, 1, fade_in)
    mix[-fade_out:] *= np.linspace(1, 0, fade_out)

    # Simple reverb
    reverb_mix = np.copy(mix)
    for delay_ms in [31, 67, 107, 151, 211, 283]:
        delay_s = int(delay_ms * sr / 1000)
        decay = 0.12 * (1 - delay_ms / 350)
        if delay_s < total_samples:
            reverb_mix[delay_s:] += mix[:-delay_s] * decay
    mix = reverb_mix

    # Normalize
    peak = np.max(np.abs(mix))
    if peak > 0:
        mix = mix / peak * 0.85

    # Write stereo WAV
    mix_int16 = (mix * 32767).astype(np.int16)
    stereo = np.zeros(total_samples * 2, dtype=np.int16)
    right_delay = int(0.006 * sr)
    right = np.zeros_like(mix_int16)
    right[right_delay:] = mix_int16[:-right_delay]
    stereo[0::2] = mix_int16
    stereo[1::2] = right

    with open(output_path, 'wb') as f:
        num_ch = 2
        sw = 2
        data_size = len(stereo) * sw
        f.write(b'RIFF')
        f.write(struct.pack('<I', 36 + data_size))
        f.write(b'WAVE')
        f.write(b'fmt ')
        f.write(struct.pack('<I', 16))
        f.write(struct.pack('<H', 1))
        f.write(struct.pack('<H', num_ch))
        f.write(struct.pack('<I', sr))
        f.write(struct.pack('<I', sr * num_ch * sw))
        f.write(struct.pack('<H', num_ch * sw))
        f.write(struct.pack('<H', sw * 8))
        f.write(b'data')
        f.write(struct.pack('<I', data_size))
        f.write(stereo.tobytes())

    print(f"  Soundtrack saved: {output_path}")


def mix_final_video(video_src, narration_path, soundtrack_path, output_path,
                    narr_vol="1.5", music_vol="0.45"):
    """Combine video + narration + soundtrack using ffmpeg."""
    print(f"  Mixing final video: {output_path}")

    cmd = [
        "ffmpeg", "-y",
        "-i", video_src,
        "-i", narration_path,
        "-i", soundtrack_path,
        "-filter_complex",
        f"[1:a]volume={narr_vol},aformat=sample_rates=44100:channel_layouts=stereo[narr];"
        f"[2:a]volume={music_vol},aformat=sample_rates=44100:channel_layouts=stereo[music];"
        f"[narr][music]amix=inputs=2:duration=first:dropout_transition=3,"
        f"dynaudnorm=p=0.9:s=5[aout]",
        "-map", "0:v",
        "-map", "[aout]",
        "-c:v", "copy",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        output_path
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  ERROR: {result.stderr[-800:]}")
        return False
    else:
        size_mb = os.path.getsize(output_path) / (1024 * 1024)
        print(f"  Done: {output_path} ({size_mb:.1f} MB)")
        return True


def main():
    print("=" * 60)
    print("MARTIFER METAL - Narrated Video Production")
    print("=" * 60)

    # 1. Generate soundtrack
    soundtrack_path = os.path.join(OUTPUT_DIR, "soundtrack_middle_east.wav")
    generate_soundtrack(soundtrack_path)

    # 2. Generate English narration
    narration_en = os.path.join(OUTPUT_DIR, "narration_en.wav")
    generate_narration_espeak("en", SEGMENTS, narration_en)

    # 3. Generate Arabic narration
    narration_ar = os.path.join(OUTPUT_DIR, "narration_ar.wav")
    generate_narration_espeak("ar", SEGMENTS, narration_ar)

    # 4. Mix English version
    output_en = os.path.join(OUTPUT_DIR, "Martifer_Metal_EN.mp4")
    mix_final_video(VIDEO_SRC, narration_en, soundtrack_path, output_en)

    # 5. Mix Arabic version
    output_ar = os.path.join(OUTPUT_DIR, "Martifer_Metal_AR.mp4")
    mix_final_video(VIDEO_SRC, narration_ar, soundtrack_path, output_ar)

    print("\n" + "=" * 60)
    print("PRODUCTION COMPLETE")
    print(f"  English: {output_en}")
    print(f"  Arabic:  {output_ar}")
    print("=" * 60)


if __name__ == "__main__":
    main()
