import { useTempPinStore } from '@/stores/useTempPinStore';
import { useCallback } from 'react';

/**
 * @returns link: 핀 링크 state
 * @returns linkOnChange: 핀 링크를 변경하는 함수
 * @returns linkReset: 핀 링크를 reset하는 함수
 */
export const useLink = () => {
  const { link, setLink, linkReset } = useTempPinStore();

  const linkOnChange = useCallback((text: string) => {
    setLink(text);
  }, []);

  return { link, linkOnChange, linkReset };
};
