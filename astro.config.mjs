import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [mdx(), db()],
  image: {
    domains: ["res.cloudinary.com"]
  }
});