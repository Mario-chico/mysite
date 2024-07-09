import { defineConfig, squooshImageService  } from 'astro/config';
import mdx from "@astrojs/mdx";
import db from "@astrojs/db";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

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
    service: squooshImageService(),
    domains: ["res.cloudinary.com"]
  },
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});