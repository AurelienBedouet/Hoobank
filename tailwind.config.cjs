/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        ping: {
          '0%': {transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)'},
          '70%': {transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)'},
          '100%': {transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'},
        }
      },
      animation: {
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;'
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "350px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
