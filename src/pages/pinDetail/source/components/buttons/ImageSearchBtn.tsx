import { useState } from 'react';

import { BUTTONS } from '@/constants/helperText';

import { TbZoomScan } from 'react-icons/tb';

const { VIEW_LARGER, CLOSEUP_ACTION } = BUTTONS.ZOOM;

const ImageSearchBtn = () => {
    const [onEnter, setOnEnter] = useState(false);

    const handleMouseEnter = () => {
        setOnEnter(true);
    };

    const handleMouseLeave = () => {
        setOnEnter(false);
    };
    return (
        <div className="absolute bottom-4 right-6 z-50 group">
            <div className="w-full">
                <button
                    aria-label={onEnter ? VIEW_LARGER : CLOSEUP_ACTION}
                    aria-disabled={false}
                    tabIndex={0}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="min-w-12 min-h-12 w-12 h-12 rounded-full bg-white opacity-90 flex justify-center items-center py-2 px-3 overflow-hidden group-hover:w-36 transition-all duration-300 ease-in-out relative"
                >
                    <p
                        className={`transition-opacity ease-in-out mr-6 font-semibold ${
                            onEnter
                                ? 'opacity-100 visible duration-1000'
                                : 'opacity-0 invisible duration-150'
                        }`}
                    >
                        {VIEW_LARGER}
                    </p>
                    <TbZoomScan className="absolute w-6 h-6 top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2" />
                </button>
            </div>
        </div>
    );
};

export default ImageSearchBtn;
