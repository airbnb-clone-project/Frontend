import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { MenuItem } from '../constants/menuItem';

import MenuTooltip from './MenuTooltip';

interface IconProps {
  item: MenuItem;
  className: string;
  onClick?: () => void;
}

const Icon = ({ item, className, onClick }: IconProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick?.();
  };

  const IconComponent =
    isClicked && item.clickIcon ? item.clickIcon : item.icon;

  const iconClassName = twMerge(
    'w-12 h-12 flex justify-center items-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-5',
    item.label === '홈'
      ? 'rounded-full transition-all active:scale-90 active:bg-opacity-10 text-red-default'
      : 'rounded-lg'
  );

  return (
    <div className="relative group">
      <button onClick={handleClick} className={iconClassName}>
        {IconComponent && <IconComponent className={className} />}
      </button>
      <MenuTooltip label={item.label} className="hidden group-hover:block" />
    </div>
  );
};

export default Icon;
