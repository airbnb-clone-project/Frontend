import { useRef, useState } from 'react';
import OverlayBottom from './overlaybottom/OverlayBottom';
import OverlayHeader from './overlayheader/OverlayHeader';
import useModalStore from '../../../../../stores/useModalStore';
import overlayName from '../../../../../types/overlayName';

export interface IOverlay {
    activeId: {
        key: overlayName | null;
        bol: boolean;
    };
    handleClick: (key: overlayName) => void;
    handleRef: (node: HTMLDivElement | null) => void;
}

const Overlay = ({
    handelHoverBox,
    index,
}: {
    handelHoverBox: (bol: boolean) => void;
    index: number;
}) => {
    const [activeId, setActiveId] = useState<{
        key: overlayName | null;
        bol: boolean;
    }>({
        key: null,
        bol: false,
    });
    const activeRef = useRef<HTMLDivElement | null>(null);
    const { activeButton, setId } = useModalStore();

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

    return (
        <div onMouseEnter={() => handelHoverBox(true)}>
            <OverlayHeader
                activeId={activeId}
                handleRef={handleRef}
                handleClick={handleClick}
            />
            <OverlayBottom
                activeId={activeId}
                handleRef={handleRef}
                handleClick={handleClick}
            />
        </div>
    );
};
export default Overlay;
