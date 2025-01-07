import { postTempPinCreate } from '@/services/postTempPinCreate';
import { useTempPinStore } from '@/stores/useTempPinStore';

/**
 * @returns image: 업로드할 이미지 state
 * @returns imgPreview: 업로드한 이미지 preview state
 * @returns handleImageUpload: 이미지 업로드 핸들링 함수
 * @returns imgReset: 이미지 관련 state 초기화 함수
 */
interface useImageUploadProps {
  /** 임시핀 목록 get query refetch 함수 */
  tempPinListReFetch: () => void;
}
export const useImageUpload = ({ tempPinListReFetch }: useImageUploadProps) => {
  const { image, setImage, imgPreview, setImgPreview, imageReset } =
    useTempPinStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      postTempPinCreate(file)
        .then(() => {
          tempPinListReFetch();
        })
        .catch((err) => console.log(err));
    }
  };

  return { image, imgPreview, handleImageUpload, imageReset };
};
