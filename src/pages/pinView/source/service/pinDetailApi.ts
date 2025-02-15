import axios from 'axios';
import Cookies from 'universal-cookie';

const MOCK_DATA = {
  '이미지 URL':
    'https://i.pinimg.com/474x/57/13/81/5713817387de7207571ddb3900511405.jpg',
  '이미지 분류값': '옷',
  제목: '테스트',
  설명: '테스트',
  링크: 'https://i.pinimg.com/474x/57/13/81/5713817387de7207571ddb3900511405.jpg',
  '보드 번호': 10,
  '태그 번호들': [1],
  commentAllowed: true,
};

const cookies = new Cookies();
const token = cookies.get('accessToken');

export const getPinDetail = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/pin/1/v1`
  );
  const result = await response.data;
  return result;
};

export const pinEditMock = async () => {
  console.log('token', token);
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/pins/pin/v1`,
    MOCK_DATA,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  const result = await response.data;
  return result.data;
};

export const createUserTest = async (userData: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `http://34.172.123.179/api/auth/register`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    console.log('Registration response:', response); // 응답 확인
    return response.data.data;
  } catch (error) {
    console.error('Registration error:', error); // 자세한 에러 정보
    throw error;
  }
};

export const loginUserTest = async (userData: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(
    `http://34.172.123.179/api/auth/login`,
    userData
  );
  const result = await response.data;
  return result.data;
};
