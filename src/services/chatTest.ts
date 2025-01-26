import { io } from 'socket.io-client';
import axios from 'axios';

export const chatServiceTest = async () => {
  try {
    // 1. HTTP API로 채팅방 입장
    const response = await axios.post('http://34.172.123.179/api/chat-rooms');
    const roomId = response.data.roomId; // 서버에서 전달받는 방 ID

    // 2. 웹소켓 연결
    const socket = io('http://34.172.123.179', {
      path: '/ws',
      transports: ['websocket'],
      reconnection: true,
    });

    // 3. 연결 성공 시 채팅방 조인
    socket.on('connect', () => {
      console.log('WebSocket 연결 성공!');
      console.log('Socket ID:', socket.id);

      // 채팅방 입장
      socket.emit('join_room', { roomId });
    });

    // 채팅방 입장 성공 이벤트
    socket.on('room_joined', (data) => {
      console.log('채팅방 입장 성공:', data);
    });

    // 에러 처리
    socket.on('connect_error', (error) => {
      console.error('연결 에러 발생:', error.message);
    });

    socket.on('disconnect', (reason) => {
      console.log('연결이 끊어짐. 이유:', reason);
    });

    return socket;
  } catch (error) {
    console.error('채팅방 입장 실패:', error);
    throw error;
  }
};

// 채팅방 메시지 전송 예시
export const sendMessage = (socket: any, message: string) => {
  socket.emit('send_message', {
    message,
    timestamp: new Date().toISOString(),
  });
};

// 채팅방 나가기 예시
export const leaveRoom = (socket: any, roomId: string) => {
  socket.emit('leave_room', { roomId });
};
