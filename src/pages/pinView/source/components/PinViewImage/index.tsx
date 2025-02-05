interface PinViewImageProps {
  image: string | undefined;
  pinNo: number | undefined;
  alt?: string;
  className?: string;
  loading?: boolean;
  error?: Error | null;
}

const PinViewImage = ({
  image,
  pinNo,
  alt,
  loading,
  error,
}: PinViewImageProps) => {
  // const [isLoading, setIsLoading] = useState(true);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <figure
      className={
        'relative flex-1 bg-gray-100 flex items-center justify-center overflow-hidden'
      }
    >
      <img src={image} alt={alt || `핀 이미지 ${pinNo}`} />
    </figure>
  );
};

export default PinViewImage;
