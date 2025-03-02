import useModalStore from '@/stores/useModalStore';

const BoardDelete = () => {
  const { toggleModal } = useModalStore();

  return (
    <div className="py-4">
      <p className="text-xs mb-2">작업</p>
      <div
        onClick={() => toggleModal('boardDelete')}
        className="cursor-pointer"
      >
        <p className="text-xl font-semibold">보드 삭제</p>
        <p className="text-[#767676]">
          7일이 지나면 삭제된 보드를 복원할 수 없습니다. 이후에는 영구적으로
          삭제됩니다.
        </p>
      </div>
    </div>
  );
};

export default BoardDelete;
