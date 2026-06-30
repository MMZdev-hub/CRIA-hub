/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080808',
        bone: '#E8E0D0',
        silver: '#C0C0C0',
        crimson: '#C0392B',
        surface: '#1C1C1C',
        muted: '#5C5C5C',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

