import PlusIcon from '@/components/icons/PlusIcon';
import useModalStore from '@/stores/useModalStore';

const Participants = () => {
  const { toggleModal } = useModalStore();

  return (
    <div>
      <div className="mb-2 cursor-pointer">
        <span className="text-xs">참여자</span>
        <span className="mx-1">·</span>
        <span className="text-xs font-semibold hover:underline">
          자세히 알아보기
        </span>
      </div>

      <div className="flex justify-between">
        {/* 프로필Img */}
        <div className="z-10 hover:cursor-pointer relative w-12 h-12 bg-[#dfdfdf] rounded-full flex items-center justify-center">
          <span className="text-lg text-[#211922] font-semibold">T</span>
        </div>

        {/* 참여자 추가 button */}
        <button
          onClick={() => toggleModal('addParticipants')}
          className="flex items-center justify-center w-12 h-12"
        >
          <div className="flex items-center justify-center rounded-full bg-[#e9e9e9] hover:bg-[#d8d8d8] active:scale-95 w-12 h-12">
            <PlusIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Participants;
