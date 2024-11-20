import CreatorBox from './components/CreatorBox';
import BackBtn from './components/buttons/BackBtn';
import PinDetailNav from './components/PinDetailNav';
import CommentBox from './components/comment/CommentBox';

const PinDetail = () => {
    return (
        <>
            <BackBtn />
            <div className="flex items-center justify-center">
                <section className="w-full h-auto rounded-lg max-w-[1016px] flex">
                    <figure className="max-w-[508px] w-full">
                        <img
                            src="https://i.pinimg.com/736x/f1/35/5d/f1355db6a5de39e8747c58e3a4c56665.jpg"
                            alt=""
                        />
                    </figure>
                    <div className="flex-1 pt-8">
                        <PinDetailNav />
                        <div className="px-8">
                            <h1 className="text-left text-black break-words font-semibold text-[28px] mt-4 font-Pretendard">
                                {'ryo yamada'}
                            </h1>
                            <CreatorBox />
                            <CommentBox />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PinDetail;
