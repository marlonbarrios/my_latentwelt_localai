import { completeChat } from '../ollama.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { messages, temperature } = req.body || {};
    const completion = await completeChat({ messages, temperature });
    return res.status(200).json(completion);
  } catch (error) {
    console.error('Ollama chat error:', error.message);
    return res.status(error.status || 500).json({
      error: error.message || 'The local model could not answer',
    });
  }
}
