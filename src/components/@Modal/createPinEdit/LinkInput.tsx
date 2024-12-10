import Input from '@/components/common/Input';

interface LinkInputProps {
    /** 링크 state onChange 함수 */
    linkOnChange: (text: string) => void;
    /** 링크 text state */
    link: string;
}
const LinkInput = ({ link, linkOnChange }: LinkInputProps) => {
    return (
        <div className="flex flex-col py-5">
            <label htmlFor="pinLink" className="cursor-pointer text-xs mb-2">
                링크
            </label>
            <Input
                id="pinLink"
                onChangeFC={linkOnChange}
                value={link}
                placeholder="링크 추가"
            />
        </div>
    );
};

export default LinkInput;
