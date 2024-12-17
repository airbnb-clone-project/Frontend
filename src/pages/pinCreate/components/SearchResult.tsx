interface SearchResultProps {
    list: string[];
    tagItemOnClick: (tagStr: string) => void;
}
const SearchResult = ({ list, tagItemOnClick }: SearchResultProps) => {
    return (
        <div className="overflow-scroll rounded-2xl absolute top-full left-1/2 -translate-x-1/2 w-[422px] h-[219px] bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.1)]">
            <p className="pt-4 pb-2 px-3 text-xs text-gray-input-hover">
                일치 태그(10개)
            </p>

            {list.map((v, i) => (
                <div
                    onClick={() => tagItemOnClick(v)}
                    key={i}
                    className="cursor-pointer hover:bg-gray-filled-default py-2 px-3 font-semibold"
                >
                    {v}
                </div>
            ))}
        </div>
    );
};

export default SearchResult;
