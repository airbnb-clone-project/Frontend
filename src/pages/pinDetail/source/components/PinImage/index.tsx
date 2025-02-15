interface PinImageProps {
  imageUrl: string;
  title: string;
}

const PinImage = ({ imageUrl, title }: PinImageProps) => {
  return (
    <div className="flex-1 min-h-[500px]">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export default PinImage;
