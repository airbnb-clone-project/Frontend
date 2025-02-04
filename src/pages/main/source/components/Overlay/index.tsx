import useOverlayHook from '@/hooks/useOverlayHook';

import Bottom from './Bottom';
import OverlayHeader from './Header';

interface OverlayProps {
  index: number;
}

const Overlay = ({ index }: OverlayProps) => {
  const { activeId, handleRef, handleClick } = useOverlayHook(index);

  return (
    <div
      // onMouseEnter={() => handelHoverBox(true)}
      className="absolute inset-0 z-10 opacity-0 hover:opacity-100 transition-opacity duration-200"
    >
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      {/* 오버레이 콘텐츠 */}
      <div className="relative z-20 h-full flex flex-col justify-between p-4">
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
    </div>
  );
};

export default Overlay;
