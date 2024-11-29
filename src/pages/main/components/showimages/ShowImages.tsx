import { useEffect, useRef, useState } from 'react';
import ImageBox from '../imagebox/ImageBox';
import Masonry from 'masonry-layout';
import image1 from '../김마야님_배경투명화.png';
import image2 from '../윙푸님_투명배경.png';
import image3 from '../73_20200831140305.png';

// 844 1096 1348 1600
//756 1008 1260 1512

const ShowImages = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState<number>(236);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    const calcItemWidth = () => {
        const windowWidth = window.innerWidth - 88;
        const col = Math.floor(windowWidth / 252);
        const boxWidth = windowWidth / col - 16;

        return Math.floor(boxWidth);
    };

    useEffect(() => {
        setItemWidth(calcItemWidth());
        const handleResize = () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            timeoutId.current = setTimeout(() => {
                setItemWidth(calcItemWidth());
            }, 200);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (gridRef.current && itemWidth) {
            new Masonry(gridRef.current, {
                itemSelector: '.grid-item',
                columnWidth: itemWidth,
                gutter: 16,
                resize: false,
                transitionDuration: 0,
            });
        }
    }, [itemWidth]);

    return (
        <div ref={gridRef} className="ml-4">
            <ImageBox image={image1} itemWidth={itemWidth} index={1} />
            <ImageBox image={image2} itemWidth={itemWidth} index={2} />
            <ImageBox image={image3} itemWidth={itemWidth} index={3} />
            <ImageBox image={image1} itemWidth={itemWidth} index={4} />
            <ImageBox image={image2} itemWidth={itemWidth} index={5} />
            <ImageBox image={image3} itemWidth={itemWidth} index={6} />
            <ImageBox image={image1} itemWidth={itemWidth} index={7} />
            <ImageBox image={image2} itemWidth={itemWidth} index={8} />
            <ImageBox image={image3} itemWidth={itemWidth} index={9} />
            <ImageBox image={image1} itemWidth={itemWidth} index={10} />
            <ImageBox image={image2} itemWidth={itemWidth} index={11} />
            <ImageBox image={image3} itemWidth={itemWidth} index={12} />
        </div>
    );
};
export default ShowImages;
