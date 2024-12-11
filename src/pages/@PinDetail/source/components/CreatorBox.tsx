import { Link } from 'react-router-dom';

import FollowBtn from './buttons/FollowBtn';

const CreatorBox = () => {
    return (
        <div
            id="creator"
            className="flex justify-between items-center mb-8 min-h-[96px]"
        >
            <div className="flex">
                <div id="creator_img" className="px-1">
                    <Link to={'/'} className="w-12 h-12 rounded-full">
                        <img
                            src="https://i.pinimg.com/75x75_RS/58/f3/34/58f334fd79efbff4c67fe8e508e67c40.jpg"
                            alt=""
                            className="rounded-full w-12 h-12"
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-center text-black">
                    <span className="break-words font-semibold text-sm">
                        {'nym sensei'}
                    </span>
                    <span className="break-words font-normal text-sm">
                        팔로워 {'1,279'}명
                    </span>
                </div>
            </div>
            <FollowBtn />
        </div>
    );
};

export default CreatorBox;
