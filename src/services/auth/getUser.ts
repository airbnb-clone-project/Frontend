import Cookies from 'universal-cookie';
import { api } from '..';
import { getUserProfile } from './getUserProfile';
interface UserData {
  username: string;
  password: string;
  birthday?: string; // Optional, ISO 8601 형식의 문자열로 전달 (예: "2023-12-04")
}

/**
 * 유저 생성 함수
 * @param baseUrl - API 기본 URL
 * @param userData - 유저 데이터
 */
export const createUser = async (userData: UserData) => {
  try {
    const response = await api.post(`/api/auth/register`, userData);

    return response;
  } catch (error) {
    console.error('Create user failed:', error);
    throw error;
  }
};

/**
 * 유저 로그인 함수
 * @param baseUrl - API 기본 URL
 * @param userData - 유저 데이터
 */
const cookies = new Cookies();
export const loginUser = async (userData: UserData) => {
  try {
    const res = await api.post(`/api/auth/login`, userData, {
      withCredentials: true, // 쿠키를 포함한 요청을 허용
    });

    const { authorization } = res.headers;
    const accessToken: string = authorization.split(' ')[1];

    cookies.set('accessToken', accessToken);

    getUserProfile().then((res) => {
      localStorage.setItem('userName', res.firstName);
      localStorage.setItem('userLastName', res.lastName);
    });

    return res;
  } catch (error) {
    console.error('User login failed', error);
    throw error;
  }
};
