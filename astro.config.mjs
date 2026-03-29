// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ohanagoa.github.io',
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-roboto",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Oswald",
      cssVariable: "--font-oswald",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Alice",
      cssVariable: "--font-alice",
    },
  ],
  integrations: [react()],
});
