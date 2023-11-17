import { defineConfig } from 'vite';

export default defineConfig({
  env: {
    NODE_ENV: 'test',
  },
  build: {
    rollupOptions: {
      input: './vite.config.test.js',
    },
  },
});
