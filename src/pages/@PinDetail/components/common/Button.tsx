import { twMerge } from 'tailwind-merge';

/**
 * Button 컴포넌트
 *
 * @description 원형 버튼으로, 클릭 이벤트와 접근성 관련 속성을 지원합니다.
 * @param {React.ReactNode} children - 버튼 내부의 콘텐츠 (아이콘 또는 텍스트)
 * @param {string} [ariaLabel] - 스크린 리더를 위한 버튼의 대체 텍스트
 * @param {() => void} [onClick] - 버튼 클릭 시 호출될 이벤트 핸들러
 * @param {string} [className] - Tailwind 클래스를 추가하여 버튼 스타일을 커스터마이징
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - 기본 버튼 속성을 추가적으로 전달 가능
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    ariaLabel?: string;
    onClick?: () => void;
    className?: string;
}

const Button = ({
    children,
    type = 'button',
    ariaLabel,
    onClick,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
            className={twMerge(
                'inline-flex min-w-12 min-h-12 w-auto h-12 rounded-full bg-white hover:bg-[#F0F0F0] justify-center items-center focus:outline-4 focus:outline focus:outline-[#92C1FF]',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
