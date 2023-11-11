/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        merucry: "#419EBB",
        venus: "#EDA249",
        earth: "#6D2ED5",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC1A2",
        neptune: "#2D68F0",
        planetGray: {
          300: "#838391",
          700: "#38384F",
          900: "#070724",
        },
      },
      fontFamily: {
        mono: ["var(--font-antonio)"],
        sans: ["var(--font-spartan)"],
      },
    },
  },
  plugins: [],
};
