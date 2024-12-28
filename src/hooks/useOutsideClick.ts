import { useEffect } from 'react';

interface UseOutsideClickOptions {
  ref: React.RefObject<HTMLElement>; // 감지할 요소의 ref
  callback: (event?: Event) => void; // 요소 외부 클릭 시 호출할 함수
}

const useOutsideClick = ({ ref, callback }: UseOutsideClickOptions) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      // ref.current가 유효하고, 이벤트 대상이 ref.current에 포함되지 않을 때
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event); // 외부 클릭으로 간주하고 콜백 함수 실행
      }
    };

    // 마우스 클릭과 터치 시작 이벤트 리스너 추가
    document.addEventListener('mousedown', handleClickOutside); // PC 환경에서 클릭 감지
    document.addEventListener('touchstart', handleClickOutside); // 모바일 환경에서 터치 감지

    // 컴포넌트가 언마운트되거나 리렌더링 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback]); // ref와 callback이 변경될 때만 effect 실행
};

export default useOutsideClick;
