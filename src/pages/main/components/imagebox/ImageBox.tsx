import { useState } from 'react';
import Overlay from './overlay/Overlay';
import useModalStore from '../../../../stores/useModalStore';

const ImageBox = ({
    image,
    itemWidth,
    index,
}: {
    image: string;
    itemWidth: number;
    index: number;
}) => {
    const [hoverBox, setHoverBox] = useState(false);
    const { id, isActiveButton } = useModalStore();
    const handelHoverBox = (bol: boolean) => {
        setHoverBox(bol);
    };

    const isActive = () => {
        return (
            isActiveButton['profile'] ||
            isActiveButton['recommendPin'] ||
            isActiveButton['share']
        );
    };

    return (
        <>
            <div
                className="relative grid-item flex justify-center items-center rounded-xl bg-white mb-4 cursor-pointer font-bold"
                style={{ width: `${itemWidth}px` }}
                onMouseEnter={() => handelHoverBox(true)}
                onMouseLeave={() => handelHoverBox(false)}
            >
                {(hoverBox || (id === index && isActive())) && (
                    <Overlay handelHoverBox={handelHoverBox} index={index} />
                )}
                <img
                    src={image}
                    alt="이미지"
                    className={`w-full bg-[#F5F5F5] z-0 rounded-xl ${
                        hoverBox ? 'brightness-[.70]' : ''
                    }`}
                />
            </div>
        </>
    );
};
export default ImageBox;
// 498 432
// 360 409
