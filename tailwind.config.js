/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url(/logo.svg)",
        exit: "url(/exit.svg)",
      },
    },
    fontFamily: {
      inter: "var(--font-family)",
    },
    container: {
      center: true,
      padding: { DEFAULT: "1rem" },
      screens: {
        DEFAULT: "1240px",
      },
    },
    colors: {
      primary: {
        DEFAULT: "var(--color-primary)",
      },
      secondary: {
        DEFAULT: "var(--color-secondary)",
      },
      white: {
        DEFAULT: "var(--color-white)",
      },
      brand: {
        DEFAULT: "var(--color-brand)",
      },
      deny: {
        DEFAULT: "var(--color-deny)",
      },
      accent: {
        DEFAULT: "var(--color-accent)",
      },
      annonce: {
        DEFAULT: "var(--color-annonce)",
      },
      tab: {
        DEFAULT: "var(--color-tab-bg)",
      },
      hover: {
        DEFAULT: "var(--color-hover)",
      },
      steps: {
        DEFAULT: "var(--color-steps)",
      },
      border: {
        DEFAULT: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
