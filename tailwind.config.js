/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 0 8px 0 rgba(0, 0, 0, 0.1)",
      },
      colors: {
        black: "#111", // 메인 검정색
        gray: {
          border: {
            default: "#e9e9e9", // 기본 테두리 색상
            hover: "#e2e2e2", // hover 상태
          },
          input: {
            default: "#cdcdcd", // 기본 입력 필드 색상
            hover: "#767676", // hover 상태
            image: "#F5F5F5",
            comment: "#e9e9e9",
          },
          filled: {
            default: "#e9e9e9", // 기본 버튼 배경색
            hover: "#e2e2e2", // hover 상태
            active: "#dadada", // active 상태
          },
          outline: {
            default: "rgba(0, 0, 0, 0)", // 기본 테두리 색상
            hover: "rgba(0, 0, 0, 0.06)", // hover 상태
            active: "rgba(0, 0, 0, 0.1)", // active 상태
          },
        },
        red: {
          default: "#e60023", // 기본 빨간색
          hover: "#b60000", // hover 상태
          active: "#a3081a", // active 상태
        },
      },
      fontFamily: {
        Pretendard: ["Pretendard"], // 주요 폰트 설정
      },
      boxShadow: {
        "custom-modal": "0 0 3px 1px rgba(0,0,0,0.2)", // 모달용 그림자
        pin_detail: "0 1px 20px 0 rgba(0, 0, 0, 0.1)", // 핀 상세보기
        option_modal: "0px 0px 8px 0px rgba(0, 0, 0, 0.1)", // 옵션 모달
      },
    },
  },
  plugins: [],
};
