import { useEffect } from 'react';

const useStickyShadow = (
    ref: React.RefObject<HTMLElement>,
    direction: 'up' | 'down'
) => {
    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('실행');
                element.classList.toggle(
                    direction === 'up'
                        ? 'shadow-[0_-4px_5px_rgba(0,0,0,0.1)]'
                        : 'shadow-[0_4px_5px_rgba(0,0,0,0.1)]',
                    entry.intersectionRatio < 1
                );
            },
            { threshold: [1] }
        );

        observer.observe(element);

        return () => {
            // 클린업 함수에서도 로컬 변수 사용
            observer.unobserve(element);
        };
    }, [ref]);
};

export default useStickyShadow;
