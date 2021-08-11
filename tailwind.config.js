const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        "theme-100": "#9cffe9",
        "theme-200": "#75ffe0",
        "theme-300": "#6bfada",
        "theme-400": "#61f2d2",
        "theme-500": "#58e8c8",
        "theme-600": "#50E3C2",
        "theme-700": "#3ed6b4",
        dropdown: "#232323",
        dropdownborder: "#303030",
        offblack: "#2B2B2B", //191a1d
        lightoffblack: "#333333", //191a1d
        secondarytextcolor: "#52525B",
        grayonblack: "#777777",
      },
      height: {
        screen75: "75vh",
        screen68: "68vh",
        screen58: "58vh",
      },
      top: {
        "1/5": "20%",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  },
};
