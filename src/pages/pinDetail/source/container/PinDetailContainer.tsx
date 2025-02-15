import DetailBtn from '../components/common/DetailBtn';
import { FaArrowLeft } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKey';
import { getPins } from '@/pages/main/source/__mock__/getPins';
import RelatedPins from '../components/RelatedPins';
import { useRef } from 'react';
import { useNavAnimation } from '../animations/useNavAnimation';
import { useContentHeight } from '../hooks/useContentHeight';
import MainContent from '../components/MainContent';

const PinDetailContainer = () => {
  const { data: pinData } = useQuery({
    queryKey: [QUERY_KEYS.PIN_DETAIL],
    queryFn: () => getPins(),
  });

  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // 네비게이션 애니메이션 적용
  useNavAnimation({ navRef, containerRef });

  // 메인 컨텐츠 높이 측정
  const contentHeight = useContentHeight({ contentRef: mainContentRef });

  return (
    <div className="max-w-[1920px] mx-auto px-3 pr-20">
      <div className="flex gap-3 py-6">
        {/* 뒤로가기 버튼 */}
        <DetailBtn className="h-14 w-14 flex-shrink-0">
          <FaArrowLeft size={24} />
        </DetailBtn>

        {/* 메인 컨텐츠 */}
        <MainContent
          containerRef={containerRef}
          navRef={navRef}
          mainRef={mainContentRef}
        />

        {/* 사이드 컨텐츠 - 관련 핀 */}
        <div
          className="hidden lg:block lg:flex-1"
          style={{
            maxHeight: contentHeight ? `${contentHeight}px` : 'auto',
            overflow: 'hidden',
          }}
        >
          <RelatedPins pins={pinData?.data} />
        </div>
      </div>
    </div>
  );
};

export default PinDetailContainer;
