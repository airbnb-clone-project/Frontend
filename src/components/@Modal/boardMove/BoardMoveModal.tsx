import ModalLayout from '@/components/@Modal/ModalLayout';
import LeftArrowIcon from '@/components/icons/LeftArrowIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import { useState } from 'react';
import AllBoardList from './AllBoardList';
import SuggestionBoardList from './SuggestionBoardList';

const BoardMoveModal = () => {
    const { toggleModal } = useModalStore();

    const [myBoard, setMyBoard] = useState<
        { img: string; name: string; isSecret: boolean }[]
    >([
        {
            img: 'https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg',
            name: '동물',
            isSecret: true,
        },
        {
            img: 'https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898__340.jpg',
            name: '사랑',
            isSecret: false,
        },
        {
            img: 'https://cdn.pixabay.com/photo/2020/01/09/01/00/the-eye-on-the-greek-4751572__340.png',
            name: '몬스터',
            isSecret: false,
        },
    ]);

    const [suggestionBoard, setSuggestionBoard] = useState<string[]>([
        '귀여운 강아지 배경',
        '강아지',
        '개 벽지',
        '귀여운 강아지 밈',
        '재미있는 강아지 사진',
        '귀여운 고양이와 강아지',
        '재미있는 강아지 사진',
        '귀여운 고양이와 강아지',
        '재미있는 강아지 사진',
        '귀여운 고양이와 강아지',
    ]);
    return (
        <ModalLayout modalName="boardMove" isBackgroundColor={true}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-[95vw] max-w-[720px] cursor-auto bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            >
                {/* Modal header 영역 */}
                <div className="px-10 py-10 flex mb-2">
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => toggleModal('boardCleanup')}
                            className="active:scale-90 flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(0,0,0,.06)]"
                        >
                            <LeftArrowIcon size={16.99} />
                        </button>
                    </div>
                    <h2 className="flex text-nowrap font-semibold grow justify-center text-[28px]">
                        보드로 이동하기
                    </h2>
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => toggleModal('boardMove')}
                            className="active:scale-90 flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(0,0,0,.06)]"
                        >
                            <XIcon size={16.99} />
                        </button>
                    </div>
                </div>

                <div
                    className="px-3 overflow-y-scroll"
                    style={{ maxHeight: 'calc(90vh - 122px - 80px)' }}
                >
                    {/* my 모든 board */}
                    <AllBoardList list={myBoard} />

                    {/* 추천 board 목록 */}
                    <SuggestionBoardList list={suggestionBoard} />
                </div>

                {/* 보드 만들기 button 영역 */}

                <div className="px-5 py-4 group flex items-center justify-between cursor-pointer rounded-xl hover:bg-[#e9e9e9]">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center rounded-lg w-12 h-12 mr-2 bg-[#e9e9e9]">
                            <PlusIcon />
                        </div>
                        <span className="font-semibold">보드 만들기</span>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};

export default BoardMoveModal;
