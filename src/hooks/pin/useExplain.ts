import { useTempPinStore } from '@/stores/useTempPinStore';
import { useRef, useCallback } from 'react';

/**
 * @returns explain: 핀 설명 state
 * @returns explainOnChange: 핀 설명을 변경하는 함수
 * @returns textareaRef: textarea ref
 * @returns handleResizeHeight: text 길이에 따른 height 증가 함수
 * @returns explainReset: 핀 설명을 reset하는 함수
 */
export const useExplain = () => {
  const { explain, explainReset, setExplain } = useTempPinStore();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResizeHeight = () => {
    const currentTextarea = textareaRef.current;
    if (currentTextarea) {
      currentTextarea.style.height = 'auto'; // height 초기화
      currentTextarea.style.height = currentTextarea.scrollHeight + 'px';
    }
  };

  const explainOnChange = useCallback((text: string) => {
    setExplain(text);
    handleResizeHeight();
  }, []);

  return {
    explain,
    explainOnChange,
    textareaRef,
    handleResizeHeight,
    explainReset,
  };
};
