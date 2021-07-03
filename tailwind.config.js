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
        "theme-100": "#dbffb5",
        "theme-200": "#c5f296",
        "theme-300": "#98fa2f",
        "theme-400": "#85ed15",
        "theme-500": "#7fdb1d",
        "theme-600": "#50E3C2",
        "theme-700": "#77c423",
        themecolor1: "#ff3939",
        dropdown: "#232323",
        dropdownborder: "#303030",
        offwhite: "#fbf8f6",
        offblack: "#2B2B2B", //191a1d
        secondarytextcolor: "#52525B",
        grayonblack: "#777777",
      },
      height: {
        screen75: "75vh",
        screen58: "58vh",
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
