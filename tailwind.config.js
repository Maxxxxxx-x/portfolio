/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,css,svelte,ts}"],
  daisyui: {
    theme: ["night", "dark"]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
    require("daisyui")
  ],
}

