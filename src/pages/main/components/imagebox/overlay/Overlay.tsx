import OverlayBottom from './overlaybottom/OverlayBottom';
import OverlayHeader from './overlayheader/OverlayHeader';
import overlayName from '../../../../../types/overlayName';
import useOverlayHook from '@/hooks/useOverlayHook';

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
    const { activeId, handleRef, handleClick } = useOverlayHook(index);
    return (
        <div onMouseEnter={() => handelHoverBox(true)} className="z-10">
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
