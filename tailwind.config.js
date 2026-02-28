/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2FA4A9",
        secondary: "#3A6EA5",
        bg: "#F5F7F6",
        card: "#EDF1F0",
        textMain: "#2E2E2E",
        muted: "#6B7280",
        accent: "#F2B705",
        footerBg: "#1F2A44",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
