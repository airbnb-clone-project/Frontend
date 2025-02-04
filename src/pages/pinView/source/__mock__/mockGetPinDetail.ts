import axios from 'axios';

interface PinDetailResponse {
  message: string;
  status: number;
  data: Pin;
}

const MOCK_BASE_URL =
  'https://3008eebd-2b32-4387-84cf-ce92a352146b.mock.pstmn.io';

export const mockGetPinDetail = async (): Promise<PinDetailResponse> => {
  const { data: pinData } = await axios.get(`${MOCK_BASE_URL}/api/pin/pin/v1`);
  return pinData;
};
