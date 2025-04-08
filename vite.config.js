import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    // O Vite cuida disso automaticamente no dev, MAS
    // se estiver usando um plugin de middleware, pode forçar:
    fs: {
      allow: ['.'],
    },
  },
})
