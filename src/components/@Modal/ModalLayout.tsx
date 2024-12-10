import { ReactElement, useEffect } from 'react';
import useModalStore from '../../stores/useModalStore';
import { twMerge } from 'tailwind-merge';
import modalName from '@/types/modalName';

interface ModalLayoutProps {
    modalName: modalName; // modalName추가시 useModalStore.tsx에도 추가해야함
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

    useEffect(() => {
        // isBackgroundColor가 true일 경우 scroll이동 불가
        if (isBackgroundColor) {
            document.body.style.overflow = 'hidden';
        }

        // 언마운트될 때 다시 scroll로 변경
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, []);

    return (
        <div
            onClick={() => toggleModal(modalName)}
            className={twMerge(
                `z-[1] fixed top-0 left-0 w-full h-full ${
                    isBackgroundColor
                        ? 'bg-[rgba(0,0,0,0.8)] z-50 cursor-zoom-out'
                        : ''
                }`,
                className // 추가 className 병합
            )}
        >
            {children}
        </div>
    );
};

export default ModalLayout;
