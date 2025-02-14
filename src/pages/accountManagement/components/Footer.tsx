import Button from '@/components/common/Button';

interface FooterProps {
  isChanged: boolean;
}
const Footer = ({ isChanged }: FooterProps) => {
  return (
    <footer className="shadow-[0_0_8px_0_rgba(0,0,0,0.1)] fixed bg-white left-0 w-full bottom-0 border-t-2 py-4 px-5 pr-[89px] flex justify-end gap-2">
      <Button
        color="gray"
        text="재설정"
        className={`${isChanged ? '' : 'text-gray-input-hover'}`}
      />
      <Button
        color={isChanged ? 'red' : 'gray'}
        text="저장"
        className={`${isChanged ? '' : 'text-gray-input-hover'}`}
      />
    </footer>
  );
};

export default Footer;
