interface PrivateNoteProps {
    /** 현재 작성한 프라이빗 노트 내용 */
    privateNote: string;
    /** 현재 작성한 프라이빗 노트 내용 state onChange*/
    privateNoteOnChange: (text: string) => void;
}

const PrivateNote = ({
    privateNote,
    privateNoteOnChange,
}: PrivateNoteProps) => {
    return (
        <div className="py-3 px-4 md:flex md:justify-between">
            <p className="text-sm pt-2 pb-4">프라이빗 노트</p>

            <div className="md:w-[63.11%]">
                <textarea
                    value={privateNote}
                    onChange={(v) => privateNoteOnChange(v.target.value)}
                    placeholder="프라이빗 노트를 작성하면 이 핀에 대한 아이디어를 기억하기 쉬워요."
                    className="w-full cursor-pointer hover:border-[#a0a0a0] resize-none h-[92px] box-border border-[#cdcdcd] focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 py-2 px-4 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)]"
                />
                {/* 현재 작성한 글자 수 500자 내외 */}
                <p className="-mt-1 text-end text-xs text-[#767676]">
                    {privateNote.length}/500
                </p>
            </div>
        </div>
    );
};

export default PrivateNote;
