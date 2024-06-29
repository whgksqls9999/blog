import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'light-pink': 'var(--light-pink)',
        'light-red': 'var(--light-red)',
        'light-green': 'var(--light-green)',
        'light-sky': 'var(--light-sky)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        gmarket_bold: ['var(--font-gmarket-sans-bold)'],
        gmarket_medium: ['var(--font-gmarket-sans-medium)'],
        gmarket_light: ['var(--font-gmarket-sans-light)'],
      },
      flexGrow: {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
    },
  },
  plugins: [],
};
export default config;
