import TransparentButton from '@/components/common/TransparentButton';
import CheckIcon from '@/components/icons/CheckIcon';
import ThreeDotIcon from '@/components/icons/ThreeDotIcon';
import useTempPinCopy from '@/hooks/queries/useTempPinCopy';
import { tempPin } from '@/services/getTempsPinCheck';
import useModalStore from '@/stores/useModalStore';
import { useEffect, useRef } from 'react';

interface PinDraftListProps {
  pinList: tempPin[];
  selectPinList: tempPin[];
  togglePinSelection: (tempPin: tempPin) => void;
  currentPin: tempPin | undefined;
  pinOnClick: (v: tempPin) => void;
  currentTempPinNo: string | null;
  pinOptionToggle: (
    tempPinNo: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const PinDraftList = ({
  currentPin,
  pinList,
  pinOnClick,
  selectPinList,
  togglePinSelection,
  currentTempPinNo,
  pinOptionToggle,
}: PinDraftListProps) => {
  const { toggleModal } = useModalStore();

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // 원하는 요소 외의 클릭을 감지하는 함수
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalLayout = document.getElementById('modalLayout');

      pinList.forEach((_, index) => {
        const pinRef = refs.current[index];
        if (
          !(modalLayout && modalLayout.contains(event.target as Node)) &&
          pinRef &&
          !pinRef.contains(event.target as Node)
        ) {
          if (currentTempPinNo === _.tempPinNo && _.tempPinNo) {
            pinOptionToggle(
              _.tempPinNo,
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
  }, [pinList, currentTempPinNo, pinOptionToggle]);

  const { mutate: tempPinCopy } = useTempPinCopy();
  /** 핀 초안 item의 복제 버튼 클릭 함수  */
  const copyBtnOnClick = (
    tempPinNo: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    tempPinCopy(tempPinNo);
    pinOptionToggle(tempPinNo, event);
  };

  /** 핀 초안 item의 삭제 버튼 클릭 함수 */
  const deleteBtnOnClick = () => {
    toggleModal('pinDraftDelete');
  };

  /** 날짜를 입력받아 한달 후까지 남은 기간 계산 */
  const calculateRemainingDays = (createAt: string): number => {
    const createdDate = new Date(createAt);

    if (isNaN(createdDate.getTime())) {
      throw new Error('Invalid date format');
    }

    const expirationDate = new Date(createdDate);
    expirationDate.setMonth(createdDate.getMonth() + 1); // 1개월 추가

    const today = new Date();

    // 날짜 차이를 밀리초 단위로 계산 후 일수로 변환
    const remainingTime = expirationDate.getTime() - today.getTime();
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    return remainingDays > 0 ? remainingDays : 0;
  };
  return (
    <div className="flex flex-col gap-1">
      {pinList.map((v, i) => {
        const isSelected = selectPinList
          .map((value) => value.tempPinNo)
          .includes(v.tempPinNo);

        return (
          <div
            key={v.tempPinNo}
            onClick={() => pinOnClick(v)}
            className={`${
              currentPin?.tempPinNo === v.tempPinNo
                ? 'py-[7px] px-[7px] box-border border border-black bg-gray-filled-hover'
                : ''
            } relative group cursor-pointer rounded-lg hover:bg-gray-filled-hover p-2 flex items-center ${
              currentTempPinNo === v.tempPinNo ? 'bg-gray-filled-hover' : ''
            }`}
          >
            <input
              type="checkbox"
              id={`pin-${v}`}
              className="peer hidden"
              checked={isSelected}
              onChange={(e) => e.stopPropagation()}
            />
            <label
              htmlFor={`pin-${v}`}
              onClick={(e) => {
                togglePinSelection(v);
                e.stopPropagation();
              }}
              className="flex items-center justify-center cursor-pointer m-1 border-2 min-w-4 h-4 rounded-[4px] peer-checked:bg-[#111] peer-checked:border-[#111] border-gray-input-hover"
            >
              <CheckIcon size={8} />
            </label>

            <div className="bg-[#f5f5f5] rounded-xl m-2">
              <img
                src={v.imgUrl || ''}
                className="rounded-xl w-[72px] h-[72px]"
              />
            </div>

            <div className="flex flex-col w-[154px]">
              <p className="text-sm break-words line-clamp-3 overflow-hidden text-ellipsis">
                {v.title}
              </p>
              <span className="text-sm text-gray-input-hover">
                만료되기까지
                {v.createdAt && calculateRemainingDays(v.createdAt)}일 남음
              </span>
            </div>

            <TransparentButton
              onClick={(e) => v.tempPinNo && pinOptionToggle(v.tempPinNo, e)}
              className={`${
                currentTempPinNo === v.tempPinNo ? 'flex' : 'hidden'
              } a relative group-hover:flex ml-auto min-w-8 h-8`}
            >
              <ThreeDotIcon />
            </TransparentButton>

            {currentTempPinNo === v.tempPinNo && (
              <div
                ref={(el) => (refs.current[i] = el)} // 각 항목에 ref 할당
                onClick={(e) => e.stopPropagation()}
                className="shadow-custom-modal z-50 shadow-custom-light flex flex-col absolute right-0 top-3/4 bg-white p-2 rounded-2xl"
              >
                <button
                  onClick={(e) => v.tempPinNo && copyBtnOnClick(v.tempPinNo, e)}
                  className="font-semibold p-2 rounded-lg hover:bg-gray-filled-hover"
                >
                  복제
                </button>
                <button
                  onClick={() => deleteBtnOnClick()}
                  className="font-semibold p-2 rounded-lg hover:bg-gray-filled-hover"
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PinDraftList;
