import { useState } from 'react';

/**
 * @returns isBoardSelectModal: 보드 선택 모달 활성화 여부 상태
 * @returns currentBoard: 현재 선택된 보드의 값
 * @returns boardSelectModalOpen: 보드 선택 모달을 여는 함수
 * @returns boardSelectModalClose: 보드 선택 모달을 닫는 함수
 * @returns boardItemOnClick: 보드 아이템을 클릭했을 때 호출되는 함수
 */
export const useBoardSelect = () => {
    const [isBoardSelectModal, setIsBoardSelectModal] =
        useState<boolean>(false);
    const [currentBoard, setCurrentBoard] = useState<string>('');

    const boardSelectModalOpen = () => setIsBoardSelectModal(true);
    const boardSelectModalClose = () => setIsBoardSelectModal(false);
    const boardItemOnClick = (value: string) => {
        setCurrentBoard(value);
        boardSelectModalClose();
    };

    return {
        isBoardSelectModal,
        currentBoard,
        boardSelectModalOpen,
        boardSelectModalClose,
        boardItemOnClick,
    };
};
