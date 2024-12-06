import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E4CEE5",
          200: "#D6B6D8",
          300: "#C89ECA",
          400: "#C192C4",
          500: "#B278B6",
          600: "#A174A4",
          700: "#725174",
          800: "#5C405D",
          900: "#463047",
        },
        supporting: {
          1: "#6F6EB5",
          2: "#B5AA6E",
          3: "#C27676",
          4: "#92B577",
          5: "#56604D",
        },
        grey: {
          DEFAULT: "#808080",
          100: "#D5D5D5",
          200: "#ACACAC",
          300: "#858585",
          400: "#616161",
          500: "#3E3E3E",
          600: "#2B2B2B",
          700: "#1A1A1A",
          800: "#0A0A0A",
          900: "#010101",
        },
        hue: {
          100: "#BDA886",
          200: "#BD9186",
          300: "#BD8692",
          400: "#BD86A9",
          500: "#B278B6",
          600: "#A386BD",
          700: "#8C86BD",
          800: "#8697BD",
          900: "#86AEBD",
        },
        background: {
          DEFAULT: "#F5F5F5",
          stroke: "#DFE4EA",
        },
        black: "#1E1E1E",
        white: "#FFFFFF",
        cream: "#F3EEE2",
        blue: {
          DEFAULT: "#008FFF",
        },
        yellow: {
          DEFAULT: "#FFBF00",
        },
        green: {
          DEFAULT: "#27453D",
        },
        orange: {
          DEFAULT: "#FF9933",
        },
        red: {
          DEFAULT: "#B63737",
        },
      },
    },
  },
  plugins: [],
};
export default config;