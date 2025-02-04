import { twMerge } from 'tailwind-merge';

interface AppBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: 'gray' | 'red' | 'ghost';
  type: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}

const AppBtn = ({ type, children, onClick, className, color }: AppBtnProps) => {
  // 기본 스타일
  const baseStyles =
    'transition-all duration-2000 active:scale-90 font-semibold max-w-full max-h-full py-3 px-4 cursor-pointer rounded-3xl min-w-[60px] min-h-[40px]';

  // 색상에 따른 추가 스타일
  const colorStyles = {
    gray: 'bg-gray-filled-default hover:bg-gray-filled-hover active:bg-gray-filled-active',
    red: 'text-white bg-red-default hover:bg-red-hover active:bg-red-active',
    ghost:
      'bg-transparent border-2 border-gray-400 hover:bg-gray-100 active:bg-gray-200',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(baseStyles, colorStyles[color], className)}
    >
      {children}
    </button>
  );
};

export default AppBtn;
