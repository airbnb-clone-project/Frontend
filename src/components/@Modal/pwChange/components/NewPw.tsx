import Input from '@/components/common/Input';
import WarningText from '@/components/common/WarningText';
import PwHideIcon from '@/components/icons/PwHideIcon';
import PwShowIcon from '@/components/icons/PwShowIcon';
import { useIsPwHide } from '@/hooks/auth/useIsPwHide';

interface NewPwProps {
  currentPw: string;
  newPw: string;
  newPwOnChange: (v: string) => void;
}
const NewPw = ({ currentPw, newPwOnChange, newPw }: NewPwProps) => {
  const { isPwHide, isPwHideToggle } = useIsPwHide();

  return (
    <div className="relative flex flex-col w-full">
      <label htmlFor="new-pw" className="text-xs mb-2 cursor-pointer">
        새 비밀번호
      </label>

      <div className="w-full flex flex-col">
        <div className="relative flex flex-col w-full">
          <Input
            id="new-pw"
            onChangeFC={newPwOnChange}
            placeholder={''}
            value={newPw}
            type={isPwHide ? '' : 'password'}
            className={
              newPw.length < 8 && newPw.length !== 0 ? 'border-[#c00]' : ''
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
        {newPw.length < 8 && newPw.length !== 0 && (
          <WarningText text="비밀번호가 너무 짧네요! 8자 이상 입력하세요." />
        )}
        {newPw === currentPw && (
          <WarningText text="죄송합니다. 이전 비밀번호를 사용할 수 없습니다." />
        )}
      </div>
    </div>
  );
};

export default NewPw;
