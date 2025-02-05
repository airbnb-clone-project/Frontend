import {
  putTempPinEdit,
  PutTempPinEditParams,
} from '@/services/pin/putTempPinEdit';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * 임시핀을 업데이트 하는 react-query
 */
const useTempPinUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ editData, pinNo }: PutTempPinEditParams) =>
      putTempPinEdit({ editData, pinNo }), // API 호출 함수
    onSuccess: () => {
      // 성공 시 임시 핀 목록 useQuery 업데이트
      queryClient.invalidateQueries({ queryKey: ['tempPinList'] });
    },
    onError: (err) => {
      console.error('Error updating temp pin:', err);
    },
  });
};

export default useTempPinUpdate;
