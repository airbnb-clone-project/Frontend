import Button from '@/components/common/Button/Button';

import { BiHeart } from 'react-icons/bi';

const HeartBtn = () => {
  return (
    <div className="flex items-center mr-2">
      <Button
        size="sm"
        variant="icon"
        className="w-12 h-12"
        aria-label="좋아요"
      >
        <BiHeart size={24} />
      </Button>
      <span className="text-normal cursor-pointer font-bold">100</span>
    </div>
  );
};

export default HeartBtn;
