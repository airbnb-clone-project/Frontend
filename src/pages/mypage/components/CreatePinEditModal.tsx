import BoardSelectModal from '@/pages/mypage/components/BoardSelectModal';
import ModalLayout from '@/components/@Modal/ModalLayout';
import SectionSelectModal from '@/pages/mypage/components/SectionSelectModal';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import SwitchButton from '@/components/common/SwitchButton';
import DownArrowIcon from '@/components/icons/DownArrowIcon';
import UpArrowIcon from '@/components/icons/UpArrowIcon';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import { useRef, useState } from 'react';

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
                    boardSectionSelectModalClose();
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
                        <div className="flex flex-col py-5">
                            <label
                                htmlFor="pinTitle"
                                className="cursor-pointer text-xs mb-2"
                            >
                                제목
                            </label>
                            <Input
                                id="pinTitle"
                                onChangeFC={titleOnChange}
                                value={title}
                                placeholder="예: '가고 싶은 곳' 또는 '요리법'"
                                className="h-[49px]"
                            />
                        </div>

                        {/* pin 설명 input */}
                        <div className="flex flex-col py-5">
                            <p className="text-xs mb-2 cursor-pointer">설명</p>
                            <textarea
                                ref={textarea}
                                value={explain}
                                onChange={(v) =>
                                    explainOnChange(v.target.value)
                                }
                                placeholder="여기에 핀에 대한 상세 설명을 작성하거나 아래에 특정 목록"
                                className="cursor-pointer hover:border-[#a0a0a0] resize-none h-auto min-h-[104px] max-h-[182px] box-border border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 p-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)]"
                            />
                        </div>

                        {/* 링크 입력 input */}
                        <div className="flex flex-col py-5">
                            <label
                                htmlFor="pinLink"
                                className="cursor-pointer text-xs mb-2"
                            >
                                링크
                            </label>
                            <Input
                                id="pinLink"
                                onChangeFC={linkOnChange}
                                value={link}
                                placeholder="링크 추가"
                            />
                        </div>

                        <div className="flex py-5 justify-between">
                            {/* 보드 선택 select div */}
                            <div className="w-[234px]">
                                <label className="cursor-pointer text-xs mb-2">
                                    보드
                                </label>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (isBoardSelectModal) {
                                            boardSelectModalClose();
                                        } else {
                                            boardSelectModalOpen();
                                        }
                                    }}
                                    className="relative flex justify-between items-center cursor-pointer h-[57px] border-gray-input-default border-2 px-4 py-3 rounded-2xl"
                                >
                                    <span className="text-[#767676]">
                                        {currentBoard
                                            ? currentBoard
                                            : '보드 선택'}
                                    </span>
                                    <DownArrowIcon />

                                    {isBoardSelectModal && (
                                        <BoardSelectModal
                                            boardItemOnClick={boardItemOnClick}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* 보드 섹션 select div */}
                            {currentBoard && (
                                <div className="w-[234px]">
                                    <label className="cursor-pointer text-xs mb-2">
                                        섹션
                                    </label>
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (isBoardSectionSelectModal) {
                                                boardSectionSelectModalClose();
                                            } else {
                                                boardSectionSelectModalOpen();
                                            }
                                        }}
                                        className="relative flex justify-between items-center cursor-pointer h-[57px] border-gray-input-default border-2 px-4 py-3 rounded-2xl"
                                    >
                                        <span className="text-[#767676]">
                                            {currentSection
                                                ? currentSection
                                                : '섹션 없음'}
                                        </span>
                                        <DownArrowIcon />

                                        {isBoardSectionSelectModal && (
                                            <SectionSelectModal
                                                sectionItemOnClick={
                                                    sectionItemOnClick
                                                }
                                            />
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 추가 옵션 설정 영역 */}
                        <div>
                            <span
                                onClick={isOptionToggle}
                                className="py-2 cursor-pointer flex items-center gap-1 font-semibold"
                            >
                                추가 옵션
                                {isOption ? <UpArrowIcon /> : <DownArrowIcon />}
                            </span>

                            {isOption && (
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-2 pt-2">
                                        <SwitchButton />
                                        <span>댓글 달기 허용</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <SwitchButton />
                                        <div>
                                            <p className="mb-2">
                                                비슷한 상품 표시하기
                                            </p>
                                            <p className="text-sm mb-1">
                                                사용자가 시각적 검색을 사용하여
                                                이 핀에 표시된 콘텐츠와 유사한
                                                상품을 쇼핑할 수 있습니다.
                                            </p>
                                            <p className="text-sm">
                                                태그된 상품 또는 유료 파트너십
                                                라벨이 있는 아이디어 광고와
                                                핀에는 쇼핑 추천을 사용할 수
                                                없습니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
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
