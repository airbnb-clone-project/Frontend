import { useGSAP } from '@gsap/react';
import { pinAnimation } from '../animations';

export const usePinDetailGSAP = (
  navRef: React.RefObject<HTMLDivElement>,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  useGSAP(() => {
    if (navRef.current && containerRef.current) {
      pinAnimation(navRef.current, containerRef.current);
    }
  }, [navRef, containerRef]);
};
