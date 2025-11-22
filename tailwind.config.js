/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005F73",
        primaryDark: "#004659",
        secondary: "#6ED6E4",
        skyBlue: "#4F7FAF",
        background: "#F3F7FA",
        deep: "#0F172A",
      },
    },
  },
  plugins: [],
};

export default config;
