import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          primary: {
            main: "#73E2A7",
            dark: "#1b512d",
            base: "#1c7c54"
          },
          background: {
            main: "#DEF4C6",
            dark: "#BCD0A7"
          },
          typograph: "#B1CF5FF",
          warning: "#de5302",
          danger: "#eb091c"
        }
      }
    },
  },
  plugins: [],
};
export default config;
