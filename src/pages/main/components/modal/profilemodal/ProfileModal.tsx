import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import BoardRow from './BoardRow';

const ProfileModal = () => {
    const [isSearch, setIsSearch] = useState(false);

    return (
        <div className="text-black w-full h-full" data-ignore={true}>
            <div className="flex w-full h-16 justify-center items-center">
                저장
            </div>
            <div className="w-auto h-16 mx-4 justify-center items-center">
                <div
                    className={`pl-4 w-full h-12 rounded-full flex items-center outline ${
                        isSearch
                            ? 'outline-4 outline-blue-300'
                            : 'outline-2 outline-gray-300'
                    }`}
                >
                    {!isSearch && <FaSearch className="mr-2 fill-gray-500" />}
                    <input
                        type="text"
                        className="w-full h-full outline-none bg-transparent placeholder-gray-500 font-normal"
                        onFocus={() => setIsSearch(true)}
                        onBlur={() => setIsSearch(false)}
                        placeholder="검색"
                    />
                </div>
            </div>
            <div className="w-full h-[290px] overflow-y-scroll">
                <div className="mx-2">
                    <div className="text-[12px] h-6 py-1 font-normal">
                        빠른 저장 후 나중에 처리
                    </div>
                    <BoardRow hight="64px" padding="p-2" rounded={true}>
                        프로필
                    </BoardRow>
                    <div className="text-[12px] h-6 py-1 font-normal">
                        보드에 저장
                    </div>
                    <BoardRow hight="64px" padding="p-2" rounded={true}>
                        <div>캐릭터</div>
                    </BoardRow>
                    <div className="text-[12px] h-6 py-1 font-normal">추천</div>
                    <BoardRow hight="64px" padding="p-2" rounded={true}>
                        신체 스케치
                    </BoardRow>
                    <BoardRow hight="64px" padding="p-2" rounded={true}>
                        드로잉 베이스
                    </BoardRow>
                </div>
            </div>
            <BoardRow hight="80px" padding="p-4" save={false}>
                보드 만들기
            </BoardRow>
        </div>
    );
};
export default ProfileModal;
