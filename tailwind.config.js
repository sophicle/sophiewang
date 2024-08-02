/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        poople: { DEFAULT: "#a36e81", light: "#D09CAF", dark: "#7B4E5F" },
        cream: "#F5F5DC",
        darkBackground: "#1a1a1a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
