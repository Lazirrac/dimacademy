//frontend\vite.config.js
import { defineConfig } from 'vite'; // ✅ IMPORTACIÓN NECESARIA
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,
    port: 5173,      // opcional, si quieres otro puerto
    strictPort: true, // falla si el puerto ya está en uso
    proxy: {
      '/api': 'http://localhost:5000', 
    },
  },
});
