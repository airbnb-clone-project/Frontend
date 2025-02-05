import ModalLayout from '@/components/@Modal/ModalLayout';
import Button from '@/components/common/Button';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import { useEffect, useRef, useState } from 'react';
import PinExplainInput from './PinExplainInput';
import BoardSectionSelect from './BoardSectionSelect';
import OptionSetting from './OptionSetting';
import { useOptionSettings } from '@/hooks/pin/useOptionSettings';
import LabelInput from '@/components/common/LabelInput';
import { myPins } from '@/services/pin/getMyPinsCheck';
import usePinEdit from '@/hooks/queries/usePinEdit';
import { PinEditData } from '@/services/pin/putPinEdit';

interface CreatePinEditModalProps {
  /** 섹션 선택 요소 유무 */
  isSection?: boolean;
  /** 수정할 pin data */
  currentPinData: PinEditData;
  currentPinDataOnChange: (
    key: keyof myPins,
    value: myPins[keyof myPins]
  ) => void;
}
const CreatePinEditModal = ({
  // isSection,
  currentPinData,
  currentPinDataOnChange,
}: CreatePinEditModalProps) => {
  // 추가 옵션 항목 활성화 여부
  const {
    isOption,
    isOptionToggle,
    isSimilarProductsVisible,
    isSimilarProductsVisibleToggle,
  } = useOptionSettings();

  // 보드 선택 modal 활성화 여부 state
  const [isBoardSelectModal, setIsBoardSelectModal] = useState<boolean>(false);
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

  const { toggleModal } = useModalStore();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResizeHeight = () => {
    const currentTextarea = textareaRef.current;
    if (currentTextarea) {
      currentTextarea.style.height = 'auto'; // height 초기화
      currentTextarea.style.height = currentTextarea.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    const currentTextarea = textareaRef.current;
    if (currentTextarea) {
      // 초기 설정 및 내용 변경 시 높이 조정
      handleResizeHeight();
    }
  }, [currentPinData.description]); // description 변경 시 실행

  const { mutate: pinUpdate } = usePinEdit();

  /** 핀 수정 정보를 저장하는 button 클릭 함수 */
  const saveBtnOnClick = () => {
    pinUpdate(currentPinData);
  };
  return (
    <ModalLayout isBackgroundColor={true} modalName="createPinEdit">
      <div
        onClick={(e) => {
          e.stopPropagation();
          boardSelectModalClose();
          sectionSelectModalClose();
        }}
        className="flex flex-col justify-between cursor-auto w-[540px] h-[100vh] bg-white absolute top-0 right-0"
      >
        <div className="px-6 flex flex-col h-[calc(100vh-96px)] overflow-y-auto">
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
            {/* 제목 input */}
            <LabelInput
              onChangeFC={(text: string) =>
                currentPinDataOnChange('title', text)
              }
              title="제목"
              placeholder="제목 추가"
              value={currentPinData.title || ''}
            />

            {/* pin 설명 input */}
            <PinExplainInput
              explain={currentPinData.description || ''}
              explainOnChange={(text: string) =>
                currentPinDataOnChange('description', text)
              }
              textarea={textareaRef}
            />

            {/* 링크 input */}
            <LabelInput
              title="링크"
              placeholder="링크 추가"
              onChangeFC={(text: string) =>
                currentPinDataOnChange('link', text)
              }
              value={currentPinData.link || ''}
            />

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
              // isSection={isSection}
            />

            {/* 추가 옵션 설정 영역 */}
            <OptionSetting
              isOption={isOption}
              isOptionToggle={isOptionToggle}
              isComment={currentPinData.isCommentAllowed}
              isCommentToggle={() =>
                currentPinDataOnChange('isCommentAllowed', null)
              }
              isSimilarProductsVisible={isSimilarProductsVisible}
              isSimilarProductsVisibleToggle={isSimilarProductsVisibleToggle}
            />
          </div>
        </div>

        <div className="px-6 py-6 flex justify-end gap-2 h-[96px]">
          <Button text="삭제" color="gray" />
          <Button onClick={saveBtnOnClick} text="저장" color="red" />
        </div>
      </div>
    </ModalLayout>
  );
};

export default CreatePinEditModal;
