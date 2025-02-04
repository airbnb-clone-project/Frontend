import { Outlet } from 'react-router-dom';

import Header from '@/layouts/header';
import SideBar from '@/layouts/sidebar';
import HelpBar from '@/layouts/helpbar/HelpBar';

const App = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <HelpBar />
      <div className="relative pt-20 pl-[72px] w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
