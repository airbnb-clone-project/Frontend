import { useState } from 'react';

/**
 * @returns title: 핀 제목 상태
 * @returns explain: 핀 설명 상태
 * @returns link: 핀 링크 상태
 * @returns titleOnChange: 핀 제목을 변경하는 함수
 * @returns explainOnChange: 핀 설명을 변경하는 함수
 * @returns linkOnChange: 핀 링크를 변경하는 함수
 */
export const usePinForm = () => {
    const [title, setTitle] = useState<string>('');
    const [explain, setExplain] = useState<string>('');
    const [link, setLink] = useState<string>('');

    const titleOnChange = (text: string) => setTitle(text);
    const explainOnChange = (text: string) => setExplain(text);
    const linkOnChange = (text: string) => setLink(text);

    return {
        title,
        explain,
        link,
        titleOnChange,
        explainOnChange,
        linkOnChange,
    };
};
