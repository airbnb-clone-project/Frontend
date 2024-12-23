import { useState } from 'react';

/**
 * @returns isOption : 추가 옵션 설정 활성화 여부 상태
 * @returns isOptionToggle : 추가 옵션 설정 활성화 여부 토글 함수
 */
export const useOptionSettings = () => {
    const [isOption, setIsOption] = useState(false);
    const isOptionToggle = () => setIsOption((prev) => !prev);

    return { isOption, isOptionToggle };
};
