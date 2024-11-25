import { useRef, useState } from 'react';
import useIconStore from '../../../../stores/useIconStore';
import HoverModal from '../hovermodal/HoverModal';
import { MenuItem } from '../SideBar';

const Icon = ({
    item,
    className,
    index,
}: {
    item: MenuItem;
    className?: string;
    index: number;
}) => {
    const [hoverIcon, setHoverIcon] = useState(false);
    const { activeIcons, setActiveIcon } = useIconStore();
    const iconRef = useRef<HTMLDivElement>(null);

    const handleClickIcon = () => {
        setActiveIcon(index);
        if (!item.main) {
        }
    };

    const handleHoverIcon = (bol: boolean) => {
        setHoverIcon(bol);
    };

    return (
        <>
            <div className="relative">
                <div
                    ref={iconRef}
                    className={`w-12 h-12 flex justify-center items-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-5 ${
                        item.label === '홈'
                            ? 'rounded-full transition-all active:scale-90 active:bg-opacity-10'
                            : 'rounded-lg'
                    }`}
                    onClick={handleClickIcon}
                    onMouseEnter={() => handleHoverIcon(true)}
                    onMouseLeave={() => handleHoverIcon(false)}
                >
                    {item.icon ? (
                        item.clickIcon && activeIcons[index] ? (
                            <item.clickIcon
                                className={className}
                                color={item.color ? item.color : ''}
                            />
                        ) : (
                            <item.icon
                                className={className}
                                color={item.color ? item.color : ''}
                            />
                        )
                    ) : (
                        <span>{item.label}</span>
                    )}
                </div>
                {hoverIcon && (
                    <HoverModal
                        itemLabel={item.label}
                        className={`left-[56px]`}
                    />
                )}
            </div>
        </>
    );
};

export default Icon;
