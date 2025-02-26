import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0a192f',
        },
        text: {
          light: '#1a202c',
          dark: '#e2e8f0',
        },
        primary: {
          light: '#3b82f6',
          dark: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
};

export default config;
