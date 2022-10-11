const { screens } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        error: colors.red,
        warning: colors.orange,
        success: colors.green,
        info: colors.sky,
        base: colors.slate,
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
    screens: {
      xs: "475px",
      ...screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
