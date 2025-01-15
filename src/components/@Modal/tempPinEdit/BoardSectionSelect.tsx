import DownArrowIcon from '@/components/icons/DownArrowIcon';
import BoardSelectModal from '@/components/@Modal/BoardSelectModal';
import { twMerge } from 'tailwind-merge';

interface BoardSectionSelectProps {
  /** 현재 선택중인 보드 state */
  currentBoard: string | null;
  /** 보드 선택 모달이 열려 있는지 여부 state */
  isBoardSelectModal: boolean;
  /** 보드 선택 모달 오픈 함수 */
  boardSelectModalOpen: () => void;
  /** 보드 선택 모달 닫기 함수 */
  boardSelectModalClose: () => void;
  boardItemOnClick: (board: string) => void;
  className?: string;
  childrenClassName?: string;
  /** 섹션 선택 요소 유무 */
  isSection?: boolean;
}

const BoardSectionSelect = ({
  currentBoard,
  isBoardSelectModal,
  boardSelectModalOpen,
  boardSelectModalClose,
  boardItemOnClick,
  className,
  childrenClassName,
}: BoardSectionSelectProps) => {
  return (
    <div className={twMerge('flex justify-between', className)}>
      {/* 보드 선택 select div */}
      <div className={twMerge('w-full', childrenClassName)}>
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
          className="h-[49px] relative flex justify-between items-center cursor-pointer border-gray-input-default border-2 px-4 py-3 rounded-2xl"
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
    </div>
  );
};

export default BoardSectionSelect;
