import { useState, useCallback } from 'react';

import useModalStore from '@/stores/useModalStore';

import Overlay from '../Overlay';
import PinImage from '@/components/common/Image/PinImage';

interface ImageBoxProps {
  image: string;
  itemWidth: number;
  index: number;
  onLoad?: () => void;
}

const ImageBox = ({ image, itemWidth, index, onLoad }: ImageBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, isActiveButton } = useModalStore();

  const handelHoverBox = useCallback((value: boolean) => {
    setIsHovered(value);
  }, []);

  const isActive = useCallback(() => {
    return (
      isActiveButton['profile'] ||
      isActiveButton['recommendPin'] ||
      isActiveButton['share']
    );
  }, [isActiveButton]);

  const showOverlay = isHovered || (id === index && isActive());
  const imageClassName = `w-full bg-[#F5F5F5] z-0 rounded-xl ${
    isHovered ? 'brightness-[.70]' : ''
  }`;

  return (
    <div
      className="relative grid-item flex justify-center items-center rounded-xl bg-white mb-4 cursor-pointer font-bold"
      style={{ width: `${itemWidth}px` }}
      onMouseEnter={() => handelHoverBox(true)}
      onMouseLeave={() => handelHoverBox(false)}
    >
      {showOverlay && <Overlay handelHoverBox={handelHoverBox} index={index} />}
      <PinImage
        image={image}
        alt={`핀 이미지 ${index + 1}`}
        className={imageClassName}
        onLoad={onLoad}
        onHoverChange={handelHoverBox}
      />
    </div>
  );
};

export default ImageBox;
