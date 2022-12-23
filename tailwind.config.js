/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63B7E5",
        headings: "#454545",
      },
      fontFamily: {
        "sans": "Neue Campton, sans-serif", 
      },
    },
  },
  plugins: [],
};
