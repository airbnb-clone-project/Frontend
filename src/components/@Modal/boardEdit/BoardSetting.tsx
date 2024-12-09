import CheckIcon from '@/components/icons/CheckIcon';

const BoardSetting = () => {
    return (
        <div>
            <p className="text-xs mb-2">설정</p>

            {/* 비밀 보드로 유지 checkBox */}
            <div className="flex mb-8">
                <div className="relative rounded-xl flex items-center">
                    <input
                        id="secretBoard"
                        type="checkbox"
                        className="checked:bg-[#111] checked:border-[#111] cursor-pointer appearance-none border not-checked:hover:border-[#a5a5a5] border-[#767676] border-2 w-6 h-6 rounded-lg"
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <CheckIcon />
                    </div>
                </div>
                <label htmlFor="secretBoard" className="cursor-pointer ml-2">
                    <p className="font-semibold">비밀 보드로 유지</p>
                    <p className="text-[#767676]">
                        회원님과 참여자만 볼 수 있습니다.
                    </p>
                </label>
                <div className="text-[#767676] flex items-end hover:underline cursor-pointer">
                    자세히 알아보기
                </div>
            </div>
            {/* 개인 설정 checkBox */}
            <div className="flex">
                <div className="relative rounded-xl flex items-center">
                    <input
                        id="personal-setting"
                        type="checkbox"
                        className="checked:bg-[#111] checked:border-[#111] cursor-pointer appearance-none border not-checked:hover:border-[#a5a5a5] border-[#767676] border-2 w-6 h-6 rounded-lg"
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <CheckIcon />
                    </div>
                </div>
                <label
                    htmlFor="personal-setting"
                    className="cursor-pointer ml-2"
                >
                    <p className="font-semibold">개인 설정</p>
                    <p className="text-[#767676]">
                        내 홈피드에서 이 보드에 영감을 받은 핀을 봅니다.
                    </p>
                </label>
            </div>
        </div>
    );
};

export default BoardSetting;
