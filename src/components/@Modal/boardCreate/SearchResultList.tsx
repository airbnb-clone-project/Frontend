const SearchResultList = () => {
    return (
        <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3 py-2">
                {/* profile img */}
                <div className="bg-[#e9e9e9] w-12 h-12 rounded-full ">
                    <img
                        className="w-full h-full rounded-full"
                        src="https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524__340.jpg"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="mb-1">skaka</p>
                    <p className="text-sm">@ok_ok_qwusd</p>
                </div>
            </div>

            <div>
                <button className="active:scale-95 hover:brightness-95 bg-[#e9e9e9] rounded-3xl py-3 px-4 font-semibold">
                    추가
                </button>
            </div>
        </div>
    );
};

export default SearchResultList;
