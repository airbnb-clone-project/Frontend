import ModalLayout from '@/components/@Modal/ModalLayout';
import Button from '@/components/common/Button';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';
import { useEffect, useRef, useState } from 'react';
import PinExplainInput from './PinExplainInput';
import BoardSectionSelect from './BoardSectionSelect';
import LabelInput from '@/components/common/LabelInput';
import { tempPin } from '@/services/getTempsPinCheck';
import DiamondWarning from '@/components/icons/DiamondWarning';
import TagList from '@/pages/pinCreate/components/TagList';
import { useTagSearch } from '@/hooks/pin/useTagSearch';
import { PutTempPinEditParams } from '@/services/putTempPinEdit';

interface TempPinEditModalProps {
  /** 섹션 선택 요소 유무 */
  isSection?: boolean;
  selectPinList: tempPin[];
  /** 임시핀 업데이트 query 함수 */
  tempPinUpdate: ({ editData, pinNo }: PutTempPinEditParams) => void;
}
const TempPinEditModal = ({
  isSection,
  selectPinList,
  tempPinUpdate,
}: TempPinEditModalProps) => {
  // selectPinList의 길이가 1이상인지 확인하는 변수
  const isSelectPinListArray = selectPinList.length > 1;
  // pin 제목 state
  const [title, setTitle] = useState<string>(
    isSelectPinListArray ? '' : selectPinList[0].title ?? ''
  );
  // pin 설명 state
  const [explain, setExplain] = useState<string>(
    isSelectPinListArray ? '' : selectPinList[0].description ?? ''
  );
  // pin Link state
  const [link, setLink] = useState<string>(
    isSelectPinListArray ? '' : selectPinList[0].link ?? ''
  );

  // 모든 key 값이 같은지 확인하고 공통된 값을 반환하는 함수
  const getCommonValue = <T extends keyof (typeof selectPinList)[0]>(
    list: typeof selectPinList,
    key: T
  ): string => {
    if (!list || list.length === 0) return '';
    const firstValue = list[0][key] ?? '';
    const isCommon = list.every((item) => item[key] === firstValue);
    return isCommon ? (firstValue as string) : '';
  };

  useEffect(() => {
    setTitle(getCommonValue(selectPinList, 'title'));
    setExplain(getCommonValue(selectPinList, 'description'));
    setLink(getCommonValue(selectPinList, 'link'));
  }, []);

  /** 업데이트할 값이 있는지 확인하는 함수 */
  const hasStateChanged = (): boolean => {
    // 기본적으로 selectPinList가 유효한지 확인
    if (!selectPinList || selectPinList.length === 0) return false;

    // 현재 수정중인 임시핀이 2개 이상일 때
    if (selectPinList.length > 1) {
      return !!(explain || title || link);
    }

    const {
      title: pinTitle,
      description: pinDescription,
      link: pinLink,
    } = selectPinList[0];

    // 상태값과 selectPinList[0]의 값이 다른지 확인
    return (
      title !== (pinTitle ?? '') ||
      explain !== (pinDescription ?? '') ||
      link !== (pinLink ?? '')
    );
  };

  // 업데이트할 값이 있는지 확인 변수
  const isChanged = hasStateChanged();

  // pin 제목 input onChange 함수
  const titleOnChange = (text: string) => {
    setTitle(text);
  };

  // pin Link input onChange 함수
  const linkOnChange = (text: string) => {
    setLink(text);
  };

  /** 업데이트 button 클릭시 실행 함수 */
  const updateBtnOnClick = () => {
    selectPinList.forEach((pin) => {
      // 모든 값이 같다면 함수 실행을 막기 위한 조건
      const isSameAsState =
        explain === pin.description && title === pin.title && link === pin.link;

      // 모든 값이 같으면 업데이트를 건너뜀
      if (isSameAsState) {
        return;
      }

      const editData = {
        boardNo: null,
        description: explain || pin.description,
        title: title || pin.title,
        link: link || pin.link,
        commentAllowed: pin.commentAllowed,
      };

      tempPinUpdate({ editData, pinNo: pin.tempPinNo });
    });
    toggleModal('thisPinEdit');
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
  const [isBoardSelectModal, setIsBoardSelectModal] = useState<boolean>(false);
  // 보드 선택 modal 활성화 여부 state open 함수
  const boardSelectModalOpen = () => {
    setIsBoardSelectModal(true);
  };
  // 보드 선택 modal 활성화 여부 state close 함수
  const boardSelectModalClose = () => {
    setIsBoardSelectModal(false);
  };

  // 현재 선택한 보드 state
  const [currentBoard, setCurrentBoard] = useState<string>('');
  // 보드 items onClick 함수
  const boardItemOnClick = (value: string) => {
    setCurrentBoard(value);
    boardSelectModalClose();
  };

  const { toggleModal } = useModalStore();

  const { tagSearch, tagList, tagSearchOnChange, selectTagDelet } =
    useTagSearch();

  /** 객체명을 입력받아 selectPinList 값의 null이 아닌 값이 있는지 확인하는 함수*/
  const hasExistingField = (field: keyof tempPin) =>
    isSelectPinListArray && selectPinList.some((pin) => pin[field] !== null);

  return (
    <ModalLayout isBackgroundColor={true} modalName="createPinEdit">
      <div
        onClick={(e) => {
          e.stopPropagation();
          boardSelectModalClose();
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

          <div className="py-6 flex flex-col gap-5">
            <div>
              {/* 제목 input */}
              <LabelInput
                onChangeFC={titleOnChange}
                title="제목"
                placeholder="제목 추가"
                value={title || ''}
              />
              {hasExistingField('title') && (
                <div className="mt-1 flex">
                  <div className="w-5 mr-1">
                    <DiamondWarning />
                  </div>
                  <p className="text-sm text-[#BD5B00]">
                    선택한 핀에 기존 제목이 있습니다. 이 필드를 수정하면 선택한
                    모든 핀에 대한 이전 항목을 덮어씁니다.
                  </p>
                </div>
              )}
            </div>

            <div>
              {/* pin 설명 input */}
              <PinExplainInput
                explain={explain || ''}
                explainOnChange={explainOnChange}
                textarea={textarea}
              />
              {hasExistingField('description') && (
                <div className="mt-1 flex">
                  <div className="w-5 mr-1">
                    <DiamondWarning />
                  </div>
                  <p className="text-sm text-[#BD5B00]">
                    선택한 핀에 기존 제목이 있습니다. 이 필드를 수정하면 선택한
                    모든 핀에 대한 이전 항목을 덮어씁니다.
                  </p>
                </div>
              )}
            </div>

            <div>
              {/* 링크 input */}
              <LabelInput
                title="링크"
                placeholder="링크 추가"
                onChangeFC={linkOnChange}
                value={link || ''}
              />
              {hasExistingField('link') && (
                <div className="mt-1 flex">
                  <div className="w-5 mr-1">
                    <DiamondWarning />
                  </div>
                  <p className="text-sm text-[#BD5B00]">
                    선택한 핀에 기존 링크가 있습니다. 이 필드를 수정하면 선택한
                    모든 핀에 대한 이전 항목을 덮어씁니다.
                  </p>
                </div>
              )}
            </div>

            <div>
              {/* 보드 & 섹션 선택 컴포넌트 */}
              <BoardSectionSelect
                currentBoard={currentBoard}
                isBoardSelectModal={isBoardSelectModal}
                boardSelectModalOpen={boardSelectModalOpen}
                boardSelectModalClose={boardSelectModalClose}
                boardItemOnClick={boardItemOnClick}
                isSection={isSection}
              />
              {hasExistingField('boardNo') && (
                <div className="mt-1 flex">
                  <div className="w-5 mr-1">
                    <DiamondWarning />
                  </div>
                  <p className="text-sm text-[#BD5B00]">
                    선택한 핀에 기존 링크가 있습니다. 이 필드를 수정하면 선택한
                    모든 핀에 대한 이전 항목을 덮어씁니다.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 태그 주제 영역 */}
          <div>
            <div className="relative">
              <LabelInput
                value={tagSearch}
                onChangeFC={tagSearchOnChange}
                placeholder="태그 검색"
                title={`태그된 주제 (${0}개)`}
              />
              <p className="my-2 text-xs text-gray-input-hover">
                걱정하지 마세요. 사람들에게 태그는 보여지지 않습니다.
              </p>

              {/* 주제 검색결과 컴포넌트 */}
              {/* <SearchResult
                    list={['1', '2', '3', '4', '5']}
                    tagItemOnClick={tagItemOnClick}
                  /> */}
            </div>

            {/* 선택된 태그 주제 list 컴포넌트*/}
            <TagList list={tagList} selectTagDelet={selectTagDelet} />
          </div>
        </div>

        <div className="px-6 py-6 flex justify-end gap-2 h-[96px]">
          <Button
            onClick={isChanged ? updateBtnOnClick : undefined}
            text="업데이트"
            color={isChanged ? 'red' : 'gray'}
            className={isChanged ? '' : 'text-gray-400'}
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default TempPinEditModal;
