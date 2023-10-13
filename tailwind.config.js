/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gitRealBlack: "#010409",
        gitBlack: "#0D1117",
        gitText: "#C9D1D9",
        gitSecondaryText: "#88919A",
        gitSecondaryBlack: "#21262D",
        "primary": "#a991f7",
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",

      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

