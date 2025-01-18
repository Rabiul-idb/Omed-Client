/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'download-bg': "url('/public/bg-download.webp')",
      },
      colors: {
        'clr-1': '#fef5ee',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

