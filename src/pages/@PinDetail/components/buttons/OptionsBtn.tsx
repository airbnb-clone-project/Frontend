import Button from '../common/Button';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const OptionsBtn = () => {
    return (
        <Button aria-label="추가 옵션">
            <HiOutlineDotsHorizontal className="w-5 h-5 fill-black" />
        </Button>
    );
};

export default OptionsBtn;
