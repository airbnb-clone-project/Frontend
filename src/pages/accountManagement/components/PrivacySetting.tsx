import Birth from './privacySetting/Birth';
import Sexual from './privacySetting/Sexual';
import Country from './privacySetting/Country';
import Language from './privacySetting/Language';

interface PrivacySettingProps {
  birth: string;
  birthOnChange: (text: string) => void;
  location: string;
  locationOnChange: (text: string) => void;
  isLocation: boolean;
  isLocationToggle: () => void;
  language: string;
  languageOnChange: (text: string) => void;
  isLanguage: boolean;
  isLanguageToggle: () => void;
  sexual: string;
  sexualOnChange: (text: string) => void;
  wishSexual: string;
  wishSexualOnChange: (text: string) => void;
}

const PrivacySetting = ({
  birth,
  birthOnChange,
  isLanguage,
  isLanguageToggle,
  isLocation,
  isLocationToggle,
  language,
  languageOnChange,
  location,
  locationOnChange,
  sexualOnChange,
  sexual,
  wishSexual,
  wishSexualOnChange,
}: PrivacySettingProps) => {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <h2 className="text-xl font-semibold">개인 정보</h2>

      {/* 생년월일  */}
      <Birth birth={birth} birthOnChange={birthOnChange} />

      {/* 성별 */}
      <Sexual
        wishSexual={wishSexual}
        wishSexualOnChange={wishSexualOnChange}
        sexual={sexual}
        sexualOnChange={sexualOnChange}
      />

      {/* 국가지역 */}
      <Country
        isLocation={isLocation}
        isLocationToggle={isLocationToggle}
        location={location}
        locationOnChange={locationOnChange}
      />

      {/* 언어 */}
      <Language
        isLanguage={isLanguage}
        isLanguageToggle={isLanguageToggle}
        language={language}
        languageOnChange={languageOnChange}
      />
    </div>
  );
};

export default PrivacySetting;
