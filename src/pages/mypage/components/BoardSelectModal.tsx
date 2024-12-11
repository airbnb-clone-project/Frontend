import Button from '@/components/common/Button';
import SearchInput from '@/components/common/SearchInput';
import LockIcon from '@/components/icons/LockIcon';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface BoardSelectModal {
    boardItemOnClick: (value: string) => void;
    className?: string;
}

const BoardSelectModal = ({
    boardItemOnClick,
    className,
}: BoardSelectModal) => {
    const [searchText, setSearchText] = useState<string>('');
    const searchTextOnChange = (text: string) => {
        setSearchText(text);
    };

    const borderList = [
        { name: '동물', isSecret: false },
        { name: '동물', isSecret: false },
        { name: '동물', isSecret: true },
    ];
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
                'bg-white border border-gray-input-default rounded-2xl absolute w-[357px] top-full translate-y-1 left-[-2px] z-50',
                className
            )}
        >
            {/* 보드 검색 & 만들기 button 영역 */}
            <div className="flex p-2 h-[58px] gap-2">
                <SearchInput
                    onChangeFC={searchTextOnChange}
                    value={searchText}
                    placeholder="검색"
                    className="md:w-[75%]"
                />

                <Button
                    color="gray"
                    text="만들기"
                    className={`max-w-[100px] min-w-[60px] p-0 w-full text-gray-400 ${
                        searchText && 'text-black'
                    }`}
                />
            </div>

            {/* 보드 list 영역 */}
            <div>
                {borderList.map((v, i) => (
                    <div
                        onClick={() => boardItemOnClick(v.name)}
                        key={i}
                        className="hover:bg-gray-filled-default rounded-lg cursor-pointer p-2 flex justify-between items-center"
                    >
                        <span>{v.name}</span>
                        {v.isSecret && <LockIcon />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoardSelectModal;
