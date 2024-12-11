import LeftArrowIcon from '@/components/icons/LeftArrowIcon';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import ImageCropper from './ImageCropper';
import ModalLayout from '@/components/@Modal/ModalLayout';
import Button from '@/components/common/Button';

const BoardImgResizeModal = () => {
    const { toggleModal } = useModalStore();

    return (
        <ModalLayout
            className="z-50 hover:cursor-zoom-out"
            modalName="boardEdit"
            isBackgroundColor={true}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="cursor-auto max-w-[900px] w-[95vw] max-h-[90vh] min-w-[319px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            >
                {/* Modal header 영역 */}
                <div className="px-10 py-10 flex mb-2">
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => toggleModal('boardCoverChange')}
                            className="active:scale-90 flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(0,0,0,.06)]"
                        >
                            <LeftArrowIcon size={16.99} />
                        </button>
                    </div>
                    <h2 className="flex text-nowrap font-semibold grow justify-center text-[28px]">
                        이동하고 크기를 조정하여 자르기
                    </h2>
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => toggleModal('boardEdit')}
                            className="active:scale-90 flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(0,0,0,.06)]"
                        >
                            <XIcon size={16.99} />
                        </button>
                    </div>
                </div>

                {/* 이미지 영역 */}
                <ImageCropper />

                {/* 완료 버튼 */}
                <div className="flex p-6 justify-end">
                    <Button
                        color="gray"
                        text="완료"
                        onClick={() => toggleModal('boardEdit')}
                        className="py-2 px-4"
                    />
                </div>
            </div>
        </ModalLayout>
    );
};

export default BoardImgResizeModal;
