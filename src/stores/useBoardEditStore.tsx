import { create } from 'zustand';

interface BoardEditInfo {
    img: string | false; // 이미지 URL (초기값은 false)
    name: string; // 보드 이름
    explain: string; // 설명
    isSecretBoard: boolean; // 비공개 여부
    isPersonalization: boolean; // 개인화 여부
}

interface BoardEditState {
    boardEditInfo: BoardEditInfo; // 보드 정보
    setBoardEditInfo: (newInfo: Partial<BoardEditInfo>) => void; // 보드 정보 업데이트 함수
}

const useBoardEditStore = create<BoardEditState>((set) => ({
    boardEditInfo: {
        img: '', // 기본값은 빈 문자열로 설정
        name: '', // 기본값은 빈 문자열
        explain: '', // 기본값은 빈 문자열
        isSecretBoard: false, // 기본값은 false
        isPersonalization: true, // 기본값은 true
    },
    setBoardEditInfo: (newInfo) =>
        set((state) => ({
            boardEditInfo: { ...state.boardEditInfo, ...newInfo },
        })),
}));

export default useBoardEditStore;
