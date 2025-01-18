import MasonryList from '@/components/common/MasonryList';
import PencilIcon from '@/components/icons/PencilIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import useModalStore from '@/stores/useModalStore';
import { Link } from 'react-router-dom';
import CreatePinEditModal from '../../../components/@Modal/createPinEdit/CreatePinEditModal';
import { useQuery } from '@tanstack/react-query';
import { getMyPinsCheck, myPins } from '@/services/getMyPinsCheck';

const Created = () => {
  const { data: myPinsList = [] } = useQuery<myPins[]>({
    queryKey: ['myPinsList'],
    queryFn: () => getMyPinsCheck(),
  });

  const { toggleModal, isModalOpen } = useModalStore();
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
          <Link
            to={''}
            key={i}
            className="w-full mb-2 relative group inline-block"
          >
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
          </Link>
        ))}
      </MasonryList>

      {isModalOpen.createPinEdit && <CreatePinEditModal />}
    </>
  );
};

export default Created;
