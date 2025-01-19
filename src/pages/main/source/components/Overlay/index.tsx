import useOverlayHook from '@/hooks/useOverlayHook';
import OverlayHeader from './OverlayHeader';
import Bottom from './Bottom';

const Overlay = ({
  handelHoverBox,
  index,
}: {
  handelHoverBox: (bol: boolean) => void;
  index: number;
}) => {
  const { activeId, handleRef, handleClick } = useOverlayHook(index);
  return (
    <div onMouseEnter={() => handelHoverBox(true)} className="z-10">
      <OverlayHeader
        activeId={activeId}
        handleRef={handleRef}
        handleClick={handleClick}
      />
      <Bottom
        activeId={activeId}
        handleRef={handleRef}
        handleClick={handleClick}
      />
    </div>
  );
};
export default Overlay;
