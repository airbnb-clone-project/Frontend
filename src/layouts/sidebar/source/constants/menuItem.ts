import { IconType } from 'react-icons';

import { FaPinterest } from 'react-icons/fa';
import { GoBell, GoBellFill } from 'react-icons/go';
import { FaRegSquarePlus, FaSquarePlus } from 'react-icons/fa6';
import { RiMessage2Line, RiMessage2Fill } from 'react-icons/ri';

export interface MenuItem {
  label: string;
  icon: IconType | null;
  clickIcon?: IconType | null;
  color?: string;
  main: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: '홈',
    icon: FaPinterest,
    color: 'red',
    main: true,
  },
  {
    label: '만들기',
    icon: FaRegSquarePlus,
    clickIcon: FaSquarePlus,
    main: true,
  },
  {
    label: '업데이트',
    icon: GoBell,
    clickIcon: GoBellFill,
    main: false,
  },
  {
    label: '메시지',
    icon: RiMessage2Line,
    clickIcon: RiMessage2Fill,
    main: false,
  },
];
