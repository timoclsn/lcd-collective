const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
      team: "#E9EFE8",
      "team-links": "#3D8269",
      button: "#4543BE",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
