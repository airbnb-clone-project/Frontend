import { api } from '.';

export interface tempPin {
  boardNo: number | null;
  commentAllowed: boolean;
  createdAt: string | null;
  description: string | null;
  imageClassification: string | null;
  imgUrl: string | null;
  link: string | null;
  tempPinNo: string | null;
  title: string | null;
  updatedAt: string | null;
}

/**
 * @param getTempPinCheck - 사용자의 임시핀을 모두 조회 api
 */
export const getTempsPinCheck = async (): Promise<tempPin[]> => {
  const userName = localStorage.getItem('userName');
  const { data } = await api.get(`/api/pins/pin/temps/${userName}/v1`);
  return data.data;
};
