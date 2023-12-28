import type {Config} from "tailwindcss";

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
          "400": "#232935",
          "700": "#a9adb8",
          "900": "#0a101e",
        },
        slate: {"400": "#a9adb8", "500": "#101624", "900": "#151b2980"},
      },
    },
    boxShadow: {
      sm: "0 5px 10px #fec64450",
    },
    backgroundImage: {},
  },
  plugins: [],
};
export default config;
