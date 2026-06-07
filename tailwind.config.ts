import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep maple red
        maple: {
          50: "#fdf3f3",
          100: "#fbe5e5",
          200: "#f6cccc",
          300: "#eda6a6",
          400: "#e07373",
          500: "#cf4747",
          600: "#b8302f",
          700: "#9a2625", // primary deep maple red
          800: "#802323",
          900: "#6b2222",
          950: "#3a0e0e",
        },
        // Dark navy
        navy: {
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#0f1c33",
          900: "#0a1428", // primary dark navy
          950: "#060d1c",
        },
        // Soft grey surfaces
        mist: {
          50: "#fafbfc",
          100: "#f4f6f8",
          200: "#e9edf2",
          300: "#dbe1e9",
        },
        // Accents
        sky: {
          accent: "#e8f1fb",
          accentBorder: "#cfe0f4",
        },
        blush: {
          accent: "#fceeee",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10, 20, 40, 0.04), 0 8px 24px rgba(10, 20, 40, 0.06)",
        card: "0 1px 3px rgba(10, 20, 40, 0.05), 0 12px 32px rgba(10, 20, 40, 0.08)",
        lift: "0 18px 48px rgba(10, 20, 40, 0.14)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
