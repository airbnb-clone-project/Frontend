import useToastStore from '@/stores/useToastStore';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const AnimatedToast = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const { isVisible, text, hideToast } = useToastStore();
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 50, scale: 0.9 }, // 시작 상태 (아래에서 보이지 않음)
        {
          opacity: 1,
          y: 0, // bottom 10px 유지
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // 3초 후 자동으로 사라지게 설정
      setTimeout(() => {
        gsap.to(boxRef.current, {
          opacity: 0,
          duration: 0.5,
          scale: 1.2,
          onComplete: () => hideToast(),
        });
      }, 2000);
    }
  }, [isVisible]);

  return (
    <div
      ref={boxRef}
      className="max-w-fit sticky top-[94vh] left-1/2 -translate-x-1/2 text-white text-base rounded-3xl bg-[#111111] py-3 px-4 opacity-0 z-[999]"
    >
      {text}
    </div>
  );
};

export default AnimatedToast;
