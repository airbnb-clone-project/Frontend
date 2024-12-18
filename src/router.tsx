import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import PinDetail from './pages/pinDetail/PinDetail';
import Mypage from './pages/mypage/Mypage';
import Created from './pages/mypage/components/Created';
import Saved from './pages/mypage/components/savedTab/Saved';
import PinCreate from './pages/pinCreate/PinCreate';

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    {
        path: 'pin/:id',
        element: <PinDetail />,
    },
    {
        path: '/mypage',
        element: <Mypage />,
        children: [
            { path: 'created', element: <Created /> },
            { path: '', element: <Saved /> },
        ],
    },
    {
        path: '/pincreate',
        element: <PinCreate />,
    },
]);
