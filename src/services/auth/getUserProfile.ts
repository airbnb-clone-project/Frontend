import { api } from '..';

/**
 * @param getUserProfile - 사용자 정보 불러오기 api
 */
export const getUserProfile = async () => {
  const { data } = await api.get(`/api/auth/profile`);
  return data.data;
};
