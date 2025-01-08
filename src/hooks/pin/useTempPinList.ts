import { tempPin } from '@/services/getTempsPinCheck';
import { useTempPinStore } from '@/stores/useTempPinStore';
import { useState } from 'react';

/**
 * @returns selectPinList: 선택된 핀 리스트 상태
 * @returns setPinList: 핀 리스트를 설정하는 함수
 * @returns allPinSelect: 모든 핀을 선택 상태로 만드는 함수
 * @returns togglePinSelection: 특정 핀의 선택 상태를 토글하는 함수
 * @returns currentPin: 현재 선택중인 핀 상태
 * @returns pinOnClick: 핀 초안 item 클릭시 실행 함수
 * @returns allPinReset: 현재 선택된 모든 pin을 해제하는 함수
 */
export const useTempPinList = () => {
  const [selectPinList, setSelectPinList] = useState<string[]>([]);
  const [currentPin, setCurrentPin] = useState<tempPin>();

  const togglePinSelection = (tempPinNo: string) => {
    setSelectPinList((prev) =>
      prev.includes(tempPinNo)
        ? prev.filter((pin) => pin !== tempPinNo)
        : [...prev, tempPinNo]
    );
  };

  const {
    setBoardNo,
    setIsComment,
    setExplain,
    setLink,
    setImgPreview,
    setPinNo,
    setTitle,
  } = useTempPinStore();

  const pinOnClick = (v: tempPin) => {
    setBoardNo(v.boardNo);
    setIsComment(v.commentAllowed);
    setExplain(v.description);
    setLink(v.link);
    setImgPreview(v.imgUrl);
    setPinNo(v.tempPinNo);
    setTitle(v.title);
    setCurrentPin(v);
  };

  const allPinReset = () => {
    setSelectPinList([]);
  };

  return {
    selectPinList,
    currentPin,
    setSelectPinList,
    togglePinSelection,
    pinOnClick,
    allPinReset,
  };
};
