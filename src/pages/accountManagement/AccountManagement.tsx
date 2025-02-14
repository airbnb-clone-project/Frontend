import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';
import MyAccount from './components/MyAccount';
import PrivacySetting from './components/PrivacySetting';
import Footer from './components/Footer';
import useModalStore from '@/stores/useModalStore';
import PwChangeModal from '@/components/@Modal/pwChange/PwChangeModal';

const AccountManagement = () => {
  const [email, setEmail] = useState<string>('taewok51615@gmail.com');
  const [pw, setPw] = useState<string>('12345678');
  const [birth, setBirth] = useState<string>('2002.05.16');
  const [sexual, setSexual] = useState<string>('남성');

  const [wishSexual, setWishSexual] = useState<string>('');

  /** 원하는 성별 input onChange 함수 */
  const wishSexualOnChange = (text: string) => {
    setWishSexual(text);
  };

  /** 선택한 성별 값 state 변경 함수 */
  const sexualOnChange = (text: string) => {
    setSexual(text);
  };

  // 선택중인 국가/지역 state
  const [location, setLocation] = useState<string>('대한민국');
  // 국가/지역 선택 활성화 여부
  const [isLocation, setIsLocation] = useState<boolean>(false);

  // 선택중인 언어 state
  const [language, setLanguage] = useState<string>('한국어');
  // 언어 선택 활성화 여부
  const [isLanguage, setIsLanguage] = useState<boolean>(false);

  /** 국가/지역 선택 활성화 toggle 함수 */
  const isLocationToggle = () => {
    setIsLocation(!isLocation);
  };
  /** 국가/지역 변경 함수 */
  const locationOnChange = (text: string) => {
    setLocation(text);
    isLocationToggle();
  };

  /** 언어 선택 활성화 toggle 함수 */
  const isLanguageToggle = () => {
    setIsLanguage(!isLanguage);
  };
  /** 언어 변경 함수 */
  const languageOnChange = (text: string) => {
    setLanguage(text);
    isLanguageToggle();
  };

  const emailOnChange = (emailText: string) => {
    setEmail(emailText);
  };
  const pwOnChange = (pwText: string) => {
    setPw(pwText);
  };
  const birthOnChange = (birthText: string) => {
    const date = new Date(birthText);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    setBirth(`${year}.${month}.${day}`);
  };

  const [isPwHide, setIsPwHide] = useState<boolean>(true);
  const isPwHideToggle = () => {
    setIsPwHide(!isPwHide);
  };

  const { isModalOpen } = useModalStore();

  const [initialValues, setInitialValues] = useState({
    email: '',
    pw: '',
    birth: '',
    sexual: '',
    wishSexual: '',
    location: '',
    language: '',
  });

  // react-query로 초기 값을 추후 대체
  useEffect(() => {
    setInitialValues({
      email: 'taewok51615@gmail.com',
      birth: '2002.05.16',
      language: '한국어',
      location: '대한민국',
      pw: '12345678',
      sexual: '남성',
      wishSexual: '',
    });
  }, []);

  const isChanged =
    email !== initialValues.email ||
    pw !== initialValues.pw ||
    birth !== initialValues.birth ||
    sexual !== initialValues.sexual ||
    wishSexual !== initialValues.wishSexual ||
    location !== initialValues.location ||
    language !== initialValues.language;

  return (
    <section className="max-w-[488px] w-full pb-[180px]">
      <div className="pb-10">
        <h1 className="text-[28px] font-semibold">계정 관리</h1>
        <p>개인 정보 또는 계정 유형을 변경합니다.</p>
      </div>

      {/* 내 계정 정보 변경(email, pw) */}
      <MyAccount
        email={email}
        pw={pw}
        emailOnChange={emailOnChange}
        isPwHide={isPwHide}
        isPwHideToggle={isPwHideToggle}
        pwOnChange={pwOnChange}
      />

      {/* 개인 정보 설정 */}
      <PrivacySetting
        birth={birth}
        birthOnChange={birthOnChange}
        isLanguage={isLanguage}
        isLanguageToggle={isLanguageToggle}
        isLocation={isLocation}
        isLocationToggle={isLocationToggle}
        language={language}
        languageOnChange={languageOnChange}
        location={location}
        locationOnChange={locationOnChange}
        sexualOnChange={sexualOnChange}
        sexual={sexual}
        wishSexual={wishSexual}
        wishSexualOnChange={wishSexualOnChange}
      />

      {/* 비활성화 및 삭제 */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">비활성화 및 삭제</h2>

        {/* 계정 비활성화 */}
        <div className="flex justify-between items-center">
          <div className="mr-6">
            <h3 className="font-semibold mb-1">계정 비활성화</h3>
            <p>프로필, 핀, 보드를 일시적으로 숨깁니다.</p>
          </div>
          <Button color="gray" text="계정 비활성화" />
        </div>

        {/* 데이터 및 계정 삭제 */}
        <div className="flex justify-between items-center">
          <div className="mr-6">
            <h3 className="font-semibold mb-1">데이터 및 계정 삭제</h3>
            <p>데이터 및 계정과 관련된 모든 정보를 영구적으로 삭제합니다.</p>
          </div>
          <Button color="gray" text="계정 삭제" />
        </div>
      </div>

      <Footer isChanged={isChanged} />

      {isModalOpen.pwChange && <PwChangeModal />}
    </section>
  );
};

export default AccountManagement;
