import { IoClose, IoSearch } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { LuMessageSquareMore } from 'react-icons/lu';
import { useState } from 'react';

import { IoIosArrowBack } from 'react-icons/io';
import ChatComponent from './Chat';

const MessageBoard = () => {
  const [newMessage, setNewMessage] = useState(false);

  const handleClickNewMessage = () => {
    setNewMessage((prev) => !prev);
  };

  return (
    <div
      style={{ height: 'calc(-32px + 100vh)' }}
      className="mt-4 max-w-[392px] bg-white rounded-[32px] shadow-md ml-20"
    >
      <ChatComponent />
      {/* 헤더 */}
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-1.5">
          {newMessage ? (
            <button
              aria-label="받은 편지함을 돌아가기"
              onClick={handleClickNewMessage}
              className="w-12 h-12 bg-white border-none flex items-center justify-center rounded-full hover:bg-slate-200"
            >
              <IoIosArrowBack size={32} />
            </button>
          ) : (
            <button
              aria-label="메시지 닫기"
              className="w-12 h-12 bg-white border-none flex items-center justify-center rounded-full hover:bg-slate-200"
            >
              <IoClose size={32} />
            </button>
          )}

          <h3 className="font-semibold text-lg">메시지</h3>
        </div>
        <button
          aria-label="받은 편지함 옵션 오버플로 버튼"
          className="w-12 h-12 bg-white border-none flex items-center justify-center rounded-full hover:bg-slate-200"
        >
          <BsThreeDots size={32} />
        </button>
      </div>
      {/* 리스트 */}
      <div className="p-2">
        <button
          onClick={handleClickNewMessage}
          className={`${
            newMessage ? 'hidden' : 'flex'
          } w-full flex items-center gap-2 hover:rounded-xl mb-2 px-4 py-2 hover:bg-slate-200`}
        >
          <span className="rounded-full bg-red-default border-none w-12 h-12 flex items-center justify-center">
            <LuMessageSquareMore size={28} className="text-white" />
          </span>
          <span className="font-semibold text-normal">새 메시지</span>
        </button>
        <div className="relative flex items-center px-4 mb-2">
          <IoSearch
            size={20}
            aria-hidden="true"
            className="absolute top-1/2 -translate-y-1/2 left-8 text-[#767676] focus:hidden"
          />
          <input
            type="search"
            placeholder="이름 또는 이메일 검색"
            className="w-full min-h-12 font-normal border-2 border-[#cdcdcd] rounded-full px-10 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
