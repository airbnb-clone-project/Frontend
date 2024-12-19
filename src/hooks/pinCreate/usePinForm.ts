import { useRef, useState } from 'react';

/**
 * @returns title: 핀 제목 state
 * @returns explain: 핀 설명 state
 * @returns link: 핀 링크 state
 * @returns image: 업로드 할 img state
 * @returns imgPreview: 업로드 한 img의 preview state
 * @returns textareaRef: textarea ref
 * @returns titleOnChange: 핀 제목을 변경하는 함수
 * @returns explainOnChange: 핀 설명을 변경하는 함수
 * @returns linkOnChange: 핀 링크를 변경하는 함수
 * @returns handleResizeHeight: textarea태그에 들어가는 text 길이에 따른 height증가 함수
 * @returns handleImageUpload: img 업로드시 실행 함수
 */
export const usePinForm = () => {
  const [title, setTitle] = useState<string>('');
  const [explain, setExplain] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setImgPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
    imgPreview,
    titleOnChange,
    explainOnChange,
    linkOnChange,
    handleResizeHeight,
    handleImageUpload,
  };
};
