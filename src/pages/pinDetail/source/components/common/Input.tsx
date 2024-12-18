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
            className={twMerge(
                'focus:outline-none flex-1 focus:placeholder:text-opacity-70',
                className
            )}
            {...props}
        />
    );
};

export default Input;
