import LeftArrowIcon from '@/components/icons/LeftArrowIcon';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import ImageCropper from './ImageCropper';

const BoardImgResizeModal = () => {
    const { toggleModal } = useModalStore();

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[900px] w-[95vw] max-h-[90vh] min-w-[319px] cursor-auto"
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
                <button
                    onClick={() => toggleModal('boardEdit')}
                    className="hover:brightness-95 active:scale-95 py-2 px-3 bg-[#e9e9e9] rounded-3xl font-semibold"
                >
                    완료
                </button>
            </div>
        </div>
    );
};

export default BoardImgResizeModal;
