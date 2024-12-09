import DownArrowIcon from '@/components/icons/DownArrowIcon';
import BoardSelectModal from '@/pages/mypage/components/BoardSelectModal';
import SectionSelectModal from '@/pages/mypage/components/SectionSelectModal';

interface BoardSectionSelectProps {
    /** 현재 선택중인 보드 state */
    currentBoard: string | null;
    /** 현재 선택중인 섹션 state */
    currentSection: string | null;
    /** 보드 선택 모달이 열려 있는지 여부 state */
    isBoardSelectModal: boolean;
    /** 보드 선택 모달 오픈 함수 */
    boardSelectModalOpen: () => void;
    /** 보드 선택 모달 닫기 함수 */
    boardSelectModalClose: () => void;
    /** 섹션 선택 모달이 열려 있는지 여부 state */
    isSectionSelectModal: boolean;
    /** 섹션 선택 모달 오픈 함수 */
    sectionSelectModalOpen: () => void;
    /** 섹션 선택 모달 오픈 함수 */
    sectionSelectModalClose: () => void;
    boardItemOnClick: (board: string) => void;
    sectionItemOnClick: (section: string) => void;
}

const BoardSectionSelect = ({
    currentBoard,
    currentSection,
    isBoardSelectModal,
    boardSelectModalOpen,
    boardSelectModalClose,
    isSectionSelectModal,
    sectionSelectModalOpen,
    sectionSelectModalClose,
    boardItemOnClick,
    sectionItemOnClick,
}: BoardSectionSelectProps) => {
    return (
        <div className="flex py-5 justify-between">
            {/* 보드 선택 select div */}
            <div className="w-[234px]">
                <label className="cursor-pointer text-xs mb-2">보드</label>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isBoardSelectModal) {
                            boardSelectModalClose();
                        } else {
                            boardSelectModalOpen();
                        }
                    }}
                    className="relative flex justify-between items-center cursor-pointer h-[57px] border-gray-input-default border-2 px-4 py-3 rounded-2xl"
                >
                    <span className="text-[#767676]">
                        {currentBoard ? currentBoard : '보드 선택'}
                    </span>
                    <DownArrowIcon />

                    {isBoardSelectModal && (
                        <BoardSelectModal boardItemOnClick={boardItemOnClick} />
                    )}
                </div>
            </div>

            {/* 보드 섹션 select div */}
            {currentBoard && (
                <div className="w-[234px]">
                    <label className="cursor-pointer text-xs mb-2">섹션</label>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            if (isSectionSelectModal) {
                                sectionSelectModalClose();
                            } else {
                                sectionSelectModalOpen();
                            }
                        }}
                        className="relative flex justify-between items-center cursor-pointer h-[57px] border-gray-input-default border-2 px-4 py-3 rounded-2xl"
                    >
                        <span className="text-[#767676]">
                            {currentSection ? currentSection : '섹션 없음'}
                        </span>
                        <DownArrowIcon />

                        {isSectionSelectModal && (
                            <SectionSelectModal
                                sectionItemOnClick={sectionItemOnClick}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoardSectionSelect;
