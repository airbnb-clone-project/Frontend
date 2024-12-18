import Button from '../common/Button';

import { LuHeart } from 'react-icons/lu';

const CommentHeartBtn = () => {
    return (
        <div className="mx-2.5 flex items-center">
            <Button
                aria-label="반응"
                aria-disabled={false}
                className="min-w-4 min-h-4 w-4 h-4 mx-0.5 hover:bg-white"
            >
                <LuHeart className="w-4 h-4 stroke-[#767676]" />
            </Button>
            <span className="text-[#767676] font-semibold text-sm h-4">
                {'129'}
            </span>
        </div>
    );
};

export default CommentHeartBtn;
