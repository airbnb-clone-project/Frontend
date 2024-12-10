import DownArrowIcon from '@/components/icons/DownArrowIcon';
import BoardSelectModal from '@/pages/mypage/components/BoardSelectModal';

interface BoardSelectorProps {
    /** 보드 선택 모달을 닫는 함수 */
    boardSelectModalClose: () => void;

    /** 보드 선택 모달을 여는 함수 */
    boardSelectModalOpen: () => void;

    /** 현재 선택된 보드 이름 */
    currentBoard: string | null;

    /** 보드 선택 모달이 열려 있는지 여부 */
    isBoardSelectModal: boolean;

    /** 보드 아이템 클릭 시 호출되는 함수 */
    boardItemOnClick: (boardName: string) => void;
}

const BoardSelector = ({
    isBoardSelectModal,
    boardSelectModalClose,
    boardSelectModalOpen,
    currentBoard,
    boardItemOnClick,
}: BoardSelectorProps) => {
    return (
        <div className="px-4 py-3 w-full md:flex md:items-center md:justify-between">
            <p className="cursor-pointer text-xs mb-2">보드</p>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    if (isBoardSelectModal) {
                        boardSelectModalClose();
                    } else {
                        boardSelectModalOpen();
                    }
                }}
                className="md:w-[63.11%] bg-[#E9E9E9] w-auto relative flex justify-between items-center cursor-pointer px-4 py-3 rounded-lg"
            >
                <span className="font-semibold">
                    {currentBoard ? currentBoard : '보드 선택'}
                </span>
                <DownArrowIcon />

                {isBoardSelectModal && (
                    <BoardSelectModal
                        className="left-0 w-full"
                        boardItemOnClick={boardItemOnClick}
                    />
                )}
            </div>
        </div>
    );
};

export default BoardSelector;
