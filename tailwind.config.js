/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.6rem', // Tamaño de letra personalizado
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ]
}

