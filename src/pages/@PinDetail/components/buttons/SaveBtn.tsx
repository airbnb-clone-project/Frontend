import Button from '../common/Button';

const SaveBtn = () => {
    return (
        <Button
            aria-label="저장"
            className="min-w-[60px] rounded-3xl bg-[#E60022] hover:bg-[#b3001b] transition-colors duration-100"
        >
            <span className="text-white">저장</span>
        </Button>
    );
};

export default SaveBtn;
