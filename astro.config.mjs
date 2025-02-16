import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lifecentereddesign.co",
  integrations: [tailwind(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});