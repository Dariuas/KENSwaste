import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chartreuse: {
          50: '#f3ffe0',
          100: '#e5ffb5',
          200: '#ccff66',
          300: '#b3ff1a',
          400: '#9fff00',
          500: '#7FFF00',
          600: '#65cc00',
          700: '#4c9900',
          800: '#336600',
          900: '#1a3300',
          950: '#0d1a00',
        },
      },
    },
  },
  plugins: [],
};

export default config;
