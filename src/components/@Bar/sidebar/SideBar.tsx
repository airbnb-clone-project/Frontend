import { IconType } from 'react-icons';
import { FaPinterest } from 'react-icons/fa';
import { FaRegSquarePlus, FaSquarePlus } from 'react-icons/fa6';
import { GoBell, GoBellFill } from 'react-icons/go';
import {
    RiMessage2Line,
    RiMessage2Fill,
    RiSettingsLine,
    RiSettingsFill,
} from 'react-icons/ri';
import Icon from './icon/Icon';

export interface MenuItem {
    label: string;
    icon: IconType | null;
    clickIcon?: IconType | null;
    color?: string;
    main: boolean;
}

const menuItems: MenuItem[] = [
    {
        label: '홈',
        icon: FaPinterest,
        color: 'red',
        main: true,
    },
    {
        label: '만들기',
        icon: FaRegSquarePlus,
        clickIcon: FaSquarePlus,
        main: true,
    },
    {
        label: '업데이트',
        icon: GoBell,
        clickIcon: GoBellFill,
        main: false,
    },
    {
        label: '메시지',
        icon: RiMessage2Line,
        clickIcon: RiMessage2Fill,
        main: false,
    },
];

const settingItems: MenuItem = {
    label: '추가 옵션',
    icon: RiSettingsLine,
    clickIcon: RiSettingsFill,
    main: false,
};

const SideBar = () => {
    return (
        <div className="fixed w-[72px] h-full left-0 flex items-center flex-col border-r-[1px] z-50">
            <div className="h-full py-4 flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            {item.icon ? (
                                <Icon
                                    key={index}
                                    item={item}
                                    className="w-5 h-5"
                                    index={index}
                                />
                            ) : (
                                <span>str</span>
                            )}
                        </div>
                    ))}
                </div>
                <Icon item={settingItems} className="w-6 h-6" index={4} />
            </div>
        </div>
    );
};
export default SideBar;
