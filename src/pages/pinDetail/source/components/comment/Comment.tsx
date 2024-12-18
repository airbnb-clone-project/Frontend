import { Link } from 'react-router-dom';

import AnswerBtn from '../buttons/AnswerBtn';
import CommentHeartBtn from '../buttons/CommentHeartBtn';
import CommentOptionsBtn from '../buttons/CommentOptionsBtn';
import AnswerBox from './AnswerBox';
import { useState } from 'react';

const Comment = () => {
    const [isOpenAnswer, setOpenAnswer] = useState(false);

    const handleClonseAnswer = () => {
        setOpenAnswer((prev) => !prev);
    };

    return (
        <>
            <div className="flex">
                <Link to={'/'} className="w-8 h-8 rounded-full mr-2">
                    <img
                        src="https://i.pinimg.com/75x75_RS/60/87/ab/6087ab8ddcee0916aa1b88b6faebb74c.jpg"
                        alt=""
                        className="min-h-8 min-w-8 w-8 h-8 rounded-full"
                    />
                </Link>
                <div className="text-black flex flex-col">
                    <div className="flex">
                        <Link to={'/'} id="nickname" className="mr-1.5">
                            <span className="font-semibold">미니호박</span>
                        </Link>
                        <div>
                            <p>haruka no🙁</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2.5 text-[#767676] font-normal text-sm">
                            2주
                        </span>
                        <AnswerBtn />
                        <CommentHeartBtn />
                        <CommentOptionsBtn />
                    </div>
                </div>
            </div>
            <AnswerBox onClose={handleClonseAnswer} />
        </>
    );
};

export default Comment;
