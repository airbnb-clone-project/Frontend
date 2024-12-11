interface WarningIconProps {
    color?: string;
}

const WarningIcon = ({ color }: WarningIconProps) => {
    return (
        <svg
            aria-hidden="true"
            aria-label=""
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
            style={{ color: `#${color}` }} // 동적으로 color 스타일 적용
            className={`fill-current stroke-current`} // Tailwind의 fill 클래스를 사용
        >
            <path d="M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18a3 3 0 0 0 2.6-4.5m-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L12 17.62l-1.95 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.94-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94z"></path>
        </svg>
    );
};

export default WarningIcon;
