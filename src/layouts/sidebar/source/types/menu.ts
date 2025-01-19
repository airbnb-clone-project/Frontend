import { IconType } from 'react-icons';

export interface MenuItem {
  label: string;
  icon: IconType | null;
  clickIcon?: IconType | null;
  color?: string;
  main: boolean;
}

export interface IconProps {
  item: MenuItem;
  className?: string;
  index: number;
}
