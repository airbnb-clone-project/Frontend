import WarningIcon from '../icons/WarningIcon';

interface WarningTextProps {
  text: string;
}
const WarningText = ({ text }: WarningTextProps) => {
  return (
    <div className="flex items-center">
      <WarningIcon color="c00" />
      <span className="m-1 text-xs text-[#CC0000]">{text}</span>
    </div>
  );
};

export default WarningText;
