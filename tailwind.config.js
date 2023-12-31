/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  
  plugins: [require('tailwindcss-scrollbar'), require("@tailwindcss/typography"), require("daisyui")],
  
};
