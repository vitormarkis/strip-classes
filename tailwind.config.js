/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["var(--jetbrains)", "monospace"],
      },
      height: {
        interactive: "2.75rem",
      },
      minHeight: {
        interactive: "2.75rem",
      },
      borderRadius: {
        interactive: "0.375rem",
      },
    },
    colors: {
      background: {
        DEFAULT: "rgba(var(--background) / <alpha-value>)",
        shadow: "rgba(var(--background-shadow) / <alpha-value>)",
      },
      color: {
        DEFAULT: "rgba(var(--color) / <alpha-value>)",
        soft: "rgba(var(--color-soft) / <alpha-value>)",
        strong: "rgba(var(--color-strong) / <alpha-value>)",
      },
      heading: {
        DEFAULT: "rgba(var(--heading) / <alpha-value>)",
        soft: "rgba(var(--heading-soft) / <alpha-value>)",
        sub: "rgba(var(--heading-sub) / <alpha-value>)",
      },
      ring: {
        DEFAULT: "rgba(var(--ring) / <alpha-value>)",
      },
      symbol: {
        DEFAULT: "rgba(var(--symbol) / <alpha-value>)",
      },
      special: {
        back: {
          DEFAULT: "rgba(var(--special-back) / <alpha-value>)",
          weak: "rgba(var(--special-back-weak) / <alpha-value>)",
          soft: "rgba(var(--special-back-soft) / <alpha-value>)",
          strong: "rgba(var(--special-back-strong) / <alpha-value>)",
          bold: "rgba(var(--special-back-bold) / <alpha-value>)",
        },
        fore: {
          DEFAULT: "rgba(var(--special-fore) / <alpha-value>)",
          weak: "rgba(var(--special-fore-weak) / <alpha-value>)",
          soft: "rgba(var(--special-fore-soft) / <alpha-value>)",
          strong: "rgba(var(--special-fore-strong) / <alpha-value>)",
          bold: "rgba(var(--special-fore-bold) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
}
