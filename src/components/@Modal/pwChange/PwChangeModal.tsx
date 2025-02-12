import { useState } from 'react';
import ModalLayout from '../ModalLayout';
import CurrentPw from './components/CurrentPw';
import NewPw from './components/NewPw';
import NewPwCheck from './components/NewPwCheck';
import Footer from './components/Footer';

const PwChangeModal = () => {
  // 현재 비밀번호 관련
  const [currentPw, setCurrentPw] = useState<string>('chj07098');
  const currentPwOnChange = (v: string) => {
    setCurrentPw(v);
  };

  // 새로 변경할 비밀번호 관련
  const [newPw, setNewPw] = useState<string>('');
  const newPwOnChange = (v: string) => {
    setNewPw(v);
  };

  // 새로 변경할 비밀번호 재확인 관련
  const [newPwCheck, setNewPwCheck] = useState<string>('');
  const newPwCheckOnChange = (v: string) => {
    setNewPwCheck(v);
  };

  // 비밀번호 변경이 가능한 상태인지 여부
  const isPwChange =
    newPw !== currentPw &&
    newPw.length >= 8 &&
    newPw.length !== 0 &&
    newPwCheck.length !== 0 &&
    newPw === newPwCheck;

  return (
    <ModalLayout
      modalName="pwChange"
      isBackgroundColor={true}
      className="hover:cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="justify-between overflow-hidden max-h-[558px] h-[90vh] z-30 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  cursor-auto rounded-[16px] items-center max-w-[540px] w-[95vw] bg-white flex flex-col"
      >
        <h1 className="p-6 text-[28px] font-semibold text-center">
          비밀번호 변경
        </h1>

        <div className="overflow-y-auto w-full flex flex-col gap-8 pb-8 px-[52px]">
          {/* 현재 비밀번호 입력 input */}
          <CurrentPw
            currentPw={currentPw}
            currentPwOnChange={currentPwOnChange}
          />

          {/* 새로운 비밀번호 입력 input */}
          <NewPw
            currentPw={currentPw}
            newPwOnChange={newPwOnChange}
            newPw={newPw}
          />

          {/* 새로운 비밀번호 재입력 확인 input */}
          <NewPwCheck
            newPw={newPw}
            newPwCheck={newPwCheck}
            newPwCheckOnChange={newPwCheckOnChange}
          />
        </div>

        <Footer isPwChange={isPwChange} />
      </div>
    </ModalLayout>
  );
};

export default PwChangeModal;
