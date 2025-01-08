import { useTempPinStore } from '@/stores/useTempPinStore';
import { useCallback } from 'react';

// Title 관리 훅
/**
 * @returns title: 핀 제목 state
 * @returns titleOnChange: 핀 제목을 변경하는 함수
 * @returns titleReset: 핀 제목을 reset하는 함수
 */
export const useTitle = () => {
  const { title, setTitle, titleReset } = useTempPinStore();

  const titleOnChange = useCallback((text: string) => {
    setTitle(text);
  }, []);

  return { title, titleOnChange, titleReset };
};
