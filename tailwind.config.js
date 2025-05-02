/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblack: "#020816",
        darkbackground: "#1d1d1f",
        primary: "#FCB51F",
        secondary: "#133157",
      },
      fontFamily: {
        audiowide: ["Audiowide", "cursive"],
      },
      backgroundImage: {
        footerBackground:
          "radial-gradient(circle, rgb(19, 49, 87,1) 0%, rgba(2,8,22,1) 58%);",
        background:
          "radial-gradient(circle, rgb(19, 49, 87,1) 0%, rgba(2,8,22,1) 80%);",
      },
    },
  },
  plugins: [],
};
