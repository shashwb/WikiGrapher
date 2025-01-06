// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          light: "#4CAF50",
          DEFAULT: "#2E7D32",
          dark: "#1B5E20",
        },
      },
    },
  },
  plugins: [],
};
