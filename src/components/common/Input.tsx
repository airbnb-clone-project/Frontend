import { twMerge } from 'tailwind-merge';

interface InputProps {
    value: string;
    placeholder: string;
    onChangeFC: (text: string) => void;
    className?: string;
    id?: string;
}

const Input = ({
    value,
    placeholder,
    onChangeFC,
    className,
    id,
}: InputProps) => {
    return (
        <input
            id={id}
            value={value}
            onChange={(v) => onChangeFC(v.target.value)}
            placeholder={placeholder && placeholder}
            className={twMerge(
                `hover:border-gray-input-hover focus:border-gray-input-default border-gray-input-default focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)]`,
                className
            )}
        />
    );
};

export default Input;
