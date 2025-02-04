import Button from '@/components/common/Button/Button';

import { FaSmile } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import { BsSendFill } from 'react-icons/bs';

const CommentInput = () => {
  return (
    <div className="px-4 w-full self-end mb-4 mt-3">
      <div className="border-2 border-gray-input-comment bg-gray-input-comment rounded-3xl flex items-center justify-center w-full">
        <input
          type="text"
          placeholder="댓글 추가"
          className="placeholder:text-[#9197A3] bg-transparent mx-4 py-[13px] focus:outline-none flex-1 focus:placeholder:text-opacity-70"
        />
        <div className="flex items-center">
          <div className="flex items-center ">
            <div className="w-7 h-7 flex justify-center items-center">
              <FaSmile className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <GrGallery className="w-5 h-5" />
            </div>
          </div>
          <Button
            aria-label="게시"
            className="min-w-8 min-h-8 w-8 h-8 bg-[#E60022] m-1 mr-2.5"
          >
            <BsSendFill className="w-4 h-4 fill-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
