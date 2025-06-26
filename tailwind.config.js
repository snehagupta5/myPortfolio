/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(210, 100%, 70%)",
        primary_alt: "hsl(210, 56%, 35%)",
        title: "hsl(228, 8%, 95%)",
        text_color: "hsl(228, 8%, 65%)",
        body_colour: "hsl(228, 15%, 20%)",
        container_colour: "hsl(228, 15%, 15%)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        biggest: "2rem",
        bigger: "1.25rem",
        h1: "1.5rem",
        h2: "1.25rem",
        h3: "1rem",
        normal: ".938rem",
        small: ".813rem",
        smaller: ".75rem",
      },
      zIndex: {
        tooltip: 10,
        fixed: 100,
      },
    },
  },
  plugins: [],
}
