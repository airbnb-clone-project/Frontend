import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TransparentButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/** 배경이 색이 default일 떄 투명한 버튼 컴포넌트 */
const TransparentButton = ({
    children,
    className,
    onClick,
}: TransparentButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                'rounded-full flex justify-center items-center cursor-pointer active:scale-90 hover:bg-gray-outline-hover active:bg-gray-outline-active',
                className
            )}
        >
            {children}
        </button>
    );
};

export default TransparentButton;
