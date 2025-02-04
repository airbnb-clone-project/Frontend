import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import Mypage from './pages/mypage/Mypage';
import Created from './pages/mypage/components/Created';
import Saved from './pages/mypage/components/savedTab/Saved';
import Main from './pages/main/Main';
import PinCreate from './pages/pinCreate/PinCreate';
import PinViewPage from './pages/pinView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: 'pin/:id', element: <PinViewPage /> },
      {
        path: 'mypage',
        element: <Mypage />,
        children: [
          { path: 'created', element: <Created /> },
          { path: '', element: <Saved /> },
        ],
      },
      { path: 'pincreate', element: <PinCreate /> },
    ],
  },
]);
