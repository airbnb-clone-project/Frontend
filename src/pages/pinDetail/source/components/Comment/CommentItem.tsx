import { FaHeart, FaEllipsisH } from 'react-icons/fa';

interface CommentItemProps {
  profileImage: string;
  username: string;
  content: string;
  daysAgo: string;
  likes: number;
}

const CommentItem = ({
  profileImage,
  username,
  content,
  daysAgo,
  likes,
}: CommentItemProps) => {
  return (
    <div className="flex items-start gap-3 py-2">
      <img
        src={profileImage}
        alt={`${username} profile`}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center">
          <span className="font-semibold mr-2">{username}</span>
          <span>{content}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <span>{daysAgo}일</span>
          <span className="mx-2">답변</span>
          <span className="flex items-center">
            <FaHeart className="mr-1" />
            {likes}
          </span>
          <FaEllipsisH className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
