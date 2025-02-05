import { api } from '..';

/**
 * @param deleteTempPin - 임시핀 삭제 api
 */
export const deleteTempPin = async (tempPinIds: string[]) => {
  const { data } = await api.delete(`/api/pins/pin/temp/v1`, {
    data: { tempPinIds: tempPinIds },
  });
  return data.data;
};
