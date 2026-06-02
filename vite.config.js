import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDir, "index.html"),
        publications: resolve(rootDir, "publications/index.html"),
        cv: resolve(rootDir, "cv/index.html"),
      },
    },
  },
});
