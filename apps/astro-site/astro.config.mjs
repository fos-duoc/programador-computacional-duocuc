// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://fos-duoc.github.io",
  base: "/Analista-Programador-Computacional-DuocUC",
  // outDir default: apps/astro-site/dist/ (gitignored).
  // El sitio se publica vía GitHub Actions (.github/workflows/deploy-pages.yml)
  // que sube apps/astro-site/dist/ como artifact y lo despliega a Pages.
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
    },
  },
});
