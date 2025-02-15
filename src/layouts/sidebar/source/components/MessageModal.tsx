import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaPencilAlt } from 'react-icons/fa';
import Button from '@/components/common/Button/Button';
import { IoMdPersonAdd, IoMdArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { stompClient, connect } from '../utils/chat';
import { createChatRoom } from '../service/chatApi';
// import ChatRoom from './chat/ChatRoom';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = 'main' | 'newMessage' | 'chatRoom';

const MessageModal = ({ isOpen, onClose }: MessageModalProps) => {
  const [currentView, setCurrentView] = useState<ModalView>('main');
  const [selectedUser, setSelectedUser] = useState<{
    name: string;
    avatar: string;
  } | null>(null);

  useEffect(() => {
    const connectWebSocket = async () => {
      if (!stompClient.connected && isOpen) {
        try {
          await connect(); // 연결 시도

          console.log('WebSocket connected in Modal');
        } catch (error) {
          console.error('WebSocket connection failed in Modal:', error);
        }
      }
    };

    connectWebSocket();

    return () => {
      if (stompClient.connected) {
        stompClient.deactivate();

        console.log('WebSocket disconnected in Modal');
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUserSelect = async () => {
    try {
      // 1. 채팅방 생성 API 호출
      const chatRoom = await createChatRoom({
        userId: 1, // 현재 로그인한 사용자 ID
        targetUserId: 2, // 선택한 사용자 ID
      });

      // 2. 채팅방 정보 저장
      setSelectedUser({
        name: '@G1711_',
        avatar: 'https://picsum.photos/200',
      });

      // 3. 채팅방 구독
      if (stompClient.connected) {
        stompClient.subscribe(`/queue/chat.${chatRoom.roomId}`, (message) => {
          console.log('Received message:', JSON.parse(message.body));
          // 메시지 처리 로직
        });

        // 4. 입장 메시지 전송
        stompClient.publish({
          destination: '/message/chat.enter',
          body: JSON.stringify({
            roomId: chatRoom.roomId,
            userId: 1, // 현재 사용자 ID
          }),
        });
      }

      // 5. 채팅방 화면으로 전환
      setCurrentView('chatRoom');
    } catch (error) {
      console.error('Failed to enter chat room:', error);
      // 에러 처리 (예: 알림 표시)
    }
  };
  const handleBack = () => {
    if (currentView === 'chatRoom') {
      setCurrentView('newMessage');
      setSelectedUser(null);
    } else if (currentView === 'newMessage') {
      setCurrentView('main');
    }
  };

  return (
    <div className="fixed inset-0 flex items-start justify-start z-50">
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* 모달 컨테이너 */}
      <div
        className="relative ml-24 bg-white w-[380px] h-screen shadow-lg flex flex-col mt-4 mb-2 rounded-2xl overflow-hidden"
        style={{
          height: `calc(100vh - 32px)`,
        }}
      >
        {currentView === 'chatRoom' && selectedUser ? (
          // <ChatRoom onBack={handleBack} user={selectedUser} />
          <div>chatRoom</div>
        ) : (
          <>
            {/* 헤더 */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Button
                  onClick={currentView === 'newMessage' ? handleBack : onClose}
                  className="hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  {currentView === 'newMessage' ? (
                    <IoMdArrowBack size={24} className="text-black" />
                  ) : (
                    <IoClose size={24} className="text-black" />
                  )}
                </Button>
                <h1 className="text-xl font-semibold">
                  {currentView === 'newMessage' ? '새 메시지' : '메시지'}
                </h1>
              </div>
              {currentView === 'newMessage' && (
                <Button className="text-base font-medium text-gray-500 hover:text-black">
                  다음
                </Button>
              )}
            </div>

            {currentView === 'newMessage' ? (
              <>
                {/* 검색 입력창 */}
                <div className="p-4">
                  <div className="relative">
                    <IoSearchOutline
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="이름 또는 이메일 검색"
                      className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full focus:outline-none"
                    />
                  </div>
                </div>
                {/* 추천 섹션 */}
                <div className="px-4">
                  <h2 className="font-semibold mb-2">추천</h2>
                  <div
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={handleUserSelect}
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">@G1711_</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* 새 메시지 섹션 */}
                <div className="px-2">
                  <button
                    className="flex items-center gap-3 w-full py-2 px-4 bg-white hover:bg-gray-200 rounded-2xl transition-colors"
                    onClick={() => setCurrentView('newMessage')}
                  >
                    <span className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-red-default rounded-full">
                      <FaPencilAlt className="text-2xl text-white" />
                    </span>
                    <span className="font-medium">새 메시지</span>
                  </button>
                </div>

                {/* 친구 초대하기 섹션 */}
                <div className="px-2 mt-2">
                  <button className="flex items-center gap-3 w-full py-2 px-4 bg-white hover:bg-gray-200 rounded-2xl transition-colors">
                    <span className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-200 rounded-full">
                      <IoMdPersonAdd className="text-2xl text-black" />
                    </span>
                    <div className="flex flex-col items-start min-w-0">
                      <span className="font-medium truncate w-full text-start">
                        친구 초대하기
                      </span>
                      <span className="text-sm text-gray-500 truncate w-full text-start">
                        연결하여 채팅을 시작하세요.
                      </span>
                    </div>
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MessageModal;
