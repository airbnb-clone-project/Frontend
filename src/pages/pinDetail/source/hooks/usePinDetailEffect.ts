import { useState, useEffect } from 'react';

import { fetchImageData } from '../__mock__';

export const usePinDetailEffect = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageUrl = await fetchImageData();
        setImageData(imageUrl);
      } catch (error) {
        console.error('이미지 데이터 로딩 실패', error);
      }
    };
    fetchData();
  }, []);

  return { imageData };
};
