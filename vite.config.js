import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // allow external connections
    allowedHosts: [
      '.ngrok-free.app',   // allow any ngrok tunnel
      'localhost',
    ],
    port: 5173,
  },
})
