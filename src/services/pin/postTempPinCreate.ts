import Cookies from 'universal-cookie';
import { api } from '..';

/**
 * @param postPinCreate - 임시핀 생성 api
 */
export const postTempPinCreate = async (imgFile: File) => {
  const cookies = new Cookies();

  const formData = new FormData();
  formData.append('imageFile', imgFile);

  const accessToken = cookies.get('accessToken');
  const { data } = await api.post(`/api/pins/pin/temp/v1`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.data;
};
