import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/eric_site/', // 👈 一定要這樣
  plugins: [react()],
});
