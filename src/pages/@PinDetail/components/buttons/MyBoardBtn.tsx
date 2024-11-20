import Button from '../common/Button';
import { FaAngleDown } from 'react-icons/fa6';

const MyBoardBtn = () => {
    return (
        <Button
            aria-label="저장하려는 보드를 선택하세요"
            className="rounded-3xl px-4 py-3 ml-3"
        >
            <span title={'애니메이션'} className="text-blac font-semibold mx-1">
                애니메이션
            </span>
            <FaAngleDown className="mx-1 w-4 h-4" />
        </Button>
    );
};

export default MyBoardBtn;
