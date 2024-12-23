import { createPortal } from 'react-dom';

import { MESSAGE } from '@/constants/messages';
import SignupForm from './SignupForm';

import { BsPinterest } from 'react-icons/bs';

const SignupModal = () => {
  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      aria-label="modal"
      role="dialog"
    >
      {/* 모달  */}
      <div className="w-[484px] bg-white px-2.5 py-5 rounded-[32px]">
        <div className="flex flex-col items-center">
          <span className="w-11 h-11 flex justify-center items-center my-1.5">
            <BsPinterest className="text-[38px] text-red-default" />
          </span>
          <h1 className="mx-auto w-[400px] text-[32px] font-semibold text-black break-keep text-center">
            {MESSAGE.TITLE}
          </h1>
          <small className="font-normal text-base text-black mb-4">
            {MESSAGE.SUBTITLE}
          </small>
        </div>
        <SignupForm />
      </div>
    </div>,
    document.body
  );
};

export default SignupModal;
