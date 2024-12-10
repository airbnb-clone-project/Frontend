import Button from '@/components/common/Button';
import ModalLayout from '../ModalLayout';
import Explain from './Explain';
import ProfileImg from './ProfileImg';

const PinCodeDownloadModal = () => {
    return (
        <ModalLayout
            modalName="pincode"
            isBackgroundColor={true}
            className="hover:cursor-zoom-out"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="z-30 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  cursor-auto pb-6 rounded-[16px] items-center w-[540px] bg-white flex flex-col"
            >
                <h1 className="p-6 text-[28px] font-semibold text-center">
                    핀코드
                </h1>

                {/* 프로필 img 컴포넌트 */}
                <ProfileImg />

                {/* 핀코드 스캔 방법 설명 */}
                <Explain />

                {/* 핀코드 다운로드 버튼 */}
                <Button
                    color="red"
                    text="핀코드 다운로드"
                    onClick={() => console.log('')}
                    className="w-[310px] py-2 px-3"
                />
            </div>
        </ModalLayout>
    );
};

export default PinCodeDownloadModal;
