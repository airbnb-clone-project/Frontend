import ModalLayout from '@/components/@Modal/ModalLayout';
import PlusIcon from '@/components/icons/PlusIcon';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import NameInput from './NameInput';
import ExplainInput from './ExplainInput';
import BoardSetting from './BoardSetting';

const BoardEditModal = () => {
    const { toggleModal } = useModalStore();

    return (
        <ModalLayout
            className="z-50 hover:cursor-zoom-out"
            modalName="boardEdit"
            isBackgroundColor={true}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col cursor-auto max-w-[540px] w-[95vw] h-[96vh] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            >
                {/* Modal header 영역 */}
                <div className="px-6 py-[56px] flex mb-2">
                    <div className="w-20"></div>
                    <h2 className="font-semibold grow text-center text-[28px]">
                        보드 수정
                    </h2>
                    <div
                        onClick={() => toggleModal('boardEdit')}
                        className="active:scale-90 rounded-full hover:bg-[rgba(0,0,0,0.06)] active:bg-[rgba(0,0,0,0.1)] justify-center mr-10 w-10 h-10 cursor-pointer flex items-center"
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
                            <p className="text-xs mb-2">보드 커버</p>
                            <div
                                onClick={() => toggleModal('boardCoverChange')}
                                className="cursor-pointer hover:bg-[#dadada] bg-[#e9e9e9] rounded-2xl w-[138px] h-[138px] flex items-center justify-center"
                            >
                                <PlusIcon />
                            </div>
                        </div>

                        {/* board 이름 input */}
                        <NameInput />

                        {/* board 설명 input */}
                        <ExplainInput />

                        {/* 참여자 자세히 알아보기 영역 */}
                        <div>
                            <div className="mb-2 cursor-pointer">
                                <span className="text-xs">참여자</span>
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
                                        toggleModal('addParticipants')
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
                        <BoardSetting />

                        <div className="py-4">
                            <p className="text-xs mb-2">작업</p>
                            <div
                                onClick={() => toggleModal('boardDelete')}
                                className="cursor-pointer"
                            >
                                <p className="text-xl font-semibold">
                                    보드 삭제
                                </p>
                                <p className="text-[#767676]">
                                    7일이 지나면 삭제된 보드를 복원할 수
                                    없습니다. 이후에는 영구적으로 삭제됩니다.
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
        </ModalLayout>
    );
};

export default BoardEditModal;
