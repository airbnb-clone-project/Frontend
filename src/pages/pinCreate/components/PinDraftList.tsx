import TransparentButton from '@/components/common/TransparentButton';
import CheckIcon from '@/components/icons/CheckIcon';
import ThreeDotIcon from '@/components/icons/ThreeDotIcon';
import useModalStore from '@/stores/useModalStore';
import { useEffect, useRef } from 'react';

interface PinDraftListProps {
  pinList: number[];
  selectPinList: number[];
  togglePinSelection: (index: number) => void;
  currentPin: number;
  pinOnClick: (index: number) => void;
  activeItem: number | null;
  pinOptionToggle: (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const PinDraftList = ({
  currentPin,
  pinList,
  pinOnClick,
  selectPinList,
  togglePinSelection,
  activeItem,
  pinOptionToggle,
}: PinDraftListProps) => {
  const { toggleModal } = useModalStore();

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      pinList.forEach((_, index) => {
        const pinRef = refs.current[index];
        if (pinRef && !pinRef.contains(event.target as Node)) {
          if (activeItem === index) {
            pinOptionToggle(
              index,
              event as unknown as React.MouseEvent<HTMLButtonElement>
            );
          }
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pinList, activeItem, pinOptionToggle]);

  /** 핀 초안 item의 삭제 버튼 클릭 함수 */
  const deleteBtnOnClick = () => {
    toggleModal('pinDraftDelete');
  };

  return (
    <div className="flex flex-col gap-1">
      {pinList.map((v, i) => {
        const isSelected = selectPinList.includes(i);

        return (
          <div
            key={v}
            onClick={() => pinOnClick(i)}
            className={`${
              currentPin === i
                ? 'py-[7px] px-[7px] box-border border border-black bg-gray-filled-hover'
                : ''
            } relative group cursor-pointer rounded-lg hover:bg-gray-filled-hover p-2 flex items-center ${
              activeItem === i ? 'bg-gray-filled-hover' : ''
            }`}
          >
            <input
              type="checkbox"
              id={`pin-${v}`}
              className="peer hidden"
              checked={isSelected}
              onClick={(e) => e.stopPropagation()}
            />
            <label
              htmlFor={`pin-${v}`}
              onClick={(e) => {
                togglePinSelection(i);
                e.stopPropagation();
              }}
              className="flex items-center justify-center cursor-pointer m-1 border-2 w-4 h-4 rounded-[4px] peer-checked:bg-[#111] peer-checked:border-[#111] border-gray-input-hover"
            >
              <CheckIcon size={8} />
            </label>

            <img className="m-1 rounded-xl w-[72px] h-[72px]" />

            <span className="text-sm text-gray-input-hover">
              만료되기까지 27일 남음
            </span>

            <TransparentButton
              onClick={(e) => pinOptionToggle(i, e)}
              className={`${
                activeItem === i ? 'flex' : 'hidden'
              } a relative group-hover:flex ml-auto w-8 h-8`}
            >
              <ThreeDotIcon />
            </TransparentButton>

            {activeItem === i && (
              <div
                ref={(el) => (refs.current[i] = el)} // 각 항목에 ref 할당
                onClick={(e) => e.stopPropagation()}
                className="shadow-custom-modal z-50 shadow-custom-light flex flex-col absolute right-0 top-3/4 bg-white p-2 rounded-2xl"
              >
                <span className="font-semibold p-2 rounded-lg hover:bg-gray-filled-hover">
                  복제
                </span>
                <span
                  onClick={() => deleteBtnOnClick()}
                  className="font-semibold p-2 rounded-lg hover:bg-gray-filled-hover"
                >
                  삭제
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PinDraftList;
