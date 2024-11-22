import ModalLayout from '../../../components/@Modal/ModalLayout';

interface FilterModalProps {
    // 필터 변경 함수
    filterItemOnClick: (filterText: string) => void;
    // 현재 필터 state
    currentFilter: string;
}

const FilterModal = ({
    filterItemOnClick,
    currentFilter,
}: FilterModalProps) => {
    return (
        <>
            <ModalLayout modalName={'filter'}></ModalLayout>
            <div
                style={{
                    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.1)',
                }}
                className="z-20 rounded-[16px] border-[1px] w-[200px] absolute bottom-[-8px] left-[36px] transform -translate-x-1/2 translate-y-full px-[8px] py-[8px] text-[12px] text-[#111111] bg-white rounded shadow-lg"
            >
                <div>
                    <p className="font-nomal px-[8px] py-[8px] text-[12px] text-[#111111]">
                        정렬 기준
                    </p>
                    <p
                        onClick={() => filterItemOnClick('알파벳순')}
                        className={`hover:bg-[#e9e9e9] flex justify-between items-center cursor-pointer rounded-[8px] font-semibold text-[16px] px-[8px] py-[8px] ${
                            currentFilter === '알파벳순' ? 'bg-[#e9e9e9]' : ''
                        }`}
                    >
                        <span>알파벳순</span>
                        {currentFilter === '알파벳순' && (
                            <svg height="12" width="12" viewBox="0 0 24 24">
                                <path d="M9 22 .73 13.75a2.5 2.5 0 1 1 3.54-3.53L9 14.94l10.73-10.7a2.5 2.5 0 0 1 3.54 3.52z"></path>
                            </svg>
                        )}
                    </p>
                    <p
                        onClick={() => filterItemOnClick('사용자 지정')}
                        className={`hover:bg-[#e9e9e9] flex justify-between items-center cursor-pointer rounded-[8px] font-semibold text-[16px] px-[8px] py-[8px] ${
                            currentFilter === '사용자 지정'
                                ? 'bg-[#e9e9e9]'
                                : ''
                        }`}
                    >
                        <span>사용자 지정</span>
                        {currentFilter === '사용자 지정' && (
                            <svg height="12" width="12" viewBox="0 0 24 24">
                                <path d="M9 22 .73 13.75a2.5 2.5 0 1 1 3.54-3.53L9 14.94l10.73-10.7a2.5 2.5 0 0 1 3.54 3.52z"></path>
                            </svg>
                        )}
                    </p>
                    <p
                        onClick={() =>
                            filterItemOnClick('마지막으로 추가한 핀')
                        }
                        className={`whitespace-nowrap hover:bg-[#e9e9e9] flex justify-between items-center cursor-pointer rounded-[8px] font-semibold text-[16px] px-[8px] py-[8px] ${
                            currentFilter === '마지막으로 추가한 핀'
                                ? 'bg-[#e9e9e9]'
                                : ''
                        }`}
                    >
                        <span>마지막으로 추가한 핀</span>
                        {currentFilter === '마지막으로 추가한 핀' && (
                            <svg height="12" width="12" viewBox="0 0 24 24">
                                <path d="M9 22 .73 13.75a2.5 2.5 0 1 1 3.54-3.53L9 14.94l10.73-10.7a2.5 2.5 0 0 1 3.54 3.52z"></path>
                            </svg>
                        )}
                    </p>
                </div>
                <div className="mt-[16px]">
                    <p className="font-nomal px-[8px] py-[8px]">
                        프로필 레이아웃
                    </p>
                    <p className="hover:bg-[#e9e9e9] cursor-pointer rounded-[8px] font-semibold text-[16px] px-[8px] py-[8px]">
                        보드 공개 범위 수정
                    </p>
                </div>
            </div>
        </>
    );
};

export default FilterModal;
