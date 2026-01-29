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
        primary: "#3D9991",
        "primary-dark": "#2d7a73",
        dark: "#1F1F1F",
        "gray-light": "#f5f5f5",
        "gray-medium": "#999999",
      },
      fontFamily: {
        sans: ["proxima-nova", "system-ui", "sans-serif"],
        serif: ["adobe-garamond-pro", "Georgia", "serif"],
      },
      maxWidth: {
        "site": "1140px",
      },
    },
  },
  plugins: [],
};

export default config;