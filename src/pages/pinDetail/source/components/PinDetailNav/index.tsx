import { FiHeart } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { RiShare2Line } from 'react-icons/ri';
import { FaEllipsis } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa';
import DetailBtn from '../common/DetailBtn';

const PinDetailNav = () => {
  return (
    <div className="py-2">
      <nav className="flex items-center h-12 justify-between gap-2">
        {/* 좋아요 버튼 */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1.5">
            <DetailBtn>
              <FiHeart size={20} />
            </DetailBtn>
            <span className="text-lg font-semibold mr-2">1,283</span>
          </div>

          {/* 댓글 버튼 */}
          <DetailBtn className="sm:block">
            <AiOutlineMessage size={20} />
          </DetailBtn>

          {/* 공유 버튼 */}
          <DetailBtn className="sm:block">
            <RiShare2Line size={20} />
          </DetailBtn>

          {/* 더보기 버튼 */}
          <DetailBtn className="sm:hidden">
            <FaEllipsis size={20} />
          </DetailBtn>
        </div>

        <div className="flex items-center gap-1 ml-auto">
          <button className="hidden sm:flex min-w-[60px] h-12 px-4 py-2 items-center bg-none hover:bg-[#111]/20 active:bg-[#111] justify-center rounded-full transition-colors">
            <span className="text-base line-clamp-1 mx-1 text-black">
              내 핀을 저장하기
            </span>
            <FaChevronDown size={14} className="mx-1" />
          </button>

          <button
            className="h-12 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors whitespace-nowrap"
            onClick={() => console.log('저장')}
          >
            저장
          </button>
        </div>
      </nav>
    </div>
  );
};

export default PinDetailNav;
