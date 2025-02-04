import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CommentOptionBtn from '../buttons/CommentOptionBtn';
import { dummyComment } from '../../__mock__/dummyComment';
import { FaChevronDown } from 'react-icons/fa';

const Comment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments] = useState(dummyComment);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 댓글 네비게이션 */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleOpen}
          className="font-semibold text-black text-base items-center justify-between w-full flex gap-1"
        >
          <span>댓글 {comments.length}개</span>
          <span
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <FaChevronDown />
          </span>
        </button>
      </div>

      {/* 댓글 목록 */}
      {isOpen && (
        <div className="space-y-6 overflow-y-auto max-h-[400px]">
          {comments.map((comment) => (
            <div key={comment.id}>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between group">
                    <div className="flex-1 min-w-0">
                      <Link
                        to="/"
                        className="font-semibold hover:underline inline-block"
                      >
                        {comment.author}
                      </Link>
                      <span className="text-sm text-gray-500 ml-2">
                        {comment.time}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1 break-words whitespace-pre-wrap line-clamp-3 hover:line-clamp-none transition-all">
                    {comment.content}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="text-sm text-gray-500 hover:text-gray-700">
                      답글 {comment.replies > 0 && comment.replies}
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                      <FaHeart className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>
                    <CommentOptionBtn />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
