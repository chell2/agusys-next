module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      'emerald', // first one will be the default theme
      'dark',
      'forest',
      'synthwave',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
