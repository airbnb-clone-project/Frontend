import { create } from 'zustand';
import modalName from '../types/modalName';

type isModalOpen = Record<modalName, boolean>;

interface ModalState {
    isModalOpen: isModalOpen; // 각 모달에 대한 boolean 상태 관리
    toggleModal: (modalName: modalName) => void; // 모달을 토글하는 함수
}

const initialModalState: isModalOpen = {
    addParticipants: false,
    boardMove: false,
    boardCreate: false,
    boardImgResize: false,
    boardDelete: false,
    boardCoverChange: false,
    boardCleanup: false,
    share: false,
    pinEdit: false,
    boardEdit: false,
    pincode: false, // 기본적으로 모든 모달은 닫힘
    filter: false,
    create: false,
};

// Modal창 활성화 여부 store
const useModalStore = create<ModalState>((set) => ({
    isModalOpen: initialModalState,
    toggleModal: (modalName) =>
        set((state) => {
            return {
                isModalOpen: {
                    ...initialModalState,
                    [modalName]: !state.isModalOpen[modalName],
                },
            };
        }),
}));

export default useModalStore;
