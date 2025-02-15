import { Suspense, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKey';
import { getPins } from './source/__mock__/getPins';

import Spinner from '@/components/common/Spinner';
import MainContainer from './source/container/MainContainer';
// import { pin } from '@/services/pin/getPins';

const MainPage = () => {
  const {
    data: pinData,
    isLoading,
    isError,
    error,
  } = useQuery<PinListResponse>({
    queryKey: [QUERY_KEYS.PINS],
    queryFn: () => getPins(),
  });

  // SEO를 위한 메타 데이터
  useEffect(() => {
    document.title = 'Pinterest';
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <MainContainer pinData={pinData} />
      </Suspense>
    </>
  );
};

export default MainPage;
