const plugin = require('tailwindcss/plugin');

module.exports = {
  // 1. Configuração do "content"
  // Combine os caminhos existentes com os do slick-carousel
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/slick-carousel/slick/slick.css",
    "./node_modules/slick-carousel/slick/slick-theme.css",
  ],
  
  // 2. Configurações do "theme"
  theme: {
    extend: {
      // Configurações de FONTE e ANIMAÇÕES
      fontFamily: {
        jura: ['Jura', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 5s linear infinite',
      },

      // Configurações de TEXT-SHADOW
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        glow: '0 0 15px rgba(128, 0, 128, 0.7), 0 0 25px rgba(128, 0, 128, 0.5), 0 0 35px rgba(128, 0, 128, 0.3)',
      },
    },
  },

  // 3. Configuração dos PLUGINS
  // Adicione todos os plugins em um único array
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
  
};
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path/to/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path/to/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});