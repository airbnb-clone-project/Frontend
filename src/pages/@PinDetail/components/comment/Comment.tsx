import { Link } from 'react-router-dom';
import AnswerBtn from '../buttons/AnswerBtn';

const Comment = () => {
    return (
        <div>
            <div className=" mr-2">
                <Link to={'/'} className="w-8 h-8 rounded-full">
                    <img
                        src="https://i.pinimg.com/75x75_RS/60/87/ab/6087ab8ddcee0916aa1b88b6faebb74c.jpg"
                        alt=""
                        className="min-h-8 min-w-8 w-8 h-8 rounded-full"
                    />
                </Link>
            </div>
            <div className="text-black flex flex-col">
                <div>
                    <Link to={'/'} id="nickname">
                        <span className="font-semibold">deco</span>
                    </Link>
                    <p>haruka no🙁</p>
                </div>
                <div>
                    <span>2주</span>
                    <AnswerBtn />
                </div>
            </div>
        </div>
    );
};

export default Comment;
