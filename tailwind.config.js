module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          surface: "rgba(0,0,0,0.2)",
          elevated: "rgba(0,0,0,0.6)",
          overlay: "rgba(0,0,0,0.8)",
  
          textPrimary: "#ffffff",
          textSecondary: "rgba(255,255,255,0.7)",
          textMuted: "rgba(255,255,255,0.5)",
  
          lightSurface: "#ffffff",
          lightMuted: "#f5f5f5",
        },
      },
    },
    plugins: [],
  };