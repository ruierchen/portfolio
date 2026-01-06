import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {

  const base = mode === 'production' ? '/portfolio/' : '/';
  
  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      outDir: 'dist',
    },
    server: {
      port: 3000,
      host: true,
      open: true,
    },
    preview: {
      port: 4173,
      host: true,
    }
  };
});
