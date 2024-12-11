import Button from '../common/Button';

import { BsSendFill } from 'react-icons/bs';

const SendBtn = () => {
    return (
        <Button
            aria-label="게시"
            className="min-w-8 min-h-8 w-8 h-8 bg-[#E60022] m-1 mr-2.5"
        >
            <BsSendFill className="w-4 h-4 fill-white" />
        </Button>
    );
};

export default SendBtn;
