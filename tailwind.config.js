/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111",
        gray: {
          input: {
            default: "#cdcdcd",
            hover: "#767676",
          },
          // 배경이 있는 버튼 스타일
          filled: {
            default: "#e9e9e9", // 기본 색상
            hover: "#e2e2e2", // hover 상태
            active: "#dadada", // active 상태
          },
          // 배경이 없는 버튼 스타일 (rgba 적용)
          outline: {
            default: "rgba(0, 0, 0, 0)", // 기본 테두리 색상 (80% 불투명)
            hover: "rgba(0, 0, 0, 0.06)", // hover 상태 (90% 불투명)
            active: "rgba(0, 0, 0, 0.1)", // active 상태 (완전 불투명)
          },
        },
        red: {
          default: "#e60023",
          hover: "#b60000",
          active: "#a3081a",
        },
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
    },
  },
  plugins: [],
};
