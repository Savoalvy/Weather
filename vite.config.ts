import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true // обращение к локальному серверу для обхода проблем с ВПН
  },
  resolve: {
    alias: {
      // '@components': '/src/components',
      // '@assets': '/src/assets',
      // '@utils': '/src/utils',
    }
  }
});
