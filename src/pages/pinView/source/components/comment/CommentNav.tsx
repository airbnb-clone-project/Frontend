import Button from '@/components/common/Button/Button';
import { FaAngleDown } from 'react-icons/fa6';

const CommentNav = () => {
  return (
    <div className="flex justify-between items-center my-2 mt-4 pr-2">
      <h2 className="font-semibold text-normal break-words cursor-pointer">
        댓글 {2}개
      </h2>
      <Button variant="icon" size="sm" className="w-8 h-8">
        <FaAngleDown size={24} />
      </Button>
    </div>
  );
};

export default CommentNav;
