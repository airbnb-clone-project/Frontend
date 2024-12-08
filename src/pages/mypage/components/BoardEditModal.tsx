import ModalLayout from '@/components/@Modal/ModalLayout';
import CheckIcon from '@/components/icons/CheckIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import WarningIcon from '@/components/icons/WarningIcon';
import XIcon from '@/components/icons/XIcon';
import useBoardEditStore from '@/stores/useBoardEditStore';
import useModalStore from '@/stores/useModalStore';
import BoardCoverChangeModal from './BoardCoverChangeModal';
import BoardImgResizeModal from './BoardImgResizeModal';
import BoardDeleteModal from './BoardDeleteModal';
import AddParticipantsModal from './AddParticipantsModal';

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

    const { isModalOpen, toggleModal } = useModalStore();
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
            <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
                {(() => {
                    if (isModalOpen.boardEdit) {
                        return (
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="flex flex-col cursor-auto max-w-[540px] w-[95vw] h-[96vh]"
                            >
                                {/* Modal header 영역 */}
                                <div className="px-6 py-[56px] flex mb-2">
                                    <div className="w-20"></div>
                                    <h2 className="font-semibold grow text-center text-[28px]">
                                        보드 수정
                                    </h2>
                                    <div
                                        onClick={() => toggleModal('boardEdit')}
                                        className="active:scale-90 rounded-full hover:bg-[rgba(0,0,0,0.06)] active:bg-[rgba(0,0,0,0.1)] flex items-center justify-center mr-10 w-10 h-10 cursor-pointer flex items-center"
                                    >
                                        <XIcon />
                                    </div>
                                </div>

                                {/* scroll 가능 영역 */}
                                <div className="h-full overflow-y-scroll">
                                    <div
                                        style={{ height: 'calc(100% - 250px)' }}
                                        className="px-[32px] flex flex-col gap-8"
                                    >
                                        <div>
                                            <p className="text-xs mb-2">
                                                보드 커버
                                            </p>
                                            <div
                                                onClick={() =>
                                                    toggleModal(
                                                        'boardCoverChange'
                                                    )
                                                }
                                                className="cursor-pointer hover:bg-[#dadada] bg-[#e9e9e9] rounded-2xl w-[138px] h-[138px] flex items-center justify-center"
                                            >
                                                <PlusIcon />
                                            </div>
                                        </div>

                                        {/* board 이름 input */}
                                        <div className="flex flex-col ">
                                            <p className="text-xs mb-2">이름</p>
                                            <input
                                                value={boardEditInfo.name}
                                                onChange={(v) =>
                                                    updateBoardName(
                                                        v.target.value
                                                    )
                                                }
                                                placeholder="예: '가고 싶은 곳' 또는 '요리법'"
                                                className={` focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] ${
                                                    boardEditInfo.name
                                                        .length === 0
                                                        ? 'border-[#c00]' // 이름이 비어 있으면 빨간색 테두리
                                                        : 'border-[#cdcdcd] hover:border-[#a5a5a5]' // 이름이 있으면 회색 테두리
                                                }`} // 포커스 시 파란색 테두리
                                            />
                                            {/* 경고 문구 */}
                                            {boardEditInfo.name.length ===
                                                0 && (
                                                <div className="flex items-center">
                                                    <WarningIcon color="c00" />
                                                    <span className="m-1 text-xs text-[#CC0000]">
                                                        보드 이름을 지정하세요!
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* board 설명 input */}
                                        <div className="">
                                            <p className="text-xs mb-2">설명</p>
                                            <textarea
                                                value={boardEditInfo.explain}
                                                onChange={(v) =>
                                                    updateBoardExplain(
                                                        v.target.value
                                                    )
                                                }
                                                className={`hover:border-[#a5a5a5] resize-none min-h-[96px] w-full border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] `} // 포커스 시 파란색 테두리
                                                placeholder="무엇에 관한 보드인가요?"
                                            ></textarea>
                                        </div>

                                        {/* 참여자 자세히 알아보기 영역 */}
                                        <div>
                                            <div className="mb-2 cursor-pointer">
                                                <span className="text-xs">
                                                    참여자
                                                </span>
                                                <span className="mx-1">·</span>
                                                <span className="text-xs font-semibold hover:underline">
                                                    자세히 알아보기
                                                </span>
                                            </div>

                                            <div className="flex justify-between">
                                                {/* 프로필Img */}
                                                <div className="z-10 hover:cursor-pointer relative w-12 h-12 bg-[#dfdfdf] rounded-full flex items-center justify-center">
                                                    <span className="text-lg text-[#211922] font-semibold">
                                                        T
                                                    </span>
                                                </div>

                                                {/* 참여자 추가 button */}
                                                <button
                                                    onClick={() =>
                                                        toggleModal(
                                                            'addParticipants'
                                                        )
                                                    }
                                                    className="flex items-center justify-center w-12 h-12"
                                                >
                                                    <div className="flex items-center justify-center rounded-full bg-[#e9e9e9] hover:bg-[#d8d8d8] active:scale-95 w-12 h-12">
                                                        <PlusIcon />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        {/* 설정 영역 */}
                                        <div>
                                            <p className="text-xs mb-2">설정</p>

                                            {/* 비밀 보드로 유지 checkBox */}
                                            <div className="flex mb-8">
                                                <div className="relative rounded-xl flex items-center">
                                                    <input
                                                        id="secretBoard"
                                                        type="checkbox"
                                                        className="checked:bg-[#111] checked:border-[#111] cursor-pointer appearance-none border not-checked:hover:border-[#a5a5a5] border-[#767676] border-2 w-6 h-6 rounded-lg"
                                                    />

                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                        <CheckIcon />
                                                    </div>
                                                </div>
                                                <label
                                                    htmlFor="secretBoard"
                                                    className="cursor-pointer ml-2"
                                                >
                                                    <p className="font-semibold">
                                                        비밀 보드로 유지
                                                    </p>
                                                    <p className="text-[#767676]">
                                                        회원님과 참여자만 볼 수
                                                        있습니다.
                                                    </p>
                                                </label>
                                                <div className="text-[#767676] flex items-end hover:underline cursor-pointer">
                                                    자세히 알아보기
                                                </div>
                                            </div>
                                            {/* 개인 설정 checkBox */}
                                            <div className="flex">
                                                <div className="relative rounded-xl flex items-center">
                                                    <input
                                                        id="personal-setting"
                                                        type="checkbox"
                                                        className="checked:bg-[#111] checked:border-[#111] cursor-pointer appearance-none border not-checked:hover:border-[#a5a5a5] border-[#767676] border-2 w-6 h-6 rounded-lg"
                                                    />

                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                        <CheckIcon />
                                                    </div>
                                                </div>
                                                <label
                                                    htmlFor="personal-setting"
                                                    className="cursor-pointer ml-2"
                                                >
                                                    <p className="font-semibold">
                                                        개인 설정
                                                    </p>
                                                    <p className="text-[#767676]">
                                                        내 홈피드에서 이 보드에
                                                        영감을 받은 핀을 봅니다.
                                                    </p>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="py-4">
                                            <p className="text-xs mb-2">작업</p>
                                            <div
                                                onClick={() =>
                                                    toggleModal('boardDelete')
                                                }
                                                className="cursor-pointer"
                                            >
                                                <p className="text-xl font-semibold">
                                                    보드 삭제
                                                </p>
                                                <p className="text-[#767676]">
                                                    7일이 지나면 삭제된 보드를
                                                    복원할 수 없습니다. 이후에는
                                                    영구적으로 삭제됩니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 하단 완료 button영역 */}
                                <div className="p-6 flex-row-reverse min-h-[96px] flex items-center">
                                    <button className="hover:brightness-90 rounded-3xl bg-[#e60023] text-white py-3 px-4 font-semibold">
                                        완료
                                    </button>
                                </div>
                            </div>
                        );
                    }
                    if (isModalOpen.boardCoverChange) {
                        return <BoardCoverChangeModal />;
                    }
                    if (isModalOpen.boardImgResize) {
                        return <BoardImgResizeModal />;
                    }
                    if (isModalOpen.boardDelete) {
                        return <BoardDeleteModal />;
                    }
                    if (isModalOpen.boardDelete) {
                        return <BoardDeleteModal />;
                    }
                    if (isModalOpen.addParticipants) {
                        return <AddParticipantsModal />;
                    }
                })()}
            </div>
        </ModalLayout>
    );
};

export default BoardEditModal;
