import Input from '@/components/common/Input';
import InfoIcon from '@/components/icons/InfoIcon';

interface BirthProps {
  birth: string;
  birthOnChange: (text: string) => void;
}

const Birth = ({ birth, birthOnChange }: BirthProps) => {
  return (
    <div>
      <div className="flex items-center mb-1">
        <label className="cursor-pointer text-xs" htmlFor="birth-input">
          생년월일
        </label>
        <div className="group relative flex items-center justify-center w-6 h-6 cursor-pointer rounded-full hover:bg-gray-filled-hover">
          <InfoIcon />
          {/* 생년월일 설정 이유 */}
          <div className="hidden group-hover:block absolute translate-x-2 -translate-y-1/2 top-1/2 left-full rounded-lg w-[180px] h-[160px] p-2 bg-black text-xs text-white">
            생년월일은 관련 추천 및 광고와 같이 보다 맞춤화된 경험을 제공하는 데
            활용되며,
            <br /> Pinterest 커뮤니티의 안전을 유지하는 데 사용되기도 합니다. 이
            정보는 프로필에 표시되지 않습니다. Pinterest가 생년월일을 요청하는
            이유에 대해 자세히 알아보세요.
          </div>
        </div>
      </div>
      <Input
        className="w-full"
        onChangeFC={birthOnChange}
        placeholder=""
        value={birth}
        id="birth-input"
      />
    </div>
  );
};

export default Birth;
