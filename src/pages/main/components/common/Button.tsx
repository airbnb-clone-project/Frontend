import { useState } from 'react';

const Button = ({
    className,
    children,
    bgColor,
}: {
    className?: string;
    children: React.ReactNode;
    bgColor?: string;
}) => {
    const [hoverButton, setHoverButton] = useState(false);

    const handleHoverButton = (bol: boolean) => {
        setHoverButton(bol);
    };

    return (
        <button
            className={`relative active:scale-90 rounded-full ${bgColor} ${className}`}
            onMouseEnter={() => handleHoverButton(true)}
            onMouseLeave={() => handleHoverButton(false)}
        >
            <div
                className={`absolute top-0 w-full h-full rounded-full bg-black ${
                    hoverButton ? 'opacity-10' : 'opacity-0'
                }`}
            />
            <div className="relative z-10">{children}</div>
        </button>
    );
};
export default Button;
