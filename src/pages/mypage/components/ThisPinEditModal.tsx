import BoardSelectModal from './BoardSelectModal';
import { useState } from 'react';
import SectionSelectModal from './SectionSelectModal';
import useModalStore from '@/stores/useModalStore.tsx';
import ModalLayout from '../../../components/@Modal/ModalLayout';
import DownArrowIcon from '@/components/icons/DownArrowIcon';
import Button from '@/components/common/Button';

const ThisPinEditModal = () => {
    // 보드 선택 modal 활성화 여부 state
    const [isBoardSelectModal, setIsBoardSelectModal] =
        useState<boolean>(false);
    // 보드 선택 modal 활성화 여부 state open 함수
    const boardSelectModalOpen = () => {
        setIsBoardSelectModal(true);
        boardSectionSelectModalClose();
    };
    // 보드 선택 modal 활성화 여부 state close 함수
    const boardSelectModalClose = () => {
        setIsBoardSelectModal(false);
    };

    // 보드 섹션 선택 modal 활성화 여부 state
    const [isBoardSectionSelectModal, setIsBoardSectionSelectModal] =
        useState<boolean>(false);
    // 보드 섹션 선택 modal 활성화 여부 state open 함수
    const boardSectionSelectModalOpen = () => {
        setIsBoardSectionSelectModal(true);
        boardSelectModalClose();
    };
    // 보드 섹션 선택 modal 활성화 여부 state close 함수
    const boardSectionSelectModalClose = () => {
        setIsBoardSectionSelectModal(false);
    };

    // 현재 선택한 보드 state
    const [currentBoard, setCurrentBoard] = useState<string>('');
    // 보드 items onClick 함수
    const boardItemOnClick = (value: string) => {
        setCurrentBoard(value);
        boardSelectModalClose();
    };

    // 현재 선택한 섹션 state
    const [currentSection, setCurrentSection] = useState<string>('');
    // 섹션 items onClick 함수
    const sectionItemOnClick = (value: string) => {
        setCurrentSection(value);
        boardSectionSelectModalClose();
    };

    // 프라이빗 노트 text state
    const [privateNote, setPrivateNote] = useState<string>('');
    const privateNoteOnChange = (text: string) => {
        setPrivateNote(text);
    };

    // 취소 버튼 onClick 함수
    const cancelBtnOnClick = () => {
        toggleModal('thisPinEdit');
    };

    const { toggleModal } = useModalStore();
    return (
        <ModalLayout modalName="thisPinEdit" isBackgroundColor={true}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    boardSectionSelectModalClose();
                    boardSelectModalClose();
                }}
                className="cursor-auto max-h-[90vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[900px] w-[96vw] bg-white rounded-2xl"
            >
                <p className="p-6 text-[28px] font-semibold text-center">
                    이 핀 수정하기
                </p>

                <div className="flex px-4 justify-between max-md:flex-col-reverse">
                    <div className="flex flex-col flex-1">
                        {/* 보드 선택 select div */}
                        <div className="px-4 py-3 w-full md:flex md:items-center md:justify-between">
                            <p className="cursor-pointer text-xs mb-2">보드</p>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isBoardSelectModal) {
                                        boardSelectModalClose();
                                    } else {
                                        boardSelectModalOpen();
                                    }
                                }}
                                className="md:w-[63.11%] bg-[#E9E9E9] w-auto relative flex justify-between items-center cursor-pointer px-4 py-3 rounded-lg"
                            >
                                <span className="font-semibold">
                                    {currentBoard ? currentBoard : '보드 선택'}
                                </span>
                                <DownArrowIcon />

                                {isBoardSelectModal && (
                                    <BoardSelectModal
                                        className="left-0 w-full"
                                        boardItemOnClick={boardItemOnClick}
                                    />
                                )}
                            </div>
                        </div>

                        {/* 보드 섹션 select div */}
                        <div className="md:flex md:items-center md:justify-between py-3 px-4 pb-4 border-b border-gray-input-default">
                            <p className="cursor-pointer text-xs mb-2">섹션</p>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isBoardSectionSelectModal) {
                                        boardSectionSelectModalClose();
                                    } else {
                                        boardSectionSelectModalOpen();
                                    }
                                }}
                                className="md:w-[63.11%] bg-[#E9E9E9] w-auto relative flex justify-between items-center cursor-pointer px-4 py-3 rounded-lg"
                            >
                                <span className="font-semibold">
                                    {currentSection
                                        ? currentSection
                                        : '섹션 없음'}
                                </span>
                                <DownArrowIcon />

                                {isBoardSectionSelectModal && (
                                    <SectionSelectModal
                                        className="left-0 w-full"
                                        sectionItemOnClick={sectionItemOnClick}
                                    />
                                )}
                            </div>
                        </div>

                        {/* 보드 프라이빗 메모 div */}
                        <div className="py-3 px-4 md:flex md:justify-between">
                            <p className="text-sm pt-2 pb-4">프라이빗 노트</p>

                            <div className="md:w-[63.11%]">
                                <textarea
                                    value={privateNote}
                                    onChange={(v) =>
                                        privateNoteOnChange(v.target.value)
                                    }
                                    placeholder="프라이빗 노트를 작성하면 이 핀에 대한 아이디어를 기억하기 쉬워요."
                                    className="w-full cursor-pointer hover:border-[#a0a0a0] resize-none h-[92px] box-border border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 py-2 px-4 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)]"
                                />
                                {/* 현재 작성한 글자 수 500자 내외 */}
                                <p className="-mt-1 text-end text-xs text-[#767676]">
                                    {privateNote.length}/500
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 해당 pin 이미지 영역 */}
                    <div className="py-3 px-4">
                        <img
                            className="w-[236px] rounded-lg"
                            src="https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg"
                        />
                    </div>
                </div>

                <div className="flex p-6 justify-between">
                    <Button text="삭제" color="gray" />
                    <div className="flex gap-2">
                        <Button
                            text="취소"
                            color="gray"
                            onClick={cancelBtnOnClick}
                        />
                        <Button text="저장" color="red" />
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};

export default ThisPinEditModal;
