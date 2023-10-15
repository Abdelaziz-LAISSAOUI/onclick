import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    base: '/',
    rollupOptions: {
      output: {
        format: 'es', // Make sure it's set to 'es' or 'module'
      },
    },
  },
})

