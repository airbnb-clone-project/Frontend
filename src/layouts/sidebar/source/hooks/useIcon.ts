import { useState, useRef } from 'react';
import useIconStore from '@/stores/useIconStore';

export const useIcon = (index: number) => {
  const [isHovered, setIsHovered] = useState(false);
  const { activeIcons, setActiveIcon } = useIconStore();
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActiveIcon(index);
  };

  const handleHover = (value: boolean) => {
    setIsHovered(value);
  };

  return {
    isHovered,
    isActive: activeIcons[index],
    iconRef,
    handleClick,
    handleHover,
  };
};
