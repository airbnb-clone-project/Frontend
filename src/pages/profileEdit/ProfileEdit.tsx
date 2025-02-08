import { useState } from 'react';
import Introduce from './components/Introduce';
import Picture from './components/Picture';
import UserName from './components/UserName';
import WebSite from './components/WebSite';
import Name from './components/Name';
import Footer from './components/Footer';

const ProfileEdit = () => {
  const [firstName, setFirstName] = useState<string>('김');
  const firstNameOnChange = (value: string) => {
    setFirstName(value);
  };

  const [name, setName] = useState<string>('태욱');
  const nameOnChange = (value: string) => {
    setName(value);
  };

  const [introduce, setIntroduce] = useState<string>('');
  const introduceOnChange = (value: string) => {
    setIntroduce(value);
  };

  const [webSite, setWebSite] = useState<string>('');
  const webSiteOnChange = (value: string) => {
    setWebSite(value);
  };

  const [userName, setUserName] = useState<string>('');
  const userNameOnChange = (value: string) => {
    setUserName(value);
  };

  return (
    <section className="max-w-[488px] w-full">
      <div className="pb-10">
        <h1 className="text-[28px] font-semibold">프로필 수정</h1>
        <p>
          개인 정보는 비공개로 유지하세요. 여기에 추가한 정보는 회원님의
          프로필을 볼 수 있는 모든 사람에게 표시됩니다.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <Picture />
        <Name
          firstName={firstName}
          firstNameOnChange={firstNameOnChange}
          name={name}
          nameOnChange={nameOnChange}
        />
        <Introduce
          introduce={introduce}
          introduceOnChange={introduceOnChange}
        />
        <WebSite webSite={webSite} webSiteOnChange={webSiteOnChange} />
        <UserName userName={userName} userNameOnChange={userNameOnChange} />
      </div>

      <Footer />
    </section>
  );
};

export default ProfileEdit;
