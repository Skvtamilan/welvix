import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#07111f",
        foreground: "#e5eef8",
        surface: "#0d1728",
        border: "rgba(148, 163, 184, 0.18)",
        primary: "#4cc9f0",
        primaryDark: "#0ea5e9",
        accent: "#9be15d",
        muted: "#94a3b8"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(76, 201, 240, 0.1), 0 20px 80px rgba(14, 165, 233, 0.15)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
