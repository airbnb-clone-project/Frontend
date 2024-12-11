/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      boxShadow: {
        pin_detail: "0 1px 20px 0 rgba(0, 0, 0, 0.1)",
        option_modal: "0px 0px 8px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
