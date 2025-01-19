import { memo } from 'react';

interface MenuTooltipProps {
  label: string;
}

const MenuTooltip = memo(({ label }: MenuTooltipProps) => {
  return (
    <div
      role="tooltip"
      className="absolute w-max max-w-[180px] h-8  bg-black text-white text-xs p-2 rounded-lg top-2 left-14 z-[60]"
    >
      {label}
    </div>
  );
});
export default MenuTooltip;
