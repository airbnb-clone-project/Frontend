// Title 관리 훅

import { tempPin } from '@/services/getTempsPinCheck';
import { postTempPinCreate } from '@/services/postTempPinCreate';
import { useState } from 'react';

/**
 * @returns currentPin: 현재 선택중인 핀 상태
 * @returns currentPinOnChange: key값과 value를 받아 currentPin의 상태를 변경 함수
 * @returns currentPinReset: currentPin의 상태를 reset 함수
 * @returns pinOnClick: 핀 초안 item 클릭시 실행 함수
 * @returns handleImageUpload: 이미지 업로드 핸들링 함수
 */

interface useCurrentPinProps {
  /** 임시핀 목록 get query refetch 함수 */
  tempPinListReFetch: () => void;
}
export const useCurrentPin = ({ tempPinListReFetch }: useCurrentPinProps) => {
  const initialCurrentPin = {
    boardNo: null,
    commentAllowed: false,
    createdAt: '',
    description: null,
    imageClassification: '',
    imgUrl: '',
    link: null,
    tempPinNo: '',
    title: null,
    updatedAt: '',
  };
  const [currentPin, setCurrentPin] = useState<tempPin>({
    boardNo: null,
    commentAllowed: false,
    createdAt: '',
    description: null,
    imageClassification: '',
    imgUrl: '',
    link: null,
    tempPinNo: '',
    title: null,
    updatedAt: '',
  });

  const currentPinOnChange = (key: keyof tempPin, value: string | boolean) => {
    setCurrentPin((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const currentPinReset = () => {
    setCurrentPin(initialCurrentPin);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        currentPinOnChange('imgUrl', reader.result as string);
      };
      reader.readAsDataURL(file);

      postTempPinCreate(file)
        .then((res) => {
          tempPinListReFetch();
          currentPinOnChange('tempPinNo', res);
        })
        .catch((err) => console.log(err));
    }
  };

  const pinOnClick = (v: tempPin) => {
    setCurrentPin((prev) => {
      return {
        ...prev,
        imageClassification: v.imageClassification,
        tempPinNo: v.tempPinNo,
        boardNo: v.boardNo,
        commentAllowed: v.commentAllowed,
        description: v.description,
        link: v.link,
        imgUrl: v.imgUrl,
        title: v.title,
      };
    });
  };

  return {
    pinOnClick,
    handleImageUpload,
    currentPinReset,
    currentPinOnChange,
    currentPin,
    setCurrentPin,
  };
};
