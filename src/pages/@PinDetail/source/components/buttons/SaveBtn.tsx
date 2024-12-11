import { twMerge } from 'tailwind-merge';

import Button from '../common/Button';

interface SaveBtnProps {
    className?: string;
}

const SaveBtn = ({ className }: SaveBtnProps) => {
    return (
        <Button
            aria-label="저장"
            className={twMerge(
                'min-w-[60px] rounded-3xl bg-[#E60022] hover:bg-[#b3001b] transition-colors duration-100',
                className
            )}
        >
            <span className="text-white">저장</span>
        </Button>
    );
};

export default SaveBtn;
