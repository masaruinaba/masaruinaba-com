import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        // Playground
        "mosaic-reveal": resolve(__dirname, "playground/mosaic-reveal/index.html"),
        "eye-following": resolve(__dirname, "playground/eye-following/index.html"),
        "scroll-text": resolve(__dirname, "playground/scroll-text/index.html"),
        "letter-morphing": resolve(__dirname, "playground/letter-morphing/index.html"),
        "hover-text-path": resolve(__dirname, "playground/hover-text-path/index.html"),
        "font-patterns": resolve(__dirname, "playground/font-patterns/index.html"),
        "3d-explore": resolve(__dirname, "playground/3d-explore/index.html"),
        // Apps
        "layered-clock": resolve(__dirname, "apps/layered-clock/index.html"),
        "creative-weather": resolve(__dirname, "apps/creative-weather/index.html"),
        "design-board": resolve(__dirname, "apps/design-board/index.html"),
        "typography": resolve(__dirname, "apps/typography/index.html"),
      },
    },
  },
});
