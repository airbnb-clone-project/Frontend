import useModalStore from '@/stores/useModalStore';
import overlayName from '@/types/overlayName';
import { useEffect, useRef, useState } from 'react';

const useOverlayHook = (index: number) => {
    const [activeId, setActiveId] = useState<{
        key: overlayName | null;
        bol: boolean;
    }>({
        key: null,
        bol: false,
    });
    const activeRef = useRef<HTMLDivElement | null>(null);
    const { activeButton, initActiveButton, setId } = useModalStore();

    const handleClick = (key: overlayName) => {
        if (activeId.key === key) {
            setActiveId({ key, bol: !activeId.bol });
            activeButton(key, !activeId.bol);
        } else {
            setActiveId({ key, bol: true });
            activeButton(key, true);
        }
        setId(index);
    };

    const handleRef = (node: HTMLDivElement | null) => {
        activeRef.current = node;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const clickedElement = event.target as HTMLElement;
            if (
                activeRef.current &&
                !activeRef.current.contains(clickedElement) &&
                clickedElement.dataset.ignore
            ) {
                console.log(clickedElement.dataset.ignore);
                initActiveButton();
            }
        };

        document.addEventListener('mouseup', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [initActiveButton]);

    return { activeId, handleClick, handleRef };
};

export default useOverlayHook;
