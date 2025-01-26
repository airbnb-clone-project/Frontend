import { useEffect } from 'react';

import { useMasonryLayout } from '../../hooks/useMasonryLayout';

import ImageBox from '../ImageBox';

interface ShowImagesProps {
  pinData: PinListResponse | undefined;
}

const ShowImages = ({ pinData }: ShowImagesProps) => {
  const { setRef, itemWidth, handleImageLoad, setTotalImages, destroyMasonry } =
    useMasonryLayout();

  useEffect(() => {
    if (pinData?.data) {
      setTotalImages(pinData.data.length);
    }
    return () => destroyMasonry();
  }, [pinData?.data, setTotalImages, destroyMasonry]);

  if (!pinData?.data) return null;

  return (
    <div
      ref={setRef}
      className="grid-container mx-auto px-4 max-w-[2000px] transition-opacity duration-300 ease-in-out"
    >
      {pinData.data.map((pin, index) => (
        <ImageBox
          key={pin.pinNo}
          pinNo={pin.pinNo}
          index={index}
          image={pin.imageUrl}
          itemWidth={itemWidth}
          onLoad={handleImageLoad}
        />
      ))}
    </div>
  );
};

export default ShowImages;
