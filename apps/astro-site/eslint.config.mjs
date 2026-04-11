// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "public/**", "original_index_backup.html"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Reglas relajadas a warn — el código existente del Tutor AI las viola masivamente.
      // Limpiar gradualmente; ver docs/architecture/astro-site.md sección "Tech debt".
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-unused-vars": "off",
      "prefer-const": "warn",
      "no-empty": "warn",
      "no-prototype-builtins": "warn",
      "no-var": "warn",
      "no-useless-escape": "warn",
      "no-undef": "warn",
      "no-cond-assign": "warn",
      "no-self-assign": "warn",
      "no-fallthrough": "warn",
      "no-misleading-character-class": "warn",
      "no-control-regex": "warn",
      "@typescript-eslint/no-this-alias": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "no-case-declarations": "warn",
    },
  },
);
