import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import MenuNav from './components/MenuNav';

const Setting = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="pt-10 px-5 flex" ref={scrollRef}>
      <MenuNav />

      <Outlet />
    </div>
  );
};

export default Setting;
