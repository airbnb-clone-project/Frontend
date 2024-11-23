import { ReactElement } from 'react';
import useModalStore from '../../stores/useModalStore';
import { twMerge } from 'tailwind-merge';

interface ModalLayoutProps {
    modalName: 'filter' | 'pincode' | 'create';
    children?: ReactElement; // 자식 element
    isBackgroundColor?: boolean; // 배경색 여부
    className?: string;
}

const ModalLayout = ({
    modalName,
    children,
    isBackgroundColor,
    className,
}: ModalLayoutProps) => {
    const { toggleModal } = useModalStore();

    return (
        <div
            onClick={() => toggleModal(modalName)}
            className={twMerge(
                `z-[1] fixed top-0 left-0 w-[100vw] h-[100vh] ${
                    isBackgroundColor ? 'bg-[rgba(0,0,0,0.8)]' : ''
                }`,
                className // 추가 className 병합
            )}
        >
            {children}
        </div>
    );
};

export default ModalLayout;
