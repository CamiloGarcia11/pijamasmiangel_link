import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FDE2E8",
          pinkSoft: "#FCE4EC",
          pinkMuted: "#F8D7E3",
          cream: "#FAF4F0",
          charcoal: "#1E1E1E",
          pureWhite: "#FFFFFF",
          foliage: "#5B6A54",
          foliageLight: "#6B7B64",
          foliageDark: "#4D5C47",
          neutral: "#FBF5F0",
          gold: "#C5A059",
          wine: "#813544",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-quicksand)", "var(--font-montserrat)", "sans-serif"],
        cutie: ["var(--font-comfortaa)", "var(--font-playfair)", "cursive", "sans-serif"],
        sweet: ["var(--font-quicksand)", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 10s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "marquee": "marquee 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-1.5deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.03)", opacity: "0.9" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "soft-card": "0 10px 30px -5px rgba(30, 30, 30, 0.06), 0 4px 12px -2px rgba(30, 30, 30, 0.03)",
        "hover-card": "0 16px 40px -8px rgba(30, 30, 30, 0.12), 0 8px 16px -4px rgba(30, 30, 30, 0.06)",
        "pill-glow": "0 0 25px rgba(253, 226, 232, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
