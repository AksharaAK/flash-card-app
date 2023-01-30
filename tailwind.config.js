/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const customClass = plugin(({ addUtilities }) => {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-red": "#bf0603",
      "primary-blue": "#001427",
      neutral: "#f4d58d",
      "secondary-red": "#8d0801",
      "secondary-blue": "#708d81",
    },
  },
  plugins: [customClass],
};
