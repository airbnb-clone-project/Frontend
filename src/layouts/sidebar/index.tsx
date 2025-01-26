import { MENU_ITEMS, MenuItem } from './source/constants/menuItem';
import Icon from './source/components/Icon';
import MessageModal from './source/components/MessageModal';
import { useMessageModal } from './source/hooks/useMessageModal';
import { RiSettingsLine, RiSettingsFill } from 'react-icons/ri';

const SETTINGS_ITEM: MenuItem = {
  label: '추가 옵션',
  icon: RiSettingsLine,
  clickIcon: RiSettingsFill,
  main: false,
};

const SideBar = () => {
  const { isOpen, openModal, closeModal } = useMessageModal();

  return (
    <>
      <aside className="fixed w-[72px] h-full left-0 flex items-center flex-col border-r-[1px] z-50 bg-white">
        <nav className="h-full py-4 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            {MENU_ITEMS.map((item) => (
              <Icon
                key={item.label}
                item={item}
                className="w-5 h-5"
                onClick={item.label === '메시지' ? openModal : undefined}
              />
            ))}
          </div>
          <Icon item={SETTINGS_ITEM} className="w-6 h-6" />
        </nav>
      </aside>

      <MessageModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default SideBar;
