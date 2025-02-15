import { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoImageOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';

interface CommentInputProps {
  onSubmit?: (comment: string) => void;
}

const CommentInput = ({ onSubmit }: CommentInputProps) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && onSubmit) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center gap-2 p-2 border rounded-full shadow-sm">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글 추가"
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500"
        />
        <div className="flex items-center gap-2">
          <button type="button" className="text-gray-500 hover:text-black">
            <BsEmojiSmile size={20} />
          </button>
          <button type="button" className="text-gray-500 hover:text-black">
            <FaStar size={20} />
          </button>
          <button type="button" className="text-gray-500 hover:text-black">
            <IoImageOutline size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentInput;
