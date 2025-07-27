import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue()],
    
  server: {
    host: true
  }
})

export default defineConfig({
  build: {
    target: 'safari12',
  },
})
