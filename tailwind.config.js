const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "Very-dark-blue": "hsl(233, 47%, 7%)",
        "Dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "Soft-violet": "hsl(277, 64%, 61%)",
        White: "hsl(0, 0%, 100%)",
        "Slightly-transparent-white (main paragraph)": "hsla(0, 0%, 100%, 0.75)",
        "Slightly-transparent-white (stat headings)": "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
