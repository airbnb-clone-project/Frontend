import { create } from 'zustand';
import Cookies from 'universal-cookie';

interface AuthStore {
  isLoggedIn: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
  checkLoginStatus: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  login: (accessToken: string) => {
    const cookies = new Cookies();
    cookies.set('accessToken', accessToken, {
      path: '/',
      expires: new Date(Date.now() + 86400e3), // 쿠키 만료시간 설정 (1일)
    });
    set({ isLoggedIn: true });
  },
  logout: () => {
    set({ isLoggedIn: false });
    const cookies = new Cookies();
    cookies.remove('accessToken');
  },
  checkLoginStatus: () => {
    const cookies = new Cookies();
    const accessToken = cookies.get('accessToken');
    if (accessToken) {
      set({ isLoggedIn: true });
    }
  },
}));
