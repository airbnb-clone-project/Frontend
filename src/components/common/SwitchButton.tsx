import { useState } from 'react';

const SwitchButton = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="relative cursor-pointer" onClick={handleClick}>
            {/* Input 스타일 */}
            <input
                className={`rounded-[48px] border w-[40px] h-[24px] 
                transition-colors duration-2000 border-gray-input-hover
                ${isActive ? 'bg-black' : 'white'}`}
                readOnly
            />
            {/* 이동하는 슬라이더 */}
            <div
                className={`absolute top-0 w-6 h-6 rounded-full border border-gray-input-hover bg-white 
                transition-all duration-2000
                ${isActive ? 'right-0' : 'left-0'}`}
            ></div>
        </div>
    );
};

export default SwitchButton;
