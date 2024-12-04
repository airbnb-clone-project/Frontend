import ModalLayout from '@/components/@Modal/ModalLayout';
import overlayName from '../../../../../../types/overlayName';
import Button from '../../../common/Button';
import { IOverlay } from '../Overlay';

type IOverlayBottom = IOverlay & {
    children: React.ReactNode;
    overlayName: overlayName;
    className: string;
};

const OverlayBottomIcon = ({
    activeId,
    handleClick,
    handleRef,
    children,
    overlayName,
    className,
}: IOverlayBottom) => {
    return (
        <>
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
            {activeId.bol && activeId.key === overlayName && (
                <ModalLayout
                    name={overlayName}
                    className={`absolute bg-white top-[68px] rounded-xl shadow-custom-modal ${className}`}
                />
            )}
        </>
    );
};
export default OverlayBottomIcon;
