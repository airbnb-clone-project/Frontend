import Input from './Input';

interface LabelInputProps {
    onChangeFC: (text: string) => void;
    placeholder: string;
    value: string;
    title: string;
}
const LabelInput = ({
    onChangeFC,
    placeholder,
    value,
    title,
}: LabelInputProps) => {
    return (
        <div className="flex flex-col">
            <label className="text-xs mb-2">{title}</label>
            <Input
                onChangeFC={onChangeFC}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};

export default LabelInput;
