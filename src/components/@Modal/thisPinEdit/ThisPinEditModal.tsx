import { useState } from 'react';
import useModalStore from '@/stores/useModalStore.tsx';
import ModalLayout from '../../../components/@Modal/ModalLayout';
import Button from '@/components/common/Button';
import BoardSelector from './BoardSelector';
import SectionSelector from './SectionSelector';
import PrivateNote from './PrivateNote';

const ThisPinEditModal = () => {
    /** 보드 선택 modal 활성화 여부 state */
    const [isBoardSelectModal, setIsBoardSelectModal] =
        useState<boolean>(false);
    /** 보드 선택 modal 활성화 여부 state open 함수 */
    const boardSelectModalOpen = () => {
        setIsBoardSelectModal(true);
        boardSectionSelectModalClose();
    };
    /** 보드 선택 modal 활성화 여부 state close 함수 */
    const boardSelectModalClose = () => {
        setIsBoardSelectModal(false);
    };

    /** 보드 섹션 선택 modal 활성화 여부 state */
    const [isBoardSectionSelectModal, setIsBoardSectionSelectModal] =
        useState<boolean>(false);
    /** 보드 섹션 선택 modal 활성화 여부 state open 함수 */
    const boardSectionSelectModalOpen = () => {
        setIsBoardSectionSelectModal(true);
        boardSelectModalClose();
    };
    /** 보드 섹션 선택 modal 활성화 여부 state close 함수 */
    const boardSectionSelectModalClose = () => {
        setIsBoardSectionSelectModal(false);
    };

    /** 현재 선택한 보드 state */
    const [currentBoard, setCurrentBoard] = useState<string>('');
    /** 보드 items onClick 함수 */
    const boardItemOnClick = (value: string) => {
        setCurrentBoard(value);
        boardSelectModalClose();
    };

    /** 현재 선택한 섹션 state */
    const [currentSection, setCurrentSection] = useState<string>('');
    /** 섹션 items onClick 함수 */
    const sectionItemOnClick = (value: string) => {
        setCurrentSection(value);
        boardSectionSelectModalClose();
    };

    /** 프라이빗 노트 text state */
    const [privateNote, setPrivateNote] = useState<string>('');
    const privateNoteOnChange = (text: string) => {
        setPrivateNote(text);
    };

    /** 취소 버튼 onClick 함수 */
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
                        {/* 보드 선택 select 컴포넌트 */}
                        <BoardSelector
                            boardSelectModalClose={boardSelectModalClose}
                            boardSelectModalOpen={boardSelectModalOpen}
                            currentBoard={currentBoard}
                            isBoardSelectModal={isBoardSelectModal}
                            boardItemOnClick={boardItemOnClick}
                        />

                        {/* 보드 섹션 select 컴포넌트 */}
                        <SectionSelector
                            boardSectionSelectModalClose={
                                boardSectionSelectModalClose
                            }
                            boardSectionSelectModalOpen={
                                boardSectionSelectModalOpen
                            }
                            currentSection={currentSection}
                            isBoardSectionSelectModal={
                                isBoardSectionSelectModal
                            }
                            sectionItemOnClick={sectionItemOnClick}
                        />

                        {/* 보드 프라이빗 메모 컴포넌트 */}
                        <PrivateNote
                            privateNote={privateNote}
                            privateNoteOnChange={privateNoteOnChange}
                        />
                    </div>

                    {/* 해당 pin 이미지 영역 */}
                    <div className="py-3 px-4">
                        <img
                            className="w-[236px] rounded-lg"
                            src="https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg"
                        />
                    </div>
                </div>

                {/* 하단 button 영역 */}
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
