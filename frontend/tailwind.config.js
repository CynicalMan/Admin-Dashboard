/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        bgPrimary: "var(--color-bg-primary)",
        tPrimary: "var(--color-text-primary)",
        tSecondary: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [],
}