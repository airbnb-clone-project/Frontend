import Button from '@/pages/main/components/common/Button';
import { IoMdHelp } from 'react-icons/io';

const HelpBar = () => {
    return (
        <div className="fixed w-14 h-14 bottom-6 right-6 rounded-full bg-white z-50 shadow-lg">
            <Button>
                <div className="w-14 h-14 flex justify-center items-center">
                    <IoMdHelp className="w-7 h-7" />
                </div>
            </Button>
        </div>
    );
};
export default HelpBar;
