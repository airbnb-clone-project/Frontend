import { api } from '..';

/**
 * @param postTempPinCopy - 임시핀 복제 api
 */
export const postTempPinCopy = async (tempPinNo: string) => {
  const { data } = await api.post(`/api/pins/pin/temp/copy/v1`, {
    copyTargetTempPinNo: tempPinNo,
  });
  return data;
};
