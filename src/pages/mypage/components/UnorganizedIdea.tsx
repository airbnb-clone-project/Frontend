import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import PencilIcon from '@/components/icons/PencilIcon';
import ShareIcon from '@/components/icons/ShareIcon';

const UnorganizedIdea = () => {
    const sample: string[] = [
        'https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524__340.jpg',
        'https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg',
        'https://cdn.pixabay.com/photo/2020/05/25/20/14/holland-iris-5220407__340.jpg',
        'https://cdn.pixabay.com/photo/2020/10/08/17/39/waves-5638587__340.jpg',
        'https://cdn.pixabay.com/photo/2019/01/30/11/17/zebra-3964360__340.jpg',
        'https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663__340.png',
        'https://cdn.pixabay.com/photo/2019/06/05/10/34/mimosa-4253396__340.jpg',
        'https://cdn.pixabay.com/photo/2020/08/04/14/42/sky-5463015__340.jpg',
        'https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg',
        'https://cdn.pixabay.com/photo/2020/01/09/01/00/the-eye-on-the-greek-4751572__340.png',
        'https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678__340.png',
        'https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898__340.jpg',
        'https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg',
    ];

    const breakpoints = {
        default: 7, // 기본 4열
        1746: 6,
        1500: 5,
        1272: 4,
        1035: 3, // 화면 너비가 1135px 이하일 때 3열
        799: 2, // 화면 너비가 799px 이하일 때 2열
    };
    return (
        <section className="px-2">
            <div className="px-3 flex justify-between items-center">
                <h3 className="text-[20px] font-semibold">
                    정리되지 않은 아이디어
                </h3>
                <button className="hover:bg-[#d8d8d8] py-2 px-3 bg-[#e9e9e9] rounded-3xl font-semibold">
                    정리하기
                </button>
            </div>

            {/* <div className="px-2 [column-width:350px] column-count-4 gap-4"> */}
            <Masonry
                breakpointCols={breakpoints}
                className="masonry-containe list flex gap-4 px-2"
                columnClassName="masonry-column"
            >
                {sample.map((v, i) => (
                    <Link
                        to={''}
                        key={i}
                        className="mb-2 relative group inline-block"
                    >
                        <img
                            src={v}
                            alt={`Sample ${i}`}
                            className="rounded-2xl"
                        />
                        {/* Hover 효과 */}
                        <div className="rounded-2xl z-10 inset-0 top-0 left-0 absolute bg-[rgba(0,0,0,0.4)] hidden group-hover:block">
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                className="pointer-events-auto hover:bg-[#e2e2e2] items-center flex z-20 absolute right-12 bottom-3 justify-center flex w-8 h-8 rounded-full bg-white"
                            >
                                <PencilIcon />
                            </div>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                className="pointer-events-auto hover:bg-[#e2e2e2] items-center flex z-20 absolute right-2 bottom-3 justify-center flex w-8 h-8 rounded-full bg-white"
                            >
                                <ShareIcon />
                            </div>
                        </div>
                    </Link>
                ))}
            </Masonry>
        </section>
    );
};

export default UnorganizedIdea;
