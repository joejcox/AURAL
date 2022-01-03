const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      red: colors.red,
      gray: colors.gray,
      purple: colors.purple,
      indigo: colors.indigo,
      blue: colors.blue,
      main: colors.orange,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      primary: ["Source Sans Pro", "sans-serif"],
      secondary: ["Nunito Sans", "sans-serif"],
    },
    wordBreak: {
      "break-word": "break-word",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      lineHeight: {
        xl: "1",
      },
      zIndex: {
        1: "1",
        100: "100",
        200: "200",
        500: "500",
        999: "999",
        max: "2147483647",
      },
      backgroundImage: {
        "hero-main": "url('assets/images/sslmixer.jpg')",
        carousel: "url('assets/images/recordstore.jpg')",
        cart: "url('https://i.pinimg.com/originals/31/b1/bd/31b1bdb06631a4d9184e05bfe8af5e64.jpg')",
      },
    },
  },
}
