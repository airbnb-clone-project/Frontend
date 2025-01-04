import SearchInput from '@/components/common/SearchInput';
import DownArrowIcon from '@/components/icons/DownArrowIcon';
import LockIcon from '@/components/icons/LockIcon';
import PlusBGIcon from '@/components/icons/PlusBGIcon';
import useDynamicPosition from '@/hooks/useDynamicPosition';
import useOutsideClick from '@/hooks/useOutsideClick';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface BoardSelectBoxProps {
  /** 현재 선택중인 보드 state */
  currentBoard: string | null;
  /** 보드 선택 모달이 열려 있는지 여부 state */
  isBoardSelectModal: boolean;
  /** 보드 선택 모달 오픈 함수 */
  boardSelectModalOpen: () => void;
  /** 보드 선택 모달 닫기 함수 */
  boardSelectModalClose: () => void;
  boardItemOnClick: (board: string) => void;
  searchText: string;
  searchTextOnChange: (text: string) => void;
  className?: string;
  childrenClassName?: string;
  scrollRef: React.RefObject<HTMLDivElement>;
}
const BoardSelectBox = React.memo(
  ({
    boardItemOnClick,
    boardSelectModalClose,
    boardSelectModalOpen,
    currentBoard,
    isBoardSelectModal,
    searchText,
    searchTextOnChange,
    childrenClassName,
    className,
    scrollRef,
  }: BoardSelectBoxProps) => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const childRef = useRef<HTMLDivElement | null>(null);

    // useDynamicPosition: 보드 선택 modal 남은 공간에 따른 포지션
    const positionClass = useDynamicPosition({
      parentRef,
      childRef,
      scrollRef,
    });

    // useOutsideClick: 모달 외부 클릭 시 닫기
    useOutsideClick({
      ref: childRef,
      callback: (event) => {
        // 모달이 열려 있고, parentRef와 childRef 모두 외부에서 클릭된 경우에만 실행
        if (
          isBoardSelectModal &&
          parentRef.current &&
          !parentRef.current.contains(event?.target as Node)
        ) {
          boardSelectModalClose();
        }
      },
    });

    return (
      <div className={twMerge('flex py-5 justify-between', className)}>
        {/* 보드 선택 select div */}
        <div className={twMerge('w-[234px]', childrenClassName)}>
          <label className="cursor-pointer text-xs mb-2">보드</label>
          <div
            ref={parentRef}
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
              <div
                ref={childRef}
                onClick={(e) => e.stopPropagation()}
                className={twMerge(
                  `${positionClass} h-auto shadow-[0_0_8px_0_rgba(0,0,0,0.1)] bg-white border border-gray-input-default rounded-2xl absolute w-[420px] -translate-x-1/2 left-1/2 z-50`,
                  className
                )}
              >
                {/* 보드 검색 & 만들기 button 영역 */}
                <div className="flex px-3 my-3 h-[58px] gap-2">
                  <SearchInput
                    onChangeFC={searchTextOnChange}
                    value={searchText}
                    placeholder="검색"
                    className="md:w-full justify-center"
                  />
                </div>

                {/* 보드 list 영역 */}
                <div className="px-3 overflow-y-scroll max-h-[200px]">
                  <p className="text-sm pb-1">모든 보드</p>
                  <div
                    onClick={() => boardItemOnClick('dd')}
                    className="my-1 py-2 gap-4 px-1 hover:bg-gray-filled-default rounded-lg cursor-pointer flex justify-between items-center"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg"
                      className="w-9 h-9 rounded-lg ml-1"
                    />
                    <div className="flex flex-grow justify-between items-center">
                      <span>fdgd</span>
                      <div className="pr-5">
                        <LockIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 만들기 button 영역 */}
                <div className="border-t border-[#cdcdcd] rounded-b-2xl px-2 py-3 flex hover:bg-gray-filled-default">
                  <div className="ml-4 mr-5">
                    <PlusBGIcon />
                  </div>
                  <span className="font-semibold">보드 만들기</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default BoardSelectBox;
