import { api } from '.';

export interface TempPinEditData {
  boardNo: number | null;
  description: string | null;
  title: string | null;
  link: string | null;
  commentAllowed: boolean | null;
}

export interface PutTempPinEditParams {
  editData: TempPinEditData;
  pinNo: string;
}

/**
 * @param putTempPinEdit - 임시핀 수정 api
 */
export const putTempPinEdit = async ({
  editData,
  pinNo,
}: PutTempPinEditParams) => {
  const { data } = await api.put(`/api/pins/pin/temp/${pinNo}/v1`, editData);
  return data.data;
};
