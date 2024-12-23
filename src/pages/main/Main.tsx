import { useEffect, useState } from 'react';

import { pin } from '@/services/getPins';

import ShowImages from './components/showimages/ShowImages';

const Main = () => {
  const [pinData, setPinData] = useState<PinResponse<Pin[]> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await pin.getPins();
      setPinData(res);
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <ShowImages data={pinData} />
    </>
  );
};
export default Main;
