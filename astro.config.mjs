import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://u4ia-abhra.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});