import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import PinDetail from './pages/@PinDetail/PinDetail';

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    {
        path: 'pin/:id',
        element: <PinDetail />,
    },
]);
