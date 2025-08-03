/*frontend\tailwind.config.js*/


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Saira', 'sans-serif'],
        heading: ['Saira', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: "#3b82f6",       // azul claro
        primaryDark: "#1e40af",   // azul oscuro
        surface: "#1f2937",       // fondo claro
        background: "#ffffff",    // corrigido a 6 dígitos
        text: "#111827",
        muted: "#6b7280",
        neon: "#0ff",             // para resaltar en modo oscuro
        neonDark: "#117F74",      // tu accent original
      },
      keyframes: {
        glow: {
          "0%, 100%": { textShadow: "0 0 4px rgba(0,255,255,0.6)" },
          "50%":      { textShadow: "0 0 8px rgba(0,255,255,1)" },
        },
        slideIn: {
          "0%":   { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)",    opacity: 1 },
        },
      },
      animation: {
        glow:     "glow 2s ease-in-out infinite",
        "slide-in": "slideIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],  // ahora sí en el nivel raíz
}
