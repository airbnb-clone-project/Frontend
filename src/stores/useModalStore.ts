import { create } from 'zustand';
import modalName from '../types/modalName';
import overlayName from '../types/overlayName';

type isModalOpen = Record<modalName, boolean>;
type isActiveButton = Record<overlayName, boolean>;

interface ModalState {
    isModalOpen: isModalOpen; // 각 모달에 대한 boolean 상태 관리
    toggleModal: (modalName: modalName) => void; // 모달을 토글하는 함수
    isActiveButton: isActiveButton;
    activeButton: (overlayName: overlayName, bol: boolean) => void;
    initActiveButton: () => void;
    id: number;
    setId: (id: number) => void;
}

const initialModalState: isModalOpen = {
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

const initialAcitveButton: isActiveButton = {
    profile: false,
    recommendPin: false,
    share: false,
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
    isActiveButton: initialAcitveButton,
    activeButton: (overlayName, bol) =>
        set({
            isActiveButton: {
                ...initialAcitveButton,
                [overlayName]: bol,
            },
        }),
    initActiveButton: () =>
        set({
            isActiveButton: {
                ...initialAcitveButton,
            },
        }),
    id: 0,
    setId: (id) => set({ id }),
}));

export default useModalStore;
