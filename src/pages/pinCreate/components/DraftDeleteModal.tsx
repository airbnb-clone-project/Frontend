import ModalLayout from '@/components/@Modal/ModalLayout';
import Button from '@/components/common/Button';
import useModalStore from '@/stores/useModalStore';

const DraftDeleteModal = () => {
  const { toggleModal } = useModalStore();

  return (
    <ModalLayout modalName="pinDraftDelete" isBackgroundColor={true}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="cursor-auto max-w-[414px] w-[90vw] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
      >
        <h1 className="text-[28px] font-semibold p-6 text-center">
          초안을 삭제할까요?
        </h1>

        <div className="p-4">
          <p className="text-center">
            변경한 내용을 잃게 되며 이 작업은 취소할 수 없습니다!
          </p>

          <div className="flex mt-12 gap-4">
            <Button
              color="gray"
              text="계속 수정"
              className="py-2 px-3 flex-1"
            />
            <Button color="red" text="삭제" className="py-2 px-3 flex-1" />
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default DraftDeleteModal;
