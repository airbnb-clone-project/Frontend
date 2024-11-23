import { useLayoutEffect, useRef } from 'react';

import { createPinNavAnimation } from './animations/pinNavAnimation';

import CreatorBox from './components/CreatorBox';
import BackBtn from './components/buttons/BackBtn';
import PinDetailNav from './components/PinDetailNav';
import CommentBox from './components/comment/CommentBox';
import CommentInput from './components/comment/CommentInput';

const PinDetail = () => {
    const navRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!navRef.current) return;

        const anime = createPinNavAnimation(navRef.current);

        return () => {
            anime.kill();
        };
    }, []);

    return (
        <div className="h-[2000px]">
            <BackBtn />
            <div className="flex items-center justify-center">
                <section className="w-full h-auto rounded-lg max-w-[1016px] flex">
                    <figure className="max-w-[508px] w-full">
                        <img
                            src="https://i.pinimg.com/control2/736x/69/5a/2f/695a2f01db4e11ebc8cf24521075dad8.jpg"
                            alt=""
                        />
                    </figure>
                    <div className="flex flex-col flex-1">
                        <PinDetailNav ref={navRef} />
                        <div id="wrapper" className="px-8 flex flex-col flex-1">
                            <h1 className="text-left text-black break-words font-semibold text-[28px] mt-4 font-Pretendard">
                                {'InitialD'}
                            </h1>
                            <CreatorBox />
                            <CommentBox />
                        </div>
                        <CommentInput />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PinDetail;
