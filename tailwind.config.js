/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // 16 + 267 + 72 + 267 + 72 + 267 + 16 = 977
      // => @media (min-width: 977px) { ... }
      'md': '977px',
      // 16 + 267 + 72 + 267 + 72 + 267 + 72 + 267 + 16 = 1316
      // => @media (min-width: 1316px) { ... }
      'lg': '1316px',
    },

    extend: {
      colors: {
        // dark mode elements
        darkBlue: "hsl(209, 23%, 22%)",
        // dark mode background
        vDarkBlue: "hsl(207, 26%, 17%)",
        // light mode text
        vvDarkBlue: "hsl(200, 15%, 8%)",
        // light mode input
        darkGray: "hsl(0, 0%, 52%)",
        // light mode background
        vLightGray: "hsl(0, 0%, 98%)",
        // dark mode text & light mode elements
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
