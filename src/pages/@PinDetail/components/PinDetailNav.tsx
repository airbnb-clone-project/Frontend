import SaveBtn from './buttons/SaveBtn';
import ShareBtn from './buttons/ShareBtn';
import HeartBtn from './buttons/HeartBtn';
import OptionsBtn from './buttons/OptionsBtn';
import MyBoardBtn from './buttons/MyBoardBtn';

const PinDetailNav = () => {
    return (
        <div className="flex items-center justify-between bg-white pr-8 pl-5">
            <div id="action-items" className="flex items-center">
                <HeartBtn />
                <ShareBtn />
                <OptionsBtn />
            </div>
            <div id="save-items" className="flex items-center gap-1">
                <MyBoardBtn />
                <SaveBtn />
            </div>
        </div>
    );
};

export default PinDetailNav;
