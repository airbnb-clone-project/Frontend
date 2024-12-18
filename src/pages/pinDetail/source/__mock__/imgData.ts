import axios from 'axios';

const URL = 'https://7758859e-a564-483a-abb8-5257a9754346.mock.pstmn.io';

export const fetchImageData = async () => {
  try {
    const res = await axios.get(`${URL}/api/image`);
    return res.data[0].imageUrl; // 응답에서 imageUrl만 반환
  } catch (error) {
    console.error('데이터패칭에 문제가 발생', error);
    throw error; // 에러를 던져서 호출한 곳에서 처리
  }
};
