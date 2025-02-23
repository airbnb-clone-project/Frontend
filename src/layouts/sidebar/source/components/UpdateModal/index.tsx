import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickAway } from '@/hooks/useClickAway';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateModal = ({ isOpen, onClose }: UpdateModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickAway(modalRef, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed left-[84px] top-0 mt-4 mr-2 mb-2 z-[50] flex items-start w-[392px] max-w-[392px]">
      <div
        ref={modalRef}
        className="mt-4 w-[380px] max-h-[calc(100vh-32px)] bg-white rounded-2xl overflow-hidden shadow-lg"
      >
        {/* 헤더 */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold">업데이트</h2>
        </div>

        {/* 업데이트 내용 */}
        <div className="p-4 overflow-y-auto">
          {/* 업데이트 아이템들 */}
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-[62px] h-[72px] rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={`https://picsum.photos/200/300`}
                    alt="프로필 이미지"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">
                    회원님을 위한 드로잉 아이디어입니다.
                  </p>
                  <span className="text-xs text-gray-500">4일 전</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default UpdateModal;
