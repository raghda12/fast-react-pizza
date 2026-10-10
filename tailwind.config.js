/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      serif: ["Fraunces", "Georgia", "serif"],
      mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        cream: "#F5EEE2",
        paper: "#FBF8F2",
        crust: "#EFE3CF",
        flour: "#E2D6C3",
        wheat: "#CDBFA9",
        ink: {
          DEFAULT: "#1F1A17",
          soft: "#4A3F37",
        },
        ash: "#6E6157",
        tomato: {
          DEFAULT: "#C23A1E",
          dark: "#9E2C13",
          light: "#E9A58F",
        },
        basil: "#2E5B3B",
        danger: "#B42318",
      },
      fontSize: {
        huge: ["80rem ", { lineHeight: "1" }],
      },
      height: {
        screen: "100vh",
      },
    },
  },
  plugins: [],
};
