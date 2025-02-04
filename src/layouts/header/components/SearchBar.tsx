import Button from '@/components/common/Button/Button';

import { MdCancel } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  isSearch: boolean;
  onFocus: (value: boolean) => void;
}

const SearchBar = ({ isSearch, onFocus }: SearchBarProps) => {
  return (
    <div className="min-w-[407px] h-12 flex-auto px-2">
      <div
        className={`pl-4 w-full h-full rounded-xl bg-gray-100 flex items-center hover:bg-gray-200 ${
          isSearch && 'outline outline-4 outline-blue-300 bg-gray-200'
        }`}
      >
        {!isSearch && <FaSearch className="mr-2 fill-gray-500" />}
        <input
          type="text"
          className="w-full h-full outline-none bg-transparent placeholder-gray-500"
          onFocus={() => onFocus(true)}
          placeholder="검색"
        />
        {isSearch && (
          <Button variant="icon" ariaLabel="검색 취소" size="sm">
            <MdCancel className="relative w-6 h-6" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
