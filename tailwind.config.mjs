import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["'DM Sans'", ...fontFamily.sans],
      serif: ["'Source Serif 4 Variable'", "Inter", ...fontFamily.serif],
    },
    colors: {
      transparent: "var(--color-transparent)",
      white: "#FFFFFF",
      "white-light": "rgba(255, 255, 255, 0.72)",
      "header-bg": "#060606",
      text: "#18213A",
      "text-light": "rgba(24, 33, 58, 0.64)",
      grey: "#E7E8F2",
      principles: "#FFFAF2",
      about: "#0C0F19",
      team: "#E7E8F2",
      "team-links": "#4543BE",
      button: "#4543BE",
      "case-study": "#E9EFE8",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
