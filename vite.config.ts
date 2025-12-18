import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const htmlPages = ['index.html', 'index-preview.html']

const input = Object.fromEntries(
  htmlPages.map((file) => [file.replace(/\.html$/, ''), resolve(__dirname, file)]),
)

export default defineConfig({
  build: {
    rollupOptions: {
      input,
    },
  },
})


