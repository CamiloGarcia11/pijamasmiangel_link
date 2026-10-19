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
          bg: "#FAF4F0",
          cream: "#FCF6F2",
          cardBorder: "#EFE5E0",
          wine: "#813544",
          wineDark: "#6D2B38",
          wineLight: "#A54B5B",
          sage: "#66775E",
          sageDark: "#56654E",
          sageLight: "#7D8F74",
          sageBg: "#DDE7DA",
          roseBg: "#FBE4E2",
          blushBg: "#FBE7E3",
          pinkBg: "#FDE5E8",
          taupe: "#827678",
          charcoal: "#1E1919",
          pureWhite: "#FFFFFF",
          gold: "#C5A059",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "var(--font-quicksand)", "sans-serif"],
        cutie: ["var(--font-playfair)", "Georgia", "serif"],
        sweet: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 10s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(10px) rotate(-1deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.02)", opacity: "0.92" },
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
        "luxury-card": "0 8px 24px -6px rgba(160, 120, 120, 0.12), 0 2px 6px -1px rgba(160, 120, 120, 0.06)",
        "luxury-card-hover": "0 14px 32px -8px rgba(160, 120, 120, 0.2), 0 4px 12px -2px rgba(160, 120, 120, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
