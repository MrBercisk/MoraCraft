import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Serve assets from the root's public/ folder
  // Assets like CSS/JS plugins are kept in public/assets/
})
