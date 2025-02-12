import Input from '@/components/common/Input';
import WarningText from '@/components/common/WarningText';
import PwHideIcon from '@/components/icons/PwHideIcon';
import PwShowIcon from '@/components/icons/PwShowIcon';
import { useIsPwHide } from '@/hooks/auth/useIsPwHide';

interface NewPwCheckProps {
  newPw: string;
  newPwCheck: string;
  newPwCheckOnChange: (v: string) => void;
}

const NewPwCheck = ({
  newPw,
  newPwCheck,
  newPwCheckOnChange,
}: NewPwCheckProps) => {
  const { isPwHide, isPwHideToggle } = useIsPwHide();

  return (
    <div className="relative flex flex-col w-full">
      <label htmlFor="current-pw" className="text-xs mb-2 cursor-pointer">
        새 비밀번호 재입력
      </label>

      <div className="relative flex flex-col w-full">
        <div className="relative flex flex-col w-full">
          <Input
            title="새 비밀번호 재입력"
            id="newPwCheck"
            onChangeFC={newPwCheckOnChange}
            placeholder={''}
            value={newPwCheck}
            type={newPwCheck ? '' : 'password'}
            className={
              newPwCheck.length !== 0 && newPw !== newPwCheck
                ? 'border-[#c00]'
                : ''
            }
          />

          <div
            onClick={isPwHideToggle}
            className="group flex justify-center items-center w-5 h-5 group rounded-full hover:bg-gray-300 cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
          >
            {isPwHide ? <PwHideIcon /> : <PwShowIcon />}
            <div className="p-2 text-nowrap rounded-md text-xs bg-black text-white top-full translate-y-2 hidden group-hover:block absolute">
              {isPwHide ? '비밀번호 숨기기' : '비밀번호 보기'}
            </div>
          </div>
        </div>
        {newPwCheck.length !== 0 && newPw !== newPwCheck && (
          <WarningText text="비밀번호가 일치하지 않습니다" />
        )}
      </div>
    </div>
  );
};

export default NewPwCheck;
