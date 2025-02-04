import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface MenuTooltipProps {
  label: string;
  className?: string;
}

const MenuTooltip = memo(({ label, className }: MenuTooltipProps) => {
  return (
    <div
      role="tooltip"
      className={twMerge(
        'absolute w-max max-w-[180px] h-8  bg-black text-white text-xs p-2 rounded-lg top-2 left-14 z-[60]',
        className
      )}
    >
      {label}
    </div>
  );
});
export default MenuTooltip;
