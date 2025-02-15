import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKey';
import { FaChevronDown } from 'react-icons/fa';
import { mockCommentData } from '../../__mock__/mockCommentData';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

interface Comment {
  no: string;
  commenter_no: string;
  user_nickname: string;
  user_profile_img: string;
  parent_comment_no: string;
  content: string;
  depth: string;
  created_at: string;
}

const CommentSection = () => {
  const { data: comments } = useQuery<Comment[]>({
    queryKey: [QUERY_KEYS.PIN_COMMENTS],
    queryFn: async () => {
      const { data: comments } = await mockCommentData();
      return comments.comments;
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleCommentSubmit = (comment: string) => {
    console.log('댓글 작성:', comment);
  };

  return (
    <div className="py-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-semibold text-black text-base items-center justify-between w-full flex gap-1 h-8"
        >
          <span>댓글 {comments?.length ?? 0}개</span>
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
      {isOpen && comments && (
        <div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="mt-4 space-y-4">
            {comments.map((comment) => (
              <CommentItem
                key={comment.no}
                profileImage={comment.user_profile_img}
                username={comment.user_nickname}
                content={comment.content}
                daysAgo={comment.created_at}
                likes={1}
              />
            ))}
          </div>
        </div>
      )}

      {/* 댓글 입력창 */}
      <CommentInput onSubmit={handleCommentSubmit} />
    </div>
  );
};

export default CommentSection;
