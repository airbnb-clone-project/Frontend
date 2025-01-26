import { useQuery } from '@tanstack/react-query';

import { mockGetPinDetail } from '../__mock__/mockGetPinDetail';

export const usePinQueries = () => {
  // 핀 상세 조회 쿼리
  const usePinDetail = () => {
    return useQuery({
      queryKey: ['pin'],
      queryFn: () => mockGetPinDetail(),
    });
  };

  return { usePinDetail };
};
