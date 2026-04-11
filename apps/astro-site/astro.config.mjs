// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://fos-duoc.github.io",
  base: "/programador-computacional-duocuc",
  // outDir default: apps/astro-site/dist/ (gitignored).
  // El sitio se publica vía GitHub Actions (.github/workflows/deploy-pages.yml)
  // que sube apps/astro-site/dist/ como artifact y lo despliega a Pages.
  build: {
    assets: "assets",
    inlineStylesheets: "auto",
  },
  // Prefetch built-in (Astro 5+): precarga páginas linkeadas cuando entran al
  // viewport o el usuario hace hover. Mejora la latencia entre navegaciones.
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },
  integrations: [
    sitemap(),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeComments: true,
          collapseWhitespace: true,
        },
      },
      // Optimiza imágenes durante el build (sharp). Antes Image:false porque
      // el outDir compartido con docs/ causaba conflictos; ahora dist/ es limpio.
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: "esbuild",
    },
  },
});
