import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/PizzaMenu/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },

  server: {
    port: 3000,
  },
});
