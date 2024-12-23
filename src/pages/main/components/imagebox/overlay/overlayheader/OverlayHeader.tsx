import { FaAngleDown } from 'react-icons/fa6';
import Button from '../../../common/Button';
import { IOverlay } from '../Overlay';
import ModalLayout from '@/components/@Modal/ModalLayout';
import ProfileModal from '../../../modal/profilemodal/ProfileModal';

type IOverlayHeader = IOverlay & { borderName?: string };

const OverlayHeader = ({
    activeId,
    handleRef,
    handleClick,
    borderName,
}: IOverlayHeader) => {
    return (
        <div className="absolute top-0 text-white w-full p-3">
            <div className="flex flex-row gap-1">
                <div
                    ref={activeId.bol ? handleRef : null}
                    className="flex-auto box-border h-12 w-full"
                    onClick={() => handleClick('profile')}
                >
                    <Button
                        opacity={true}
                        isClicked={activeId.bol && activeId.key === 'profile'}
                    >
                        <div className="min-w-[60px] px-4 py-3">
                            <div className="flex flex-row items-center">
                                <div className="mx-1">
                                    {borderName ? borderName : '프로필'}
                                </div>
                                <FaAngleDown className="mx-1" color="white" />
                            </div>
                        </div>
                    </Button>
                </div>
                {activeId.bol && activeId.key === 'profile' && (
                    <ModalLayout
                        name="profile"
                        className="absolute w-[360px] h-[498px] bg-white top-[68px] rounded-xl shadow-custom-modal"
                    >
                        <ProfileModal />
                    </ModalLayout>
                )}
                <Button
                    className="flex justify-center items-center min-w-[60px] h-12 px-4 py-3 flex-grow-0 flex-shrink-0 basis-auto"
                    bgColor="bg-red-500"
                >
                    <div className="text-center">저장</div>
                </Button>
            </div>
        </div>
    );
};
export default OverlayHeader;
