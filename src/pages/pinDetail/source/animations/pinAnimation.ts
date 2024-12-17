import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const pinAnimation = (
  navRef: HTMLDivElement,
  containerRef: HTMLDivElement
) => {
  const navHeight = navRef.offsetHeight;

  return ScrollTrigger.create({
    trigger: containerRef,
    start: 'top top',
    endTrigger: '#wrapper',
    end: `bottom-=${navHeight + 20} top`,
    scrub: true,
    pin: navRef,
    pinSpacing: false,
  });
};
