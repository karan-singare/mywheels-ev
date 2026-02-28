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
        muted: "#374151",
        mutedLight: "#6b7280",
        accent: "#84d06e",
        footerBg: "#141c6c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, #141c6c 0%, #1c298b 25%, #184cba 50%, #1a70c3 75%, #2994bf 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
