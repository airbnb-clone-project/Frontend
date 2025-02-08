import LabelInput from '@/components/common/LabelInput';
import WarningText from '@/components/common/WarningText';

interface UserNameProps {
  userName: string;
  userNameOnChange: (value: string) => void;
}

const UserName = ({ userName, userNameOnChange }: UserNameProps) => {
  return (
    <div className="flex flex-col">
      <LabelInput
        title="사용자 이름"
        onChangeFC={userNameOnChange}
        value={userName}
        placeholder="https://"
        isEffect={true}
      />
      {userName ? (
        <p className="mt-1 text-xs text-gray-input-hover">
          회원님의 사이트로 트래픽을 유도하는 링크를 추가하세요
        </p>
      ) : (
        <WarningText text="프로필에 사용자 이름을 입력하세요. 다른 사람들이 회원님을 찾을 수 있도록 잘 선택하세요." />
      )}
    </div>
  );
};

export default UserName;
