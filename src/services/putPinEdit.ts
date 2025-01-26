import { api } from '.';

export interface PinEditData {
  boardNo: number | null;
  description: string | null;
  title: string | null;
  link: string | null;
  isCommentAllowed: boolean;
  no: number;
}

/**
 * @param putPinEdit - 핀 정보 수정 api
 */
export const putPinEdit = async (editData: PinEditData) => {
  const { data } = await api.put(`/api/pins/pin/${editData.no}/v1`, {
    title: editData.title,
    description: editData.description,
    link: editData.link,
    boardNo: editData.boardNo,
    commentAllowed: editData.isCommentAllowed,
  });
  return data.data;
};
