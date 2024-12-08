import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    text: string;
    className?: string;
    color: 'gray' | 'red';
    onClick?: () => void;
}
const Button = ({ text, className, color, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                `${
                    color === 'gray'
                        ? 'bg-gray-filled-default hover:bg-gray-filled-hover active:bg-gray-filled-active'
                        : 'text-white bg-red-default hover:bg-red-hover active:bg-red-active'
                } transition-all duration-2000 active:scale-90 font-semibold max-w-full max-h-full py-3 px-4 cursor-pointer rounded-3xl`,
                className
            )}
        >
            {text}
        </button>
    );
};

export default Button;
