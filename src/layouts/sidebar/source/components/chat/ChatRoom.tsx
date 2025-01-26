import { useState, useEffect, useRef } from 'react';
import { IoMdArrowBack, IoMdMore } from 'react-icons/io';
import Button from '@/components/common/Button/Button';
import { chatService } from '@/services/chat';

interface Message {
  content: string;
  sender: string;
  timestamp: string;
}

interface ChatRoomProps {
  onBack: () => void;
  user: {
    name: string;
    avatar: string;
  };
}

const ChatRoom = ({ onBack, user }: ChatRoomProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 메시지 수신 핸들러 등록
    const unsubscribe = chatService.onMessage((message) => {
      setMessages((prev) => [...prev, message]);
    });

    // 컴포넌트 언마운트 시 정리
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // 새 메시지가 추가될 때마다 스크롤을 아래로 이동
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      chatService.sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* 헤더 */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Button
            onClick={onBack}
            className="hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center"
          >
            <IoMdArrowBack size={24} />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{user.name}</span>
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>
        <Button className="hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
          <IoMdMore size={24} />
        </Button>
      </div>

      {/* 채팅 내용 */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-gray-500 text-sm mt-1">
              이렇게 좋은 일이 시작될지도 모릅니다.
            </p>
            <p className="text-gray-400 text-sm mt-4">8월 22일 오후 8:21</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === user.name ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.sender === user.name
                      ? 'bg-gray-100'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  <p className="break-words">{message.content}</p>
                  <span className="text-xs text-gray-400 mt-1">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* 메시지 입력 */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="메시지를 입력하세요..."
            className="flex-1 bg-transparent outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="text-gray-400 hover:text-gray-600"
            disabled={!inputMessage.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
