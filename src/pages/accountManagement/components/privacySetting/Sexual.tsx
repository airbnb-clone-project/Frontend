import Input from '@/components/common/Input';
import DiamondWarning from '@/components/icons/DiamondWarning';

interface SexualProps {
  sexual: string;
  sexualOnChange: (text: string) => void;
  wishSexual: string;
  wishSexualOnChange: (text: string) => void;
}

const Sexual = ({
  sexualOnChange,
  sexual,
  wishSexual,
  wishSexualOnChange,
}: SexualProps) => {
  const sexualList = ['남성', '여성', '둘 다 아님'];
  return (
    <div>
      <h3 className="cursor-pointer text-xs mb-2">성별</h3>
      <div className="flex gap-6">
        {sexualList.map((v) => (
          <div key={v} className="flex">
            <input
              checked={sexual === v}
              type="radio"
              name="sexual"
              className="px-1 w-6 h-6 cursor-pointer"
              id={v}
              onChange={() => sexualOnChange(v)}
            />
            <label htmlFor={v} className="px-1 mx-1 cursor-pointer">
              {v}
            </label>
          </div>
        ))}
      </div>
      {/* 원하는 성별 입력 input */}
      {sexual === '둘 다 아님' && (
        <div className="flex flex-col">
          <Input
            placeholder="원하는 성별을 입력하세요."
            onChangeFC={wishSexualOnChange}
            value={wishSexual}
            className="w-full mt-2"
            maxLength={500}
          />

          <div
            className={`${
              wishSexual.length >= 500
                ? 'text-[#bd5b00]'
                : 'text-gray-input-hover'
            } pt-1 text-xs flex justify-end items-center gap-1`}
          >
            {wishSexual.length >= 500 && <DiamondWarning />}
            {wishSexual.length}/500
          </div>
        </div>
      )}
    </div>
  );
};

export default Sexual;
