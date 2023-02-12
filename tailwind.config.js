/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
