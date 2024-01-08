import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      serif: ["--var(--font-serif)"],
      sans: ["--var(--font-sans)"],
      inter: ["--var(--font-inter)"],
    },
    colors: {
      primary: {
        500: "#262626",
        400: "#3c3c3c",
      },
      secondary: {
        500: "#1e441e",
        100: "#f4f4f4",
      },
      white: "#ffffff",
    },
  },
  safelist: [
    {
      pattern:
        /.*(bg|text|border)-(primary|secondary|grey|negative|positive)-(100|200|300|400|500|600|700|800|900).*/,
    },
  ],
  plugins: [],
};
export default config;
