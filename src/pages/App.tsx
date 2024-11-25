import { Outlet } from 'react-router-dom';
import SideBar from '../components/@Bar/sidebar/SideBar';

const App = () => {
    return (
        <div>
            <SideBar />
            <div className="relative pt-20 pl-[72px] w-screen h-screen z-10">
                <Outlet />
            </div>
        </div>
    );
};

export default App;
