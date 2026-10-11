/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--color-hairline, #e3e8ee)",
        input: "var(--color-hairline-input, #a8c3de)",
        ring: "var(--color-primary, #533afd)",
        background: "var(--color-canvas, #ffffff)",
        foreground: "var(--color-ink, #0d253d)",
        primary: {
          DEFAULT: "var(--color-primary, #533afd)",
          deep: "var(--color-primary-deep, #4434d4)",
          press: "var(--color-primary-press, #2e2b8c)",
          soft: "var(--color-primary-soft, #665efd)",
          subdued: "var(--color-primary-bg-subdued, #ebebfd)",
          foreground: "var(--color-on-primary, #ffffff)",
        },
        secondary: {
          DEFAULT: "var(--color-ink, #0d253d)",
          foreground: "var(--color-on-primary, #ffffff)",
        },
        destructive: {
          DEFAULT: "var(--color-ruby, #ea2261)",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "var(--color-canvas-soft, #f6f9fc)",
          foreground: "var(--color-ink-mute, #64748d)",
        },
        accent: {
          DEFAULT: "var(--color-primary-bg-subdued, #ebebfd)",
          foreground: "var(--color-primary, #533afd)",
        },
        stripe: {
          indigo: "#533afd",
          deep: "#4434d4",
          press: "#2e2b8c",
          dark: "#0a2540",
          navy: "#1c1e54",
          ink: "#0d253d",
          secondary: "#273951",
          mute: "#64748d",
          canvas: "#ffffff",
          soft: "#f6f9fc",
          cream: "#f5e9d4",
          hairline: "#e3e8ee",
          ruby: "#ea2261",
          magenta: "#f96bee",
          cyan: "#00d4ff",
          lemon: "#f5a623",
        },
      },
      borderRadius: {
        pill: "9999px",
        xl: "16px",
        lg: "12px",
        md: "8px",
        sm: "6px",
        xs: "4px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "Menlo", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
