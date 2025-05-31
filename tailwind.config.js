/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // указываем где искать классы tailwind — обычно папка с исходниками
      "./public/index.html"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  