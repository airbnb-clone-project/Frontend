import { useState } from 'react';

import Button from '../common/Button';
import Modal from '../modals/OptionsModal';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const CommentOptionsBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="mx-2.5 flex items-center ">
            <Button
                aria-label="더 보기"
                onClick={() => setIsModalOpen((prev) => !prev)}
                className="w-6 h-6 min-h-6 min-w-6"
            >
                <HiOutlineDotsHorizontal className="w-4 h-4 stroke-[#767676]" />
            </Button>
            <div className="relative">
                {isModalOpen && (
                    <Modal
                        type="COMMENT"
                        onClose={() => console.log('모달 닫힘')}
                    />
                )}
            </div>
        </div>
    );
};

export default CommentOptionsBtn;
