import { useRef, useState } from 'react';

/**
 * @returns title: 핀 제목 상태
 * @returns explain: 핀 설명 상태
 * @returns link: 핀 링크 상태
 * @returns textareaRef: textarea ref
 * @returns titleOnChange: 핀 제목을 변경하는 함수
 * @returns explainOnChange: 핀 설명을 변경하는 함수
 * @returns linkOnChange: 핀 링크를 변경하는 함수
 * @returns handleResizeHeight: textarea태그에 들어가는 text 길이에 따른 height증가 함수
 */
export const usePinForm = () => {
    const [title, setTitle] = useState<string>('');
    const [explain, setExplain] = useState<string>('');
    const [link, setLink] = useState<string>('');

    const titleOnChange = (text: string) => setTitle(text);

    const explainOnChange = (text: string) => {
        setExplain(text);
        handleResizeHeight();
    };

    const linkOnChange = (text: string) => setLink(text);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const handleResizeHeight = () => {
        const currentTextarea = textareaRef.current;

        if (currentTextarea) {
            currentTextarea.style.height = 'auto'; //height 초기화
            currentTextarea.style.height = currentTextarea.scrollHeight + 'px';
        }
    };

    return {
        title,
        explain,
        link,
        textareaRef,
        titleOnChange,
        explainOnChange,
        linkOnChange,
        handleResizeHeight,
    };
};
