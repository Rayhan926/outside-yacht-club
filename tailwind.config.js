/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#FFF24D",
        secondary: "#8743CF",
        dark: "#040503",
        "dark-soft": "#1D1D1D",
        gray: "#4A4A4A",
      },
      screens: {
        maxmd: { max: "767px" },
      },
    },
  },
  plugins: [],
};
