const KOKORO_VOICE = 'af_heart';

function speakableEnglish(text) {
  const cleaned = String(text || '')
    .replace(/[\u3400-\u9FFF\uF900-\uFAFF\u3040-\u30FF\uAC00-\uD7AF]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = cleaned.match(/[A-Za-z]{2,}/g) || [];
  return words.length >= 4 ? cleaned : String(text || '');
}

function createVoiceLane() {
  const pending = new Map();
  let requestId = 0;
  let queue = Promise.resolve();

  const state = {
    worker: null,
    loading: null,
    ready: false,
    onProgress: () => {},
    resolveLoad: null,
    rejectLoad: null,
  };

  function failLoad(error) {
    const reject = state.rejectLoad;
    state.loading = null;
    state.ready = false;
    state.resolveLoad = null;
    state.rejectLoad = null;
    if (state.worker) {
      state.worker.terminate();
      state.worker = null;
    }
    reject?.(error);
  }

  function handleWorkerMessage(event) {
    const data = event.data || {};

    if (data.type === 'progress') {
      state.onProgress(data.message || 'Downloading voice model…');
      return;
    }

    if (data.type === 'ready') {
      state.ready = true;
      state.onProgress('');
      state.resolveLoad?.();
      state.resolveLoad = null;
      state.rejectLoad = null;
      return;
    }

    if (data.type === 'audio') {
      const job = pending.get(data.id);
      if (!job) return;
      pending.delete(data.id);
      job.resolve(data.buffer);
      return;
    }

    if (data.type === 'error') {
      const error = new Error(data.message || 'Kokoro voice failed');
      if (data.id != null && pending.has(data.id)) {
        pending.get(data.id).reject(error);
        pending.delete(data.id);
        return;
      }
      failLoad(error);
    }
  }

  function prepare(onProgress) {
    if (onProgress) state.onProgress = onProgress;
    if (state.ready) return Promise.resolve();
    if (state.loading) return state.loading;

    const worker = new Worker(new URL('./speech-worker.js', import.meta.url), {
      type: 'module',
    });
    state.worker = worker;
    worker.onmessage = handleWorkerMessage;
    worker.onerror = (event) => {
      failLoad(new Error(event.message || 'Kokoro voice worker failed'));
    };

    state.loading = new Promise((resolve, reject) => {
      state.resolveLoad = resolve;
      state.rejectLoad = reject;
    });

    worker.postMessage({ type: 'load', device: 'wasm' });
    return state.loading;
  }

  async function synthesizeNow(text, onProgress, languageCode = 'en') {
    await prepare(onProgress);
    if (onProgress) onProgress('');

    const worker = state.worker;
    if (!worker) {
      throw new Error('Kokoro voice model is not loaded');
    }

    const id = requestId;
    requestId += 1;
    const english = !languageCode || languageCode === 'en';

    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      worker.postMessage({
        type: 'generate',
        id,
        text: english ? speakableEnglish(text) : text,
        voice: KOKORO_VOICE,
        language: english ? 'en' : languageCode,
      });
    });
  }

  function synthesize(text, onProgress, languageCode = 'en') {
    const run = queue.then(() => synthesizeNow(text, onProgress, languageCode));
    queue = run.catch(() => {});
    return run;
  }

  return { prepare, synthesize };
}

const voiceLane = createVoiceLane();
const aheadLane = createVoiceLane();

export function prepareVoice(onProgress) {
  return voiceLane.prepare(onProgress);
}

export function synthesizeSpeech(text, onProgress, languageCode = 'en') {
  return voiceLane.synthesize(text, onProgress, languageCode);
}

export function synthesizeSpeechAhead(text, onProgress, languageCode = 'en') {
  return aheadLane.synthesize(text, onProgress, languageCode);
}
