import { postTempPinCopy } from '@/services/postTempPinCopy';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * 임시핀을 복제 하는 react-query
 */
const useTempPinCopy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tempPinNo: string) => postTempPinCopy(tempPinNo), // API 호출 함수
    onSuccess: () => {
      // 성공 시 임시 핀 목록 useQuery 업데이트
      queryClient.invalidateQueries({ queryKey: ['tempPinList'] });
    },
    onError: (err) => {
      console.error('Error updating temp pin:', err);
    },
  });
};

export default useTempPinCopy;
