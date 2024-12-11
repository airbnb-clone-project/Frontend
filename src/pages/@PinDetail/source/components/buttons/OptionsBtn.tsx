import { useState } from 'react';

import Button from '../common/Button';
import Modal from '../modals/OptionsModal';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const OptionsBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative">
            <Button
                aria-label="추가 옵션"
                onClick={() => setIsModalOpen((prev) => !prev)}
            >
                <HiOutlineDotsHorizontal className="w-5 h-5 fill-black" />
            </Button>
            {isModalOpen && (
                <Modal type="PIN" onClose={() => console.log('모달 닫힘')} />
            )}
        </div>
    );
};

export default OptionsBtn;
