// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://davidjeg.github.io",
  base: "/portfolio",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
