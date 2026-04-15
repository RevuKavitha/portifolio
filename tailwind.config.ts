import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0f172a",
        accent: "#22d3ee",
        accentAlt: "#f97316"
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
