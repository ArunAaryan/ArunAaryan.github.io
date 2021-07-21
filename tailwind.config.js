module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#222323",
        primary: "#F16B4E",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
