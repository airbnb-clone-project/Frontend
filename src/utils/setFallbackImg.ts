import image from '/assets/imgs/김마야님_배경투명화.png';

/**
 * 이미지가 에러처리됫을때 대신 보여줄 이미지를 렌더링합니다.
 * 📌 이미지를 바꿀필꿔야함.
 */

export const setFallbackImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = image;
};
