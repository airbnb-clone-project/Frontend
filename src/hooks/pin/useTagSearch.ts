import { useTempPinStore } from '@/stores/useTempPinStore';
import { useCallback } from 'react';

/**
 * @returns tagSearch: 현재 입력 중인 태그 검색어
 * @returns tagList: 태그 리스트 배열 (각 태그는 색상과 값을 가짐)
 * @returns tagSearchOnChange: 태그 검색어를 변경하는 함수
 * @returns tagItemOnClick: 태그 아이템을 추가하는 함수
 * @returns selectTagDelet: 선택된 태그를 삭제하는 함수
 * @returns tagReset: 선택된 태그를 전체 reset하는 함수
 */
export const useTagSearch = () => {
  const { tagSearch, setTagSearch, tagList, setTagList } = useTempPinStore();

  const tagReset = () => {
    setTagList([]);
  };

  const tagSearchOnChange = useCallback(
    (text: string) => setTagSearch(text),
    []
  );

  const tagItemOnClick = useCallback((tagStr: string) => {
    const colors = [
      '#111111',
      '#370052',
      '#00205C',
      '#01564C',
      '#363F03',
      '#573700',
      '#5E031A',
      '#97026A',
      '#8000BD',
      '#0045DC',
    ];
    if (tagList.length < 10) {
      setTagList([
        ...tagList,
        { value: tagStr, color: colors[tagList.length] },
      ]);
    }
  }, []);

  const selectTagDelet = useCallback((tagText: string) => {
    setTagList(tagList.filter((tag) => tag.value !== tagText));
  }, []);

  return {
    tagSearch,
    tagList,
    tagSearchOnChange,
    tagItemOnClick,
    selectTagDelet,
    tagReset,
  };
};
