import { Suspense } from 'react';
import PinDetailContainer from './source/container/PinDetailContainer';
import Spinner from '@/components/common/Spinner';
import { useQuery } from '@tanstack/react-query';
import { getPins } from '../main/source/__mock__/getPins';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import Masonry from 'react-responsive-masonry';
import { PinOverlay } from '../main/source/components/Pin';
import { QUERY_KEYS } from '@/constants/queryKey';

const PinDetailPage = () => {
  const { data: pinData } = useQuery<PinListResponse>({
    queryKey: [QUERY_KEYS.PINS],
    queryFn: () => getPins(),
  });

  return (
    <Suspense fallback={<Spinner />}>
      <PinDetailContainer />
      <div className="pl-[74px] pr-20">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            640: 2, // sm
            768: 3, // md
            1024: 5, // lg
          }}
        >
          <Masonry gutter="1rem">
            {pinData?.data.map((pin, index) => (
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
      </div>
    </Suspense>
  );
};

export default PinDetailPage;
