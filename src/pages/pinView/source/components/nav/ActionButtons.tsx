import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { IoShareSocialOutline } from 'react-icons/io5';
import Button from '@/components/common/Button/Button';
import { useState } from 'react';

interface ActionButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  label: string;
  icon: React.ReactNode;
}

const ActionButton = ({ onClick, label, icon }: ActionButtonProps) => (
  <Button
    variant="icon"
    className="w-12 h-12 rounded-full hover:bg-gray-100"
    onClick={onClick}
    aria-label={label}
  >
    {icon}
  </Button>
);

const ActionButtons = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => setIsLiked((prev) => !prev);
  const handleShare = () => {
    // 공유 기능 구현
  };

  return (
    <div className="flex items-center gap-2">
      <ActionButton
        onClick={handleLike}
        isActive={isLiked}
        label="좋아요"
        icon={
          isLiked ? (
            <FaHeart size={20} className="text-red-500" />
          ) : (
            <FaRegHeart size={20} />
          )
        }
      />
      <ActionButton
        onClick={handleShare}
        label="공유하기"
        icon={<IoShareSocialOutline size={20} />}
      />
    </div>
  );
};

export default ActionButtons;
