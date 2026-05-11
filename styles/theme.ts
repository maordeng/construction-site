export const theme = {
  colors: {
    bg: {
      base: "bg-white",
      surface: "bg-gray-300",
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
        "bg-black text-white hover:bg-gray-800 transition px-8 py-3 rounded-xl font-medium",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 transition px-8 py-3 rounded-xl",
      whatsapp:
        "bg-green-500 text-white hover:bg-green-600 transition px-8 py-3 rounded-xl font-medium",
    },

    card:
      "bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition",

    section:
      "px-6 py-20",
  },

  layout: {
    container: "max-w-6xl mx-auto px-6",
    containerNarrow: "max-w-4xl mx-auto px-6",
  },
};