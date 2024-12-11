import useModalStore from '@/stores/useModalStore';
import modalName from '@/types/modalName';
import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionOptions {
    modalRef: RefObject<Element>;
    root?: Element | null; // 관찰할 루트 (기본값: 뷰포트)
    threshold?: number | number[]; // 가시성 임계값
    modalName?: modalName;
}

export const useIntersectionWithTopCheck = ({
    modalRef,
    root = null,
    threshold = 1.0,
    modalName,
}: UseIntersectionOptions) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { toggleModal } = useModalStore();

    useEffect(() => {
        const target = modalRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);

                // top이 0일 때 콜백 실행
                if (
                    !entry.isIntersecting &&
                    entry.boundingClientRect.top <= 0 &&
                    modalName
                ) {
                    toggleModal(modalName);
                }
            },
            { root, threshold }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, [modalRef, root, threshold, toggleModal, modalName]);

    return isIntersecting;
};
