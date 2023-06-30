module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      backgroundImage: {
        'hero': "url('https://braininventory.s3.us-east-2.amazonaws.com/images/hero.png')"
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }   
    },
  },
  plugins: [require('daisyui')],
}
