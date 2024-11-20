import Button from '../common/Button';

const AnswerBtn = () => {
    return (
        // 클릭 상태에따라 aria-disabled상태가 바뀌어야합니다.
        <Button aria-label="답변" aria-disabled={false}>
            <span className="text-[#767676]">답변</span>
        </Button>
    );
};

export default AnswerBtn;
