import express from 'express';
import cors from 'cors';
import { checkStation, completeChat, getStationConfig } from './ollama.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', async (_req, res) => {
  const station = await checkStation();
  res.status(station.ok ? 200 : 503).json(station);
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, temperature } = req.body || {};
    const completion = await completeChat({ messages, temperature });
    res.json(completion);
  } catch (error) {
    console.error('Ollama chat error:', error.message);
    res.status(error.status || 500).json({
      error: error.message || 'The local model could not answer',
    });
  }
});

app.listen(port, async () => {
  const { host, model, think } = getStationConfig();
  console.log(`Latentwelt station on http://localhost:${port}`);
  console.log(`Model server: ${host}`);
  console.log(`Model: ${model}${think ? ' (thinking on)' : ''}`);

  const station = await checkStation();
  if (!station.ok) {
    console.error(`✗ Ollama is not reachable. Start it, then run: ollama pull ${model}`);
    return;
  }

  if (!station.modelReady) {
    console.error(`✗ Model "${model}" is not installed. Run: ollama pull ${model}`);
    if (station.models?.length) {
      console.error(`  Installed: ${station.models.join(', ')}`);
    }
    return;
  }

  console.log(`✓ Ollama is up and ${model} is installed`);
});
