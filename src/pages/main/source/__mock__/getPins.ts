import axios from 'axios';

const URL = 'https://7758859e-a564-483a-abb8-5257a9754346.mock.pstmn.io';

export const getPins = async (): Promise<PinListResponse> => {
  try {
    const { data } = await axios.get(`${URL}/api/pins/pin/v1`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error('핀 데이터 조회 실패', error);
    throw error;
  }
};
