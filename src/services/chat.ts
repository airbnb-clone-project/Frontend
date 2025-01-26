import axios from 'axios';
import { URL } from './client';
import { Client, Frame, Message } from '@stomp/stompjs';
import { io } from 'socket.io-client';

interface ChatMessage {
  content: string;
  sender: string;
  timestamp: string;
}

interface ChatError {
  code: string;
  message: string;
}

class ChatService {
  private client: Client | null = null;
  private messageHandlers: ((message: ChatMessage) => void)[] = [];
  private errorHandlers: ((error: ChatError) => void)[] = [];
  private connectionAttempts = 0;
  private readonly MAX_ATTEMPTS = 1;

  constructor() {
    this.initializeClient();
  }

  private async initializeClient() {
    try {
      // await axios.get(`${URL}/ws`);
      const socket = io(`${URL}/ws`);
      console.log('socket', socket);

      this.client = new Client({
        brokerURL: 'ws://34.172.123.179/',
        connectHeaders: {
          login: 'guest',
          passcode: 'guest',
        },
        debug: function (str: string) {
          console.log(str);
        },
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onStompError: (frame: Frame) => {
          console.error('STOMP 에러:', frame);
          this.handleConnectionError(new Error(frame.body));
        },
        onWebSocketError: (event: Event) => {
          console.error('WebSocket 에러:', event);
          this.handleConnectionError(new Error('WebSocket 연결 실패'));
        },
      });

      this.setupStompClient();
    } catch (error) {
      console.error('HTTP /ws 연결 실패:', error);
      this.handleConnectionError(new Error('HTTP 연결 실패'));
    }
  }

  private handleConnectionError(error: Error) {
    this.connectionAttempts++;
    console.error(
      `연결 에러 (${this.connectionAttempts}/${this.MAX_ATTEMPTS}):`,
      error.message
    );

    if (this.connectionAttempts >= this.MAX_ATTEMPTS) {
      console.error(`${this.MAX_ATTEMPTS}회 연결 시도 실패. 재연결 중단.`);
      if (this.client) {
        this.client.deactivate();
      }
      const chatError: ChatError = {
        code: 'CONNECTION_FAILED',
        message: '서버 연결에 실패했습니다. 나중에 다시 시도해주세요.',
      };
      this.errorHandlers.forEach((handler) => handler(chatError));
    }
  }

  private setupStompClient() {
    if (!this.client) return;

    this.client.onConnect = () => {
      console.log('STOMP 연결됨');
      this.connectionAttempts = 0;

      if (!this.client) return;

      this.client.subscribe('/topic/messages', (message: Message) => {
        const parsedMessage = JSON.parse(message.body) as ChatMessage;
        this.messageHandlers.forEach((handler) => handler(parsedMessage));
      });

      this.client.subscribe('/ws/user/queue/errors', (message: Message) => {
        const error = JSON.parse(message.body) as ChatError;
        console.error('에러 발생:', error);
        this.errorHandlers.forEach((handler) => handler(error));
      });
    };

    try {
      this.client.activate();
    } catch (error) {
      console.error('STOMP 활성화 에러:', error);
      this.handleConnectionError(new Error('STOMP 활성화 실패'));
    }
  }

  public sendMessage(content: string) {
    if (!this.client || !this.client.connected) {
      const error: ChatError = {
        code: 'NOT_CONNECTED',
        message: '서버에 연결되어 있지 않습니다. 잠시 후 다시 시도해주세요.',
      };
      this.errorHandlers.forEach((handler) => handler(error));
      return;
    }

    this.client.publish({
      destination: '/app/chat',
      body: JSON.stringify({ content }),
    });
  }

  public onMessage(handler: (message: ChatMessage) => void) {
    this.messageHandlers.push(handler);
    return () => {
      this.messageHandlers = this.messageHandlers.filter((h) => h !== handler);
    };
  }

  public onError(handler: (error: ChatError) => void) {
    this.errorHandlers.push(handler);
    return () => {
      this.errorHandlers = this.errorHandlers.filter((h) => h !== handler);
    };
  }

  public disconnect() {
    if (this.client?.connected) {
      this.client.deactivate();
    }
  }
}

export const chatService = new ChatService();

export const enterChatRoom = async () => {
  try {
    const res = await axios.post(`${URL}/api/chat-rooms`);
    console.log(res);
    return res;
  } catch (error) {
    console.error('챗룸 입장 에러:', error);
    throw new Error(
      '채팅방에 입장하는 과정에서 알 수 없는 오류가 발생하였습니다.'
    );
  }
};
