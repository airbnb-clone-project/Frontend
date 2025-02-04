interface PinResponse<T> {
  message: string;
  status: number;
  data: T;
}

interface Pin {
  pinNo: number;
  imageUrl: string;
  link: string;
  userNo: number;
  imageClassification: string;
  createdAt: string;
  updatedAt: string;
}

type PinListResponse = PinResponse<Pin[]>;

interface CreatePin {
  boardNo: number;
  description: string;
  title: string;
  isCommentAllowed: boolean;
  link: string;
  imgUrl: string;
  imageClassification: string;
  tagNos: number[];
  userNo: number;
}
