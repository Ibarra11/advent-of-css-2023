/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        supernova: "#fac900",
        spicyMustard: "#6e5a0d",
        bombay: "#aeaeae",
        orangeRed: "#ff4600",
        cognac: "#9a360e",
        fireEngineRed: "#c52425",
        silverTree: "#70bd91",
        turquoiseGreen: "#a0ccb7",
        spanishGreen: "#008a52",
        cruseo: "#0a5d2c",
        countyGreen: "#003d19",
        acadia: "#392f2d",
        scotchMist: "#efe9cb",
        nileBlue: "#243853",
        blackPearl: "#071126",
        pastelMagenta: "#ff9dbf",
        padua: "#b1e3cc",
        vistaBlue: "#94d1b4",
      },
      backgroundImage: {
        authHero: "url(../bg__auth.svg)",
      },
    },
    fontFamily: {
      condensed: ["Bebas Neue", "sans-serif"],
      handwriting: ["Kalam", "cursive"],
      sans: ["Inter", "sans-serif"],
      script: ["Agbalumo", "cursive"],
    },
  },
  plugins: [],
};
