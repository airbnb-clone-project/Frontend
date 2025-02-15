import Input from '@/components/common/Input';
import WarningText from '@/components/common/WarningText';
import PwHideIcon from '@/components/icons/PwHideIcon';
import PwShowIcon from '@/components/icons/PwShowIcon';
import { useIsPwHide } from '@/hooks/auth/useIsPwHide';

interface CurrentPwProps {
  currentPw: string;
  currentPwOnChange: (v: string) => void;
}
const CurrentPw = ({ currentPw, currentPwOnChange }: CurrentPwProps) => {
  const { isPwHide, isPwHideToggle } = useIsPwHide();

  return (
    <div className="relative flex flex-col w-full">
      <label htmlFor="current-pw" className="text-xs mb-2 cursor-pointer">
        이전 비밀번호 ·{' '}
        <span className="font-semibold">비밀번호가 기억나지 않으시나요?</span>
      </label>

      <div className="w-full flex flex-col">
        <div className="relative flex flex-col w-full">
          <Input
            id="current-pw"
            onChangeFC={currentPwOnChange}
            placeholder={''}
            value={currentPw}
            isEffect={true}
            readOnly={true}
            type={isPwHide ? '' : 'password'}
            // className={currentPw && 'bg-[rgb(232,240,254)]'}
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

        {currentPw.length === 0 && <WarningText text="필수 항목" />}
      </div>
    </div>
  );
};

export default CurrentPw;
