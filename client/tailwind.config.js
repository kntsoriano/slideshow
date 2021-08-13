module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        'screen/2': 'calc(50vh)',
        'screen-audio': 'calc(100vh - 40px)',
        'screen/2-audio': 'calc(50vh - 40px)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
