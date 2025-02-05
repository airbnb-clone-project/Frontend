import { twMerge } from 'tailwind-merge';

interface PinImageProps {
  image: string;
  alt: string;
  className?: string;
}

const PinImage = ({ image, alt, className }: PinImageProps) => {
  const baseStyle =
    'w-full bg-gray-image z-0 rounded-xl hover:brightness-[.70] transition-all duration-200';

  return (
    <figure>
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={twMerge(baseStyle, className)}
      />
    </figure>
  );
};

export default PinImage;
