interface PinResponse<T> {
  message: string;
  status: number;
  data: T;
}

interface Pin {
  userNo: number | null;
  imageClassification: string;
  imgUrl: string;
  link: string;
  pinNo: number;
  updatedAt: string;
  createdAt: string;
}

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
