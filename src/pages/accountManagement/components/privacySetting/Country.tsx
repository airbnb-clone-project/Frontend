import LabelInput from '@/components/common/LabelInput';
import DownArrowIcon from '@/components/icons/DownArrowIcon';

interface CountryProps {
  location: string;
  isLocation: boolean;
  isLocationToggle: () => void;
  locationOnChange: (text: string) => void;
}

const Country = ({
  isLocation,
  isLocationToggle,
  location,
  locationOnChange,
}: CountryProps) => {
  return (
    <div className="relative">
      <LabelInput
        onChangeFC={() => null}
        onClick={isLocationToggle}
        value={location}
        placeholder=""
        title="국가/지역"
        className=""
        inputClassName="caret-transparent cursor-pointer"
      />

      <span className="absolute right-4 top-1/2 translate-y-1/2">
        <DownArrowIcon />
      </span>

      {/* 나라 list */}
      {isLocation && (
        <div className="z-50 shadow-custom-modal absolute bg-white top-full border border-black w-full max-h-[300px] overflow-y-scroll">
          <div
            onClick={() => locationOnChange('대한민국')}
            className="px-5 py-1 hover:bg-blue-600 hover:text-white"
          >
            대한민국
          </div>
          <div
            onClick={() => locationOnChange('대한민국')}
            className="px-5 py-1 hover:bg-blue-600 hover:text-white"
          >
            대한민국
          </div>
          <div
            onClick={() => locationOnChange('대한민국')}
            className="px-5 py-1 hover:bg-blue-600 hover:text-white"
          >
            대한민국
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
