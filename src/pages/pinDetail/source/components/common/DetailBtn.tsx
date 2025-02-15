import { twMerge } from 'tailwind-merge';

interface DetailBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const DetailBtn = ({ children, className, ...props }: DetailBtnProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center h-12 w-12 rounded-full bg-white hover:bg-gray-filled-hover active:bg-gray-filled-active',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default DetailBtn;
