import PinDetailNav from '../../components/PinDetailNav';
import CommentSection from '../../components/Comment';

interface MainContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
  navRef: React.RefObject<HTMLDivElement>;
  mainRef: React.RefObject<HTMLDivElement>;
}

const MainContent = ({ containerRef, navRef, mainRef }: MainContentProps) => {
  return (
    <div ref={mainRef} className="flex-1 sm:w-[50%] lg:w-[50%] lg:flex-none">
      <div className="px-2 md:px-4 border border-[#e9e9e9] rounded-2xl">
        <div ref={containerRef}>
          <div
            ref={navRef}
            className="sticky top-0 bg-white z-10 will-change-transform"
          >
            <PinDetailNav />
          </div>
          <div className="w-full overflow-hidden rounded-2xl">
            <figure className="w-full aspect-[4/5] px-5">
              <img
                src="https://i.pinimg.com/736x/f5/87/30/f5873062ca6057aa3462485e2e9ac3a4.jpg"
                alt="핀 이미지"
                className="w-full h-full object-cover rounded-2xl"
              />
            </figure>
          </div>
        </div>
        {/* 핀 작성자 정보 */}
        <div className="flex items-center gap-2 py-2 mt-4">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/75x75_RS/5d/e0/c9/5de0c9c05079891c5048a36abb65a574.jpg"
              alt=""
            />
          </div>
          <span>닉네임공간</span>
        </div>

        {/* 데이터 구분선 */}
        <div className="border-b border-gray-300 my-2"></div>

        {/* 댓글 영역 */}
        <CommentSection />
      </div>
    </div>
  );
};

export default MainContent;
