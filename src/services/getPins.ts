import axios from 'axios';
import Cookies from 'universal-cookie';
import { URL } from './client';

export class PinAPI {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async createPins(data: CreatePin) {
    try {
      const cookies = new Cookies();
      const accessToken = cookies.get('accessToken');

      const res = await axios.post(`${this.baseUrl}/api/pins/pin/v1`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res;
    } catch (error) {
      console.error('핀을 생성하는데 실패하였습니다.', error);
      throw new Error('핀 생성 실패');
    }
  }

  async getPins(): Promise<PinResponse<Pin[]>> {
    try {
      const res = await axios.get(
        `${this.baseUrl}/api/pins/pin/v1?userNo=1&page=0&pageSize=10`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return res.data.data;
    } catch (error) {
      console.error('핀을 불러오는데 실패하였습니다.', error);
      throw new Error('핀 데이터 요청 실패');
    }
  }
}

export const pin = new PinAPI(URL);
