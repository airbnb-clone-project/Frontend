import { useEffect, useState } from 'react';

interface UseContentHeightProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export const useContentHeight = ({ contentRef }: UseContentHeightProps) => {
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    // 초기 높이 설정
    updateHeight();

    // 리사이즈 이벤트에 대응
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [contentRef]);

  return contentHeight;
};
