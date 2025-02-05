import HeartBtn from '../buttons/HeartBtn';
import OptionsBtn from '../buttons/OptionsBtn';
import Button from '@/components/common/Button/Button';

import { FaAngleDown } from 'react-icons/fa6';
import { RiShare2Line } from 'react-icons/ri';

const PinViewNav = () => {
  return (
    <div className="pr-4 pt-2 bg-white rounded-r-[32px] z-30">
      <div className="min-h-[60px] h-[60px] flex items-center justify-between">
        {/* 좋아요, 공유 아이콘 */}
        <div className="flex items-center">
          <HeartBtn />
          <Button
            size="sm"
            variant="icon"
            className="w-12 h-12"
            aria-label="공유"
          >
            <RiShare2Line size={24} />
          </Button>
          <OptionsBtn />
        </div>
        <div id="save-items" className="flex items-center gap-1">
          <Button variant="icon" aria-label="저장하려는 보드를 선택하세요">
            <span
              title="애니메이션"
              className="text-black font-semibold mx-1 inline-block
    w-[1ch] sm:w-[2ch] md:w-[3ch] lg:w-full
    truncate"
            >
              애니메이션
            </span>
            <FaAngleDown className="mx-1 w-4 h-4" />
          </Button>
          <Button aria-label="저장" variant="primary">
            <span className="text-white">저장</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PinViewNav;
