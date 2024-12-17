import { useState } from 'react';
import Comment from './Comment';
import { FaAngleUp } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa6';
import NoComment from './NoComment';

const CommentBox = () => {
    const isComment = true;
    const [openComment, setOpenComment] = useState(false);

    return (
        <div className="flex flex-col h-full">
            <div className="px-4 mb-5 min-h-[130px]">
                {isComment ? (
                    <button
                        onClick={() => {
                            setOpenComment((prev) => !prev);
                        }}
                        className="my-3 cursor-pointer flex justify-between"
                    >
                        <h2 className="text-black font-semibold">댓글 {1}개</h2>
                        <span className="flex items-center justify-center">
                            {openComment ? <FaAngleDown /> : <FaAngleUp />}
                        </span>
                    </button>
                ) : (
                    <NoComment />
                )}
                <div id="comments" className="flex flex-col gap-5">
                    <Comment />
                </div>
            </div>
        </div>
    );
};

export default CommentBox;
