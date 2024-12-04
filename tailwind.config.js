/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#111',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      boxShadow: {
        'custom-modal': '0 0 3px 1px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
