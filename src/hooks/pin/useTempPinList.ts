import { getTempsPinCheck } from '@/services/getTempsPinCheck';
import { useCallback, useState } from 'react';

/**
 * @returns pinList: 모든 핀 리스트 상태
 * @returns selectPinList: 선택된 핀 리스트 상태
 * @returns setPinList: 핀 리스트를 설정하는 함수
 * @returns allPinSelect: 모든 핀을 선택 상태로 만드는 함수
 * @returns togglePinSelection: 특정 핀의 선택 상태를 토글하는 함수
 * @returns currentPin: 현재 선택중인 핀 상태
 * @returns pinOnClick: 핀 초안 item 클릭시 실행 함수
 * @returns allPinReset: 현재 선택된 모든 pin을 해제하는 함수
 * @returns tempPinCheckList: 사용자의 임시핀 목록을 불러오는 함수
 */
export const useTempPinList = () => {
  const [pinList, setPinList] = useState<number[]>([0, 1, 2, 3]);
  const [selectPinList, setSelectPinList] = useState<number[]>([]);
  const [currentPin, setCurrentPin] = useState(1);

  const tempPinCheckList = useCallback(() => {
    console.log('임시핀 불러와서 state저장');
    getTempsPinCheck('ttaewok')
      .then((res) => {
        console.log(res);
        setPinList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const allPinSelect = () => setSelectPinList(pinList);

  const togglePinSelection = (index: number) => {
    setSelectPinList((prev) =>
      prev.includes(index)
        ? prev.filter((pin) => pin !== index)
        : [...prev, index]
    );
  };

  const pinOnClick = (index: number) => {
    setCurrentPin(index);
  };

  const allPinReset = () => {
    setSelectPinList([]);
  };

  return {
    pinList,
    selectPinList,
    currentPin,
    setPinList,
    allPinSelect,
    togglePinSelection,
    pinOnClick,
    allPinReset,
    tempPinCheckList,
  };
};
