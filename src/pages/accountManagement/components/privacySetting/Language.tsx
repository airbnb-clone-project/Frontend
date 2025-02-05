import LabelInput from '@/components/common/LabelInput';
import DownArrowIcon from '@/components/icons/DownArrowIcon';

interface LanguageProps {
  language: string;
  isLanguage: boolean;
  isLanguageToggle: () => void;
  languageOnChange: (text: string) => void;
}
const Language = ({
  isLanguage,
  isLanguageToggle,
  language,
  languageOnChange,
}: LanguageProps) => {
  return (
    <div className="relative">
      <LabelInput
        onChangeFC={() => null}
        onClick={isLanguageToggle}
        value={language}
        placeholder=""
        title="언어"
        inputClassName="caret-transparent cursor-pointer"
      />

      <span className="absolute right-4 top-1/2 translate-y-1/2">
        <DownArrowIcon />
      </span>

      {/* 나라 list */}
      {isLanguage && (
        <div className="z-50 shadow-custom-modal absolute bg-white top-full border border-black w-full max-h-[300px] overflow-y-scroll">
          <div
            onClick={() => languageOnChange('1')}
            className="px-5 py-1 hover:bg-blue-600 hover:text-white"
          >
            1
          </div>
          <div
            onClick={() => languageOnChange('2')}
            className="px-5 py-1 hover:bg-blue-600 hover:text-white"
          >
            2
          </div>
          <div
            onClick={() => languageOnChange('3')}
            className="px-5 py-1 hover:bg-blue-600 hover:text-white"
          >
            3
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
