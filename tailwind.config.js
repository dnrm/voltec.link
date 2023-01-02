/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63B7E5",
        technologies: "#c2c2c2",
        headings: "#454545",
        dark: "#222222",
        "secondary-dark": "#e1e1e1",
        "headings-dark": "#F4F4F4"
      },
      fontFamily: {
        "sans": "Neue Campton, sans-serif", 
      },
    },
  },
  plugins: [],
};
