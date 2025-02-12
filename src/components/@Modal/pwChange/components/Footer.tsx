import Button from '@/components/common/Button';
import useModalStore from '@/stores/useModalStore';

interface FooterProps {
  isPwChange: boolean;
}
const Footer = ({ isPwChange }: FooterProps) => {
  const { toggleModal } = useModalStore();
  return (
    <footer className="flex justify-end gap-2 p-6 w-full">
      <Button
        color="gray"
        text="취소"
        onClick={() => toggleModal('pwChange')}
      />
      <Button
        onClick={isPwChange ? () => console.log() : () => console.log()}
        color="gray"
        text="비밀번호 변경"
        className={isPwChange ? '' : 'text-gray-input-hover'}
      />
    </footer>
  );
};

export default Footer;
