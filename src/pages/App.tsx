import { Outlet } from 'react-router-dom';
import SideBar from '../components/@Bar/sidebar/SideBar';
import HeaderBar from '@/components/@Bar/headerbar/HeaderBar';
import HelpBar from '@/components/@Bar/helpbar/HelpBar';

const App = () => {
    return (
        <div>
            <HeaderBar />
            <SideBar />
            <HelpBar />
            <div className="relative pt-20 pl-[72px] w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default App;
