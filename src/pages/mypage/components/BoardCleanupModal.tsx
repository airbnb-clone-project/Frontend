import ModalLayout from '@/components/@Modal/ModalLayout';
import MasonryList from '@/components/common/MasonryList';
import CheckIcon from '@/components/icons/CheckIcon';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import { useState } from 'react';

const BoardCleanupModal = () => {
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

    const { toggleModal } = useModalStore();

    // 현재 정리하려고 선택한 img list
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const imgItemOnClick = (src: string) => {
        setSelectedImages((prev) => {
            if (prev.includes(src)) {
                // 이미지가 이미 선택되어 있다면 삭제
                return prev.filter((image) => image !== src);
            } else {
                // 이미지가 선택되지 않았다면 추가
                return [...prev, src];
            }
        });
    };
    return (
        <ModalLayout isBackgroundColor={true} modalName="boardCleanup">
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[90vw] max-w-[720px] cursor-auto bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            >
                {/* Modal header 영역 */}
                <div className="px-12 py-[56px] flex mb-2">
                    <div className="w-20"></div>
                    <h2 className="flex text-nowrap font-semibold grow justify-center text-[28px]">
                        {selectedImages.length === 0
                            ? '보드로 정리하기'
                            : selectedImages.length + '개가 선택됨'}
                    </h2>
                    <div className="flex justify-end items-center w-20">
                        <button
                            onClick={() => toggleModal('boardCleanup')}
                            className="active:scale-90 flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(0,0,0,.06)]"
                        >
                            <XIcon size={16.99} />
                        </button>
                    </div>
                </div>

                <MasonryList
                    className="max-h-[428px] w-full flex gap-4 px-5 overflow-y-scroll"
                    columnClassName="masonry-column min-w-[152px] w-[152px]"
                    minCol={3}
                    minWidth={152}
                    sideWidth={40}
                >
                    {sample.map((v, i) => (
                        <div
                            onClick={() => v && imgItemOnClick(v)}
                            key={i}
                            className="w-full rounded-2xl cursor-pointer hover:brightness-75 min-w-[152px] mb-2 relative group inline-block grid-item"
                        >
                            <img
                                src={v}
                                draggable="true"
                                alt={`Sample ${i}`}
                                className="w-full h-full rounded-2xl"
                            />

                            {/* check표시 */}
                            {selectedImages.includes(v) && (
                                <div
                                    style={{
                                        boxShadow:
                                            'inset 0px 0px 0px 2px black, inset 0px 0px 0px 4px white',
                                    }}
                                    className="w-full h-full rounded-2xl left-0 top-0 absolute"
                                >
                                    <div className="flex items-center justify-center w-6 h-6 bg-[#111] absolute bottom-3 right-3 rounded-lg">
                                        <CheckIcon />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </MasonryList>

                {/* 하단 button 영역 */}
                <div className="h-[96px] p-6 flex justify-end">
                    <button
                        onClick={() =>
                            selectedImages.length > 0 &&
                            toggleModal('boardMove')
                        }
                        className={`font-semibold rounded-3xl w-[64px] h-[48px] ${
                            selectedImages.length > 0
                                ? 'text-white bg-[#e60023] hover:bg-[#b60000]'
                                : 'text-[#a5a5a5] bg-[#e9e9e9]'
                        }`}
                    >
                        다음
                    </button>
                </div>
            </div>
        </ModalLayout>
    );
};

export default BoardCleanupModal;
