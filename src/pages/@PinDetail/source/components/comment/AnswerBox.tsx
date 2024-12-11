import Button from '../common/Button';
import Input from '../common/Input';

import { FaSmile } from 'react-icons/fa';

interface AnswerBoxProps {
    onClose: () => void;
}

const AnswerBox = ({ onClose }: AnswerBoxProps) => {
    return (
        <div>
            <div className="border-2 border-[#e9e9e9] rounded-2xl">
                <div className="flex justify-center items-center py-3 w-full px-4">
                    <Input
                        type="text"
                        placeholder="답변을 남기세요"
                        className="mx-1"
                    />
                    <button className="w-7 h-7 rounded-full bg-white hover:bg-[#F1F1F1] flex justify-center items-center">
                        <FaSmile className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4">
                <Button
                    onClick={() => onClose()}
                    className="min-h-10 min-w-[60px] h-10 py-2 px-3 rounded-3xl bg-[#F1F1F1] hover:bg-[#E1E1E1] transition-colors duration-100"
                >
                    취소
                </Button>
                <Button
                    type="submit"
                    className="min-h-10 min-w-[60px] h-10 py-2 px-3 rounded-3xl bg-[#F1F1F1] hover:bg-[#E1E1E1] transition-colors duration-100"
                >
                    저장
                </Button>
            </div>
        </div>
    );
};

export default AnswerBox;
