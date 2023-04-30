/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts,tsx,mdx}", "./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
        },
      },
    },
  },
  plugins: [],
};
