import LabelInput from '@/components/common/LabelInput';
import WarningText from '@/components/common/WarningText';

interface NameProps {
  firstName: string;
  firstNameOnChange: (value: string) => void;
  name: string;
  nameOnChange: (value: string) => void;
}

const Name = ({
  firstName,
  firstNameOnChange,
  name,
  nameOnChange,
}: NameProps) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col w-1/2">
        <LabelInput
          onChangeFC={nameOnChange}
          placeholder=""
          title="이름"
          value={name}
          isEffect={true}
        />

        {!name && <WarningText text="프로필에 이름을 입력하세요" />}
      </div>
      <LabelInput
        onChangeFC={firstNameOnChange}
        placeholder=""
        title="성"
        value={firstName}
        className="w-1/2"
      />
    </div>
  );
};

export default Name;
