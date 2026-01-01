import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        v0001: resolve(__dirname, "v0001-mosaic-reveal.html"),
        v0002: resolve(__dirname, "v0002-eye-following.html"),
        v0003: resolve(__dirname, "v0003-scroll-text-sequence.html"),
        v0004: resolve(__dirname, "v0004-letter-morphing.html"),
        sitemap: resolve(__dirname, "sitemap.html"),
        "layered-clock": resolve(__dirname, "apps/layered-clock/index.html"),
        "creative-weather": resolve(__dirname, "apps/creative-weather/index.html"),
      },
    },
  },
});