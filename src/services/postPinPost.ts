import { api } from '.';

export interface postPinPostProps {
  imgUrl: string | null;
  imageClassification: string | null;
  title: string | null;
  description: string | null;
  link: string | null;
  boardNo: number | null;
  tagNos: number[] | null;
  commentAllowed: boolean;
}

/**
 * @param postPinPost - 핀 게시 api
 */
export const postPinPost = async (postData: postPinPostProps) => {
  const { data } = await api.post(`/api/pins/pin/v1`, postData);
  return data;
};
