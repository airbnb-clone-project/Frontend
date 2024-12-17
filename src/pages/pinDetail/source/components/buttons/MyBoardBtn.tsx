import { twMerge } from 'tailwind-merge';
import Button from '../common/Button';
import { FaAngleDown } from 'react-icons/fa6';

interface MyBoardBtnProps {
    className?: string;
}

const MyBoardBtn = ({ className }: MyBoardBtnProps) => {
    return (
        <Button
            aria-label="저장하려는 보드를 선택하세요"
            className={twMerge('rounded-3xl px-4 py-3 ml-3', className)}
        >
            <span title={'애니메이션'} className="text-blac font-semibold mx-1">
                애니메이션
            </span>
            <FaAngleDown className="mx-1 w-4 h-4" />
        </Button>
    );
};

export default MyBoardBtn;
