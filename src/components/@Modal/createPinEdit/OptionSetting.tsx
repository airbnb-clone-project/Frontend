import SwitchButton from '@/components/common/SwitchButton';
import DownArrowIcon from '@/components/icons/DownArrowIcon';
import UpArrowIcon from '@/components/icons/UpArrowIcon';

interface OptionSettingProps {
    /** 옵션 설정 영역 활성화 여부 toggle 함수 */
    isOptionToggle: () => void;
    /** 옵션 설정 영역 활성화 여부 */
    isOption: boolean;
}
const OptionSetting = ({ isOption, isOptionToggle }: OptionSettingProps) => {
    return (
        <div>
            <span
                onClick={isOptionToggle}
                className="py-2 cursor-pointer flex items-center gap-1 font-semibold"
            >
                추가 옵션
                {isOption ? <UpArrowIcon /> : <DownArrowIcon />}
            </span>

            {isOption && (
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 pt-2">
                        <SwitchButton />
                        <span>댓글 달기 허용</span>
                    </div>
                    <div className="flex gap-2">
                        <SwitchButton />
                        <div>
                            <p className="mb-2">비슷한 상품 표시하기</p>
                            <p className="text-sm mb-1">
                                사용자가 시각적 검색을 사용하여 이 핀에 표시된
                                콘텐츠와 유사한 상품을 쇼핑할 수 있습니다.
                            </p>
                            <p className="text-sm">
                                태그된 상품 또는 유료 파트너십 라벨이 있는
                                아이디어 광고와 핀에는 쇼핑 추천을 사용할 수
                                없습니다.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OptionSetting;
