import { api } from '.';

export interface tempPin {
  boardNo: number | null;
  commentAllowed: boolean;
  createdAt: string;
  description: string | null;
  imageClassification: string;
  imgUrl: string;
  link: string | null;
  tempPinNo: string;
  title: string | null;
  updatedAt: string;
}

/**
 * @param getTempPinCheck - 사용자의 임시핀을 모두 조회 api
 */
export const getTempsPinCheck = async (
  userName: string
): Promise<tempPin[]> => {
  const { data } = await api.get(`/api/pins/pin/temps/${userName}/v1`);
  return data.data;
};
