import { api } from '.';

export interface myPins {
  no: number;
  imgUrl: string;
  boardNo: number;
}

/**
 * @param getMyPinsCheck - 사용자의 핀을 모두 조회 api
 */
export const getMyPinsCheck = async (): Promise<myPins[]> => {
  const { data } = await api.get(`/api/my-page/pins/v1`);
  return data.data;
};
