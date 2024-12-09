import WarningIcon from '@/components/icons/WarningIcon';
import useBoardEditStore from '@/stores/useBoardEditStore';

const NameInput = () => {
    const { boardEditInfo, setBoardEditInfo } = useBoardEditStore();

    /** 보드 이름 state onChange 함수 */
    const boardNameOnChange = (boradName: string) => {
        setBoardEditInfo({ name: boradName });
    };
    return (
        <div className="flex flex-col ">
            <p className="text-xs mb-2">이름</p>
            <input
                value={boardEditInfo.name}
                onChange={(v) => boardNameOnChange(v.target.value)}
                placeholder="예: '가고 싶은 곳' 또는 '요리법'"
                className={` focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] ${
                    boardEditInfo.name.length === 0
                        ? 'border-[#c00]' // 이름이 비어 있으면 빨간색 테두리
                        : 'border-[#cdcdcd] hover:border-[#a5a5a5]' // 이름이 있으면 회색 테두리
                }`} // 포커스 시 파란색 테두리
            />
            {/* 경고 문구 */}
            {boardEditInfo.name.length === 0 && (
                <div className="flex items-center">
                    <WarningIcon color="c00" />
                    <span className="m-1 text-xs text-[#CC0000]">
                        보드 이름을 지정하세요!
                    </span>
                </div>
            )}
        </div>
    );
};

export default NameInput;
