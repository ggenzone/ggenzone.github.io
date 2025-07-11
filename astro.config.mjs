// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import pagefind from "astro-pagefind";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: 'https://ggenzone.github.io',
  vite: {
      plugins: [tailwindcss()]
  },
  build: {
    format: "file",
  },
  integrations: [react(), sitemap(), pagefind(), mdx()],
});