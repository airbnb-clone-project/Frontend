import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa6';
import { RiShareForward2Fill } from 'react-icons/ri';
import { IoEllipsisHorizontal } from 'react-icons/io5';

interface PinOverlayProps {
  image: string;
  alt?: string;
  pinNo: number;
  className?: string;
}

const PinOverlay = ({ image, alt = '', pinNo, className }: PinOverlayProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative group">
      {/* 이미지 */}
      <img
        src={image}
        alt={alt}
        className={`w-full h-auto object-cover rounded-xl transition-opacity duration-300 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsImageLoaded(true)}
      />

      {/* 오버레이 컨테이너 */}
      <div className="absolute inset-0 rounded-xl">
        {/* 클릭 가능한 배경 영역 */}
        <Link
          to={`/pin/${pinNo}`}
          className="absolute inset-0 rounded-xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:cursor-pointer"
        />

        {/* 상단 버튼*/}
        <div className="absolute w-full top-4 px-2 gap-1 flex items-center transition-opacity duration-200 z-10 justify-between">
          <div className="flex-1">
            <button className="min-w-[60px] h-12 px-4 py-2 gpa-1 flex items-center bg-none hover:bg-[#111]/20 active:bg-[#111] justify-center rounded-full text-white transition-colors">
              <span className="text-sm line-clamp-1 mx-1 opacity-0 group-hover:opacity-100">
                내 핀을 저장하기
              </span>
              <FaChevronDown
                size={14}
                className="mx-1 opacity-0 group-hover:opacity-100"
              />
            </button>
          </div>
          <button
            className="px-4 py-2 h-12 opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            onClick={() => console.log('Save pin:', pinNo)}
          >
            저장
          </button>
        </div>

        {/* 하단 버튼*/}
        <div className="absolute bottom-4 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            className="w-8 h-8 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors"
            onClick={() => console.log('Share pin:', pinNo)}
          >
            <RiShareForward2Fill size={16} className="text-gray-700" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors"
            onClick={() => console.log('More options:', pinNo)}
          >
            <IoEllipsisHorizontal size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* 로딩 스켈레톤 */}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
      )}
    </div>
  );
};

export default PinOverlay;
