import { Outlet } from 'react-router-dom';
import SideBar from '../components/@Bar/sidebar/SideBar';
import HeaderBar from '@/components/@Bar/headerbar/HeaderBar';

const App = () => {
    return (
        <div>
            <SideBar />
            <HeaderBar />
            <div className="relative pt-20 pl-[72px] w-full h-full z-10">
                <Outlet />
            </div>
        </div>
    );
};

export default App;
