import { postPinPost, postPinPostProps } from '@/services/pin/postPinPost';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * 핀을 게시하는 react-query
 */

const usePostPin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData: postPinPostProps) => postPinPost(postData), // API 호출 함수
    onSuccess: (res) => {
      console.log(res);
      // 성공 시 임시 핀 목록 useQuery 업데이트
      queryClient.invalidateQueries({ queryKey: ['tempPinList'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export default usePostPin;
