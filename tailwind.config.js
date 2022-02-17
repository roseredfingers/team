const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: false,
  content: ["*"],
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'dark-purple': '#2b0036',
      },
      columns: {
        '4xs': '14rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
