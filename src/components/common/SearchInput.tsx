import { twMerge } from 'tailwind-merge';
import SearchIcon from '../icons/SearchIcon';
import XIcon from '../icons/XIcon';

interface SearchInputProps {
    value: string;
    onChangeFC: (text: string) => void;
    id?: string;
    placeholder?: string;
    className?: string;
}

const SearchInput = ({
    onChangeFC,
    value,
    id,
    placeholder,
    className,
}: SearchInputProps) => {
    // xIcon 클릭시 검색어를 reset하는 함수
    const xiconOnClick = () => {
        onChangeFC('');
    };

    return (
        <div className={twMerge('flex flex-col relative w-full', className)}>
            <input
                id={id}
                value={value}
                onChange={(v) => onChangeFC(v.target.value)}
                placeholder={
                    placeholder ? placeholder : '이름 또는 이메일 검색'
                }
                className={`${
                    value.length > 0 && 'pl-4'
                } peer focus:pl-4 cursor-pointer border-[#cdcdcd] hover:border-[#a5a5a5] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-10 py-2 focus:pr-16 rounded-[999px] focus:outline-[rgba(0, 132, 255, .5)]`}
            />

            {/* 검색 icon */}
            {value.length <= 0 && (
                <label
                    htmlFor="add-participants-input"
                    className="peer-focus:hidden cursor-pointer absolute top-1/2 -translate-y-1/2 left-4"
                >
                    <SearchIcon />
                </label>
            )}

            {/* X 아이콘 */}
            {value.length > 0 && (
                <div
                    onClick={() => xiconOnClick()}
                    className="top-1/2 -translate-y-1/2 right-4 active:scale-90 cursor-pointer flex items-center justify-center w-6 h-6 absolute rounded-full peer-focus:text-white text-black peer-focus:bg-[#111]"
                >
                    <XIcon size={11} color="currentColor" />
                </div>
            )}
        </div>
    );
};

export default SearchInput;
