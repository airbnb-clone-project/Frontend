import Input from '@/components/common/Input';
import ModalLayout from '../ModalLayout';
import { useState } from 'react';
import Button from '@/components/common/Button';
import XIcon from '@/components/icons/XIcon';
import useModalStore from '@/stores/useModalStore';

interface EmailVerificationModalProps {
  email: string;
}

const EmailVerificationModal = ({ email }: EmailVerificationModalProps) => {
  const [code, setCode] = useState<string>('');
  const codeOnChange = (v: string) => {
    setCode(v);
  };

  const { toggleModal } = useModalStore();

  return (
    <ModalLayout modalName="emailVerification" isBackgroundColor={true}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-10 p-10 cursor-auto w-[95vw] max-w-[660px] max-h-[90vh] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-semibold">이메일 인증</h1>
            <p className="mt-2 text-gray-input-hover">
              {email}에 전송된 6자리 이메일 인증 코드를 입력합니다.
            </p>
          </div>
          <span
            onClick={() => toggleModal('emailVerification')}
            className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-gray-border-default"
          >
            <XIcon />
          </span>
        </div>

        <div className="flex flex-col">
          <Input
            maxLength={6}
            onChangeFC={codeOnChange}
            placeholder=""
            value={code}
          />
          <span className="cursor-pointer underline mt-2 hover:no-underline">
            새 코드 보내기
          </span>
        </div>

        <div className="flex justify-end">
          <Button
            color={code.length >= 6 ? 'red' : 'gray'}
            text="입력"
            className={
              code.length >= 6
                ? ''
                : 'text-gray-input-hover pointer-events-none'
            }
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default EmailVerificationModal;
