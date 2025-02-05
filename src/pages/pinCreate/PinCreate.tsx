import Button from '@/components/common/Button';
import ImgInput from './components/ImgInput';
import SideBar from './components/SideBar';
import PinExplainInput from './components/PinExplainInput';
import LabelInput from '@/components/common/LabelInput';
import TagList from './components/TagList';
import BoardSelectBox from './components/BoardSelectBox';
import OptionSetting from '@/components/@Modal/createPinEdit/OptionSetting';
// import SearchResult from './components/SearchResult';
import { useTagSearch } from '@/hooks/pin/useTagSearch';
import { useBoardSelect } from '@/hooks/pin/useBoardSelect';
import { useTempPinList } from '@/hooks/pin/useTempPinList';
import { useOptionSettings } from '@/hooks/pin/useOptionSettings';
import useModalStore from '@/stores/useModalStore';
import DraftDeleteModal from './components/DraftDeleteModal';
import { useEffect, useRef, useState } from 'react';
import { useExplain } from '@/hooks/pin/useExplain';
import { useQuery } from '@tanstack/react-query';
import { getTempsPinCheck } from '@/services/pin/getTempsPinCheck';
import TempPinEditModal from '@/components/@Modal/tempPinEdit/TempPinEditModal';
import useTempPinUpdate from '@/hooks/queries/useTempPinUpdate';
import usePostPin from '@/hooks/queries/usePostPin';
import { useCurrentPin } from '@/hooks/pin/useCurrentPin';
import useTempPinDelete from '@/hooks/queries/useTempPinDelete';

const PinCreate = () => {
  const { data: pinList, refetch: tempPinListReFetch } = useQuery({
    queryKey: ['tempPinList'],
    queryFn: () => getTempsPinCheck(),
  });

  // 현재 활성화된 임시핀 번호 state
  const [currentTempPinNo, setCurrentTempPinNo] = useState('');

  const { selectPinList, togglePinSelection, allPinReset, setSelectPinList } =
    useTempPinList(setCurrentTempPinNo);

  const {
    currentPin,
    currentPinOnChange,
    pinOnClick,
    handleImageUpload,
    currentPinReset,
  } = useCurrentPin({ tempPinListReFetch });

  const { mutate: tempPinUpdate } = useTempPinUpdate();

  /** 모든 임시핀을 선택 함수 */
  const allPinSelect = () => {
    if (!pinList) return; // pinList가 undefined인 경우 아무 작업도 하지 않음
    setSelectPinList(pinList); // pinList를 그대로 설정
  };

  const { textareaRef } = useExplain();

  const { tagSearch, tagList, tagSearchOnChange, selectTagDelet, tagReset } =
    useTagSearch();

  const {
    isBoardSelectModal,
    currentBoard,
    boardSelectModalOpen,
    boardSelectModalClose,
    boardItemOnClick,
    boardReset,
  } = useBoardSelect();

  const {
    isOption,
    isComment,
    isSimilarProductsVisible,
    isOptionToggle,
    isSimilarProductsVisibleToggle,
    optionReset,
  } = useOptionSettings();

  const { isModalOpen, toggleModal } = useModalStore();

  const { mutate: postPin } = usePostPin();

  /** 핀의 input 내용을 모두 reset하는 함수 */
  const pinFormReset = () => {
    currentPinReset();
    optionReset();
  };

  const { mutate: tempPinDelete } = useTempPinDelete();

  /** 최종 임시핀 삭제 버트 클릭 실행 함수 */
  const deleteBtnOnClick = () => {
    const tempPinIds = currentTempPinNo
      ? [currentTempPinNo]
      : selectPinList.map((v) => v.tempPinNo || '');
    tempPinDelete(tempPinIds, {
      onSuccess: () => {
        toggleModal('pinDraftDelete');
      },
    });
  };

  /** pin 초안 item의 ...옵션 버튼 클릭시 삭제,복제 modal toggle 함수 */
  const pinOptionToggle = (
    tempPinNo: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    if (currentTempPinNo === tempPinNo) setCurrentTempPinNo('');
    else setCurrentTempPinNo(tempPinNo);
  };

  /** 게시 버튼 클릭 함수 */
  const postBtnOnClick = () => {
    const postData = {
      imgUrl: currentPin.imgUrl,
      imageClassification: currentPin.imageClassification,
      title: currentPin.title,
      description: currentPin.description,
      link: currentPin.link,
      boardNo: currentPin.boardNo,
      tagNos: [1],
      commentAllowed: currentPin.commentAllowed,
    };
    postPin(postData);
  };

  // 임시핀 내용 수정 useEffect
  useEffect(() => {
    const editData = {
      boardNo: null,
      description: currentPin.description,
      title: currentPin.title,
      link: currentPin.link,
      commentAllowed: currentPin.commentAllowed,
    };

    if (currentPin.tempPinNo)
      tempPinUpdate({ editData, pinNo: currentPin.tempPinNo });
  }, [isComment, currentPin, tempPinUpdate]);

  // 현재 선택중인 임시핀에 대한 정보를 업데이트
  useEffect(() => {
    if (pinList) {
      const matchingPins = pinList.filter((pin) =>
        selectPinList.some((selectPin) => selectPin.tempPinNo === pin.tempPinNo)
      );
      setSelectPinList(matchingPins);
    }
  }, [pinList]);

  const scrollRef = useRef<HTMLDivElement | null>(null); // scrollRef의 타입은 HTMLElement | null
  useEffect(() => {
    // 스크롤 숨기기
    document.documentElement.style.overflow = 'hidden';

    // 컴포넌트가 언마운트될 때 복원
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <main className="flex w-full h-full">
      <div
        id="pin-create-scroll"
        ref={scrollRef}
        className={`${
          selectPinList.length > 0 && 'opacity-25 pointer-events-none'
        } flex-grow pb-8 overflow-scroll max-h-[100vh]`}
      >
        <h1 className="justify-between flex items-center h-[74.31px] border-b-[1px] pl-4 text-xl font-semibold">
          <span>핀 만들기</span>
          {currentPin.imgUrl && (
            <div className="pr-3">
              <Button
                onClick={postBtnOnClick}
                color="red"
                text="게시"
                className="w-[64px] h-[48px] text-[16px] "
              />
            </div>
          )}
        </h1>
        <div className="mx-2 min-w-[584px] flex flex-col lg:gap-12 lg:flex-row lg:justify-center">
          <div className="py-4 mt-4 flex flex-col items-center">
            {/* img file 선택 input */}
            {currentPin.imgUrl ? (
              <img
                src={currentPin.imgUrl}
                className="rounded-[32px] max-w-[342px] bg-black"
              />
            ) : (
              <div>
                <ImgInput onChange={handleImageUpload} />

                <hr className="my-6 w-full border-[#cdcdcd]" />

                {/* URL 저장 버튼 */}
                <Button
                  text="URL에서 저장"
                  color="gray"
                  className="max-w-[375px] w-full py-2 px-3"
                />
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-center lg:flex-grow lg:max-w-[584px]">
            <div
              className={`${
                !currentPin.imgUrl && 'opacity-40 pointer-events-none'
              } w-[98%] max-w-[576px] min-w-[584px] flex flex-col gap-6`}
            >
              {/* imgpreview가 없을 때 input form영역을 덮는 div */}
              <div className="absolute top-0 left-0 bg-[]"></div>
              {/* 제목 input */}
              <LabelInput
                onChangeFC={(v) => currentPinOnChange('title', v)}
                title="제목"
                placeholder="제목 추가"
                value={currentPin.title || ''}
              />
              {/* 설명 input */}
              <PinExplainInput
                textareaRef={textareaRef}
                onChangeFC={(v) => currentPinOnChange('description', v)}
                value={currentPin.description || ''}
              />
              {/* 링크 input */}
              <LabelInput
                title="링크"
                placeholder="링크 추가"
                onChangeFC={(v) => currentPinOnChange('link', v)}
                value={currentPin.link || ''}
              />
              {/* 보드 선택 컴포넌트 */}
              <BoardSelectBox
                currentBoard={currentBoard}
                isBoardSelectModal={isBoardSelectModal}
                boardSelectModalOpen={boardSelectModalOpen}
                boardSelectModalClose={boardSelectModalClose}
                boardItemOnClick={boardItemOnClick}
                searchText={tagSearch}
                searchTextOnChange={tagSearchOnChange}
                className="p-0"
                childrenClassName="w-full"
                scrollRef={scrollRef}
              />
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
              {/* 추가 옵션 설정 영역 */}
              <OptionSetting
                isOption={isOption}
                isOptionToggle={isOptionToggle}
                isComment={currentPin.commentAllowed}
                isSimilarProductsVisible={isSimilarProductsVisible}
                isCommentToggle={() =>
                  currentPinOnChange(
                    'commentAllowed',
                    !currentPin.commentAllowed
                  )
                }
                isSimilarProductsVisibleToggle={isSimilarProductsVisibleToggle}
              />
              <p className="text-sm text-gray-input-hover">
                불법 촬영 콘텐츠 등을 게시하는 경우 Pinterest는 한국
                전기통신사업법 제22-5(1)조에 따라 해당 콘텐츠의 액세스를
                삭제하거나 차단할 수 있으며, 사용자는 관련 법률 및 규정에 따라
                처벌을 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 사이드바 컴포넌트 */}
      <SideBar
        togglePinSelection={togglePinSelection}
        allPinSelect={allPinSelect}
        pinList={pinList}
        selectPinList={selectPinList}
        currentPin={currentPin}
        pinOnClick={pinOnClick}
        allPinReset={allPinReset}
        pinFormReset={pinFormReset}
        boardReset={boardReset}
        tagReset={tagReset}
        optionReset={optionReset}
        pinOptionToggle={pinOptionToggle}
        currentTempPinNo={currentTempPinNo}
      />

      {/* 핀 초안 삭제 modal */}
      {isModalOpen.pinDraftDelete && (
        <DraftDeleteModal deleteBtnOnClick={deleteBtnOnClick} />
      )}
      {/* 임시핀 수정 modal */}
      {isModalOpen.pinEdit && (
        <TempPinEditModal
          selectPinList={selectPinList}
          tempPinUpdate={tempPinUpdate}
        />
      )}
    </main>
  );
};

export default PinCreate;
