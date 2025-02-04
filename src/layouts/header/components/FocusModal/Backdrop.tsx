interface BackdropProps {
  onClose: () => void;
}

const Backdrop = ({ onClose }: BackdropProps) => {
  return (
    <div
      className="fixed left-0 w-full h-full bg-black z-[59] opacity-20"
      onClick={onClose}
    />
  );
};

export default Backdrop;
