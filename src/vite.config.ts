import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('radix')) return 'radix';
            if (id.includes('recharts')) return 'charts';
            if (id.includes('framer-motion') || id.includes('motion')) return 'motion';
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('emailjs')) return 'emailjs';
            if (id.includes('lucide')) return 'icons';
            return 'vendor';
          }
        },
      },
    },
  },
});
