import { useEffect, useRef, useState } from 'react';
import ImageBox from '../imagebox/ImageBox';
import Masonry from 'masonry-layout';

const ShowImages = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState<number>(236);
  const timeoutId = useRef<number | null>(null);

  // const [pinData, setPinData] = useState(null)

  const calcItemWidth = () => {
    const windowWidth = window.innerWidth - 104;
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
    <div ref={gridRef} className="mx-4">
      {/* <ImageBox image={} itemWidth={itemWidth} index={1} /> */}
    </div>
  );
};
export default ShowImages;
