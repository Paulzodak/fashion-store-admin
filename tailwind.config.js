/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderGrey: "#DEE1E6FF",
        textGrey: "#BCC1CAFF",
        btnGreen: " #459D7AFF",
        bgGrey: "#F3F4F6FF",
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/home/hero.jpg')",
        shopHero: "url('/assets/shop/hero.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      spacing: {
        fluidWidth: "20rem",
        fluidWidthSm: "35rem",
        fluidWidthMd: "40rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
