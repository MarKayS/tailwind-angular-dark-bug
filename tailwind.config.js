/** @type {import('tailwindcss').Config} */

let darkPlugin = require('./dark-fix-plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    darkPlugin
  ],
}

