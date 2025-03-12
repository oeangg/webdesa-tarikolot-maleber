/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        backgroundColor: "rgb(var(--backgroundColor))",
        backgroundSecondary: "rgb(var(--backgroundSecondary))",
        foregroundPrimary: "rgb(var(--foregroundPrimary))",
        foregroundSecondary: "rgb(var(--foregroundSecondary))",
        primaryColor: "rgb(var(--primaryColor))",
        secondaryColor: "rgb(var(--secondaryColor))",
        highlightColor: "rgb(var(--highlightColor))",
        hoverColor: "rgb(var(--hoverColor))",
        borderPrimary: "rgb(var(--borderPrimary))",
        borderSecondary: "rgb(var(--borderSecondary))",
      },
      height: {
        screenMinusNav: "calc(100vh - 120px)",
      },
    },
  },
  plugins: [],
};
