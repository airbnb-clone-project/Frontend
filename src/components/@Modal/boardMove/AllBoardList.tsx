import LockIcon from '@/components/icons/LockIcon';
import useModalStore from '@/stores/useModalStore';

interface AllBoardListProps {
    list: { img: string; name: string; isSecret: boolean }[];
}

const AllBoardList = ({ list }: AllBoardListProps) => {
    const { toggleModal } = useModalStore();
    return (
        <div className="">
            <p className="text-xs mb-1 px-2">모든 보드</p>
            {list.map((v, i) => (
                <div
                    className="group flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-[#e9e9e9]"
                    key={i}
                >
                    <div className="flex items-center">
                        <img
                            src={v.img}
                            className="rounded-lg w-12 h-12 mr-2"
                        />
                        <span className="font-semibold">{v.name}</span>
                    </div>

                    {/* 버튼: 부모 요소 hover 시 보이도록 설정 */}
                    <button
                        onClick={() => toggleModal('boardMove')}
                        className="hidden group-hover:inline-block rounded-3xl w-[60px] h-[40px] font-semibold text-white bg-[#e60023] hover:bg-[#b60000]"
                    >
                        다음
                    </button>

                    {/* 비밀 board는 자물쇠 아이콘 */}
                    {v.isSecret && (
                        <div className="group-hover:hidden">
                            <LockIcon />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AllBoardList;
