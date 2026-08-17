import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // NTL/SulNOxEco brand palette
        'ntl-navy': '#001a4d',
        'ntl-blue': '#003d99',
        'sulnox-green': '#00a86b',
        'sulnox-cyan': '#00d9ff',
        'ntl-slate': '#f1f5f9',
        'ntl-slate-dark': '#64748b',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
