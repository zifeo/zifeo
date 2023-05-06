/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx,mdx,md}",
    "./app/**/*.{ts,tsx,mdx,md}",
    "./content/**/*.{ts,tsx,mdx,md}",
  ],
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
