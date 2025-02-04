import { twMerge } from 'tailwind-merge';

import Button from '@/components/common/Button/Button';

import { BiHeart } from 'react-icons/bi';

interface CommentHeartBtnProps {
  className?: string;
}

const CommentHeartBtn = ({ className }: CommentHeartBtnProps) => {
  // 근데 하트기능안에 좋아요까지 구현이 되어있나..?
  return (
    <div className="flex items-center ">
      <Button size="sm" variant="icon" className="w-8 h-8">
        <BiHeart size={16} />
      </Button>
      <span className={twMerge('text-xs', className)}>100</span>
    </div>
  );
};

export default CommentHeartBtn;
