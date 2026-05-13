export const theme = {
  // 🔵 BACKWARD COMPATIBILITY
  bg: {
    section: {
      light: "bg-white",
      muted: "bg-gray-50",
    },

    header: {
      normal:
        "bg-white/10 backdrop-blur-xl border-b border-black/5",

      scrolled:
        "bg-white/70 backdrop-blur-xl border-b border-black/10 shadow-sm",
    },
  },

  text: {
    dark: "text-zinc-900 tracking-tight",
    darkSecondary: "text-zinc-600 leading-relaxed",
  },

  // 🟢 SYSTEM החדש
  colors: {
    bg: {
      base: "bg-white",
      surface: "bg-gray-50",
      elevated: "bg-white",
    },

    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      muted: "text-gray-500",
    },

    border: {
      default: "border-gray-200",
      soft: "border-gray-100",
    },
  },

  components: {
    button: {
      primary:
      "bg-black text-white hover:bg-zinc-800 transition-all duration-300 px-8 py-4 rounded-2xl font-medium tracking-wide shadow-sm hover:shadow-lg",

      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 transition px-8 py-3 rounded-xl",

        whatsapp:
        "bg-[#25D366] text-white hover:opacity-90 transition-all duration-300 px-8 py-4 rounded-2xl font-medium tracking-wide shadow-sm hover:shadow-lg",
    },

    card:
      "bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition",

      section: "px-6 py-28 md:py-32",
  },

  layout: {
    container: "max-w-6xl mx-auto px-6",
    containerNarrow: "max-w-4xl mx-auto px-6",
  },
};