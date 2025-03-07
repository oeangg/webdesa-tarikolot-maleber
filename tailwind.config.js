/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "rgb(var(--backgroundColor))",
        foregroundColor: "rgb(var(--foregroundColor))",
        primaryColor: "rgb(var(--primaryColor))",
        secondaryColor: "rgb(var(--secondaryColor))",
        highlightColor: "rgb(var(--highlightColor))",
        hoverColor: "rgb(var(--hoverColor))",
      },
      height: {
        screenMinusNav: "calc(100vh - 120px)",
      },
    },
  },
  plugins: [],
};
