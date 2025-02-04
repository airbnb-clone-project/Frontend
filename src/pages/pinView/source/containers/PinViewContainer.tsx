import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import { usePinQueries } from '../hooks/usePinQueries';

import PinViewNav from '../components/nav';
import Comment from '../components/comment';
import PinViewImage from '../components/PinViewImage';
import CommentInput from '../components/comment/CommentInput';
import Button from '@/components/common/Button/Button';

// import { useParams } from 'react-router-dom';

const PinViewContainer = () => {
  // const { id } = useParams();

  const { usePinDetail } = usePinQueries();
  const { data: pinData, isLoading, error } = usePinDetail();
  const [maxWidthCalc, setMaxWidthCalc] = useState('calc(-488px + 100vw)');
  const [contentMaxWidth, setContentMaxWidth] = useState('calc(-244px + 50vw)');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1117) {
        setMaxWidthCalc('calc(-192px + 100vw)');
        setContentMaxWidth('calc(-96px + 50vw)');
      } else {
        setMaxWidthCalc('calc(-488px + 100vw)');
        setContentMaxWidth('calc(-244px + 50vw)');
      }
    };

    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mb-4 flex items-center justify-center w-full">
      <div
        className="flex justify-center mx-auto w-full h-[688px]"
        style={{
          maxWidth: maxWidthCalc,
        }}
      >
        {/* 뒤로가기 버튼 */}
        <div className="px-4 mt-5">
          <Button variant="icon" size="md" aria-label="뒤로가기">
            <FaArrowLeft className="w-5 h-5" />
          </Button>
        </div>
        {/* 메인 컨테이너 */}
        <div className="flex flex-col md:flex-row bg-white rounded-[32px] shadow-lg overflow-hidden w-full">
          {/* 이미지 섹션 */}
          <div className="w-full md:w-1/2">
            <PinViewImage
              image={pinData?.data?.imageUrl}
              pinNo={pinData?.data?.pinNo}
              alt={'핀 이미지'}
              loading={isLoading}
              error={error}
              className="w-full h-full object-cover"
            />
            {/* 이미지 확대/축소 버튼 */}
            <button className="absolute right-4 bottom-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>

          {/* 콘텐츠 섹션 */}
          <div
            className="w-full md:w-1/2 flex flex-col"
            style={{
              maxWidth: contentMaxWidth,
            }}
          >
            {/* 상단 액션 버튼 */}
            <PinViewNav />
            <div className="pl-4 flex-1 overflow-y-auto">
              {/* 프로필 섹션 */}
              <Link to={`/mypage`} className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <h2 className="font-semibold">{'사용자 닉네임'}</h2>
                  <p className="text-sm text-gray-600">팔로워 1.5만</p>
                </div>
              </Link>
              <Comment />
            </div>
            <div className="sticky bottom-0 bg-white">
              <CommentInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinViewContainer;
