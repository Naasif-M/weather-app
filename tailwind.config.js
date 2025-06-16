/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    // ← Add this section
    {
      pattern: /bg-\[url\(.+\)\]/,
    },
    {
      pattern: /animate-\[.+\]/,
    },
    "animate-fadeBlink",
    "animate-fadeOut",
    "animate-fade-in",
  ],
  theme: {
    extend: {
      fontFamily: {
        chewy: ['"Chewy"', "cursive"],
        lora: ["Lora", "serif"], // Class: font-lora
        poppins: ["Poppins", "sans-serif"], // Class: font-poppins
        sans: ["Poppins", "sans-serif"], // Makes Poppins the default sans font
        barcode: ['"Libre Barcode 39 Text"', "cursive"],
        grand: ['"Grand Hotel"', "cursive"],
        pacifico: ['"Pacifico"', "cursive"],
        recursive: ['"Recursive"', "sans-serif"],
      },

      colors: {
        "custom-pink": "#cc005f",
        primary: "#3B82F6",
        secondary: "#10B981",
        dark: "#1E293B",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        fadeBlink: "fadeBlink 1s ease-in-out infinite",
        fadeOut: "fadeOut 2.5s ease-in-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
