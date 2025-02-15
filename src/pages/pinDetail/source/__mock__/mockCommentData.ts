import axios from 'axios';

const URL =
  'https://236779c9-bbe3-4032-ad43-c737e83b2e44.mock.pstmn.io/api/comment/1/v1';

export const mockCommentData = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
