import { Suspense, useEffect } from 'react';

import PinViewContainer from './source/containers/PinViewContainer';
// import { pinEditMock } from './source/service/pinDetailApi';
// import { loginUser } from '@/services/auth/getUser';

import Spinner from '@/components/common/Spinner';
// import { loginUser } from '@/services/auth/getUser';
import { getPinDetail } from './source/service/pinDetailApi';
import RelatedPins from './source/components/RelatedPins';

// const userData = {
//   username: '2025test001',
//   password: '2025test001',
// };

// const userDataLogin = {
//   username: 'test001',
//   password: 'test001',
// };

const PinViewPage = () => {
  useEffect(() => {
    const pinEdit = async () => {
      // const signup = await createUserTest(userData);
      // console.log('signup', signup);
      // const login = await loginUser(userData);
      // console.log('login', login);
      // const result = await pinEditMock();
      // console.log('result', result);
      const result = await getPinDetail();
      console.log('result', result);
    };
    pinEdit();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <PinViewContainer />
      <RelatedPins />
    </Suspense>
  );
};

export default PinViewPage;
