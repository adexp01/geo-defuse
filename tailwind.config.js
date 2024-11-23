/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF8EB",
        primary: "#f8dfc1"
      }
    }
  },
  plugins: [require("daisyui")]
};
