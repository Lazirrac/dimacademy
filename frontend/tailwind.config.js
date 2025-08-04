/*frontend\tailwind.config.js*/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // 🔤 Tipografías locales
      fontFamily: {
        sans:    ['Saira'],
        heading: ['Saira'],
        body:    ['Rubik'],
      },

      // 🎨 Colores usados en LoginLayout y componentes
      colors: {
        primary:        '#117F74',
        'primary-light':'#1ABC9C',
        'primary-dark': '#117F74',
        accent:         '#FFD166',
        muted:          '#6B7280',
        'muted-dark':   '#9CA3AF',
        background: {
          light: '#F9FAFB',
          dark:  '#0A0F1E',
        },
        surface: {
          light: '#FFFFFF',
          dark:  '#131926',
        },
        text: {
          light: '#1F2937',
          dark:  '#E5E7EB',
        },
      },

      // 🔳 Bordes más redondeados para contenedores
      borderRadius: {
        xl: '1.5rem',
      },

      // 📦 Sombras de “tarjetas” utilizadas
      boxShadow: {
        'card-light': '0 10px 15px -3px rgba(0,0,0,0.1)',
        'card-dark':  '0 10px 15px -3px rgba(0,0,0,0.5)',
      },

      // 🗝️ Animaciones mínimas
      keyframes: {
        fadeIn: {
          '0%':   { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)'     },
        },
        slideIn: {
          '0%':   { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)',     opacity: 1 },
        },
      },
      animation: {
        'fade-in':  'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },

    },
  },
  plugins: [],
};
