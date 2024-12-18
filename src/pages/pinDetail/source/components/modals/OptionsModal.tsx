import { useState } from 'react';

import { MODALS } from '@/constants/helperText';

type ModalProps = {
    type: 'COMMENT' | 'PIN';
    onClose: () => void;
};

const Modal = ({ type, onClose }: ModalProps) => {
    const options = MODALS[type].OPTIONS;
    const [selected, setSelected] = useState<string | null>(null);

    const handleItemClick = (option: string) => {
        setSelected(option);
    };

    return (
        <div
            id="modal-overlay"
            className={`absolute z-40 ${
                type === 'COMMENT' ? 'top-4' : 'top-14'
            } right-0 translate-x-1/2 min-w-[180px] min-h-[90px]`}
            onClick={onClose}
        >
            <div className="bg-white shadow-option_modal w-full h-full p-2 rounded-2xl">
                <ul className="flex flex-col">
                    {Object.values(options).map((option, index) => (
                        <li
                            key={index}
                            className={`p-2 cursor-pointer rounded ${
                                selected === option ? 'bg-gray-200' : 'bg-white'
                            }`}
                            onMouseEnter={() => handleItemClick(option)}
                        >
                            <span className="text-gray-800 font-semibold">
                                {option}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
