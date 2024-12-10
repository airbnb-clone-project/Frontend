import ModalLayout from '@/components/@Modal/ModalLayout';
import { useState } from 'react';
import NameInput from './NameInput';
import IsSecretCheck from './IsSecretCheck';
import SearchInput from '@/components/common/SearchInput';
import SearchResultList from './SearchResultList';

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
                    <NameInput
                        boardNameOnChange={boardNameOnChange}
                        name={boardInfo.name}
                    />

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
                        <SearchResultList />
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
