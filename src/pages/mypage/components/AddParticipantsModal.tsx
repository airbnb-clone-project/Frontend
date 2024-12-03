import ModalLayout from '@/components/@Modal/ModalLayout';
import LeftArrowIcon from '@/components/icons/LeftArrowIcon';
import RightArrowIcon from '@/components/icons/RightArrowIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import XIcon from '@/components/icons/XIcon';
import { useState } from 'react';

const AddParticipantsModal = () => {
    const [searchText, setSearchText] = useState<string>('');
    // 검색어 최신 상태 업데이트 함수
    const searchTextOnChange = (text: string) => {
        setSearchText(text);
    };
    // 현재 검색어 ''로 reset
    const searchTextReset = () => {
        setSearchText('');
    };

    const sample: string[] = [
        'https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524__340.jpg',
        'https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg',
        'https://cdn.pixabay.com/photo/2020/05/25/20/14/holland-iris-5220407__340.jpg',
        'https://cdn.pixabay.com/photo/2020/10/08/17/39/waves-5638587__340.jpg',
        'https://cdn.pixabay.com/photo/2019/01/30/11/17/zebra-3964360__340.jpg',
        'https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663__340.png',
        'https://cdn.pixabay.com/photo/2019/06/05/10/34/mimosa-4253396__340.jpg',
        'https://cdn.pixabay.com/photo/2020/08/04/14/42/sky-5463015__340.jpg',
        'https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg',
        'https://cdn.pixabay.com/photo/2020/01/09/01/00/the-eye-on-the-greek-4751572__340.png',
        'https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678__340.png',
        'https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898__340.jpg',
        'https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg',
    ];
    return (
        <ModalLayout modalName="addParticipants" isBackgroundColor={true}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="pb-9 px-6 cursor-auto w-[95vw] max-w-[540px] max-h-[90vh] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            >
                <div className="relative">
                    <button className="hover:bg-[rgba(0,0,0,0.06)] left-0 flex items-center justify-center top-1/2 -translate-y-1/2 absolute w-10 h-10 rounded-full active:scale-90">
                        <LeftArrowIcon />
                    </button>
                    <p className="text-[28px] font-semibold px-8 py-[56px] text-center">
                        참여자 초대하기
                    </p>
                </div>

                {/* 참여자가 할 수 있는 옵션 */}
                <div>
                    <p className="text-xs py-3">
                        참여자는 다음을 할 수 있습니다.
                    </p>
                    <div className="flex justify-between mb-5">
                        <div>
                            {/* 현재 설정에 따라 바뀌는 text */}
                            <span className="font-semibold">
                                (거의) 모든 걸 할 수 있음
                            </span>
                            <p className="max-w-[295px] py-1 text-[#767676]">
                                핀을 추가하거나 삭제하고 댓글과 리액션도
                                달아보세요
                            </p>
                        </div>
                        <button className="active:scale-90 hover:bg-[rgba(0,0,0,0.06)] active:bg-[rgba(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center">
                            <RightArrowIcon color="#767676" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 box-border mb-4">
                    <div className="flex gap-2 relative">
                        <input
                            value={'https://pin.it/3jMgpeSAd'}
                            className={
                                'h-full w-full border-[#cdcdcd] hover:border-[#a5a5a5] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)]'
                            }
                        />
                        <button className="active:scale-95 hover:bg-[#e2e2e2] bg-[#e9e9e9] rounded-3xl text-nowrap h-12 py-3 px-4 font-semibold">
                            링크 복사
                        </button>
                    </div>
                    <div className="relative">
                        {/* `peer` 클래스를 추가 */}
                        <input
                            value={searchText}
                            onChange={(v) => searchTextOnChange(v.target.value)}
                            placeholder="이름 또는 이메일 검색"
                            className="w-full peer focus:pl-4 cursor-pointer border-[#cdcdcd] hover:border-[#a5a5a5] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-10 py-2 rounded-[999px] focus:outline-[rgba(0, 132, 255, .5)]"
                        />
                        {/* 검색 아이콘 */}
                        <label
                            htmlFor="add-participants-input"
                            className="peer-focus:hidden cursor-pointer absolute top-1/2 -translate-y-1/2 left-4"
                        >
                            <SearchIcon />
                        </label>
                        {/* X 아이콘 */}
                        {searchText.length > 0 && (
                            <button
                                onClick={() => searchTextReset()}
                                // `peer-focus`를 사용해 `input`의 focus 상태 감지
                                className="hover:bg-[rgba(0,0,0,0.06)] active:text-white active:bg-[#111] top-1/2 -translate-y-1/2 right-4 active:scale-75 cursor-pointer flex items-center justify-center w-6 h-6 absolute rounded-full 
                peer-focus:bg-[#111] peer-focus:text-white"
                            >
                                <XIcon size={11} color="currentColor" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="overflow-y-scroll -mr-4 max-h-[414px]">
                    {sample.map((v, i) => (
                        <div
                            key={i}
                            className="gap-2 flex justify-between py-2"
                        >
                            <div className="flex items-center w-full">
                                <img
                                    src={v}
                                    className="min-w-12 w-12 h-12 rounded-full mr-2"
                                />
                                <div className="w-full flex flex-col">
                                    <p className="font-semibold hover:underline cursor-pointer">
                                        K
                                    </p>
                                    <span className="text-xs text-[#767676]">
                                        k
                                    </span>
                                </div>
                            </div>
                            <button className="transition-transform duration-200 active:scale-95 hover:bg-[#b60000] min-w-[64px] bg-[#e60023] rounded-3xl font-semibold text-white py-3 px-4">
                                초대
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </ModalLayout>
    );
};

export default AddParticipantsModal;
