import { twMerge } from 'tailwind-merge';

import { IconProps } from '../types/menu';
import { useIcon } from '../hooks/useIcon';

import MenuTooltip from './MenuTooltip';

const Icon = ({ item, className, index }: IconProps) => {
  const { isHovered, isActive, iconRef, handleClick, handleHover } =
    useIcon(index);

  const IconComponent = isActive && item.clickIcon ? item.clickIcon : item.icon;
  const iconClassName = twMerge(
    'w-12 h-12 flex justify-center items-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-5',
    item.label === '홈'
      ? 'rounded-full transition-all active:scale-90 active:bg-opacity-10'
      : 'rounded-lg'
  );

  if (!IconComponent) return <span>{item.label}</span>;

  return (
    <div className="relative">
      <div
        ref={iconRef}
        className={iconClassName}
        onClick={handleClick}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <IconComponent className={className} color={item.color || undefined} />
      </div>
      {isHovered && <MenuTooltip label={item.label} />}
    </div>
  );
};

export default Icon;
