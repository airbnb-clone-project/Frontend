import Button from '@/components/common/Button';
import LabelInput from '@/components/common/LabelInput';
import WarningText from '@/components/common/WarningText';
import PwHideIcon from '@/components/icons/PwHideIcon';
import PwShowIcon from '@/components/icons/PwShowIcon';

interface MyAccountProps {
  email: string;
  emailOnChange: (text: string) => void;
  pw: string;
  pwOnChange: (text: string) => void;
  isPwHide: boolean;
  isPwHideToggle: () => void;
}

const MyAccount = ({
  email,
  emailOnChange,
  isPwHide,
  isPwHideToggle,
  pw,
  pwOnChange,
}: MyAccountProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold pb-2">내 계정</h2>
      {/* 이메일 비공개 여부 */}
      <div className="pb-6">
        <LabelInput
          onChangeFC={emailOnChange}
          title="이메일 비공개"
          value={email}
          placeholder=""
          isEffect={true}
        />
        {email.length === 0 && (
          <WarningText text="필수 항목, 유효한 이메일이 아닙니다." />
        )}
      </div>

      {/* 비밀번호 재설정 */}
      <div className="flex items-end gap-3">
        <div className="w-full relative">
          <LabelInput
            onChangeFC={pwOnChange}
            title="비밀번호"
            value={pw}
            placeholder=""
            type={isPwHide ? '' : 'password'}
            inputClassName={pw && 'bg-[rgb(232,240,254)]'}
          />

          <div
            onClick={isPwHideToggle}
            className="group flex justify-center items-center w-5 h-5 group rounded-full hover:bg-gray-300 cursor-pointer absolute right-3 top-1/2 translate-y-[1px]"
          >
            {isPwHide ? <PwHideIcon /> : <PwShowIcon />}
            <div className="p-2 text-nowrap rounded-md text-xs bg-black text-white top-full translate-y-2 hidden group-hover:block absolute">
              {isPwHide ? '비밀번호 숨기기' : '비밀번호 보기'}
            </div>
          </div>
        </div>

        <Button color="gray" text="변경" className="h-full min-w-[68px]" />
      </div>

      {/* Business 계정으로 전환하기 */}
      <div className="flex gap-3 items-center mb-8">
        <div className="flex flex-col">
          <h3 className="text-base font-semibold pb-2 pt-1">
            Business 계정으로 전환하기
          </h3>
          <p>
            Business 계정을 사용하면 광고 및 분석 등의 도구에 액세스하여
            Pinterest에서 비즈니스를 성장시킬 수 있습니다.
          </p>
        </div>

        <Button
          color="gray"
          text="계정 전환"
          className="h-[48px] text-nowrap"
        />
      </div>
    </div>
  );
};

export default MyAccount;
