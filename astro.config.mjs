import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import db from "@astrojs/db";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [mdx(), db(), svelte()],
  image: {
    domains: ["res.cloudinary.com"]
  },
  output: 'hybrid',
});