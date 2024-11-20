import Button from '../common/Button';

import { LuHeart } from 'react-icons/lu';

const HeartBtn = () => {
    return (
        <div className="mr-2 flex items-center">
            <Button aria-label="반응">
                <LuHeart className="w-5 h-5 stroke-black" />
            </Button>
            <span className="text-black font-semibold">{'129'}</span>
        </div>
    );
};

export default HeartBtn;
