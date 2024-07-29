/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "1/3": "33.3333vh",
        "2/5": "40.0vh",
      },
      borderWidth: {
        4: "3px",
      },
      backgroundImage: {
        image1: "url('/src/assets/minus.png')",
        image2: "url('/src/assets/plus.png')",
      },
    },
  },
  plugins: [],
};
