// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/eric_site/', // ← 這行一定要有，斜線開頭、Repo 名結尾
})
