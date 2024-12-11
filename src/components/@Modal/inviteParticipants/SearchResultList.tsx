import Button from '@/components/common/Button';

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
                    <Button text="초대" color="red" className="min-w-[64px]" />
                </div>
            ))}
        </div>
    );
};

export default SearchResultList;
