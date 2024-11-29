import overlayName from '../../../../../../types/overlayName';
import Button from '../../../common/Button';
import { IOverlay } from '../Overlay';

type IOverlayBottom = IOverlay & {
    children: React.ReactNode;
    overlayName: overlayName;
};

const OverlayBottomIcon = ({
    activeId,
    handleClick,
    handleRef,
    children,
    overlayName,
}: IOverlayBottom) => {
    return (
        <div
            className="mx-1"
            ref={activeId.bol ? handleRef : null}
            onClick={() => handleClick(overlayName)}
        >
            <Button
                bgColor="bg-white"
                isClicked={activeId.bol && activeId.key === overlayName}
            >
                <div className="flex justify-center items-center w-8 h-8">
                    {children}
                </div>
            </Button>
        </div>
    );
};
export default OverlayBottomIcon;
