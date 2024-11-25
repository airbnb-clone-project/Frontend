import { FaAngleDown } from 'react-icons/fa';
import { LuUpload } from 'react-icons/lu';
import { IoIosMore } from 'react-icons/io';
import Button from '../../common/Button';

const Overlay = ({
    handelHoverBox,
}: {
    handelHoverBox: (bol: boolean) => void;
}) => {
    return (
        <div onMouseEnter={() => handelHoverBox(true)}>
            <div className="absolute top-0 text-white w-full p-3 z-10">
                <div className="flex flex-row gap-1">
                    <div className="flex-auto box-border h-12 w-full">
                        <Button>
                            <div className="min-w-[60px] px-4 py-3">
                                <div className="flex flex-row items-center">
                                    <div className="mx-1">프로필</div>
                                    <FaAngleDown
                                        className="mx-1"
                                        color="white"
                                    />
                                </div>
                            </div>
                        </Button>
                    </div>
                    <Button
                        className="flex justify-center items-center min-w-[60px] h-12 px-4 py-3 flex-grow-0 flex-shrink-0 basis-auto"
                        bgColor="bg-red-500"
                    >
                        <div className="text-center">저장</div>
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-0 w-full z-10">
                <div className="flex-grow-0 flex-shrink-0 basis-auto p-3">
                    <div className="flex flex-row items-center justify-end">
                        <div className="mx-1">
                            <Button bgColor="bg-white">
                                <div className="flex justify-center items-center w-8 h-8">
                                    <LuUpload />
                                </div>
                            </Button>
                        </div>
                        <div className="mx-1">
                            <Button bgColor="bg-white">
                                <div className="flex justify-center items-center w-8 h-8">
                                    <IoIosMore />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Overlay;
