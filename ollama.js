import dotenv from 'dotenv';

dotenv.config();

const OLLAMA_HOST = (process.env.OLLAMA_HOST || 'http://127.0.0.1:11434').replace(/\/$/, '');
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'gemma4';
const OLLAMA_THINK = /^(1|true|yes|on)$/i.test(process.env.OLLAMA_THINK || 'true');
const OLLAMA_NUM_CTX = Number(process.env.OLLAMA_NUM_CTX || 16384);
const OLLAMA_KEEP_ALIVE = process.env.OLLAMA_KEEP_ALIVE || '30m';

export function getStationConfig() {
  return {
    host: OLLAMA_HOST,
    model: OLLAMA_MODEL,
    think: OLLAMA_THINK,
  };
}

export function stripThinking(text) {
  if (!text) return '';
  return String(text)
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/<think>[\s\S]*/gi, '')
    .trim();
}

function modelIsInstalled(names, requested) {
  return names.some((name) => name === requested || name.startsWith(`${requested}:`));
}

export async function checkStation() {
  const config = getStationConfig();
  try {
    const response = await fetch(`${OLLAMA_HOST}/api/tags`);
    if (!response.ok) {
      return {
        ...config,
        ok: false,
        modelReady: false,
        error: `Ollama responded with ${response.status}`,
      };
    }

    const data = await response.json();
    const models = (data.models || []).map((model) => model.name).filter(Boolean);
    return {
      ...config,
      ok: true,
      modelReady: modelIsInstalled(models, OLLAMA_MODEL),
      models,
    };
  } catch (err) {
    return {
      ...config,
      ok: false,
      modelReady: false,
      error: err.message || 'Ollama is not reachable',
    };
  }
}

async function postChat(body) {
  let response;
  try {
    response = await fetch(`${OLLAMA_HOST}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    const error = new Error(
      `Ollama is not reachable at ${OLLAMA_HOST}. Start Ollama, then run: ollama pull ${OLLAMA_MODEL}`
    );
    error.status = 502;
    error.cause = err;
    throw error;
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = String(data.error || response.statusText || 'unknown error');
    const missing = /not found/i.test(detail);
    const error = new Error(
      missing
        ? `Model "${OLLAMA_MODEL}" not found. Run: ollama pull ${OLLAMA_MODEL}`
        : `Ollama error: ${detail}`
    );
    error.status = response.status || 502;
    throw error;
  }

  return data;
}

export async function completeChat({ messages, temperature }) {
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    const error = new Error('Messages array is required and must not be empty');
    error.status = 400;
    throw error;
  }

  const body = {
    model: OLLAMA_MODEL,
    messages,
    stream: false,
    keep_alive: OLLAMA_KEEP_ALIVE,
    options: {
      temperature: typeof temperature === 'number' ? temperature : 1,
      num_predict: OLLAMA_THINK ? 4096 : 768,
      num_ctx: Number.isFinite(OLLAMA_NUM_CTX) ? OLLAMA_NUM_CTX : 16384,
    },
  };

  if (OLLAMA_THINK) {
    body.think = true;
  }

  let data = await postChat(body);
  let content = stripThinking(data.message?.content || '');

  if (!content && OLLAMA_THINK && data.done_reason === 'length') {
    body.options.num_predict = 8192;
    data = await postChat(body);
    content = stripThinking(data.message?.content || '');
  }

  if (!content) {
    const error = new Error(
      'Ollama returned no speakable text. The thinking trace may have used the whole reply. Set OLLAMA_THINK=false or try again.'
    );
    error.status = 502;
    throw error;
  }

  return {
    id: data.created_at || `ollama-${Date.now()}`,
    object: 'chat.completion',
    model: data.model || OLLAMA_MODEL,
    choices: [
      {
        index: 0,
        message: {
          role: 'assistant',
          content,
        },
        finish_reason: data.done_reason || 'stop',
      },
    ],
  };
}
