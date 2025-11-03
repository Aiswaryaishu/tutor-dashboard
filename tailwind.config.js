/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        brand: {
          50: "#F1FBFB",
          100: "#E1F7F6",
          200: "#BDEBE7",
          300: "#90DED8",
          400: "#59CBC4",
          500: "#1FB5AD",
          600: "#17928C",
          700: "#147A75",
          800: "#0F5E5A",
          900: "#0C4B48",
        },
      },
      boxShadow: {
        soft: "0 8px 24px rgba(16,24,40,0.08)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      // ✅ Correct responsive breakpoints
      screens: {
        mobile: { max: "768px" },             // Mobile view (≤768px)
        tablet: { min: "769px", max: "1023px" }, // Tablet view (769–1023px)
        desktop: { min: "1024px" },           // Desktop view (≥1024px)
      },
    },
  },
  plugins: [],
};
