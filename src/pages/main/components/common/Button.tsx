import { useState } from 'react';

const Button = ({
    className,
    children,
    bgColor, // 버튼에 배경이 있다면 넣어줘야함
    opacity = false, // 클릭시 bg 검점색으로 바꿀지 말지
    isClicked = false,
}: {
    className?: string;
    children: React.ReactNode;
    bgColor?: string;
    opacity?: boolean;
    isClicked?: boolean;
}) => {
    const [hoverButton, setHoverButton] = useState(false);

    const handleHoverButton = (bol: boolean) => {
        setHoverButton(bol);
    };

    const FOpacity = () => {
        if (opacity && isClicked) {
            return 'opacity-100';
        } else if (hoverButton) {
            return 'opacity-20';
        }
        return 'opacity-0';
    };

    return (
        <>
            <button
                className={`relative active:scale-90 rounded-full ${bgColor} ${className}`}
                onMouseEnter={() => handleHoverButton(true)}
                onMouseLeave={() => handleHoverButton(false)}
            >
                <div
                    className={`absolute top-0 w-full h-full rounded-full bg-black ${FOpacity()}`}
                />
                <div className="relative">{children}</div>
            </button>
        </>
    );
};
export default Button;
