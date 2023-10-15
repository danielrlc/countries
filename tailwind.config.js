/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // 16 + 250 + 70 + 250 + 70 + 250 + 16 = 912
      // => @media (min-width: 912px) { ... }
      'md': '912px',
      // 16 + 250 + 70 + 250 + 70 + 250 + 70 + 250 + 16 = 1242
      // => @media (min-width: 1242px) { ... }
      'lg': '1242px',
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
