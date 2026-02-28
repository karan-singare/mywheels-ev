/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your palette (hex from rgb)
        primary: "#184cba",       // rgb(24, 76, 186)
        secondary: "#1a70c3",     // rgb(26, 112, 195)
        tertiary: "#2994bf",      // rgb(41, 148, 191)
        dark: "#141c6c",          // rgb(20, 28, 108)
        darkAlt: "#1c298b",       // rgb(28, 41, 139)
        teal: "#40b1af",          // rgb(64, 177, 175)
        green: "#84d06e",         // rgb(132, 208, 110)
        mint: "#61c194",          // rgb(97, 193, 148)
        olive: "#7aad4f",         // rgb(122, 173, 79)
        // Semantic
        bg: "#F0F4F8",
        card: "#EDF1F0",
        textMain: "#141c6c",
        muted: "#4a5568",
        accent: "#84d06e",
        footerBg: "#141c6c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
