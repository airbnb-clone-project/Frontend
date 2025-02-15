import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NavAnimationProps {
  navRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useNavAnimation = ({
  navRef,
  containerRef,
}: NavAnimationProps) => {
  useEffect(() => {
    if (navRef.current && containerRef.current) {
      // 스크롤 트리거 애니메이션
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top+=80',
        end: 'bottom-=40 top+=80',
        pin: navRef.current,
        pinSpacing: false,
        scrub: true,
      });

      return () => {
        trigger.kill();
      };
    }
  }, [navRef, containerRef]);
};
