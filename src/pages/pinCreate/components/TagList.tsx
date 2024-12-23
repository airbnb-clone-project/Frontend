import XIcon from '@/components/icons/XIcon';

interface TagListProps {
    list: { color: string; value: string }[];
    /** 선택된 주제 삭제 함수 */
    selectTagDelet: (tagText: string) => void;
}
const TagList = ({ list, selectTagDelet }: TagListProps) => {
    return (
        <div className="flex flex-wrap">
            {list.map((v, i) => (
                <div
                    key={i}
                    className={`mr-2 my-1 items-center py-3 px-5 flex gap-2 bg-[${v.color}] rounded-[999px]`}
                >
                    <span className="text-white font-semibold">{v.value}</span>
                    <div
                        className="active:scale-90 cursor-pointer"
                        onClick={() => selectTagDelet(v.value)}
                    >
                        <XIcon color="white" size={12} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TagList;
