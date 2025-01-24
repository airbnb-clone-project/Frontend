import { api } from '.';

export interface PinEditData {
  boardNo: number | null;
  description: string | null;
  title: string | null;
  link: string | null;
  commentAllowed: boolean | null;
}

export interface PutPinEditParams {
  editData: PinEditData;
  pinNo: string;
}

/**
 * @param putPinEdit - 핀 정보 수정 api
 */
export const putPinEdit = async ({ editData, pinNo }: PutPinEditParams) => {
  const { data } = await api.put(`/api/pins/pin/${pinNo}/v1`, editData);
  return data.data;
};
