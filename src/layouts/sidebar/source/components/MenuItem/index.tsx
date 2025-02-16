import { Link } from 'react-router-dom';
import { MenuItem as MenuItemType } from '../../constants/menuItem';
import Icon from '../Icon';

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean;
  onClick: (item: MenuItemType) => void;
}

const MenuItem = ({ item, isActive, onClick }: MenuItemProps) => {
  const handleClick = () => onClick(item);

  const iconElement = (
    <Icon item={item} className="w-5 h-5" onClick={handleClick} />
  );

  if (item.link) {
    return <Link to={item.link}>{iconElement}</Link>;
  }

  return iconElement;
};

export default MenuItem;
