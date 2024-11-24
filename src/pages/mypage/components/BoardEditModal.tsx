import ModalLayout from '@/components/@Modal/ModalLayout';
import PlusIcon from '@/components/icons/PlusIcon';
import WarningIcon from '@/components/icons/WarningIcon';
import XIcon from '@/components/icons/XIcon';
import useBoardEditStore from '@/stores/useBoardEditStore';
import useModalStore from '@/stores/useModalStore';

const BoardEditModal = () => {
    // const sample: string[] = [
    //     'https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524__340.jpg',
    //     'https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg',
    //     'https://cdn.pixabay.com/photo/2020/05/25/20/14/holland-iris-5220407__340.jpg',
    //     'https://cdn.pixabay.com/photo/2020/10/08/17/39/waves-5638587__340.jpg',
    //     'https://cdn.pixabay.com/photo/2019/01/30/11/17/zebra-3964360__340.jpg',
    //     'https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663__340.png',
    //     'https://cdn.pixabay.com/photo/2019/06/05/10/34/mimosa-4253396__340.jpg',
    //     'https://cdn.pixabay.com/photo/2020/08/04/14/42/sky-5463015__340.jpg',
    //     'https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg',
    //     'https://cdn.pixabay.com/photo/2020/01/09/01/00/the-eye-on-the-greek-4751572__340.png',
    //     'https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678__340.png',
    //     'https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898__340.jpg',
    //     'https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg',
    // ];

    const { isModalOpen } = useModalStore();
    const { boardEditInfo, setBoardEditInfo } = useBoardEditStore();

    const updateBoardName = (boradName: string) => {
        setBoardEditInfo({ name: boradName });
    };
    const updateBoardExplain = (boradExplain: string) => {
        setBoardEditInfo({ explain: boradExplain });
    };

    return (
        <ModalLayout
            className="z-50 hover:cursor-zoom-out"
            modalName="boardEdit"
            isBackgroundColor={true}
        >
            {(() => {
                if (isModalOpen.boardEdit) {
                    return (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-col cursor-auto max-w-[540px] w-[95vw] rounded-2xl h-[96vh] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="h-full">
                                <div className="px-6 py-[56px] flex mb-2">
                                    <div className="w-20"></div>
                                    <h2 className="font-semibold grow text-center text-[28px]">
                                        보드 수정
                                    </h2>
                                    <div className="flex items-center w-20">
                                        <XIcon />
                                    </div>
                                </div>
                                <div
                                    style={{ height: 'calc(100% - 250px)' }}
                                    className="px-[32px] overflow-y-scroll"
                                >
                                    <p className="text-xs mb-2">보드 커버</p>
                                    <div className="mb-8 cursor-pointer hover:bg-[#dadada] bg-[#e9e9e9] rounded-2xl w-[138px] h-[138px] flex items-center justify-center">
                                        <PlusIcon />
                                    </div>

                                    {/* board 이름 input */}
                                    <div className="flex flex-col mb-8">
                                        <p className="text-xs mb-2">이름</p>
                                        <input
                                            value={boardEditInfo.name}
                                            onChange={(v) =>
                                                updateBoardName(v.target.value)
                                            }
                                            placeholder="예: '가고 싶은 곳' 또는 '요리법'"
                                            className={` focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] ${
                                                boardEditInfo.name.length === 0
                                                    ? 'border-[#c00]' // 이름이 비어 있으면 빨간색 테두리
                                                    : 'border-[#cdcdcd]' // 이름이 있으면 회색 테두리
                                            }`} // 포커스 시 파란색 테두리
                                        />
                                        {/* 경고 문구 */}
                                        {boardEditInfo.name.length === 0 && (
                                            <div className="flex items-center">
                                                <WarningIcon color="c00" />
                                                <span className="m-1 text-xs text-[#CC0000]">
                                                    보드 이름을 지정하세요!
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* board 설명 input */}
                                    <div>
                                        <p className="text-xs mb-2">설명</p>
                                    </div>
                                    <textarea
                                        value={boardEditInfo.explain}
                                        onChange={(v) =>
                                            updateBoardExplain(v.target.value)
                                        }
                                        className={`resize-none min-h-[96px] w-full border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] `} // 포커스 시 파란색 테두리
                                        placeholder="무엇에 관한 보드인가요?"
                                    ></textarea>
                                </div>
                            </div>

                            {/* 하단 완료 button영역 */}
                            <div className="min-h-[96px]">
                                <button className="rounded-3xl bg-[#e60023] text-white py-3 px-4 font-semibold">
                                    완료
                                </button>
                            </div>
                        </div>
                    );
                } else if (isModalOpen.boardCleanup) {
                    return <div>d</div>;
                }
            })()}
        </ModalLayout>
    );
};

export default BoardEditModal;
