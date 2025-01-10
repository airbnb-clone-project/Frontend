import Input from '@/components/common/Input';

interface PinTitleInputProps {
    /** 제목 state onChange 함수 */
    titleOnChange: (text: string) => void;
    /** 제목 state */
    title: string;
}

const PinTitleInput = ({ title, titleOnChange }: PinTitleInputProps) => {
    return (
        <div className="flex flex-col py-5">
            <label htmlFor="pinTitle" className="cursor-pointer text-xs mb-2">
                제목
            </label>
            <Input
                id="pinTitle"
                onChangeFC={titleOnChange}
                value={title}
                placeholder="예: '가고 싶은 곳' 또는 '요리법'"
                className="h-[49px]"
            />
        </div>
    );
};

export default PinTitleInput;
