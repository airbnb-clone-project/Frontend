import MasonryList from '@/components/common/MasonryList';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';

const BoardCoverChangeModal = () => {
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

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="w-[95vw] max-w-[900px] max-h-[749px] min-w-[319px] cursor-auto"
        >
            {/* Modal header 영역 */}
            <div className="px-12 py-[56px] flex mb-2">
                <div className="w-20"></div>
                <h2 className="flex text-nowrap font-semibold grow justify-center text-[28px]">
                    보드 커버 변경
                </h2>
                <div className="flex justify-end items-center w-20">
                    <button
                        onClick={() => toggleModal('boardEdit')}
                        className="active:scale-90 flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(0,0,0,.06)]"
                    >
                        <XIcon size={16.99} />
                    </button>
                </div>
            </div>

            <MasonryList
                minCol={3}
                minWidth={152}
                sideWidth={32}
                style={{ height: 'calc(749px - 154px)' }}
                className="flex gap-4 px-2 overflow-scroll"
                columnClassName="masonry-column min-w-[152px]"
            >
                {sample.map((v, i) => (
                    <div
                        onClick={() => {
                            toggleModal('boardImgResize');
                        }}
                        key={i}
                        className="cursor-pointer hover:brightness-75 min-w-[152px] mb-2 relative group inline-block grid-item"
                    >
                        <img
                            src={v}
                            draggable="true"
                            alt={`Sample ${i}`}
                            className="rounded-2xl"
                        />
                    </div>
                ))}
            </MasonryList>
        </div>
    );
};

export default BoardCoverChangeModal;
