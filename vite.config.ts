import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-github-pages',
      closeBundle() {
        const index = resolve('dist/index.html')
        copyFileSync(index, resolve('dist/404.html'))
      },
    },
  ],
})
