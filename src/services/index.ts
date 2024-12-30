import axios from 'axios';
import Cookies from 'universal-cookie';

export const api = axios.create({
  baseURL: 'http://34.172.123.179',
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
    const { config, response } = error;

    if (response?.status === 401) {
      console.warn('401 Unauthorized - 토큰 재발급 시도');

      // 기존 요청이 이미 토큰 갱신 시도인 경우 무한 루프 방지
      if (config._retry) {
        console.error('토큰 재발급 실패: 재시도 중단');
        return Promise.reject(error);
      }
      config._retry = true; // 토큰 갱신 시도 표시

      try {
        const refreshToken = cookies.get('refresh');

        if (!refreshToken) {
          console.error('리프레시 토큰이 없습니다.');
          return Promise.reject(error);
        }

        const { headers } = await api.post(
          `/api/auth/reissue`,
          {},
          {
            headers: {
              RefreshToken: `Bearer ${refreshToken}`,
            },
          }
        );

        const newAccessToken = headers.authorization.split(' ')[1];

        // 새 토큰 저장
        cookies.set('accessToken', newAccessToken, { path: '/', secure: true });

        // 기존 요청 헤더에 새 토큰 설정
        config.headers.Authorization = `Bearer ${newAccessToken}`;

        // 기존 요청 재시도
        return axios(config);
      } catch (refreshError) {
        console.error('토큰 재발급 실패:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    // 다른 에러는 그대로 전달
    return Promise.reject(error);
  }
);
