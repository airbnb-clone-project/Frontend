import { forwardRef } from 'react';
import SaveBtn from './buttons/SaveBtn';
import ShareBtn from './buttons/ShareBtn';
import HeartBtn from './buttons/HeartBtn';
import OptionsBtn from './buttons/OptionsBtn';
import MyBoardBtn from './buttons/MyBoardBtn';

// ref의 타입을 명확하게 지정해줍니다.
const PinDetailNav = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref}>
            <div className="pr-8 pl-5 pt-8 bg-white">
                <div className="min-h-[60px] h-[60px] flex items-center justify-between">
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
            </div>
        </div>
    );
});

export default PinDetailNav;
