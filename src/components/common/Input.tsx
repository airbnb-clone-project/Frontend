import { twMerge } from 'tailwind-merge';

interface InputProps {
  value: string;
  placeholder: string;
  onChangeFC: (text: string) => void;
  className?: string;
  id?: string;
  isEffect?: boolean;
}

const Input = ({
  value,
  placeholder,
  onChangeFC,
  className,
  id,
  isEffect,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      id={id}
      value={value}
      onChange={(v) => onChangeFC(v.target.value)}
      placeholder={placeholder && placeholder}
      className={twMerge(
        `focus:outline-none focus:ring-4 focus:ring-[rgba(68, 132, 192, 0.5)] border-2 px-4 py-3 rounded-2xl focus:outline-[rgba(0, 132, 255, .5)] ${
          isEffect && value.length === 0
            ? 'border-[#c00]' // 이름이 비어 있으면 빨간색 테두리
            : 'border-[#cdcdcd] hover:border-[#a5a5a5]' // 이름이 있으면 회색 테두리
        }`,
        className
      )} // 포커스 시 파란색 테두리
    />
  );
};

export default Input;
