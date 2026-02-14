import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/japanese-wordle/', // GitHub Pages base path
  plugins: [createHtmlPlugin({ /* plugins for HTML generation */ })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});