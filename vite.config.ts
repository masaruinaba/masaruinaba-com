import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        v0001: resolve(__dirname, "v0001.html"),
        v0002: resolve(__dirname, "v0002.html"),
        v0003: resolve(__dirname, "v0003.html"),
        v0004: resolve(__dirname, "v0004.html"),
        v0005: resolve(__dirname, "v0005.html"),
        v0006: resolve(__dirname, "v0006.html"),
        sitemap: resolve(__dirname, "sitemap.html"),
        "creative-weather": resolve(__dirname, "apps/creative-weather/index.html"),
      },
    },
  },
});