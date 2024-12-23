import UpArrowBGIcon from '@/components/icons/UpArrowBGIcon';

const ImgInput = () => {
    return (
        <div>
            <label
                className="relative flex flex-col justify-center items-center border-dashed border-2 border-[rgb(218,218,218)] bg-gray-filled-default rounded-[32px] w-[375px] h-[453px]"
                htmlFor="upload-img"
            >
                <div className="py-2">
                    <UpArrowBGIcon />
                </div>
                <p className="py-2 text-center">
                    파일을 선택하거나 여기로 끌<br />
                    어다 놓으세요.
                </p>

                <p className="text-center text-sm absolute bottom-8">
                    Pinterest는 20 MB 미만의 고화질 .jpg 파일 또는 200
                    <br /> MB 미만의 .mp4 파일 사용을 권장합니다.
                </p>
            </label>
            <input className="hidden" type="file" id="upload-img" />
            <hr className="my-6 w-full border-[#cdcdcd]" />
        </div>
    );
};

export default ImgInput;
