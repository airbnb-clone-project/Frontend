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
import { tempPin } from '@/services/getTempsPinCheck';

interface SideBarProps {
  pinList: tempPin[] | undefined;
  selectPinList: tempPin[];
  allPinSelect: () => void;
  togglePinSelection: (tempPin: tempPin) => void;
  currentPin: tempPin | undefined;
  pinOnClick: (tempPinNo: tempPin) => void;
  allPinReset: () => void;
  pinFormReset: () => void;
  boardReset: () => void;
  tagReset: () => void;
  optionReset: () => void;
  pinOptionToggle: (
    tempPinNo: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  currentTempPinNo: string;
}

const SideBar = ({
  pinList = [],
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
  pinOptionToggle,
  currentTempPinNo,
}: SideBarProps) => {
  const { toggleModal } = useModalStore();

  // 사이드바 활성화 상태를 관리하는 state
  const [isSideBar, setIsSideBar] = useState<boolean>(false);

  /** 사이드바 활성화 여부 toggle 함수 */
  const handleToggleSideBar = () => setIsSideBar((prev) => !prev);

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
      } sticky top-20 h-[calc(100vh-80px)] border-l-[1px]`}
    >
      {isSideBar ? (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="h-[137px] p-4 border-b">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl">
                <span className="font-semibold">핀 초안</span> ({pinList.length}
                )
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
              onClick={resetBtnOnClick}
              color="gray"
              text="새로 만들기"
              className={`${
                selectPinList.length > 0 &&
                'text-gray-input-default hover:bg-gray-filled-default'
              } py-2 px-3 w-full`}
            />
          </div>

          {/* Pin List */}
          <div className="flex-grow pt-6 px-2 flex flex-col overflow-y-scroll">
            <div className="flex items-center mb-5 px-2">
              <input
                type="checkbox"
                id="all-select"
                className="peer hidden"
                checked={selectPinList.length !== 0}
                onChange={handleAllSelect}
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
              currentTempPinNo={currentTempPinNo}
              pinList={pinList}
              pinOptionToggle={pinOptionToggle}
              selectPinList={selectPinList}
              // ref={ref}
            />
          </div>

          <div className={`min-h-[72px]`}>
            <div
              className={`flex gap-2 p-4 ${
                selectPinList.length <= 0 && 'hidden'
              }`}
            >
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
                onClick={() => toggleModal('pinEdit')}
              >
                <PencilIcon />
              </TransparentButton>

              {/* 선택한 핀 초안 모두 게시 */}
              <Button color="red" text="게시" className="py-2 px-3" />
            </div>
          </div>
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
