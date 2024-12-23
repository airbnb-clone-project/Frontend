import { useState } from 'react';

/**
 * @returns isOption : 추가 옵션 설정 활성화 여부 상태
 * @returns isComment : 댓글 달기 여부 상태
 * @returns isSimilarProductsVisible : 비슷한 상품을 보이게 할지 여부 상태
 * @returns isOptionToggle : 추가 옵션 설정 활성화 여부 토글 함수
 * @returns isCommentToggle : 댓글 달기 옵션 설정 활성화 여부 토글 함수
 * @returns isSimilarProductsVisibleToggle : 비슷한 상품 표시하기 옵션 설정 활성화 여부 토글 함수
 * @returns optionReset : 모든 옵션을 초기 상태로 reset하는 함수
 */
export const useOptionSettings = () => {
  const [isOption, setIsOption] = useState(false);
  const [isComment, setIsComment] = useState<boolean>(true);
  const [isSimilarProductsVisible, setsSimilarProductsVisible] =
    useState<boolean>(true);

  const optionReset = () => {
    setIsOption(false);
    setIsComment(true);
    setsSimilarProductsVisible(true);
  };

  const isOptionToggle = () => setIsOption((prev) => !prev);
  const isCommentToggle = () => setIsComment((prev) => !prev);
  const isSimilarProductsVisibleToggle = () =>
    setsSimilarProductsVisible((prev) => !prev);

  return {
    isOption,
    isComment,
    isSimilarProductsVisible,
    isOptionToggle,
    isCommentToggle,
    isSimilarProductsVisibleToggle,
    optionReset,
  };
};
