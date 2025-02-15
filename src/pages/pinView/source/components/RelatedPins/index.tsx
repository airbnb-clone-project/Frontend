import { getPins } from '@/pages/main/source/__mock__/getPins';
import { PinOverlay } from '@/pages/main/source/components/Pin';
import { BREAKPOINTS } from '@/pages/main/source/constants/layout';
import { useQuery } from '@tanstack/react-query';
import Masonry from 'react-responsive-masonry';
import { ResponsiveMasonry } from 'react-responsive-masonry';

const RelatedPins = () => {
  const { data: pinList } = useQuery({
    queryKey: ['pinList'],
    queryFn: () => getPins(),
  });

  return (
    <section className="px-3 mt-10">
      <ResponsiveMasonry columnsCountBreakPoints={BREAKPOINTS}>
        <Masonry gutter="1rem">
          {pinList?.data.map((pin, index) => (
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
    </section>
  );
};

export default RelatedPins;
