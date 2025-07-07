import path from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server: {
    host: 'todolist',
    port: 7777
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@icons': path.resolve(__dirname, 'public/icons')
    }
  }
})
