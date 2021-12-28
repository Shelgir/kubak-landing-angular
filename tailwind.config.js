module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kubakMain: {
          DEFAULT: "#f38e3e",
        },
        KubakSecondary: {
          DEFAULT: "#fffaf6",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
    ],
  },
};
