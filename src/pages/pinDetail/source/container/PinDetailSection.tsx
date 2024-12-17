import { useRef } from 'react';

import { handleImageLoad } from '../utils';
import { registerGSAPPlugins } from '../animations';
import { usePinDetailEffect, usePinDetailGSAP } from '../hooks';

import CreatorBox from '../components/CreatorBox';
import PinDetailNav from '../components/PinDetailNav';
import CommentBox from '../components/comment/CommentBox';
import CommentInput from '../components/comment/CommentInput';
import ImageZoomBtn from '../components/buttons/ImageZoomBtn';
import ImageSearchBtn from '../components/buttons/ImageSearchBtn';

const PinDetailSection = () => {
  // Ref 선언
  const navRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP 플러그인 등록
  registerGSAPPlugins();

  // 이미지 데이터를 가져오는 custom hook 호출
  const { imageData } = usePinDetailEffect();

  // 레이아웃 관련 훅 호출 (스크롤 관련 효과 등)
  usePinDetailGSAP(navRef, containerRef);

  return (
    <section className="flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-full h-auto rounded-3xl max-w-[1016px] min-h-[736px] flex shadow-pin_detail"
      >
        {/* 이미지 영역 */}
        <figure
          ref={figureRef}
          className="relative max-w-[508px] w-full rounded-l-3xl"
        >
          {/* 이미지가 로드되었을 때 보여줄 내용 */}
          {imageData ? (
            <img
              src={imageData}
              alt="Pin Detail"
              onLoad={(e) =>
                handleImageLoad(e, inputRef, containerRef, activeRef)
              }
              className="rounded-l-3xl"
            />
          ) : (
            <div>Loading...</div> // 로딩 중에는 'Loading...' 표시
          )}
          {/* 이미지 관련 버튼들 */}
          <div ref={activeRef}>
            {imageData && <ImageZoomBtn imgSrc={imageData} />}
            <ImageSearchBtn />
          </div>
        </figure>

        {/* 오른쪽 정보 영역 */}
        <div className="flex flex-col flex-1">
          {/* PinDetailNav 섹션: 네비게이션 */}
          <PinDetailNav ref={navRef} />
          <div id="wrapper" className="px-8 flex flex-col flex-1">
            {/* Pin의 제목 */}
            <h1
              tabIndex={0}
              className="text-left text-black break-words font-semibold text-[28px] mt-4 font-Pretendard focus:outline-4 focus:outline focus:outline-[#92C1FF]"
            >
              InitialD
            </h1>
            {/* 창작자 정보 */}
            <CreatorBox />
            {/* 댓글 표시 */}
            <CommentBox />
          </div>

          {/* 댓글 입력란 */}
          <CommentInput ref={inputRef} />
        </div>
      </div>
    </section>
  );
};

export default PinDetailSection;
