import { useState } from 'react';

/**
 * @returns isPwHide: 비밀번호 text 숨김 여부
 * @returns isPwHideToggle: isPwHide toggle 함수
 */
export const useIsPwHide = () => {
  const [isPwHide, setIsPwHide] = useState<boolean>(false);
  const isPwHideToggle = () => {
    setIsPwHide(!isPwHide);
  };

  return { isPwHide, useIsPwHide, isPwHideToggle };
};
