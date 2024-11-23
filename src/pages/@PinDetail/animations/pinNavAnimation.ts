import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const createPinNavAnimation = (navRef: HTMLDivElement) => {
    gsap.registerPlugin(ScrollTrigger);
    const navHeight = navRef.offsetHeight;

    return ScrollTrigger.create({
        trigger: navRef,
        start: 'top top',
        endTrigger: '#wrapper',
        end: `bottom-=${navHeight + 10} top`,
        scrub: true,
        pin: navRef,
        pinSpacing: false,
        markers: true,
    });
};
