import { twMerge } from 'tailwind-merge';

import { FcGoogle } from 'react-icons/fc';

interface GoogleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  className?: string;
  onClick: () => void;
}

const GoogleButton = ({
  isLoading,
  className,
  onClick,
  ...props
}: GoogleButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'flex items-center justify-center gap-2 w-full px-4 py-3 border-2 rounded-3xl text-gray-700 bg-white hover:bg-gray-100 active:bg-gray-200 transition-all duration-200',
        className
      )}
      aria-label="구글 계정으로 로그인"
      disabled={isLoading}
      {...props}
    >
      <FcGoogle size={20} />
      {isLoading ? '로그인 중...' : '구글 계정으로 로그인'}
    </button>
  );
};

export default GoogleButton;
