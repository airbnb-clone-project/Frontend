import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import Mypage from './pages/mypage/Mypage';
import Created from './pages/mypage/components/Created';
import Saved from './pages/mypage/components/savedTab/Saved';
import Main from './pages/main/Main';
import PinCreate from './pages/pinCreate/PinCreate';
import Setting from './pages/setting/Setting';
import ProfileEdit from './pages/profileEdit/ProfileEdit';
import AccountManagement from './pages/accountManagement/AccountManagement';

import PinDetailPage from './pages/pinDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: 'pin/:id', element: <PinDetailPage /> },
      {
        path: 'mypage',
        element: <Mypage />,
        children: [
          { path: 'created', element: <Created /> },
          { path: '', element: <Saved /> },
        ],
      },
      { path: 'pincreate', element: <PinCreate /> },
      {
        path: 'setting',
        element: <Setting />,
        children: [
          { path: '', element: <ProfileEdit /> },
          { path: 'accountManagement', element: <AccountManagement /> },
        ],
      },
    ],
  },
]);
