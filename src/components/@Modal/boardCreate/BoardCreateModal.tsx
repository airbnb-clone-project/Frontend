import ModalLayout from '@/components/@Modal/ModalLayout';
import { useState } from 'react';
import IsSecretCheck from './IsSecretCheck';
import SearchInput from '@/components/common/SearchInput';
import SearchResultList from './SearchResultList';
import LabelInput from '@/components/common/LabelInput';
import WarningText from '@/components/common/WarningText';

const BoardCreateModal = () => {
  const [boardInfo, setBoardInfo] = useState({
    name: '',
    isSecret: false,
    participantsSearch: '',
    participants: [],
  });

  const boardNameOnChange = (boardName: string) => {
    setBoardInfo((prev) => {
      return {
        ...prev,
        name: boardName,
      };
    });
  };
  const participantsSearchChange = (text: string) => {
    setBoardInfo((prev) => {
      return {
        ...prev,
        participantsSearch: text,
      };
    });
  };

  interface userListType {
    name: string;
    imgSrc: string;
    email: string;
  }

  // 검색한 사용자 list
  const searchList: userListType[] = [
    {
      name: '헤아냐',
      imgSrc: '',
      email: '11dfsafds',
    },
  ];

  // 추가한 사용자 list
  const [addUserList, setAddUserList] = useState<userListType[]>([]);
  /** 참여자 추가/해제 toggle 함수 */
  const addUserListToggle = ({ name, imgSrc, email }: userListType) => {
    setAddUserList((prev) => {
      if (prev.some((v) => v.name === name)) {
        // 이미 추가된 경우 -> 제거
        return prev.filter((v) => v.name !== name);
      } else {
        // 추가되지 않은 경우 -> 추가
        return [...prev, { name, imgSrc, email }];
      }
    });
  };

  return (
    <ModalLayout modalName="boardCreate" isBackgroundColor={true}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="cursor-auto max-w-[540px] w-[90vw] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
      >
        <p className="text-center text-[#111111] font-semibold px-6 py-[56px] text-[28px]">
          보드 만들기
        </p>
        <div className="flex flex-col gap-8 px-8">
          {/* board 이름 input */}
          <div>
            <LabelInput
              placeholder="예: '가고 싶은 곳' 또는 '요리법'"
              value={boardInfo.name}
              onChangeFC={boardNameOnChange}
              title="이름"
              isEffect={true}
            />
            {boardInfo.name.length === 0 && (
              <WarningText text="보드 이름을 지정하세요!" />
            )}
          </div>

          {/* 비밀보드 유지 checkbox */}
          <IsSecretCheck />

          {/* 참여자 추가 input */}
          <div className="flex flex-col relative">
            <p className="text-xs mb-2">참여자 추가</p>

            <SearchInput
              onChangeFC={participantsSearchChange}
              value={boardInfo.participantsSearch}
            />

            {/* 참여자 검색 결과 */}
            <SearchResultList
              addUserList={addUserList}
              addUserListToggle={addUserListToggle}
              searchList={searchList}
            />
          </div>

          {/* 하단 button 영역 */}
          <div className="py-6 flex justify-end">
            <button
              className={`cursor-auto rounded-3xl px-4 py-3 font-semibold ${
                boardInfo.name.length === 0
                  ? 'bg-[#e9e9e9] text-[#a5a5a5]'
                  : 'hover:bg-[#b60000] bg-[#e60023] text-white hover:brightness-95 cursor-pointer'
              }`}
            >
              만들기
            </button>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default BoardCreateModal;
