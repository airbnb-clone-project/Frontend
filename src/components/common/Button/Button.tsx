import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'icon',
  size = 'md',
  fullWidth = false,
  ariaLabel,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  // 기본 스타일
  const baseStyles =
    'flex items-center justify-center rounded-3xl font-semibold transition-all duration-200 active:scale-95';

  // 크기별 스타일
  const sizeStyles = {
    thin: 'min-w-[24px] min-h-[24px] text-sm',
    sm: 'min-w-[48px] min-h-[48px] px-3 py-2 text-sm',
    md: 'min-w-[60px] min-h-[60px] px-4 py-3 text-base',
  };

  // 변형별 스타일
  const variantStyles = {
    primary: 'bg-red-default hover:bg-red-hover text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    ghost: 'hover:bg-gray-100 text-gray-800',
    // 📌 아이콘 버튼 hover색상 변경필요함
    icon: 'bg-transparent hover:bg-slate-100 text-gray-800 rounded-full',
  };

  // 비활성화 스타일
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={twMerge(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && 'w-full',
        props.disabled && disabledStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
