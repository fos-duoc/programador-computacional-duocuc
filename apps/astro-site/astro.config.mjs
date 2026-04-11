// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://fos-duoc.github.io",
  base: "/Analista-Programador-Computacional-DuocUC",
  // outDir relativo al package: apps/astro-site/ → ../../docs (raíz del repo).
  // El sitio se publica vía GitHub Pages desde docs/ (configuración del repo).
  // Tech debt: docs/ mezcla build output con docs estructuradas (context.md, sessions/...).
  // Migración recomendada: usar dist/ + workflow .github/workflows/deploy-astro.yml.
  outDir: "../../docs",
  build: {
    assets: "assets",
    inlineStylesheets: "auto",
  },
  integrations: [
    icon({
      include: {
        mdi: ["*"],
        "simple-icons": ["*"],
        devicon: ["*"],
      },
    }),
    sitemap(),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeComments: true,
          collapseWhitespace: true,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: "esbuild",
      // No vaciar docs/ al construir — coexiste con docs estructuradas (context.md, sessions/, etc.).
      // Ver docs/architecture/astro-site.md sección "outDir compartido".
      emptyOutDir: false,
    },
  },
});
