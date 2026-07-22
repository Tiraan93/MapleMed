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
          DEFAULT: "#1f1832", // /gptool PortfolioAI text-navy
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
        // /gptool (PortfolioAI) theme tokens
        background: {
          DEFAULT: "#f9f2fb",
          alt: "#f2e8f8",
        },
        foreground: "#1f1832",
        muted: {
          DEFAULT: "#6c597b",
          light: "#9e84ad",
        },
        card: {
          DEFAULT: "#ffffff",
          warm: "#f6effb",
        },
        border: {
          DEFAULT: "#d9c5e5",
          light: "#ede3f4",
        },
        accent: {
          DEFAULT: "#b16aba",
          dark: "#8f3e9a",
          light: "#dfc2ec",
          coral: "#b16aba",
          "coral-dark": "#8a2b91",
        },
        cta: {
          DEFAULT: "#b16aba",
          hover: "#8a2b91",
          soft: "#f4e6ff",
        },
        "success-bg": "#f4effa",
        "success-border": "#d9c8e8",
        "success-text": "#5a3d73",
        "warning-bg": "#f7effa",
        "warning-border": "#dbc6e7",
        "warning-text": "#795aa2",
        "error-bg": "#fbeaf7",
        "error-border": "#e8c4dd",
        "error-text": "#7f3f75",
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
        serif: [
          "Georgia",
          "Times New Roman",
          "DM Serif Display",
          "serif",
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
        "loader-phrase": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "12%": { opacity: "1", transform: "translateY(0)" },
          "85%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "loader-phrase": "loader-phrase 3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
