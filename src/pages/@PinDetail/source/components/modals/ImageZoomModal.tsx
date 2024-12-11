import MyBoardBtn from '../buttons/MyBoardBtn';
import SaveBtn from '../buttons/SaveBtn';
import Portal from '../common/Portal';
import { IoClose } from 'react-icons/io5';

interface ImageZoomModalProps {
    onClose: () => void;
    imgSrc: string;
}

const ImageZoomModal = ({ onClose, imgSrc }: ImageZoomModalProps) => {
    return (
        <Portal>
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 py-5">
                <button
                    onClick={onClose}
                    className="absolute top-5 left-5 w-12 h-12 rounded-full bg-white/20 flex justify-center items-center shadow-md hover:bg-white/90 transition"
                    aria-label="Close"
                >
                    <IoClose className="w-7 h-7 fill-black" />
                </button>
                <img
                    src={imgSrc}
                    alt=""
                    className="max-w-full max-h-full object-contain rounded-3xl"
                />
                <MyBoardBtn className="absolute top-5 right-20 -translate-x-2 px-4 py-3" />
                <SaveBtn className="absolute top-5 right-5 px-4 py-3" />
            </div>
        </Portal>
    );
};

export default ImageZoomModal;
