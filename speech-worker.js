import { env, pipeline } from '@huggingface/transformers';
import { KokoroTTS } from 'kokoro-js';

env.allowLocalModels = false;
env.useBrowserCache = true;
if (env.backends?.onnx?.wasm) {
  env.backends.onnx.wasm.numThreads = 1;
}

const KOKORO_MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
const KOKORO_VOICE = 'af_heart';
const SUPERTONIC_MODEL_ID = 'onnx-community/Supertonic-TTS-2-ONNX';
const SUPERTONIC_VOICE =
  'https://huggingface.co/onnx-community/Supertonic-TTS-2-ONNX/resolve/main/voices/F1.bin';
const SUPERTONIC_LANGUAGES = new Set(['es', 'fr', 'pt', 'ko']);

let kokoro = null;
let supertonic = null;

function formatProgress(progress) {
  if (progress?.status === 'progress' && progress.total) {
    const pct = Math.min(100, Math.round((progress.loaded / progress.total) * 100));
    return `Downloading voice model ${pct}%`;
  }
  if (progress?.status === 'initiate' || progress?.status === 'download') {
    return 'Downloading voice model…';
  }
  return 'Preparing voice…';
}

function reportProgress(progress) {
  self.postMessage({ type: 'progress', message: formatProgress(progress) });
}

async function loadKokoro() {
  if (kokoro) return kokoro;
  kokoro = await KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {
    dtype: 'q8',
    device: 'wasm',
    progress_callback: reportProgress,
  });
  return kokoro;
}

async function loadSupertonic() {
  if (supertonic) return supertonic;
  supertonic = await pipeline('text-to-speech', SUPERTONIC_MODEL_ID, {
    dtype: 'fp32',
    device: 'wasm',
    progress_callback: reportProgress,
  });
  return supertonic;
}

function splitForSpeech(text) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  const sentences =
    normalized.match(/[^.!?…؟。！？]+[.!?…؟。！？]+|[^.!?…؟。！？]+$/g) || [normalized];
  const chunks = [];

  sentences.forEach((sentence) => {
    const trimmed = sentence.trim();
    if (!trimmed) return;
    if (trimmed.length <= 280) {
      chunks.push(trimmed);
      return;
    }

    const words = trimmed.split(/\s+/);
    let current = '';
    words.forEach((word) => {
      const next = current ? `${current} ${word}` : word;
      if (next.length > 280 && current) {
        chunks.push(current);
        current = word;
      } else {
        current = next;
      }
    });
    if (current) chunks.push(current);
  });

  return chunks.length ? chunks : [normalized];
}

function concatAudio(parts, sampleRate) {
  const gap = Math.round(sampleRate * 0.07);
  const total = parts.reduce((sum, part, index) => sum + part.length + (index > 0 ? gap : 0), 0);
  const merged = new Float32Array(total);
  let offset = 0;

  parts.forEach((part, index) => {
    if (index > 0) offset += gap;
    merged.set(part, offset);
    offset += part.length;
  });

  return merged;
}

function floatToWav(samples, sampleRate) {
  const bytesPerSample = 2;
  const buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  const view = new DataView(buffer);
  const write = (offset, value) => {
    for (let i = 0; i < value.length; i += 1) {
      view.setUint8(offset + i, value.charCodeAt(i));
    }
  };

  write(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  write(8, 'WAVE');
  write(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * bytesPerSample, true);
  view.setUint16(32, bytesPerSample, true);
  view.setUint16(34, 16, true);
  write(36, 'data');
  view.setUint32(40, samples.length * bytesPerSample, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i += 1, offset += 2) {
    const sample = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
  }

  return buffer;
}

self.onmessage = async (event) => {
  const data = event.data || {};

  try {
    if (data.type === 'load') {
      await loadKokoro();
      self.postMessage({ type: 'ready' });
      return;
    }

    if (data.type === 'generate') {
      const language = SUPERTONIC_LANGUAGES.has(data.language) ? data.language : 'en';
      const chunks = splitForSpeech(data.text || '');
      const pieces = [];
      let sampleRate = language === 'en' ? 24000 : 44100;

      if (language === 'en') {
        const tts = await loadKokoro();
        for (const chunk of chunks) {
          const audio = await tts.generate(chunk, {
            voice: data.voice || KOKORO_VOICE,
            speed: 1,
          });
          const samples = audio?.audio;
          if (!samples?.length) {
            throw new Error('Kokoro returned empty audio');
          }
          sampleRate = audio.sampling_rate || sampleRate;
          pieces.push(samples);
        }
      } else {
        const tts = await loadSupertonic();
        for (const chunk of chunks) {
          const audio = await tts(`<${language}>${chunk}</${language}>`, {
            speaker_embeddings: SUPERTONIC_VOICE,
            num_inference_steps: 5,
            speed: 1,
          });
          const samples = audio?.audio;
          if (!samples?.length) {
            throw new Error('Supertonic returned empty audio');
          }
          sampleRate = audio.sampling_rate || sampleRate;
          pieces.push(samples);
        }
      }

      const wav = floatToWav(concatAudio(pieces, sampleRate), sampleRate);
      self.postMessage({ type: 'audio', id: data.id, buffer: wav }, [wav]);
    }
  } catch (err) {
    self.postMessage({
      type: 'error',
      id: data.id,
      phase: data.type,
      message: err?.message || String(err),
    });
  }
};
