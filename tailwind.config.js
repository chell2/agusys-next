const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'dark',
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['cupcake', 'emerald'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
