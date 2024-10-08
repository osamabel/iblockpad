import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'graphik-arabic': ['Graphik Arabic', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#5865F2', 
        black: '#000000',
        white: '#ffffff',
        green: '#57f287',
        yellow: '#fee75c',
        fuchsia: '#eb459e',
        red: '#ed4245',
      },
    },
  },
  plugins: [],
};
export default config;
