/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 0, 0)',
        secondary: 'rgb(255, 255, 255)',
        tertiary: 'rgb(162, 61, 224)',
        quaternary: 'rgb(115, 21, 230)',
      },
    },
  },
  plugins: [],
}
