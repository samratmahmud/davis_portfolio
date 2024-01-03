import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fec544",
        gray: {
          "100": "#fdfeff",
          "300": "#dee2e6",
          "400": "#232935",
          "600": "#3f4551",
          "700": "#a9adb8",
          "900": "#0a101e",
          "950": "#070d1b",
        },
        slate: {
          "400": "#a9adb8",
          "500": "#101624",
          "600": "rgba(255,255,255)",
          "800": "#151b2980",
        },
      },
    },
    fontSize: {
      xs: ["15px", {lineHeight: "1.6em"}],
      sm: ["18px", {lineHeight: "1.6em"}],
      md: ["20px", {lineHeight: "1.2em"}],
      base: ["22px", {lineHeight: "1.2em", letterSpacing: "1px"}],
      lg: ["24px", {lineHeight: "1.2em", letterSpacing: "1px"}],
      xl: ["26px", {lineHeight: "1.2em"}],
      "2xl": ["30px", {lineHeight: "1.2em"}],
      "3xl": ["32px", {lineHeight: "1.2em"}],
      "4xl": ["34px", {lineHeight: "1.2em"}],
      "5xl": ["36px", {lineHeight: "1.2em"}],
      "6xl": ["40px", {lineHeight: "1.2em"}],
      "7xl": ["60px", {lineHeight: "1.2em"}],
      "8xl": ["90px", {lineHeight: ""}],
      "9xl": ["14px", {lineHeight: "1.6em"}],
      "10xl": ["16px", {lineHeight: "1.6em"}],
      "11xl": ["28px", {lineHeight: "1.2em"}],
    },
    fontFamily: {
      inter: ["Inter", ...fontFamily.sans],
      roboto: ["Roboto", ...fontFamily.sans],
    },
    boxShadow: {
      sm: "0 5px 10px #fec64450",
    },
    backgroundImage: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "0.625rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
    },
  },
  plugins: [],
};
export default config;
