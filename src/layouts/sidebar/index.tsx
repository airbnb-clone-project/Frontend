import MessageModal from './source/components/MessageModal';
import { useMessageModal } from './source/hooks/useMessageModal';
import { RiSettingsLine, RiMessage2Line } from 'react-icons/ri';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { FaPinterest } from 'react-icons/fa';
import SideBtn from './source/components/common/SideBtn';
import { GoBell } from 'react-icons/go';
import SideLink from './source/components/common/SideLink';

// RiSettingsFill

const SideBar = () => {
  const { isOpen, openModal, closeModal } = useMessageModal();

  return (
    <>
      <aside className="fixed w-[72px] h-full left-0 flex items-center flex-col border-r-[1px] z-50 bg-white">
        <nav className="h-full py-4 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <SideLink path="/" type="home" label="홈" className="rounded-full">
              <FaPinterest className="w-5 h-5" />
            </SideLink>
            <SideLink path="/pincreate" type="pincreate" label="만들기">
              <FaRegSquarePlus className="w-5 h-5" />
            </SideLink>
            <SideBtn type="update" onClick={() => {}}>
              <GoBell className="w-5 h-5" />
            </SideBtn>
            <SideBtn type="message" onClick={openModal} isOpen={isOpen}>
              <RiMessage2Line className="w-5 h-5" />
            </SideBtn>
          </div>
          <SideLink path="/settings" type="settings" label="추가 옵션">
            <RiSettingsLine className="w-5 h-5" />
          </SideLink>
        </nav>
      </aside>

      <MessageModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default SideBar;
