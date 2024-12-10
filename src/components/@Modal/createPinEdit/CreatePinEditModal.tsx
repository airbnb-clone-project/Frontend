import ModalLayout from '@/components/@Modal/ModalLayout';
import Button from '@/components/common/Button';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import { useRef, useState } from 'react';
import PinTitleInput from './PinTitleInput';
import PinExplainInput from './PinExplainInput';
import LinkInput from './LinkInput';
import BoardSectionSelect from './BoardSectionSelect';
import OptionSetting from './OptionSetting';

const CreatePinEditModal = () => {
    // pin 제목 state
    const [title, setTitle] = useState<string>('');
    // pin 설명 state
    const [explain, setExplain] = useState<string>('');
    // pin Link state
    const [link, setLink] = useState<string>('');

    // pin 제목 input onChange 함수
    const titleOnChange = (text: string) => {
        setTitle(text);
    };

    // pin Link input onChange 함수
    const linkOnChange = (text: string) => {
        setLink(text);
    };

    // textarea ref
    const textarea = useRef<HTMLTextAreaElement | null>(null);
    // textarea태그에 들어가는 text 길이에 따른 height증가 함수
    const handleResizeHeight = () => {
        const currentTextarea = textarea.current;

        if (currentTextarea) {
            currentTextarea.style.height = 'auto'; //height 초기화
            currentTextarea.style.height = currentTextarea.scrollHeight + 'px';
        }
    };

    // pin 설명 textarea onChange 함수
    const explainOnChange = (text: string) => {
        setExplain(text);
        handleResizeHeight();
    };

    // 보드 선택 modal 활성화 여부 state
    const [isBoardSelectModal, setIsBoardSelectModal] =
        useState<boolean>(false);
    // 보드 선택 modal 활성화 여부 state open 함수
    const boardSelectModalOpen = () => {
        setIsBoardSelectModal(true);
        sectionSelectModalClose();
    };
    // 보드 선택 modal 활성화 여부 state close 함수
    const boardSelectModalClose = () => {
        setIsBoardSelectModal(false);
    };

    // 보드 섹션 선택 modal 활성화 여부 state
    const [isSectionSelectModal, setIsSectionSelectModal] =
        useState<boolean>(false);
    // 보드 섹션 선택 modal 활성화 여부 state open 함수
    const sectionSelectModalOpen = () => {
        setIsSectionSelectModal(true);
        boardSelectModalClose();
    };
    // 보드 섹션 선택 modal 활성화 여부 state close 함수
    const sectionSelectModalClose = () => {
        setIsSectionSelectModal(false);
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
        sectionSelectModalClose();
    };

    // 추가 옵션 항목 활성화 여부
    const [isOption, setIsOption] = useState<boolean>(false);
    const isOptionToggle = () => {
        setIsOption(!isOption);
    };

    const { toggleModal } = useModalStore();

    return (
        <ModalLayout isBackgroundColor={true} modalName="createPinEdit">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    boardSelectModalClose();
                    sectionSelectModalClose();
                }}
                className="flex flex-col justify-between px-6 cursor-auto w-[540px] h-[100vh] bg-white absolute top-0 right-0"
            >
                <div className="flex flex-col">
                    {/* modal header 영역 */}
                    <div className="py-7 flex justify-between">
                        <h1 className=" text-[28px] font-semibold text-[#111111]">
                            핀 수정
                        </h1>
                        <button
                            onClick={() => toggleModal('createPinEdit')}
                            className="rounded-full hover:bg-gray-outline-hover active:bg-gray-outline-active active:scale-90 w-10 h-10 flex items-center justify-center"
                        >
                            <XIcon />
                        </button>
                    </div>

                    <div className="py-6 flex-col gap-5">
                        {/* pin 제목 input */}
                        <PinTitleInput
                            title={title}
                            titleOnChange={titleOnChange}
                        />

                        {/* pin 설명 input */}
                        <PinExplainInput
                            explain={explain}
                            explainOnChange={explainOnChange}
                            textarea={textarea}
                        />

                        {/* 링크 입력 input */}
                        <LinkInput link={link} linkOnChange={linkOnChange} />

                        {/* 보드 & 섹션 선택 컴포넌트 */}
                        <BoardSectionSelect
                            currentBoard={currentBoard}
                            currentSection={currentSection}
                            isBoardSelectModal={isBoardSelectModal}
                            boardSelectModalOpen={boardSelectModalOpen}
                            boardSelectModalClose={boardSelectModalClose}
                            isSectionSelectModal={isSectionSelectModal}
                            sectionSelectModalOpen={sectionSelectModalOpen}
                            sectionSelectModalClose={sectionSelectModalClose}
                            boardItemOnClick={boardItemOnClick}
                            sectionItemOnClick={sectionItemOnClick}
                        />

                        {/* 추가 옵션 설정 영역 */}
                        <OptionSetting
                            isOption={isOption}
                            isOptionToggle={isOptionToggle}
                        />
                    </div>
                </div>

                <div className="pb-6 flex justify-end gap-2">
                    <Button text="삭제" color="gray" />
                    <Button text="저장" color="red" />
                </div>
            </div>
        </ModalLayout>
    );
};

export default CreatePinEditModal;
