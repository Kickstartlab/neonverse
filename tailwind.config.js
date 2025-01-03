/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "rgb(245, 248, 255, 1);",
        "50": "#141619",
        "100": "#000",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.64);",
        "100": "#fff",
        "200": "#rgba(255, 255, 255, 0.8)",
      },
      blue: {
        "50": "rgba(20, 16, 44, 1);",
        "100": "#4776E6",
        "200": "rgba(19, 27, 77, 0.8)",
      },
      red: {
        "50": "#FF4880",
        "100": "#D93C3C",
      },
      yellow: {
        "100": "#FEAE37",
      },
      purple: {
        "100": "#8E54E9",
      }
    },
    fontFamily: {
      'inter': ["'Inter', sans-serif"],
      'libre': ["'Libre Franklin', sans-serif"],
      'urbanist': ['"Urbanist", sans-serif']
    }
  },
  plugins: [],
}
