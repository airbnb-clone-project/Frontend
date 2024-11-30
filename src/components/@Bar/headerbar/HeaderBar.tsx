import { FaAngleDown } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { useState } from 'react';
import FocusModal from './focusmodal/FocusModal';
import Button from '@/pages/main/components/common/Button';
import { twMerge } from 'tailwind-merge';

const HeaderBar = () => {
    const [isSearch, setIsSearch] = useState(false);

    return (
        <>
            <div
                className={twMerge(
                    'fixed w-[calc(100%-72px)] h-20 top-0 left-[72px] z-40 flex items-center bg-white',
                    `${isSearch && 'z-[60]'}`
                )}
            >
                <div className="px-4 py-1 w-full h-14 flex flex-row items-center">
                    <div className="min-w-[407px] h-12 flex-auto px-2">
                        <div
                            className={`pl-4 w-full h-full rounded-xl bg-gray-100 flex items-center hover:bg-gray-200 ${
                                isSearch &&
                                'outline outline-4 outline-blue-300 bg-gray-200'
                            }`}
                        >
                            {!isSearch && (
                                <FaSearch className="mr-2 fill-gray-500" />
                            )}
                            <input
                                type="text"
                                className="w-full h-full outline-none bg-transparent placeholder-gray-500"
                                onFocus={() => setIsSearch(true)}
                                onBlur={() => setIsSearch(false)}
                                placeholder="검색"
                            />
                            {isSearch && (
                                <>
                                    <Button>
                                        <div className="w-12 h-12 flex justify-center items-center cursor-pointer">
                                            <div className="absolute bg-white w-5 h-5 rounded-full"></div>
                                            <MdCancel className="relative w-6 h-6" />
                                        </div>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                    <Button rounded="rounded-xl">
                        <div className="w-12 h-12 flex justify-center items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <div className="w-8 h-8 bg-black"></div>
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="w-6 h-6 flex justify-center items-center">
                            <FaAngleDown className="fill-gray-500" />
                        </div>
                    </Button>
                </div>
            </div>
            {isSearch && <FocusModal></FocusModal>}
        </>
    );
};
export default HeaderBar;
