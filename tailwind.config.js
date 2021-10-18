const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'dracula',
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['cupcake', 'emerald', 'dracula'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
