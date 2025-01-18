import { deleteTempPin } from '@/services/deleteTempPin';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * 임시핀을 삭제 하는 react-query
 */
const useTempPinDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tempPinIds: string[]) => deleteTempPin(tempPinIds), // API 호출 함수
    onSuccess: () => {
      // 성공 시 임시 핀 목록 useQuery 업데이트
      queryClient.invalidateQueries({ queryKey: ['tempPinList'] });
    },
    onError: (err) => {
      console.error('Error updating temp pin:', err);
    },
  });
};

export default useTempPinDelete;
