interface RightArrowIconProps {
    color?: string;
}

const RightArrowIcon = ({ color }: RightArrowIconProps) => {
    return (
        <svg
            aria-hidden="true"
            aria-label=""
            height="18"
            role="img"
            viewBox="0 0 24 24"
            width="18"
            fill={color && color}
        >
            <path d="M6.65.66c-.87.88-.87 2.3 0 3.18L14.71 12l-8.06 8.16c-.87.88-.87 2.3 0 3.18a2.2 2.2 0 0 0 3.14 0L21 12 9.8.66a2.2 2.2 0 0 0-3.15 0"></path>
        </svg>
    );
};

export default RightArrowIcon;
