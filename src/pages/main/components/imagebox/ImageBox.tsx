import { useState } from 'react';
import Overlay from './overlay/Overlay';

const ImageBox = ({
    image,
    itemWidth,
}: {
    image: string;
    itemWidth: number;
}) => {
    const [hoverBox, setHoverBox] = useState(false);

    const handelHoverBox = (bol: boolean) => {
        setHoverBox(bol);
    };

    return (
        <>
            <div
                className="relative grid-item flex justify-center items-center rounded-xl bg-white overflow-hidden mb-4 cursor-pointer font-bold"
                style={{ width: `${itemWidth}px` }}
                onMouseEnter={() => handelHoverBox(true)}
                onMouseLeave={() => handelHoverBox(false)}
            >
                {hoverBox && <Overlay handelHoverBox={handelHoverBox} />}
                <img
                    src={image}
                    alt="이미지"
                    className={`w-full bg-[#F5F5F5] ${
                        hoverBox && 'brightness-[.70]'
                    }`}
                />
            </div>
        </>
    );
};
export default ImageBox;
// 498 432
// 360 409
