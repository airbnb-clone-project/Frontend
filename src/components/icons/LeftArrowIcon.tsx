interface LeftArrowIconProps {
    size?: number;
}

const LeftArrowIcon = ({ size }: LeftArrowIconProps) => {
    return (
        <svg
            aria-hidden="true"
            aria-label=""
            height={size ? size : '18'}
            role="img"
            viewBox="0 0 24 24"
            width={size ? size : '18'}
        >
            <path d="M15.78 24a2.2 2.2 0 0 1-1.58-.66L3 12 14.2.66a2.2 2.2 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L9.29 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66"></path>
        </svg>
    );
};

export default LeftArrowIcon;
