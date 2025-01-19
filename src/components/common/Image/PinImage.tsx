import { twMerge } from 'tailwind-merge';

interface PinImageProps extends React.HTMLAttributes<HTMLImageElement> {
  image: string;
  alt: string;
  className?: string;
  onHoverChange: (isHovered: boolean) => void;
}

const PinImage = ({
  image,
  alt,
  className,
  onHoverChange,
  ...props
}: PinImageProps) => {
  const baseStyle =
    'w-full bg-gray-image z-0 rounded-xl hover:brightness-[.70] transition-all duration-200';

  return (
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className={twMerge(baseStyle, className)}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      {...props}
    />
  );
};

export default PinImage;
