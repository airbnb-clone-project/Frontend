import { create } from 'zustand';

interface ModalState {
    isModalOpen: {
        boardDelete: boolean;
        boardCoverChange: boolean;
        boardCleanup: boolean;
        share: boolean;
        pinEdit: boolean;
        boardEdit: boolean;
        pincode: boolean;
        filter: boolean;
        create: boolean;
    }; // 각 모달에 대한 boolean 상태 관리
    toggleModal: (
        modalName:
            | 'boardDelete'
            | 'boardCoverChange'
            | 'boardCleanup'
            | 'share'
            | 'pinEdit'
            | 'boardEdit'
            | 'pincode'
            | 'filter'
            | 'create'
    ) => void; // 모달을 토글하는 함수
}

// Modal창 활성화 여부 store
const useModalStore = create<ModalState>((set) => ({
    isModalOpen: {
        boardDelete: false,
        boardCoverChange: false,
        boardCleanup: false,
        share: false,
        pinEdit: false,
        boardEdit: false,
        pincode: false, // 기본적으로 모든 모달은 닫힘
        filter: false,
        create: false,
    },
    toggleModal: (modalName) =>
        set((state) => {
            const newModalState = { ...state.isModalOpen };

            // modalName을 제외한 나머지 모달들을 false로 설정
            Object.keys(newModalState).forEach((key) => {
                if (key !== modalName) {
                    newModalState[key as keyof ModalState['isModalOpen']] =
                        false;
                }
            });

            newModalState[modalName] = !newModalState[modalName]; // 선택한 모달의 상태만 토글

            return { isModalOpen: newModalState };
        }),
}));

export default useModalStore;
