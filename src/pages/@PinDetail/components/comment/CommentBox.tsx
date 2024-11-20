import Comment from './Comment';
import CommentInput from './CommentInput';

import { COMMENTS } from '@/constants/helperText';

const CommentBox = () => {
    return (
        <div className="flex flex-col">
            <div className="pl-4 mb-5 min-h-[130px]">
                <div className="my-3">
                    <h2 className="text-black font-semibold">
                        {COMMENTS.NO_COMMENTS}
                    </h2>
                </div>
                <div id="noComments" className="my-3">
                    <p className="text-[#767676] font-normal">
                        {COMMENTS.NO_COMMENTS_DETAIL}
                    </p>
                </div>
                <div id="comments" className="flex flex-col gap-5">
                    <Comment />
                </div>
            </div>
            <div className="flex-1"></div>
            <CommentInput />
        </div>
    );
};

export default CommentBox;
