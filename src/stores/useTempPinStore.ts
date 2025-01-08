import { create } from 'zustand';

interface TempPinState {
  explain: string | null;
  setExplain: (text: string | null) => void;
  explainReset: () => void;

  image: File | null;
  imgPreview: string | null;
  setImage: (file: File | null) => void;
  setImgPreview: (preview: string | null) => void;
  imageReset: () => void;

  link: string | null;
  setLink: (text: string | null) => void;
  linkReset: () => void;

  title: string | null;
  setTitle: (text: string | null) => void;
  titleReset: () => void;

  isOption: boolean;
  setIsOption: (value: boolean) => void;
  optionsReset: () => void;
  isComment: boolean;
  setIsComment: (value: boolean) => void;
  isSimilarProductsVisible: boolean;
  setSimilarProductsVisible: (value: boolean) => void;

  tagSearch: string;
  setTagSearch: (text: string) => void;
  tagList: { color: string; value: string }[];
  setTagList: (list: { color: string; value: string }[]) => void;
  tagsReset: () => void;

  boardNo: number | null;
  setBoardNo: (boardNo: number | null) => void;
  boardNoReset: () => void;

  pinNo: string;
  setPinNo: (pinNo: string) => void;
  pinNoReset: () => void;
}

export const useTempPinStore = create<TempPinState>((set) => ({
  // 핀 설명 상태와 관련된 변수들
  explain: '', // 설명 텍스트
  setExplain: (text) => set({ explain: text }), // 설명을 설정하는 함수
  explainReset: () => set({ explain: '' }), // 설명을 초기화하는 함수

  // 이미지와 이미지 미리보기 상태와 관련된 변수들
  image: null, // 업로드된 이미지 파일
  imgPreview: null, // 이미지 미리보기 URL
  setImage: (file) => set({ image: file }), // 이미지 파일을 설정하는 함수
  setImgPreview: (preview) => set({ imgPreview: preview }), // 이미지 미리보기를 설정하는 함수
  imageReset: () => set({ image: null, imgPreview: null }), // 이미지와 미리보기 초기화 함수

  // 링크 상태와 관련된 변수들
  link: '', // 핀 링크
  setLink: (text) => set({ link: text }), // 링크를 설정하는 함수
  linkReset: () => set({ link: '' }), // 링크를 초기화하는 함수

  // 제목 상태와 관련된 변수들
  title: '', // 핀 제목
  setTitle: (text) => set({ title: text }), // 제목을 설정하는 함수
  titleReset: () => set({ title: '' }), // 제목을 초기화하는 함수

  // 옵션 관련 상태와 관련된 변수들
  isOption: false, // 옵션 활성화 여부
  setIsOption: (value) => set({ isOption: value }), // 옵션 활성화 여부 설정 함수
  isComment: false, // 댓글 허용 여부
  setIsComment: (value) => set({ isComment: value }), // 댓글 허용 여부 설정 함수
  isSimilarProductsVisible: false, // 비슷한 상품 표시 허용 여부
  setSimilarProductsVisible: (value) =>
    set({ isSimilarProductsVisible: value }), // 비슷한 상품 표시 허용 여부 설정 함수
  optionsReset: () =>
    set({ isComment: false, isSimilarProductsVisible: false }), // 옵션 초기화 함수

  // 태그 검색과 관련된 변수들
  tagSearch: '', // 현재 입력 중인 태그 검색어
  setTagSearch: (text) => set({ tagSearch: text }), // 태그 검색어 설정 함수
  tagList: [], // 선택된 태그 리스트
  setTagList: (list) => set({ tagList: list }), // 태그 리스트 설정 함수
  tagsReset: () => set({ tagList: [] }), // 태그 리스트 초기화 함수

  // 보드 번호와 관련된 상태
  boardNo: 0, // 게시판 번호
  setBoardNo: (boardNo) => set({ boardNo }), // 게시판 번호 설정 함수
  boardNoReset: () => set({ boardNo: 0 }), // 게시판 번호 초기화 함수

  // 임시핀 번호와 관련된 상태
  pinNo: '', // 핀 번호
  setPinNo: (pinNo) => set({ pinNo }), // 핀 번호 설정 함수
  pinNoReset: () => set({ pinNo: '' }), // 핀 번호 초기화 함수
}));
