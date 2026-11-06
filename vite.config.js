import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));
const browserStub = path.join(root, 'browser-stub.js');

export default defineConfig({
  define: {
    // Kokoro's phonemizer speaks nonsense if it takes its Node path inside the browser.
    'process.versions.node': 'undefined',
  },
  resolve: {
    alias: {
      path: browserStub,
      'fs/promises': browserStub,
    },
  },
  worker: {
    format: 'es',
  },
  optimizeDeps: {
    exclude: ['kokoro-js', '@huggingface/transformers'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
