import MasonryList from '@/components/common/MasonryList';
import PencilIcon from '@/components/icons/PencilIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import useModalStore from '@/stores/useModalStore';
import { Link } from 'react-router-dom';
import CreatePinEditModal from '../../../components/@Modal/createPinEdit/CreatePinEditModal';
import { useQuery } from '@tanstack/react-query';
import { getMyPinsCheck, myPins } from '@/services/getMyPinsCheck';
import { useState } from 'react';

const Created = () => {
  const { data: myPinsList = [] } = useQuery<myPins[]>({
    queryKey: ['myPinsList'],
    queryFn: () => getMyPinsCheck(),
  });

  const { toggleModal, isModalOpen } = useModalStore();

  console.log(myPinsList);
  // 현재 수정하려는 pin의 data
  const [currentPinData, setCurrentPinData] = useState<myPins>({
    boardNo: 1,
    description: '',
    imgUrl: '',

    isCommentAllowed: false,
    link: '',
    no: 0,
    title: '',
  });

  /** currentPinData값 onChange 함수 */
  const currentPinDataOnChange = (
    key: keyof myPins,
    value: string | number | boolean | null
  ) => {
    setCurrentPinData((prev) => {
      // key가 'isCommentAllowed'인 경우 기존 값을 반전
      if (key === 'isCommentAllowed') {
        return {
          ...prev,
          [key]: !prev[key], // 기존 값을 반전
        };
      }

      // 기본 동작
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  /** 수정 icon button클릭 함수 */
  const myPinEditBtnOnClick = (pinData: myPins) => {
    setCurrentPinData(pinData);
  };
  return (
    <>
      <MasonryList
        minCol={2}
        minWidth={240}
        sideWidth={32}
        className="masonry-containe list flex gap-4 px-4"
        columnClassName="masonry-column"
      >
        {myPinsList.map((v, i) => (
          <Link to={''} key={i} className="w-full mb-2 group inline-block">
            <div className="relative">
              <img
                src={v.imgUrl}
                alt={`Sample ${i}`}
                className="w-full rounded-2xl"
              />

              {/* Hover 효과 */}
              <div className="pointer-events-none rounded-2xl z-10 inset-0 top-0 left-0 absolute bg-[rgba(0,0,0,0.4)] hidden group-hover:block">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    myPinEditBtnOnClick(v);
                    toggleModal('createPinEdit');
                  }}
                  className="pointer-events-auto hover:bg-[#e2e2e2] items-center z-20 absolute right-12 bottom-3 justify-center flex w-8 h-8 rounded-full bg-white"
                >
                  <PencilIcon />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className="pointer-events-auto hover:bg-[#e2e2e2] items-center z-20 absolute right-2 bottom-3 justify-center flex w-8 h-8 rounded-full bg-white"
                >
                  <ShareIcon />
                </div>
              </div>
            </div>

            {v.description && (
              <p className="pt-2 px-[6px] pb-4 text-sm">{v.description}</p>
            )}
          </Link>
        ))}
      </MasonryList>

      {isModalOpen.createPinEdit && (
        <CreatePinEditModal
          currentPinData={currentPinData}
          currentPinDataOnChange={currentPinDataOnChange}
        />
      )}
    </>
  );
};

export default Created;
