import { useState } from 'react';

import OptionsModal from '../modal/OptionsModal';
import Button from '@/components/common/Button/Button';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

interface OptionsBtnProps {
  className?: string;
}

const OptionsBtn = ({ className }: OptionsBtnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        size="sm"
        variant="icon"
        className={twMerge('w-12 h-12', className)}
        aria-label="추가 옵션"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <HiOutlineDotsHorizontal size={24} />
      </Button>
      {isModalOpen && (
        <OptionsModal type="PIN" onClose={() => console.log('모달 닫힘')} />
      )}
    </div>
  );
};

export default OptionsBtn;
