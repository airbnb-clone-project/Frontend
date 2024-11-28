import { ReactElement, useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-css';

interface MasonryListPops {
    minWidth: number;
    sideWidth: number;
    children?: ReactElement[]; // 자식 element
    minCol: number;
    className?: string;
    columnClassName?: string;
    style?: React.CSSProperties; // style 프로퍼티의 타입 정의
}

const MasonryList = ({
    children,
    minCol,
    minWidth,
    sideWidth,
    className,
    columnClassName,
    style,
}: MasonryListPops) => {
    // img 열 state
    const [col, setCol] = useState<number>(0);

    const breakpoints = {
        default: col <= minCol ? minCol : col, // 기본 4열
    };

    // img item width를 계산하는 함수
    const calcItemWidth = () => {
        if (containerRef.current) {
            const windowWidth =
                containerRef.current.getBoundingClientRect().width - sideWidth;
            // const windowWidth = window.innerWidth - sideWidth;
            console.log(containerRef.current.getBoundingClientRect().width);
            return Math.floor(windowWidth / minWidth);
        }
        return 0;
    };

    // img reSize 함수
    useEffect(() => {
        setCol(calcItemWidth());
        const handleResize = () => {
            setCol(calcItemWidth());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const containerRef = useRef<HTMLDivElement | null>(null); // 부모 div에 대한 ref
    return (
        <div
            ref={containerRef}
            className="w-auto"
            // style={{ width: `calc(100% - ${sideWidth})` }}
        >
            {/* 부모 div에 ref 할당 */}
            <Masonry
                breakpointCols={breakpoints}
                style={style}
                className={`${className}`}
                columnClassName={columnClassName}
            >
                {children}
            </Masonry>
        </div>
    );
};

export default MasonryList;
