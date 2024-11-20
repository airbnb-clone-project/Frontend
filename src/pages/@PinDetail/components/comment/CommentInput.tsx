import { FaSmile } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import SendBtn from '../buttons/SendBtn';

const CommentInput = () => {
    return (
        <div className="flex items-center">
            <div id="user_icon" className="w-12 h-12 rounded-full mr-2">
                <img
                    src="https://i.pinimg.com/75x75_RS/58/f3/34/58f334fd79efbff4c67fe8e508e67c40.jpg"
                    alt=""
                    className="rounded-full min-w-12 min-h-12 w-12 h-12"
                />
            </div>
            <div className="border-2 border-[#e9e9e9] rounded-3xl flex items-center justify-center w-full">
                <input
                    type="text"
                    placeholder="댓글 추가"
                    className="placeholder:text-[#9197A3] flex-1 mx-4 focus:outline-none focus:placeholder:text-opacity-70"
                />
                <div className="flex items-center">
                    <div className="flex items-center ">
                        <div className="w-7 h-7 flex justify-center items-center">
                            <FaSmile className="w-5 h-5" />
                        </div>
                        <div className="w-7 h-7 flex justify-center items-center">
                            <GrGallery className="w-5 h-5" />
                        </div>
                    </div>
                    <SendBtn />
                </div>
            </div>
        </div>
    );
};

export default CommentInput;
