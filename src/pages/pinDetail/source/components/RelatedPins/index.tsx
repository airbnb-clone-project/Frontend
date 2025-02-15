import { ResponsiveMasonry } from 'react-responsive-masonry';
import Masonry from 'react-responsive-masonry';
import { PinOverlay } from '@/pages/main/source/components/Pin';
import { useState } from 'react';

interface Pin {
  pinNo: number;
  imageUrl: string;
}

interface RelatedPinsProps {
  pins?: Pin[];
}

const RelatedPins = ({ pins }: RelatedPinsProps) => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 4;

  if (!pins?.length) return null;

  const displayPins = showAll ? pins : pins.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <div className="sticky top-20">
      <h2 className="text-xl font-bold mb-4">관련 핀</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 850: 1, 1150: 2 }}>
        <Masonry gutter="1rem">
          {displayPins.map((pin, index) => (
            <PinOverlay
              key={pin.pinNo}
              image={pin.imageUrl}
              alt={`관련 핀 ${index + 1}`}
              pinNo={pin.pinNo}
              className="w-full h-full object-cover rounded-xl"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {pins.length > INITIAL_DISPLAY_COUNT && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full mt-4 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-center font-medium"
        >
          {showAll
            ? '접기'
            : `더보기 (${pins.length - INITIAL_DISPLAY_COUNT}개)`}
        </button>
      )}
    </div>
  );
};

export default RelatedPins;
