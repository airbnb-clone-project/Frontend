import Comment from './Comment';
import { COMMENTS } from '@/constants/helperText';

const NoComment = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="pl-4 mb-5 min-h-[130px]">
                <div className="my-3 cursor-pointer flex justify-between">
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
        </div>
    );
};

export default NoComment;
