import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // 允許外部 IP 存取
    port: 5173        // 或改成你想開的 port
  }
})
