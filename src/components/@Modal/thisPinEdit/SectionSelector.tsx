import DownArrowIcon from '@/components/icons/DownArrowIcon';
import SectionSelectModal from '@/pages/mypage/components/SectionSelectModal';

interface SectionSelector {
    /** 섹션 선택 모달이 열려 있는지 여부 */
    isBoardSectionSelectModal: boolean;
    /** 섹션 선택 모달을 닫는 함수 */
    boardSectionSelectModalClose: () => void;
    /** 섹션 선택 모달을 여는 함수 */
    boardSectionSelectModalOpen: () => void;
    /** 현재 선택된 섹션 이름 */
    currentSection: string;
    /** 섹션 아이템 클릭 시 호출되는 함수 */
    sectionItemOnClick: (value: string) => void;
}

const SectionSelector = ({
    boardSectionSelectModalClose,
    boardSectionSelectModalOpen,
    currentSection,
    isBoardSectionSelectModal,
    sectionItemOnClick,
}: SectionSelector) => {
    return (
        <div className="md:flex md:items-center md:justify-between py-3 px-4 pb-4 border-b border-gray-input-default">
            <p className="cursor-pointer text-xs mb-2">섹션</p>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    if (isBoardSectionSelectModal) {
                        boardSectionSelectModalClose();
                    } else {
                        boardSectionSelectModalOpen();
                    }
                }}
                className="md:w-[63.11%] bg-[#E9E9E9] w-auto relative flex justify-between items-center cursor-pointer px-4 py-3 rounded-lg"
            >
                <span className="font-semibold">
                    {currentSection ? currentSection : '섹션 없음'}
                </span>
                <DownArrowIcon />

                {isBoardSectionSelectModal && (
                    <SectionSelectModal
                        className="left-0 w-full"
                        sectionItemOnClick={sectionItemOnClick}
                    />
                )}
            </div>
        </div>
    );
};

export default SectionSelector;
