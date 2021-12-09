module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#101111",
        primary: "#F16B4E",
        // primary: "#44B8F2",
        secondary: {
          100: "#E2E2D5",
          // 50: "#E2E2D5",
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
