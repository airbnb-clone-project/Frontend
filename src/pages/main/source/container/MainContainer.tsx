import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { BREAKPOINTS } from '../constants/layout';

import { PinOverlay } from '../components/Pin';

interface MainContainerProps {
  pinData: PinListResponse | undefined;
}

const MainContainer = ({ pinData }: MainContainerProps): JSX.Element | null => {
  if (!pinData?.data) return null;

  return (
    <main className="px-3">
      <ResponsiveMasonry columnsCountBreakPoints={BREAKPOINTS}>
        <Masonry gutter="1rem">
          {pinData.data.map((pin, index) => (
            <PinOverlay
              key={pin.pinNo}
              image={pin.imageUrl}
              alt={`핀 이미지 ${index + 1}`}
              pinNo={pin.pinNo}
              className="w-full h-auto object-cover rounded-xl"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
};

export default MainContainer;
