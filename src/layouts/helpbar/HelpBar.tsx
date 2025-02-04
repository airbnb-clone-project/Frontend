import Button from '@/components/common/Button/Button';
import { IoMdHelp } from 'react-icons/io';

const HelpBar = () => {
  return (
    <div className="fixed w-14 h-14 bottom-6 right-6 rounded-full bg-white z-50 shadow-lg">
      <Button>
        <IoMdHelp className="w-7 h-7" />
      </Button>
    </div>
  );
};
export default HelpBar;
