import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar';

import FocusModal from './components/FocusModal';
import ProfileBtn from './components/ProfileBtn';
import DropdownBtn from './components/DropdownBtn';

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  const handleFocus = (value: boolean) => {
    setIsSearch(value);
  };

  useEffect(() => {
    if (isSearch) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [isSearch]);

  return (
    <>
      <div
        className={twMerge(
          'fixed w-[calc(100%-72px)] h-20 top-0 left-[72px] z-50 flex items-center bg-white',
          `${isSearch && 'z-[60]'}`
        )}
      >
        <div className="px-4 py-1 w-full h-14 flex flex-row items-center">
          <SearchBar isSearch={isSearch} onFocus={handleFocus} />
          <ProfileBtn onClick={() => handleFocus(false)} />
          <DropdownBtn onClick={() => handleFocus(false)} />
        </div>
      </div>
      {isSearch && <FocusModal handleFocus={handleFocus} />}
    </>
  );
};

export default Header;
