import Button from '@/components/common/Button/Button';

import { FaAngleDown } from 'react-icons/fa6';

interface DropdownBtnProps {
  onClick: () => void;
}

const DropdownBtn = ({ onClick }: DropdownBtnProps) => {
  return (
    <Button
      variant="icon"
      size="thin"
      onClick={onClick}
      className="rounded-full"
    >
      <div className="w-6 h-6 flex justify-center items-center">
        <FaAngleDown className="fill-gray-500" />
      </div>
    </Button>
  );
};

export default DropdownBtn;
