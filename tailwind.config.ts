import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; 

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        acumen: {
          primary: "hsl(277,72%,26%)", 
          secondary: "hsl(277,72%,22%)", 
          light: "hsl(277,72%,30%)", 
        },
        palette: {
          'Purple Heart': "#4F1271",
          'Pastel Lavender': "#BFACC8",
          'Royal Purple': "#783F8E",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      // --- ADD THIS SECTION ---
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "scroll": "scroll 30s linear infinite", // Speed of the scroll
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.05)" },
        },
        // The infinite scroll logic
        "scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Moves half the width (the width of the original set)
        },
      },
      // ------------------------
    },
  },
  plugins: [tailwindcssAnimate], 
};

export default config;