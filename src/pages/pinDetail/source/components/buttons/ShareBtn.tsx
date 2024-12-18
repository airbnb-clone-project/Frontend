import Button from '../common/Button';

import { RiShare2Line } from 'react-icons/ri';

const ShareBtn = () => {
    return (
        <Button aria-label="공유">
            <RiShare2Line className="w-5 h-5 fill-black" />
        </Button>
    );
};

export default ShareBtn;
