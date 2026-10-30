import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'cn': path.resolve(__dirname, './src/lib/utils.ts'),
      '@tabler/icons-react': path.resolve(__dirname, './node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.cjs'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
