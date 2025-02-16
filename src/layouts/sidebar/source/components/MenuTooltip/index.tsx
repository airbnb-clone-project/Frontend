interface MenuTooltipProps {
  type: 'update' | 'message' | 'home' | 'pincreate' | 'settings';
}

const tooltipLabels = {
  update: '업데이트',
  message: '메시지',
  home: '홈',
  pincreate: '만들기',
  settings: '설정',
};

const MenuTooltip = ({ type }: MenuTooltipProps) => {
  return (
    <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden group-hover:block">
      <div className="bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
        {tooltipLabels[type]}
      </div>
    </div>
  );
};

export default MenuTooltip;
