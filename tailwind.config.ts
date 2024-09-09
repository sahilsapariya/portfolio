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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      dropShadow: {
        custom: "-100px 30px 100px rgba(0, 0, 0, 0.20)",
      },
      boxShadow: {
        solid: "4px 4px 1px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
