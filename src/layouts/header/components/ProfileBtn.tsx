import Button from '@/components/common/Button/Button';

interface ProfileBtnProps {
  onClick: () => void;
}

const ProfileBtn = ({ onClick }: ProfileBtnProps) => {
  return (
    <Button variant="icon" size="md" onClick={onClick}>
      <div className="w-12 h-12 flex justify-center items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <div className="w-8 h-8 bg-black"></div>
        </div>
      </div>
    </Button>
  );
};

export default ProfileBtn;
