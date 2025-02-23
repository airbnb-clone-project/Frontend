import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'thin' | 'lg';
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
    thin: 'min-w-6 min-h-6 text-sm w-6 h-6',
    sm: 'min-w-8 min-h-8 px-2 py-1 text-sm w-8 h-8',
    md: 'min-w-12 min-h-12 px-3 py-2 text-sm w-12 h-12',
    lg: 'min-w-16 min-h-16 px-4 py-3 text-base w-16 h-16',
  };

  // 변형별 스타일
  const variantStyles = {
    primary:
      'bg-red-default hover:bg-red-hover text-white rounded-3xl max-h-12',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    ghost: 'text-gray-800',
    // 📌 아이콘 버튼 hover색상 변경필요함
    icon: 'bg-transparent hover:bg-slate-100 text-gray-800 rounded-lg',
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
