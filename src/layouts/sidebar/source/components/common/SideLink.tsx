import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { FaPinterest } from 'react-icons/fa';
import { FaSquarePlus } from 'react-icons/fa6';
import { RiSettingsFill } from 'react-icons/ri';
import MenuTooltip from '../MenuTooltip';
import { twMerge } from 'tailwind-merge';

interface SideLinkProps {
  path: string;
  type: 'home' | 'pincreate' | 'settings';
  label: string;
  children: ReactNode;
  className?: string;
}

const activeIcons = {
  home: FaPinterest,
  pincreate: FaSquarePlus,
  settings: RiSettingsFill,
};

const iconColors = {
  home: 'text-red-default',
  pincreate: 'text-black',
  settings: 'text-black',
};

const BASE_STYLE =
  'w-12 h-12 flex justify-center items-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-5 rounded-lg cursor-pointer';

const SideLink = ({
  path,
  type,
  label,
  children,
  className = '',
}: SideLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;
  const ActiveIcon = activeIcons[type];

  return (
    <div className="relative group">
      <Link
        to={path}
        className={twMerge(BASE_STYLE, className)}
        aria-label={label}
      >
        <div className={iconColors[type]}>
          {isActive && ActiveIcon ? (
            <ActiveIcon className="w-5 h-5" />
          ) : (
            children
          )}
        </div>
      </Link>
      <MenuTooltip type={type} />
    </div>
  );
};

export default SideLink;
