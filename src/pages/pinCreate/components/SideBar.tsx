import Button from '@/components/common/Button';
import TransparentButton from '@/components/common/TransparentButton';
import CheckIcon from '@/components/icons/CheckIcon';
import DoubleLeftArrowIcon from '@/components/icons/DoubleLeftArrowIcon';
import DoubleRightArrowIcon from '@/components/icons/DoubleRightArrowIcon';
import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import ThreeDotIcon from '@/components/icons/ThreeDotIcon';
import { useState } from 'react';

interface SideBarProps {
    pinList: number[];
    selectPinList: number[];
    allPinSelect: () => void;
    togglePinSelection: (index: number) => void;
    currentPin: number;
    pinOnClick: (index: number) => void;
    allPinReset: () => void;
}

const SideBar = ({
    pinList,
    selectPinList,
    allPinSelect,
    currentPin,
    pinOnClick,
    togglePinSelection,
    allPinReset,
}: SideBarProps) => {
    // 사이드바 활성화 상태를 관리하는 state
    const [isSideBar, setIsSideBar] = useState<boolean>(false);
    // 활성화된 핀 항목의 ID를 저장하는 state
    const [activeItem, setActiveItem] = useState<number>();

    /** 사이드바 활성화 여부 toggle 함수 */
    const handleToggleSideBar = () => setIsSideBar((prev) => !prev);

    /** pin 초안 item의 ...옵션 버튼 클릭시 실행 함수 */
    const pinOptionOnClick = (
        index: number,
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        setActiveItem(index);
    };

    /** 모두 선택 text 혹은 checkbox 클릭시 실행 함수 */
    const handleAllSelect = () => {
        return selectPinList.length !== 0 ? allPinReset() : allPinSelect();
    };
    return (
        <div
            className={`${
                isSideBar ? 'min-w-[349px]' : 'w-[80px]'
            } h-[100vh] border-l-[1px]`}
        >
            {isSideBar ? (
                <div>
                    {/* Header */}
                    <div className="p-4 border-b">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-xl">
                                <span className="font-semibold">핀 초안</span>{' '}
                                (4)
                            </p>
                            <TransparentButton
                                onClick={handleToggleSideBar}
                                className="w-12 h-12 rounded-full"
                            >
                                <DoubleRightArrowIcon />
                            </TransparentButton>
                        </div>
                        <Button
                            color="gray"
                            text="새로 만들기"
                            className="py-2 px-3 w-full"
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
                            <label
                                htmlFor="all-select"
                                className="cursor-pointer m-1"
                            >
                                {selectPinList.length > 0 ? (
                                    <span>{`${selectPinList.length}/${pinList.length}`}</span>
                                ) : (
                                    <span>모두 선택</span>
                                )}
                            </label>
                        </div>

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
                                            activeItem === i
                                                ? 'bg-gray-filled-hover'
                                                : ''
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
                                            onClick={(e) =>
                                                pinOptionOnClick(i, e)
                                            }
                                            className={`${
                                                activeItem === i
                                                    ? 'flex'
                                                    : 'hidden'
                                            } group-hover:flex ml-auto w-8 h-8`}
                                        >
                                            <ThreeDotIcon />
                                        </TransparentButton>

                                        {activeItem === i && (
                                            <div className="z-50 shadow-custom-light flex flex-col absolute right-0 top-3/4 bg-white p-2 rounded-2xl">
                                                <span className="font-semibold p-2 rounded-lg hover:bg-gray-filled-hover">
                                                    복제
                                                </span>
                                                <span className="font-semibold p-2 rounded-lg hover:bg-gray-filled-hover">
                                                    삭제
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
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
                    <TransparentButton className="w-12 h-12 rounded-full">
                        <PlusIcon />
                    </TransparentButton>
                </div>
            )}
        </div>
    );
};

export default SideBar;
