import { tempPin } from '@/services/getTempsPinCheck';
import { useState } from 'react';

/**
 * @returns selectPinList: 선택된 핀 리스트 상태
 * @returns setPinList: 핀 리스트를 설정하는 함수
 * @returns allPinSelect: 모든 핀을 선택 상태로 만드는 함수
 * @returns togglePinSelection: 특정 핀의 선택 상태를 토글하는 함수
 * @returns allPinReset: 현재 선택된 모든 pin을 해제하는 함수
 */

export const useTempPinList = () => {
  const [selectPinList, setSelectPinList] = useState<tempPin[]>([]);

  const togglePinSelection = (tempPin: tempPin) => {
    setSelectPinList((prev) =>
      prev.some((pin) => pin.tempPinNo === tempPin.tempPinNo)
        ? prev.filter((pin) => pin.tempPinNo !== tempPin.tempPinNo)
        : [...prev, tempPin]
    );
  };

  const allPinReset = () => {
    setSelectPinList([]);
  };

  return {
    selectPinList,
    setSelectPinList,
    togglePinSelection,
    allPinReset,
  };
};
