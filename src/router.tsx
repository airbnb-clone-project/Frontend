import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import Main from './pages/main/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{ path: '/main', element: <Main /> }],
    },
]);
