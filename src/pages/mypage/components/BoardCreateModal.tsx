import ModalLayout from '@/components/@Modal/ModalLayout';
import CheckIcon from '@/components/icons/CheckIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import WarningIcon from '@/components/icons/WarningIcon';
import XIcon from '@/components/icons/XIcon';
import { useState } from 'react';

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
    const participantsSearchReset = () => {
        setBoardInfo((prev) => {
            return {
                ...prev,
                participantsSearch: '',
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
                    <div className="flex flex-col ">
                        <p className="text-xs mb-2">이름</p>
                        <input
                            value={boardInfo.name}
                            onChange={(v) => boardNameOnChange(v.target.value)}
                            placeholder="예: '가고 싶은 곳' 또는 '요리법'"
                            className={` focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] ${
                                boardInfo.name.length === 0
                                    ? 'border-[#c00]' // 이름이 비어 있으면 빨간색 테두리
                                    : 'border-[#cdcdcd] hover:border-[#a5a5a5]' // 이름이 있으면 회색 테두리
                            }`} // 포커스 시 파란색 테두리
                        />
                        {/* 경고 문구 */}
                        {boardInfo.name.length === 0 && (
                            <div className="flex items-center">
                                <WarningIcon color="c00" />
                                <span className="m-1 text-xs text-[#CC0000]">
                                    보드 이름을 지정하세요!
                                </span>
                            </div>
                        )}
                    </div>

                    {/* 비밀보드 유지 checkbox */}
                    <div className="flex mb-8">
                        <div className="relative rounded-xl flex items-center">
                            <input
                                id="secretBoard"
                                type="checkbox"
                                className="checked:bg-[#111] checked:border-[#111] cursor-pointer appearance-none border not-checked:hover:border-[#a5a5a5] border-[#767676] border-2 w-6 h-6 rounded-lg"
                            />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <CheckIcon />
                            </div>
                        </div>
                        <label
                            htmlFor="secretBoard"
                            className="cursor-pointer ml-2"
                        >
                            <p className="font-semibold">비밀 보드로 유지</p>
                            <p className="text-[#767676]">
                                회원님과 참여자만 볼 수 있습니다.
                            </p>
                        </label>
                        <div className="text-[#767676] flex items-end hover:underline cursor-pointer">
                            자세히 알아보기
                        </div>
                    </div>

                    {/* 참여자 추가 input */}
                    <div className="flex flex-col relative">
                        <p className="text-xs mb-2">참여자 추가</p>

                        <input
                            id="add-participants-input"
                            value={boardInfo.participantsSearch}
                            onChange={(v) =>
                                participantsSearchChange(v.target.value)
                            }
                            placeholder="이름 또는 이메일 검색"
                            className={
                                'peer focus:pl-4 cursor-pointer border-[#cdcdcd] hover:border-[#a5a5a5] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-10 py-2 rounded-[999px] focus:outline-[rgba(0, 132, 255, .5)]'
                            }
                        />

                        {/* 검색 icon */}
                        <label
                            htmlFor="add-participants-input"
                            className="peer-focus:hidden cursor-pointer absolute top-[37px] left-4"
                        >
                            <SearchIcon />
                        </label>

                        {/* X 아이콘 */}
                        {boardInfo.participantsSearch.length > 0 && (
                            <div
                                onClick={() => participantsSearchReset()}
                                className="top-9 right-4 active:scale-90 cursor-pointer flex items-center justify-center w-6 h-6 absolute rounded-full peer-focus:text-white text-black peer-focus:bg-[#111]"
                            >
                                <XIcon size={11} color="currentColor" />
                            </div>
                        )}

                        {/* 참여자 검색 결과 */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex gap-3 py-2">
                                {/* profile img */}
                                <div className="bg-[#e9e9e9] w-12 h-12 rounded-full ">
                                    <img
                                        className="w-full h-full rounded-full"
                                        src="https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524__340.jpg"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="mb-1">skaka</p>
                                    <p className="text-sm">@ok_ok_qwusd</p>
                                </div>
                            </div>

                            <div>
                                <button className="active:scale-95 hover:brightness-95 bg-[#e9e9e9] rounded-3xl py-3 px-4 font-semibold">
                                    추가
                                </button>
                            </div>
                        </div>
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
