import { useEffect, useState } from 'react';

interface useDynamicPositionProps {
  parentRef: React.RefObject<HTMLElement>;
  childRef: React.RefObject<HTMLElement>;
  scrollRef: React.RefObject<HTMLDivElement | null>; // scrollRef의 타입을 정확하게 지정
}

const useDynamicPosition = ({
  parentRef,
  childRef,
  scrollRef,
}: useDynamicPositionProps) => {
  const [positionStyle, setPositionStyle] = useState<string>(
    'bottom-full -translate-y-[5px]'
  );

  useEffect(() => {
    const updatePosition = () => {
      if (parentRef.current && childRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const childHeight = childRef.current.offsetHeight;
        const remainingSpace = window.innerHeight - parentRect.bottom;

        // 남은 공간에 따라 top 또는 bottom 설정
        if (remainingSpace < childHeight) {
          setPositionStyle('bottom-full -translate-y-[5px]'); // 공간이 부족하면 bottom-0으로 설정
        } else {
          setPositionStyle('top-full translate-y-1'); // 충분한 공간이면 top-0으로 설정
        }
      }
    };

    // 스크롤 이벤트 감지 대상 결정
    const scrollTarget = scrollRef?.current || window;

    const onScroll = () => {
      updatePosition();
    };

    // 스크롤 대상에 이벤트 리스너 추가
    if (scrollTarget) {
      scrollTarget.addEventListener('scroll', onScroll);
    }

    // 처음 위치 계산
    updatePosition();

    // 리사이즈 이벤트에 대해 updatePosition 호출
    window.addEventListener('resize', updatePosition);

    // clean-up 함수에서 이벤트 리스너 제거
    return () => {
      if (scrollTarget) {
        scrollTarget.removeEventListener('scroll', onScroll);
      }
      window.removeEventListener('resize', updatePosition);
    };
  }, [parentRef, childRef, scrollRef]); // scrollRef를 의존성 배열에 추가

  return positionStyle; // positionStyle 반환
};

export default useDynamicPosition;
