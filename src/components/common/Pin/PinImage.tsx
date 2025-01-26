import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface PinImageProps extends React.HTMLAttributes<HTMLImageElement> {
  image: string | undefined;
  alt: string | undefined;
  pinNo: number | undefined;
  className?: string;
}

const PinImage = ({
  image,
  alt,
  pinNo,
  className,
  ...props
}: PinImageProps) => {
  if (!image) return null;

  const baseStyle =
    'w-full bg-gray-image z-0 rounded-xl hover:brightness-[.70] transition-all duration-200';

  return (
    <Link
      to={`/pin/${pinNo}`}
      className="transition-[filter] duration-200 ease-in-out hover:brightness-[.70]"
    >
      <figure>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={twMerge(baseStyle, className)}
          {...props}
        />
      </figure>
    </Link>
  );
};

export default PinImage;
