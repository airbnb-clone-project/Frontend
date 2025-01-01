import Button from '@/components/common/Button';
import TransparentButton from '@/components/common/TransparentButton';
import CheckIcon from '@/components/icons/CheckIcon';
import DoubleLeftArrowIcon from '@/components/icons/DoubleLeftArrowIcon';
import DoubleRightArrowIcon from '@/components/icons/DoubleRightArrowIcon';
import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import { useState } from 'react';
import PinDraftList from './PinDraftList';
import TrashIcon from '@/components/icons/TrashIcon';
import PencilIcon from '@/components/icons/PencilIcon';
import useModalStore from '@/stores/useModalStore';

interface SideBarProps {
  pinList: number[];
  selectPinList: number[];
  allPinSelect: () => void;
  togglePinSelection: (index: number) => void;
  currentPin: number;
  pinOnClick: (index: number) => void;
  allPinReset: () => void;
  pinFormReset: () => void;
  boardReset: () => void;
  tagReset: () => void;
  optionReset: () => void;
}

const SideBar = ({
  pinList,
  selectPinList,
  allPinSelect,
  currentPin,
  pinOnClick,
  togglePinSelection,
  allPinReset,
  pinFormReset,
  boardReset,
  tagReset,
  optionReset,
}: SideBarProps) => {
  const { toggleModal } = useModalStore();

  // 사이드바 활성화 상태를 관리하는 state
  const [isSideBar, setIsSideBar] = useState<boolean>(false);
  // 활성화된 핀 항목의 ID를 저장하는 state
  const [activeItem, setActiveItem] = useState<number | null>(null);

  /** 사이드바 활성화 여부 toggle 함수 */
  const handleToggleSideBar = () => setIsSideBar((prev) => !prev);

  /** pin 초안 item의 ...옵션 버튼 클릭시 삭제,복제 modal toggle 함수 */
  const pinOptionToggle = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    if (activeItem === index) setActiveItem(null);
    else setActiveItem(index);
  };

  /** 모두 선택 text 혹은 checkbox 클릭시 실행 함수 */
  const handleAllSelect = () => {
    return selectPinList.length !== 0 ? allPinReset() : allPinSelect();
  };

  /** 쓰레기통 icon 클릭 실행 함수 */
  const trashIconOnClick = () => {
    toggleModal('pinDraftDelete');
  };

  /** +button 클릭 시 새문서 상태로 reset */
  const resetBtnOnClick = () => {
    pinFormReset();
    boardReset();
    tagReset();
    optionReset();
  };

  return (
    <div
      className={`${
        isSideBar ? 'min-w-[349px]' : 'w-[80px]'
      } sticky top-20 h-[100vh] border-l-[1px]`}
    >
      {isSideBar ? (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl">
                <span className="font-semibold">핀 초안</span> (4)
              </p>
              <TransparentButton
                onClick={handleToggleSideBar}
                className={`${
                  selectPinList.length > 0 && 'pointer-events-none'
                } w-12 h-12 rounded-full`}
              >
                <DoubleRightArrowIcon
                  className={`${
                    selectPinList.length > 0 && 'fill-gray-input-hover'
                  }`}
                />
              </TransparentButton>
            </div>
            <Button
              color="gray"
              text="새로 만들기"
              className={`${
                selectPinList.length > 0 &&
                'text-gray-input-default hover:bg-gray-filled-default'
              } py-2 px-3 w-full`}
            />
          </div>

          {/* Pin List */}
          <div className="pt-6 px-2 flex flex-col">
            <div className="flex items-center mb-5 px-2">
              <input
                type="checkbox"
                id="all-select"
                className="peer hidden"
                checked={selectPinList.length !== 0}
                onClick={handleAllSelect}
              />
              <label
                htmlFor="all-select"
                className="flex items-center justify-center cursor-pointer m-1 border-2 w-4 h-4 rounded-[4px] peer-checked:bg-[#111] peer-checked:border-[#111] border-gray-input-hover"
              >
                {pinList.length !== selectPinList.length &&
                  pinList.length > 0 && <MinusIcon />}

                {pinList.length === selectPinList.length && (
                  <CheckIcon size={8} />
                )}
              </label>
              <label htmlFor="all-select" className="cursor-pointer m-1">
                {selectPinList.length > 0 ? (
                  <span>{`${selectPinList.length}/${pinList.length}`}</span>
                ) : (
                  <span>모두 선택</span>
                )}
              </label>
            </div>

            {/* pin 초안 list */}
            <PinDraftList
              pinOnClick={pinOnClick}
              currentPin={currentPin}
              togglePinSelection={togglePinSelection}
              activeItem={activeItem}
              pinList={pinList}
              pinOptionToggle={pinOptionToggle}
              selectPinList={selectPinList}
              // ref={ref}
            />
          </div>

          {selectPinList.length > 0 && (
            <div className="flex gap-2 mt-auto p-4">
              {/* 선택한 핀 초안 모두 삭제 button */}
              <TransparentButton
                className="w-10 h-10"
                onClick={trashIconOnClick}
              >
                <TrashIcon />
              </TransparentButton>

              {/* 선택한 핀 초안 수정 button */}
              <TransparentButton
                className="w-10 h-10"
                onClick={() => console.log()}
              >
                <PencilIcon />
              </TransparentButton>

              {/* 선택한 핀 초안 모두 게시 */}
              <Button color="red" text="게시" className="py-2 px-3" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center pt-4">
          <TransparentButton
            onClick={handleToggleSideBar}
            className="w-12 h-12 rounded-full"
          >
            <DoubleLeftArrowIcon />
          </TransparentButton>
          <TransparentButton
            onClick={resetBtnOnClick}
            className="w-12 h-12 rounded-full"
          >
            <PlusIcon />
          </TransparentButton>
        </div>
      )}
    </div>
  );
};

export default SideBar;
