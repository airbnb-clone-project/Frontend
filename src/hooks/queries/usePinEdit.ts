import { PinEditData, putPinEdit } from '@/services/pin/putPinEdit';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * 핀 정보를 수정 하는 react-query
 */
const usePinEdit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (editData: PinEditData) => putPinEdit(editData),
    onSuccess: () => {
      // 성공 시 임시 핀 목록 useQuery 업데이트
      queryClient.invalidateQueries({ queryKey: ['tempPinList'] });
    },
    onError: (err) => {
      console.error('Error updating temp pin:', err);
    },
  });
};

export default usePinEdit;
