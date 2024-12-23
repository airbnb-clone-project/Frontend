import { useState } from 'react';

/**
 * @returns tagSearch: 현재 입력 중인 태그 검색어
 * @returns tagList: 태그 리스트 배열 (각 태그는 색상과 값을 가짐)
 * @returns tagSearchOnChange: 태그 검색어를 변경하는 함수
 * @returns tagItemOnClick: 태그 아이템을 추가하는 함수
 * @returns selectTagDelet: 선택된 태그를 삭제하는 함수
 */
export const useTagSearch = () => {
    const [tagSearch, setTagSearch] = useState<string>('');
    const [tagList, setTagList] = useState<{ color: string; value: string }[]>([
        { color: '#121111', value: '동물1' },
        { color: '#121111', value: '동물2' },
        { color: '#121111', value: '동물3' },
        { color: '#121111', value: '동물4' },
        { color: '#121111', value: '동물5' },
        { color: '#121111', value: '동물6' },
    ]);

    const tagSearchOnChange = (text: string) => setTagSearch(text);

    const tagItemOnClick = (tagStr: string) => {
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
            setTagList((prev) => [
                ...prev,
                { value: tagStr, color: colors[tagList.length] },
            ]);
        }
    };

    const selectTagDelet = (tagText: string) => {
        setTagList((prevTagList) =>
            prevTagList.filter((tag) => tag.value !== tagText)
        );
    };

    return {
        tagSearch,
        tagList,
        tagSearchOnChange,
        tagItemOnClick,
        selectTagDelet,
    };
};
