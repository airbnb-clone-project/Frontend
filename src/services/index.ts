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
