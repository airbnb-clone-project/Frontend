import Button from '@/components/common/Button';
import ImgInput from './components/ImgInput';
import SideBar from './components/SideBar';
import PinExplainInput from './components/PinExplainInput';
import LabelInput from '@/components/common/LabelInput';
import TagList from './components/TagList';
import BoardSelectBox from './components/BoardSelectBox';
import OptionSetting from '@/components/@Modal/createPinEdit/OptionSetting';
import SearchResult from './components/SearchResult';
import { usePinForm } from '@/hooks/pinCreate/usePinForm';
import { useTagSearch } from '@/hooks/pinCreate/useTagSearch';
import { useBoardSelect } from '@/hooks/pinCreate/useBoardSelect';
import { usePinList } from '@/hooks/pinCreate/usePinList';
import { useOptionSettings } from '@/hooks/pinCreate/useOptionSettings';

const PinCreate = () => {
  const {
    title,
    explain,
    link,
    textareaRef,
    imgPreview,
    titleOnChange,
    explainOnChange,
    linkOnChange,
    handleImageUpload,
  } = usePinForm();

  const {
    tagSearch,
    tagList,
    tagSearchOnChange,
    tagItemOnClick,
    selectTagDelet,
  } = useTagSearch();

  const {
    isBoardSelectModal,
    currentBoard,
    boardSelectModalOpen,
    boardSelectModalClose,
    boardItemOnClick,
  } = useBoardSelect();

  const {
    pinList,
    selectPinList,
    currentPin,
    pinOnClick,
    allPinSelect,
    togglePinSelection,
    allPinReset,
  } = usePinList();

  const { isOption, isOptionToggle } = useOptionSettings();

  return (
    <main className="flex w-full h-full">
      <div className="flex-grow pb-8 overflow-y-scroll max-h-[100vh]">
        <h1 className="flex items-center h-[74.31px] border-b-[1px] pl-4 text-xl font-semibold">
          핀 만들기
        </h1>
        <div className="mx-2 min-w-[584px] flex flex-col lg:gap-12 lg:flex-row lg:justify-center">
          <div className="py-4 mt-4 flex flex-col items-center">
            {/* img file 선택 input */}
            {imgPreview ? (
              <img
                src={imgPreview}
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
                !imgPreview && 'opacity-40 pointer-events-none'
              } w-[98%] max-w-[576px] min-w-[584px] flex flex-col gap-6`}
            >
              {/* imgpreview가 없을 때 input form영역을 덮는 div */}
              <div className="absolute top-0 left-0 bg-[]"></div>
              {/* 제목 input */}
              <LabelInput
                onChangeFC={titleOnChange}
                title="제목"
                placeholder="제목 추가"
                value={title}
              />
              {/* 설명 input */}
              <PinExplainInput
                textareaRef={textareaRef}
                onChangeFC={explainOnChange}
                value={explain}
              />
              {/* 링크 input */}
              <LabelInput
                title="링크"
                placeholder="링크 추가"
                onChangeFC={linkOnChange}
                value={link}
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
                  <SearchResult
                    list={['1', '2', '3', '4', '5']}
                    tagItemOnClick={tagItemOnClick}
                  />
                </div>

                {/* 선택된 태그 주제 list 컴포넌트*/}
                <TagList list={tagList} selectTagDelet={selectTagDelet} />
              </div>
              {/* 추가 옵션 설정 영역 */}
              <OptionSetting
                isOption={isOption}
                isOptionToggle={isOptionToggle}
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
      />
    </main>
  );
};

export default PinCreate;
