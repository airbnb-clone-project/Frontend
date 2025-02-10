import { api } from '..';

/**
 * @param postUserImg - 사용자 프로필 이미지 변경 api
 */
export const postUserImg = async (imageFile: string) => {
  const { data } = await api.post(`/api/auth/profile-image`, {
    profileImageUrl: imageFile,
  });
  return data;
};
