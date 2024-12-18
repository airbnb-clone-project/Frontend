import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const handleImageLoad = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  inputRef: React.RefObject<HTMLDivElement>,
  containerRef: React.RefObject<HTMLDivElement>,
  activeRef: React.RefObject<HTMLDivElement>
) => {
  const inputNode = inputRef.current;
  const activeNode = activeRef.current;
  const inputHeight = inputNode?.offsetHeight || 0;
  const viewportHeight = window.innerHeight;
  const sectionHeight = inputNode?.closest('section')?.offsetHeight || 0;

  // 기존 input의 위치와 맞춰 위화괌이 없도록 24px을 더하여 조정.
  const math = sectionHeight - viewportHeight + inputHeight;

  const height = event.currentTarget.naturalHeight;

  if (height > 737) {
    const section = event.currentTarget.closest('section');
    if (section && inputNode) {
      gsap.set(inputNode, { y: -math });
      gsap.set(activeNode, { y: -math });
    }

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `bottom+=${inputHeight - 10} bottom`,
      scrub: true,
      pin: inputNode,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `bottom+=${inputHeight - 10} bottom`,
      scrub: true,
      pin: activeNode,
      pinSpacing: false,
    });
  }
};
