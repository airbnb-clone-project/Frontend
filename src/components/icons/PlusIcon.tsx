interface PlusIconProps {
    color?: string; // color prop은 선택 사항
}

const PlusIcon = ({ color }: PlusIconProps) => {
    return (
        <svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={
                color ? 'fill-current stroke-current  text-' + color : ''
            }
        >
            <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
        </svg>
    );
};

export default PlusIcon;
