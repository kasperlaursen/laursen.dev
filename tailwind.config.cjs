/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      surface: {
        1: getColorVar("surface", "1"),
        2: getColorVar("surface", "2"),
        3: getColorVar("surface", "3"),
      },
      text: {
        subtle: getColorVar("text", "subtle"),
        DEFUALT: getColorVar("text", "DEFUALT"),
        strong: getColorVar("text", "strong"),
        colored: getColorVar("text", "colored"),
      },
      primary: {
        50: getColorVar("primary", "50"),
        100: getColorVar("primary", "100"),
        200: getColorVar("primary", "200"),
        300: getColorVar("primary", "300"),
        400: getColorVar("primary", "400"),
        500: getColorVar("primary", "500"),
        600: getColorVar("primary", "600"),
        700: getColorVar("primary", "700"),
        800: getColorVar("primary", "800"),
        900: getColorVar("primary", "900"),
      },
      secondary: {
        50: getColorVar("secondary", "50"),
        100: getColorVar("secondary", "100"),
        200: getColorVar("secondary", "200"),
        300: getColorVar("secondary", "300"),
        400: getColorVar("secondary", "400"),
        500: getColorVar("secondary", "500"),
        600: getColorVar("secondary", "600"),
        700: getColorVar("secondary", "700"),
        800: getColorVar("secondary", "800"),
        900: getColorVar("secondary", "900"),
      },
      accent: {
        50: getColorVar("accent", "50"),
        100: getColorVar("accent", "100"),
        200: getColorVar("accent", "200"),
        300: getColorVar("accent", "300"),
        400: getColorVar("accent", "400"),
        500: getColorVar("accent", "500"),
        600: getColorVar("accent", "600"),
        700: getColorVar("accent", "700"),
        800: getColorVar("accent", "800"),
        900: getColorVar("accent", "900"),
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

function getColorVar(name, value) {
  return `rgb(var(--${name}-${value}) / <alpha-value>)`;
}
