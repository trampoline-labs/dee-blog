/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "hsla(0, 0%, 96%, 1)",
        "dark-grey": "hsla(0, 0%, 47%, 1)",
        "main-grey": "hsla(0, 0%, 87%, 1)",
        "main-pink": "hsla(18, 100%, 81%, 1)",
        "main-pink-lighter": "hsla(18, 100%, 81%, 0.7)",
        "main-black": "hsla(0, 0%, 28%, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
