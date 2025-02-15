import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SOCKET_URL = 'http://34.172.123.179/ws';

export const stompClient = new Client({
  webSocketFactory: () => new SockJS(SOCKET_URL),
  connectHeaders: {},
  debug: (str) => {
    console.log('STOMP Debug:', str);
  },
  onConnect: (frame) => {
    console.log('STOMP Connected:', frame);
    stompClient.subscribe('/user/queue/errors', (message) => {
      const error = JSON.parse(message.body);
      console.error('Server Error:', error);
    });
  },
  onDisconnect: () => {
    console.log('STOMP Disconnected');
  },
  onStompError: (frame) => {
    console.error('STOMP Error:', frame.headers, frame.body);
  },
  reconnectDelay: 5000,
});
// 연결 함수 추가
export const connect = async () => {
  try {
    console.log('Attempting to connect...');
    await stompClient.activate(); // 여기서 실제 연결 시도
    console.log('Connection successful');
  } catch (error) {
    console.error('Connection failed:', error);
    throw error;
  }
};
