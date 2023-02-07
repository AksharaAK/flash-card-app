/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const customClass = plugin(({ addUtilities }) => {
  addUtilities({
    ".my-rotate-x-180": {
      transform: "rotateX(180deg)",
    },
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
    ".my-grid-template-col": {
      "grid-template-columns": "repeat(auto-fill, minmax(200px, 1fr))",
    },
    ".my-bg-hero": {
      "background-image":
        "url('https://images.pexels.com/photos/9494911/pexels-photo-9494911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "overlay-pink": "#510087",
        "overlay-purple": "#190028",
        "icon-pink": "#9d30b3",
        "custom-grey": "#94a3b8",
      },
    },
  },
  plugins: [customClass],
};
