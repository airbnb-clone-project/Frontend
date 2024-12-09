interface SearchResultListProps {
    list: string[];
}

const SearchResultList = ({ list }: SearchResultListProps) => {
    return (
        <div className="overflow-y-scroll -mr-4 max-h-[414px]">
            {list.map((v, i) => (
                <div key={i} className="gap-2 flex justify-between py-2">
                    <div className="flex items-center w-full">
                        <img
                            src={v}
                            className="min-w-12 w-12 h-12 rounded-full mr-2"
                        />
                        <div className="w-full flex flex-col">
                            <p className="font-semibold hover:underline cursor-pointer">
                                K
                            </p>
                            <span className="text-xs text-[#767676]">k</span>
                        </div>
                    </div>
                    <button className="transition-transform duration-200 active:scale-95 hover:bg-[#b60000] min-w-[64px] bg-[#e60023] rounded-3xl font-semibold text-white py-3 px-4">
                        초대
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SearchResultList;
