import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? (process.env.VITE_BASE ?? '/CV_Aston/') : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Three.js — самый тяжёлый кусок и используется только ленивым
        // графом /ecosystem, поэтому его можно изолировать безопасно.
        // Группировать fiber/drei нельзя: их зависимости (react и др.)
        // шарятся с entry и утянут чанк в eager-загрузку.
        manualChunks(id) {
          if (/[\\/]node_modules[\\/](three|three-stdlib)[\\/]/.test(id)) return 'three'
        },
      },
    },
  },
}))
