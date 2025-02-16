import { ReactNode } from 'react';
import { GoBellFill } from 'react-icons/go';
import { RiMessage2Fill } from 'react-icons/ri';
import MenuTooltip from '../MenuTooltip';

interface SideBtnProps {
  type: 'update' | 'message';
  onClick: () => void;
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
}

const activeIcons = {
  update: GoBellFill,
  message: RiMessage2Fill,
};

const SideBtn = ({
  type,
  onClick,
  children,
  className = '',
  isOpen = false,
}: SideBtnProps) => {
  const ActiveIcon = activeIcons[type];

  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-[#111]/10 transition-colors rounded-lg ${className}`}
      >
        {isOpen && ActiveIcon ? <ActiveIcon className="w-5 h-5" /> : children}
      </button>
      <MenuTooltip type={type} />
    </div>
  );
};

export default SideBtn;
