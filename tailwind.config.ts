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
        lg: "1024px", 
      },
      dropShadow: {
        custom: "-100px 30px 100px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
export default config;
