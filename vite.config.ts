import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/ui': path.resolve(__dirname, 'src/shared/ui'),
      '@/animation': path.resolve(__dirname, 'src/shared/animation'),
      '@/data': path.resolve(__dirname, 'src/shared/data'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
