/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kopin-green': '#2d6e5e',
        'kopin-green-dark': '#1e4a3f',
        'kopin-green-light': '#4a8a7a',
        'kopin-teal': '#2d6e5e',
        'kopin-teal-dark': '#1e4a3f',
        'kopin-accent': '#e8f5f2',
        'kopin-gold': '#d4af37',
      },
      backgroundImage: {
        'kopin-gradient': 'linear-gradient(135deg, #2d6e5e 0%, #1e4a3f 100%)',
        'kopin-gradient-dark': 'linear-gradient(135deg, #1e4a3f 0%, #0f2e26 100%)',
      }
    },
  },
  plugins: [],
}
