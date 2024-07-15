import type { Config } from '../../apps/blog/node_modules/tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        gmarket_bold: ['var(--font-gmarket-sans-bold)'],
        gmarket_medium: ['var(--font-gmarket-sans-medium)'],
        gmarket_light: ['var(--font-gmarket-sans-light)'],
      },
    },
  },
  plugins: [],
};
export default config;
