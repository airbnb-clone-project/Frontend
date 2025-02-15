import axios from 'axios';
import Cookies from 'universal-cookie';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // 쿠키 자동 포함
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

const cookies = new Cookies();

api.interceptors.request.use((config) => {
  if (!config.headers) return config;

  const accessToken = cookies.get('accessToken');

  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  function (response) {
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async (error) => {
    console.error('API 응답 에러:', error);
    // const { config, response } = error;

    // 401 Unauthorized 에러가 발생한 경우
    // if (response?.status === 401) {
    //   console.warn('401 Unauthorized - 토큰 재발급 시도');

    //   // 이미 재시도를 한 경우, 무한 루프를 방지하기 위해 처리하지 않음
    //   if (config._retry) {
    //     console.error('토큰 재발급 실패: 재시도 중단');
    //     return Promise.reject(error); // 반복 호출 중단
    //   }

    //   // 재시도 표시
    //   config._retry = true;

    //   try {
    //     // 리프레시 토큰을 이용해 새 액세스 토큰을 발급받기
    //     const { headers } = await api.post(`/api/auth/reissue`);

    //     // 새 액세스 토큰 추출
    //     const newAccessToken = headers.authorization.split(' ')[1];

    //     // 새 토큰 저장 (쿠키에 저장)
    //     cookies.set('accessToken', newAccessToken, { path: '/', secure: true });

    //     // 기존 요청 헤더에 새 토큰 설정
    //     config.headers.Authorization = `Bearer ${newAccessToken}`;

    //     // 기존 요청 재시도
    //     return axios(config);
    //   } catch (refreshError) {
    //     console.error('토큰 재발급 실패:', refreshError);

    //     return Promise.reject(refreshError);
    //   }
    // }

    // 다른 에러는 그대로 전달
    return Promise.reject(error);
  }
);
