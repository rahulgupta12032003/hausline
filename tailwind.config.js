/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        nanum: ["var(--font-nanum)"],
        playfair: ["var(--font-playfair)"],
        gothic: ["var(--font-gothic)"],
      },
      colors: {
        goldish: {
          100: "#f2eddd",
          200: "#e3d8bc",
          300: "#d1be94",
          400: "#bfa370",
          500: "#b19f6f",
          600: "#8c7d59",
          700: "#6e6445",
        },
      },
    },
  },
  plugins: [],
}

