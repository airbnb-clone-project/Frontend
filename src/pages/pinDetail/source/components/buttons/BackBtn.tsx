import Button from '../common/Button';

import { IoMdArrowRoundBack } from 'react-icons/io';

const BackBtn = () => {
    return (
        <Button aria-label="뒤로 가기">
            <IoMdArrowRoundBack className="w-5 h-5 fill-black" />
        </Button>
    );
};

export default BackBtn;
