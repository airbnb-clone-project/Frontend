import PinImage from '@/components/common/Pin/PinImage';

interface ImageBoxProps {
  image: string;
  itemWidth: number;
  index: number;
  pinNo: number;
  onLoad?: () => void;
}

const ImageBox = ({
  image,
  itemWidth,
  index,
  pinNo,
  onLoad,
}: ImageBoxProps) => {
  return (
    <div
      className="relative grid-item rounded-xl bg-white mb-4 cursor-pointer overflow-hidden"
      style={{
        width: `${itemWidth}px`,
      }}
    >
      <div className="transition-[filter] duration-200 ease-in-out hover:brightness-[.70]">
        <PinImage
          image={image}
          alt={`핀 이미지 ${index + 1}`}
          pinNo={pinNo}
          onLoad={onLoad}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageBox;
