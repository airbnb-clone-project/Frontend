import { api } from '..';

export interface myPins {
  boardNo: number | null;
  description: string | null;
  imgUrl: string;
  isCommentAllowed: boolean;
  link: string | null;
  no: number;
  title: string | null;
}

/**
 * @param getMyPinsCheck - 사용자의 핀을 모두 조회 api
 */
export const getMyPinsCheck = async (): Promise<myPins[]> => {
  const { data } = await api.get(`/api/my-page/pins/v1`);
  return data.data;
};
