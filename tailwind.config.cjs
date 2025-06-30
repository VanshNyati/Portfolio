module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        secondary: "#9333ea",
      },
      boxShadow: {
        glow: "0 0 15px rgba(59, 130, 246, 0.6)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
