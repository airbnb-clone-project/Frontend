import { useState } from 'react';
import FilterModal from './FilterModal';
import CreatedModal from './CreatedModal';
import FilterIcon from '../../../components/icons/FilterIcon';
import PlusIcon from '../../../components/icons/PlusIcon';
import useModalStore from '../../../stores/useModalStore';

const Saved = () => {
    // 현재 필터 state
    const [currentFilter, setCurrentFilter] = useState<string>('알파벳순');
    // 필터 변경 함수
    const filterItemOnClick = (filterText: string) => {
        setCurrentFilter(filterText);
    };

    const { isModalOpen, toggleModal } = useModalStore();

    return (
        <section className="w-full">
            <div className="mb-[12px] flex justify-between px-[16px] h-[48px]">
                {/* 필터 아이콘 */}
                <div className="relative">
                    <span
                        onClick={() => toggleModal('filter')}
                        className={`sticky z-10  flex justify-center items-center cursor-pointer rounded-[50%] ${
                            isModalOpen.filter
                                ? 'bg-black'
                                : 'bg-gray hover:bg-[#ebebeb]'
                        } h-[48px] w-[48px]`}
                    >
                        {isModalOpen.filter ? (
                            <>
                                {/* 활성화 */}
                                <FilterIcon color="white" />
                            </>
                        ) : (
                            <>
                                {/* 비활성화 */}
                                <FilterIcon />
                            </>
                        )}
                    </span>

                    {/* hook으로 만들기 */}
                    {/* 필터 Modal 조건부 렌더링 */}
                    {isModalOpen.filter && (
                        <>
                            <FilterModal
                                filterItemOnClick={filterItemOnClick}
                                currentFilter={currentFilter}
                            />
                            {/* 투명 백그라운드 */}
                            <div
                                onClick={() => toggleModal('filter')}
                                className="z-[1] fixed top-0 left-0 w-full h-full"
                            ></div>
                        </>
                    )}
                </div>

                {/* 만들기 아이콘 */}
                <div className="relative flex justify-between px-[16px] h-[48px]">
                    <span
                        onClick={() => toggleModal('create')}
                        className={`sticky z-10  flex justify-center items-center cursor-pointer rounded-[50%] ${
                            isModalOpen.create
                                ? 'bg-black'
                                : 'bg-gray hover:bg-[#ebebeb]'
                        } h-[48px] w-[48px]`}
                    >
                        {isModalOpen.create ? (
                            <>
                                {/* 활성화 */}
                                <PlusIcon color="white" />
                            </>
                        ) : (
                            <>
                                {/* 비활성화 */}
                                <PlusIcon />
                            </>
                        )}
                    </span>

                    {/* 만들기 Modal 조건부 렌더링 */}
                    {isModalOpen.create && (
                        <>
                            <CreatedModal />
                            {/* 투명 백그라운드 */}
                            <div
                                onClick={() => toggleModal('create')}
                                className="z-[1] fixed top-0 left-0 w-full h-full"
                            ></div>
                        </>
                    )}
                </div>
            </div>

            <div className="w-[323px] px-[8px] cursor-pointer">
                <div className="flex gap-[1px] h-[213.33px] rounded-[16px] overflow-hidden">
                    {/* 첫 번째 img */}
                    <div className="w-[70%] h-full">
                        <img
                            alt="first image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* 두 번째 div, 2개의 img */}
                    <div className="w-[30%] h-full flex flex-col">
                        <img
                            alt="second image"
                            className="w-full h-full object-cover"
                        />
                        <img
                            alt="third image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* 보드 설명 */}
                <div className="p-[8px]">
                    {/* 보드 이름 */}
                    <p className="text-[20px] font-semibold">동물</p>
                    <p>
                        {/* 들어있는 사진 count */}
                        <span className="text-[12px]">핀 1개</span>
                        {/* 마지막 사진 추가로부터 지난 시간 */}
                        <span className="ml-[8px] text-[12px] text-[#767676]">
                            1일
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Saved;
