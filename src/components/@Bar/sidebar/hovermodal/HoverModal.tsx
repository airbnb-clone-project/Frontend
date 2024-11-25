const HoverModal = ({
    itemLabel,
}: {
    itemLabel: string;
    className: string;
}) => {
    return (
        <div
            className={`absolute w-max max-w-[180px] h-8 bg-black text-white text-xs p-2 rounded-lg top-2 left-14`}
        >
            {itemLabel}
        </div>
    );
};
export default HoverModal;
