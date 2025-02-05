import RecentSearches from './RecentSearches';
import PopularSearches from './PopularSearches';

const SearchContent = () => {
  return (
    <div
      className="fixed left-[72px] pt-8 pb-6 w-[calc(100%-144px)] max-h-[calc(100%-90px)] top-[68px] bg-white z-[59] rounded-b-xl overflow-y-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="w-full px-8">
        {/* 검색 결과나 추천 검색어 등을 표시할 수 있음 */}
        <RecentSearches />
        <PopularSearches />
      </div>
    </div>
  );
};

export default SearchContent;
