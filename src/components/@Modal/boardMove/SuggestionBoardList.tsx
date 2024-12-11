import PlusIcon from '@/components/icons/PlusIcon';
import useModalStore from '@/stores/useModalStore';

interface SuggestionBoardListProps {
    list: string[];
}
const SuggestionBoardList = ({ list }: SuggestionBoardListProps) => {
    const { toggleModal } = useModalStore();
    return (
        <div>
            <p className="text-xs mb-1 mt-3 px-2">추천</p>
            {list.map((v, i) => (
                <div
                    className="group flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-[#e9e9e9]"
                    key={i}
                >
                    <div className="flex items-center">
                        <div className="flex items-center justify-center rounded-lg w-12 h-12 mr-2 bg-[#e9e9e9]">
                            <PlusIcon />
                        </div>
                        <span className="font-semibold">{v}</span>
                    </div>

                    {/* 버튼: 부모 요소 hover 시 보이도록 설정 */}
                    <button
                        onClick={() => toggleModal('boardMove')}
                        className="hidden group-hover:inline-block rounded-3xl px-3 py-2 font-semibold text-white bg-[#e60023] hover:bg-[#b60000]"
                    >
                        만들기
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SuggestionBoardList;
