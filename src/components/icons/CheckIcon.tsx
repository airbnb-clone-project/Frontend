import { twMerge } from 'tailwind-merge';

interface CheckIconProps {
    size?: number;
    className?: string;
}
const CheckIcon = ({ size, className }: CheckIconProps) => {
    return (
        <svg
            aria-hidden="true"
            aria-label=""
            height={size ? size : '12'}
            role="img"
            viewBox="0 0 24 24"
            width={size ? size : '12'}
            className={twMerge('fill-white', className)}
        >
            <path d="M9 22 .73 13.75a2.5 2.5 0 1 1 3.54-3.53L9 14.94l10.73-10.7a2.5 2.5 0 0 1 3.54 3.52z"></path>
        </svg>
    );
};

export default CheckIcon;
