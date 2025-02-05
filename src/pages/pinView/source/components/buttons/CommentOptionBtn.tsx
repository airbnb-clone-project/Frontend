import { useState } from 'react';

import OptionsModal from '../modal/OptionsModal';
import Button from '@/components/common/Button/Button';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

interface CommentOptionBtnProps {
  className?: string;
}

const CommentOptionBtn = ({ className }: CommentOptionBtnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        size="sm"
        variant="icon"
        className={twMerge('w-5 h-5', className)}
        aria-label="추가 옵션"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <HiOutlineDotsHorizontal size={16} />
      </Button>
      {isModalOpen && (
        <OptionsModal type="PIN" onClose={() => console.log('모달 닫힘')} />
      )}
    </div>
  );
};

export default CommentOptionBtn;
