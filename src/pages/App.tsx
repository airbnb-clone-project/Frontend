import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from '../components/@Bar/sidebar/SideBar';
import HeaderBar from '@/components/@Bar/headerbar/HeaderBar';
import HelpBar from '@/components/@Bar/helpbar/HelpBar';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { loginUser } from '@/services/getUser';

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);

  useEffect(() => {
    // 로그인 상태를 확인하고 상태를 갱신
    checkLoginStatus();

    if (!isLoggedIn) {
      console.log('로그인이 필요합니다');
    }
  }, [isLoggedIn, navigate, checkLoginStatus]);

  const handleLogin = () => {
    if (isLoggedIn) {
      const id = prompt('ID를 입력하세요:');
      const pw = prompt('PW를 입력하세요:');

      alert(`입력한 ID: ${id}, PW: ${pw}`);
      if (id && pw) {
        loginUser({
          username: id,
          password: pw,
        });
      }
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <div>
      <HeaderBar />
      <SideBar />
      <HelpBar />
      <div className="relative pt-20 pl-[72px] w-full h-full">
        {isLoggedIn ? (
          <h1 className="text-3xl text-red-400 font-bold underline">
            로그인 되었습니다.
          </h1>
        ) : (
          <h1 className="text-3xl text-red-400 font-bold underline">
            Please Log In!
          </h1>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default App;
