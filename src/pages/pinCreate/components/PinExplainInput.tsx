interface PinExplainInputProps {
    value: string;
    onChangeFC: (text: string) => void;
}
const PinExplainInput = ({ onChangeFC, value }: PinExplainInputProps) => {
    return (
        <div className="">
            <p className="text-xs mb-2">설명</p>
            <textarea
                value={value}
                onChange={(v) => onChangeFC(v.target.value)}
                className={`hover:border-[#a5a5a5] resize-none min-h-[96px] w-full border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] `} // 포커스 시 파란색 테두리
                placeholder="자세한 설명을 추가하세요."
            ></textarea>
        </div>
    );
};

export default PinExplainInput;
