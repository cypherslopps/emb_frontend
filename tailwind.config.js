const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["lexend", 'ibm plex sans', ...fontFamily.sans],
        consolas: ['consolas', ...fontFamily.sans],
        noto_sans: ['noto sans', ...fontFamily.sans]
      },
      screens: {
        xlg: "1200px",
        slg: "1029px",
        xxsm: "299px",
        mds: "425px",
        smd: "866px"
      },
      fontSize: {
        "3.5xl": "2rem",
        "4xl": "2.5rem",
        "2.2xl": "1.7rem",
        "6.5xl": "4rem"
      },
      display: {
        none: "none"
      },
      boxShadow: {
        newsletter: "0 59px 51px -34px rgba(0,103,245,.3)"
      },
      colors: {
        dark: {
          100: "#111",
          shade: {
            100: "#0f0f0f",
            200: "#0e0e0e",
            300: "#0c0c0c",
            400: "#0a0a0a",
            500: "#090909",
            600: "#070707",
            700: "#050505",
            800: "#030303",
            900: "#020202"
          },
          tint: {
            100: "#292929",
            200: "#414141",
            300: "#585858",
            400: "#707070",
            500: "#888888",
            600: "a0a0a0",
            700: "#b8b8b8",
            800: "#cfcfcf",
            900: "#e7e7e7"
          }
        },
        "dark-text": {
          100: "#696969",
          shade: {
            100: "#5f5f5f",
            200: "#545454",
            300: "#4a4a4a",
            400: "#3f3f3f",
            500: "#353535",
            600: "#2a2a2a",
            700: "#1f1f1f",
            800: "#151515"
          },
          tint: {
            100: "#787878",
            200: "#878787",
            300: "#969696",
            400: "#a5a5a5",
            500: "#b4b4b4",
            600: "#c3c3c3",
            700: "#d2d2d2"
          }
        },
        primary: {
          0: "#e7f5ff",
          100: "#d0ebff",
          200: "#a5d8ff",
          300: "#74c0fc",
          400: "#4dabf7",
          500: "#339af0",
          600: "#228be6",
          700: "#1c7ed6",
          800: "#1971c2",
          900: "#1864ab"
        },
        gray: {
          5: "rgba(107, 114, 128, 0.02)"
        }
      },
      width: {
        5: "1.2rem",
      },
      height: {
        5: "1.2rem"
      },
      gridTemplateColumns: {
        post_excerpt_content: "1fr 15.7rem",
        footer: "33vw 1fr",
        "footer-navigation": "max-content repeat(2, 1fr)",
        "max-content-full": "max-content 1fr",
        "sign-in-container": "60% 40%"
      },
      gridTemplateRows: {
        "3.2": "repeat(3, calc(100%/3.5))",
        "max-content": "max-content"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
