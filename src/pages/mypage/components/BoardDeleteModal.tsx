import ModalLayout from '@/components/@Modal/ModalLayout';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';

const BoardDeleteModal = () => {
    const { toggleModal } = useModalStore();
    return (
        <ModalLayout
            className="z-50 hover:cursor-zoom-out"
            modalName="boardEdit"
            isBackgroundColor={true}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="cursor-auto w-[90vw] max-w-[540px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            >
                {/* Modal header 영역 */}
                <div className="p-6 flex justify-between items-center">
                    <h2 className="flex text-nowrap font-semibold text-xl">
                        이 보드를 삭제할까요?
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

                <div className="p-6">
                    <p>
                        <span className="font-semibold">동물</span> 보드와 핀
                        18개가 프로필에서 삭제됩니다. 7일이 지나면
                        <span className="font-semibold">
                            최근에 삭제됨
                        </span>{' '}
                        섹션에서 프로필을 복원할 수 없습니다. 이후에는
                        영구적으로 삭제됩니다.
                    </p>
                </div>

                {/* 하단 button영역 */}
                <div className="gap-2 p-6 flex-row-reverse min-h-[96px] flex items-center">
                    <button
                        onClick={() => toggleModal('boardEdit')}
                        className="active:scale-95 hover:brightness-90 rounded-3xl bg-[#e60023] text-white py-3 px-4 font-semibold"
                    >
                        삭제
                    </button>
                    <button
                        onClick={() => toggleModal('boardEdit')}
                        className="hover:brightness-95 active:scale-95 py-3 px-4 bg-[#e9e9e9] rounded-3xl font-semibold"
                    >
                        취소
                    </button>
                </div>
            </div>
        </ModalLayout>
    );
};

export default BoardDeleteModal;
