import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'search';
    placeholder?: string;
    className?: string;
}

const Input = ({
    type = 'text',
    placeholder,
    className,
    ...props
}: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={twMerge('', className)}
            {...props}
        />
    );
};

export default Input;
