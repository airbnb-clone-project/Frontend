import { LegacyRef } from 'react';

interface PinExplainInputProps {
    /** textarea 태그 ref */
    textarea: LegacyRef<HTMLTextAreaElement> | undefined;
    /** 설명 text state */
    explain: string;
    /** 설명 state onChagne 함수 */
    explainOnChange: (text: string) => void;
}
const PinExplainInput = ({
    explain,
    explainOnChange,
    textarea,
}: PinExplainInputProps) => {
    return (
        <div className="flex flex-col py-5">
            <p className="text-xs mb-2 cursor-pointer">설명</p>
            <textarea
                ref={textarea}
                value={explain}
                onChange={(v) => explainOnChange(v.target.value)}
                placeholder="여기에 핀에 대한 상세 설명을 작성하거나 아래에 특정 목록"
                className="cursor-pointer hover:border-[#a0a0a0] resize-none h-auto min-h-[104px] max-h-[182px] box-border border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 p-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)]"
            />
        </div>
    );
};

export default PinExplainInput;
