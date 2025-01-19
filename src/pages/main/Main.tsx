import { useQuery } from '@tanstack/react-query';

// import { pin } from '@/services/getPins';

import ShowImages from './source/components/ShowImages';
import { fetchPins } from './source/__mock__/getPins';

const MainPage = () => {
  const {
    data: pinData,
    isLoading,
    isError,
    error,
  } = useQuery<PinListResponse>({
    queryKey: ['pins'],
    // queryFn: () => pin.getPins(),
    queryFn: () => fetchPins(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <ShowImages pinData={pinData} />
    </main>
  );
};

export default MainPage;
