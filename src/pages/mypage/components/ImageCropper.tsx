import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

const ImageCropper: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0); // 이미지의 Y축 오프셋
    const [imageHeight, setImageHeight] = useState(0); // 동적으로 계산된 이미지 높이
    const containerHeight = 236; // 컨테이너 높이

    const imgRef = useRef<HTMLImageElement>(null); // img 태그 참조
    const isDragging = useRef(false); // 드래그 상태 관리
    const startY = useRef(0); // 드래그 시작 Y 위치

    // 이미지가 로드된 후 높이를 계산
    useEffect(() => {
        if (imgRef.current) {
            setImageHeight(imgRef.current.offsetHeight);
        }
    }, [imgRef.current]);

    // 드래그 시작
    const handleMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
        isDragging.current = true; // 드래그 상태 활성화
        startY.current = event.clientY; // 드래그 시작 Y 위치 저장
    };

    // 드래그 중
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current) return; // 드래그 상태가 아니라면 무시

        const diffY = event.clientY - startY.current; // 드래그 거리 계산
        setOffsetY((prevOffset) => {
            const newOffset = prevOffset + diffY;

            // 경계 내로 제한
            const upperBound = 0; // 이미지 상단 제한
            const lowerBound = containerHeight - imageHeight; // 이미지 하단 제한

            return Math.min(upperBound, Math.max(lowerBound, newOffset));
        });

        startY.current = event.clientY; // 시작 위치 갱신
    };

    // 드래그 종료
    const handleMouseUp = () => {
        isDragging.current = false; // 드래그 상태 해제
    };

    const divRef = useRef<HTMLDivElement>(null);
    const handleDownload = async () => {
        if (!divRef.current) return;

        try {
            const div = divRef.current;
            const canvas = await html2canvas(div, { useCORS: true });
            canvas.toBlob((blob) => {
                if (!blob) return;

                // Blob을 URL로 변환
                const url = URL.createObjectURL(blob);

                // <img> 태그의 src에 URL 설정
                const imgElement = document.getElementById(
                    'outputImage'
                ) as HTMLImageElement; // img 태그의 id
                if (imgElement) {
                    imgElement.src = url;
                }
            });
        } catch (error) {
            console.error('Error converting div to image:', error);
        }
    };

    return (
        <>
            <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 z-50 w-full h-8 bg-white opacity-90"></div>
                <div
                    ref={divRef}
                    className="relative w-[236px] h-[236px] border"
                    onMouseMove={handleMouseMove} // 드래그 중 호출
                    onMouseUp={handleMouseUp} // 드래그 종료 시 호출
                    onMouseLeave={handleMouseUp} // 영역 벗어날 경우 호출
                >
                    <img
                        crossOrigin="anonymous"
                        ref={imgRef} // 이미지 참조 설정
                        src="https://cdn.pixabay.com/photo/2020/05/25/20/14/holland-iris-5220407__340.jpg"
                        alt="Cropped"
                        className="w-[236px] cursor-move"
                        style={{ transform: `translateY(${offsetY}px)` }} // Y축 이동 반영
                        onMouseDown={handleMouseDown} // 드래그 시작
                        onLoad={() => {
                            // 이미지 로드 후 높이 계산
                            if (imgRef.current)
                                setImageHeight(imgRef.current.offsetHeight);
                        }}
                        draggable={false} // 기본 드래그 동작 비활성화
                    />
                </div>
                <div className="absolute bottom-0 left-0 z-50 w-full h-8 bg-white opacity-90"></div>
            </div>

            {/* 자르기 버튼 */}
            <button
                onClick={handleDownload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Crop Image
            </button>

            {/* 자른 이미지 미리보기 */}
            <div className="mt-4">
                <p>Preview:</p>
                <img
                    id="outputImage"
                    // src={croppedImage}
                    alt="Cropped Preview"
                    className=""
                />
            </div>
        </>
    );
};

export default ImageCropper;
