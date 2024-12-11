import axios from 'axios';
import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { pinAnimation } from './source/animations';
import { handleImageLoad } from './source/utils/handleImageLoad';

import CreatorBox from './source/components/CreatorBox';
import BackBtn from './source/components/buttons/BackBtn';
import PinDetailNav from './source/components/PinDetailNav';
import CommentBox from './source/components/comment/CommentBox';
import CommentInput from './source/components/comment/CommentInput';
import ImageZoomBtn from './source/components/buttons/ImageZoomBtn';
import ImageSearchBtn from './source/components/buttons/ImageSearchBtn';

const PinDetail = () => {
    gsap.registerPlugin(ScrollTrigger);

    const navRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLDivElement>(null);
    const figureRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLOptionElement>(null);

    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const URL =
                'https://7758859e-a564-483a-abb8-5257a9754346.mock.pstmn.io';

            try {
                const res = await axios.get(`${URL}/api/image`);

                setImageData(res.data[0].imageUrl);
            } catch (error) {
                console.error('데이터패칭에 문제가 발생', error);
            }
        };
        fetchData();
    }, []);

    useLayoutEffect(() => {
        if (navRef.current === null) return;
        if (containerRef.current === null) return;

        pinAnimation(navRef.current, containerRef.current);

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="h-[2000px]">
            <BackBtn />
            <div className="flex items-center justify-center ">
                <section
                    ref={containerRef}
                    className="relative w-full h-auto rounded-3xl max-w-[1016px] min-h-[736px] flex shadow-pin_detail"
                >
                    <figure
                        ref={figureRef}
                        className="relative max-w-[508px] w-full rounded-l-3xl"
                    >
                        <img
                            // ‼️ non-null 연산자 추후 제거 필요
                            src={imageData!}
                            alt=""
                            onLoad={(e) =>
                                handleImageLoad(
                                    e,
                                    inputRef,
                                    containerRef,
                                    activeRef
                                )
                            }
                            className="rounded-l-3xl"
                        />
                        <div ref={activeRef}>
                            <ImageZoomBtn imgSrc={imageData!} />
                            <ImageSearchBtn />
                        </div>
                    </figure>
                    <div className="flex flex-col flex-1">
                        <PinDetailNav ref={navRef} />
                        <div id="wrapper" className="px-8 flex flex-col flex-1">
                            <h1
                                tabIndex={0}
                                className="text-left text-black break-words font-semibold text-[28px] mt-4 font-Pretendard focus:outline-4 focus:outline focus:outline-[#92C1FF]"
                            >
                                {'InitialD'}
                            </h1>
                            <CreatorBox />
                            <CommentBox />
                        </div>
                        <CommentInput ref={inputRef} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PinDetail;
