import axios from 'axios';

// 채팅방 관련 API 함수들
interface ChatRoomNewReqDto {
  userId: number;
  targetUserId: number;
}

interface ChatRoomNewResDto {
  roomId: string;
}

export const createChatRoom = async (
  data: ChatRoomNewReqDto
): Promise<ChatRoomNewResDto> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/chat-rooms`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        paticipants: [data.userId, data.targetUserId],
      },
    }
  );

  const result = await response.data;
  return result.data;
};
