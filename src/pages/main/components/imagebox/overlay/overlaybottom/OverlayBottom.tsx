import { LuUpload } from 'react-icons/lu';
import { IoIosMore } from 'react-icons/io';
import OverlayBottomIcon from './OverlayBottomIcon';
import { IOverlay } from '../Overlay';

const OverlayBottom = ({ activeId, handleRef, handleClick }: IOverlay) => {
    return (
        <div className="absolute bottom-0 w-full z-10">
            <div className="flex-grow-0 flex-shrink-0 basis-auto p-3">
                <div className="flex flex-row items-center justify-end">
                    <OverlayBottomIcon
                        activeId={activeId}
                        handleRef={handleRef}
                        handleClick={handleClick}
                        overlayName={'share'}
                    >
                        <LuUpload />
                    </OverlayBottomIcon>
                    <OverlayBottomIcon
                        activeId={activeId}
                        handleRef={handleRef}
                        handleClick={handleClick}
                        overlayName={'recommendPin'}
                    >
                        <IoIosMore />
                    </OverlayBottomIcon>
                </div>
            </div>
        </div>
    );
};
export default OverlayBottom;
