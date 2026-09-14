import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Maseer28/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});