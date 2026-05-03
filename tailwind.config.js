/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81", // Classic Medical Deep Blue
        accent: "#0284C7", // Bright Sky Blue
        background: "#F8FAFC", // Clean light grayish blue
        dark: "#0F172A",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ['Outfit', "sans-serif"],
        drama: ['"Cormorant Garamond"', "serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
}
