/*
 * Will include new size for icons
 * */
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
    ({ addVariant }) => {
      addVariant('darkk', `:is(.dark) &`)
    }
);
