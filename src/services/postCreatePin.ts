import { api } from '.';

// img로 임시핀 생성 api
export const postCreatePin = async (imageFile: string) => {
  const { data } = await api.post(`/api/pins/pin/temp/v1`, {
    imageFile: imageFile,
  });
  return data;
};
