// src/components/Chat/ChatComponent.js
import { enterChatRoom } from '@/services/chat';
import { useEffect, useState } from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('http://localhost:5173');
    ws.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    ws.onmessage = (event) => {
      console.log('서버로부터 메시지를 받았습니다:', event.data);
    };

    ws.onclose = () => {
      console.log('WebSocket 연결이 닫혔습니다.');
    };

    setSocket(ws);
    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const res = await enterChatRoom();
      console.log(res);
    };
    fetch();
  }, []);

  const sendMessage = () => {
    // socket?.send('dd')
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button onClick={sendMessage}>전송</button>
    </div>
  );
};

export default ChatComponent;
