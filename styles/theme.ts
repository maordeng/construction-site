export const theme = {
  // 🔵 BACKWARD COMPATIBILITY (שדרוג גוונים)
  bg: {
    section: {
      light: "bg-[#F6F6F3]", // רקע חם ולא לבן מסנוור
      muted: "bg-[#F1F1EE]", // שכבה מעט כהה יותר
    },

    header: {
      normal:
        "bg-white/30 backdrop-blur-xl border-b border-black/5",

      // 🔥 FIX חשוב: יותר opaque כדי לא לאבד כפתורים
      scrolled:
        "bg-[#F6F6F3]/95 backdrop-blur-xl border-b border-black/10 shadow-sm",
    },
  },

  text: {
    dark: "text-[#1C1C1C] tracking-tight",
    darkSecondary: "text-[#5F5F5F] leading-relaxed",
  },

  // 🟢 DESIGN SYSTEM
  colors: {
    bg: {
      base: "#F6F6F3",
      surface: "#FFFFFF",
      elevated: "#FAFAF7",
    },

    text: {
      primary: "#1C1C1C",
      secondary: "#5F5F5F",
      muted: "#8A8A8A",
    },

    border: {
      default: "border-[#E6E6E0]",
      soft: "border-[#F0F0EC]",
    },
  },

  components: {
    button: {
      primary:
        "bg-black text-white hover:bg-[#1A1A1A] transition-all duration-300 px-8 py-4 rounded-2xl font-medium tracking-wide shadow-sm hover:shadow-lg",

      secondary:
        "bg-white/70 backdrop-blur-md border border-[#E6E6E0] text-gray-900 hover:bg-white transition px-8 py-3 rounded-2xl",

      whatsapp:
        "bg-[#25D366] text-white hover:opacity-90 transition-all duration-300 px-8 py-4 rounded-2xl font-medium tracking-wide shadow-sm hover:shadow-lg",
    },

    card:
      "bg-white/80 backdrop-blur-sm border border-[#E6E6E0] rounded-2xl shadow-sm hover:shadow-md transition",

    section: "px-6 py-28 md:py-32",
  },

  layout: {
    container: "max-w-6xl mx-auto px-6",
    containerNarrow: "max-w-4xl mx-auto px-6",
  },
};